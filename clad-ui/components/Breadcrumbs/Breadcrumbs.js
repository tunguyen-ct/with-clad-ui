import React, { Children, cloneElement, isValidElement } from 'react';
import { cx } from 'linaria';
import PropTypes from 'prop-types';
import { StyledBreadcrumbs, Placeholder } from './Breadcrumbs.styles';
import ArrowRight from '../../icons/ArrowRight';

/**
 * @param {import('react').ReactElement} element
 * @param {Boolean} isLast
 * @returns {import('react').ReactElement}
 */
const mapElementToListItem = (element, isLast) => {
  // normal <a>
  if (element.type === 'a') {
    // last element in breadcrumb must not be rendered as <a>
    return isLast ? (
      <span itemProp="name">{element.props.children}</span>
    ) : (
      <>
        {cloneElement(element, {
          itemProp: 'item',
          children: <span itemProp="name">{element.props.children}</span>,
        })}
        <ArrowRight className="separator" />
      </>
    );
  }
  // <a> with wrapper tag
  const childrenElement = element.props.children;
  if (childrenElement.type !== 'a') {
    // not render elements with wrong structure
    return null;
  }
  // last element in breadcrumb must not be rendered as <a>
  return isLast ? (
    <span itemProp="item">{childrenElement.props.children}</span>
  ) : (
    <>
      {cloneElement(element, {
        children: cloneElement(childrenElement, {
          itemProp: 'item',
          children: <span itemProp="name">{childrenElement.props.children}</span>,
        }),
      })}
      <ArrowRight className="separator" />
    </>
  );
};

const Breadcrumbs = ({ className, children, isShow }) => {
  // return Placeholder if children is not valid element(s), or isShow is false
  if ((!isValidElement(children) && !Array.isArray(children)) || !isShow) {
    return <Placeholder className={cx(className, 'placeholder')} />;
  }
  return (
    <StyledBreadcrumbs className={className} itemScope itemType="https://schema.org/BreadcrumbList">
      {Children.map(
        children,
        (child, i) =>
          isValidElement(child) && (
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {mapElementToListItem(child, i === Children.count(children) - 1)}
              <meta itemProp="position" content={(i + 1).toString()} />
            </li>
          )
      )}
    </StyledBreadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  /**
   * Breadcrumbs className
   */
  className: PropTypes.string,
  /**
   * Breadcrumbs content
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  /**
   * Whether this Breadcrumbs is show or not
   */
  isShow: PropTypes.bool,
};

Breadcrumbs.defaultProps = {
  className: null,
  isShow: true,
};

export default Breadcrumbs;
