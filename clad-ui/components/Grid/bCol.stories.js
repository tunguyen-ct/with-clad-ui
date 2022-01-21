import React from 'react';
import { css } from 'linaria';
import theme from '@clad-ui/theme';
import Grid from './Grid';
import Col from './Col';
import Box from '../Box/Box';

const { colors } = theme;

const gridStories = {
  title: 'Style Guide/Layout/Col',
  component: Col,
  argTypes: {
    span: {
      control: {
        type: 'number',
      },
    },
    align: {},
    offset: {
      control: {
        type: 'number',
      },
    },
    order: {},
    // hide these args from argsTable
    children: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default gridStories;

const gridStyleClass = css`
  background-color: ${colors.line};
  margin: 0 auto 12px auto;
`;

const gridWithHeightStyleClass = css`
  background-color: ${colors.line};
  min-height: 80px;
  margin: 0 auto 12px auto;
`;

const spacingClass = css`
  margin-bottom: 48px;
`;

// TODO: add args to allow user add more col
export const Component = (args) => (
  <Grid className={gridWithHeightStyleClass}>
    <Col>
      <Box backgroundColor="background" borderWidth="sm" padding="sm">
        Column
      </Box>
    </Col>
    <Col {...args}>
      <Box backgroundColor="accentBG" borderWidth="sm" padding="sm">
        Target Column
      </Box>
    </Col>
    <Col>
      <Box backgroundColor="background" borderWidth="sm" padding="sm">
        Column
      </Box>
    </Col>
  </Grid>
);

export const ColumnSpan = () => (
  <Grid>
    <Col span={2}>
      <Box backgroundColor="background" borderWidth="sm" padding="sm">
        Span of 2
      </Box>
    </Col>
    <Col span={[8, 6, 5, 4]}>
      <Box backgroundColor="background" borderWidth="sm" padding="sm">
        Responsive span
      </Box>
    </Col>
    <Col>
      <Box backgroundColor="background" borderWidth="sm" padding="sm">
        Column
      </Box>
    </Col>
  </Grid>
);

ColumnSpan.parameters = {
  docs: {
    description: {
      story: "Setting Col's `span` to set its width span on the 12-column grid.",
    },
  },
};

export const ColumnOffset = () => (
  <>
    <Grid className={gridStyleClass}>
      <Col span={4}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 4
        </Box>
      </Col>
      <Col offset={4} span={4}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 4 and offset of 4
        </Box>
      </Col>
    </Grid>
    <Grid className={gridStyleClass}>
      <Col offset={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3 and offset of 3
        </Box>
      </Col>
      <Col offset={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3 and offset of 3
        </Box>
      </Col>
    </Grid>
    <Grid className={gridStyleClass}>
      <Col offset={[1, 2, 3, 4]}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Responsive offset
        </Box>
      </Col>
    </Grid>
  </>
);

ColumnOffset.parameters = {
  docs: {
    description: {
      story: "Setting Col's `offset` to define its offset on the 12-column grid.",
    },
  },
};

export const ColumnAlign = () => (
  <Grid className={gridWithHeightStyleClass}>
    <Col align="start">
      <Box backgroundColor="background" borderWidth="sm" padding="sm">
        Align start
      </Box>
    </Col>
    <Col align="center">
      <Box backgroundColor="background" borderWidth="sm" padding="sm">
        Align center
      </Box>
    </Col>
    <Col align="end">
      <Box backgroundColor="background" borderWidth="sm" padding="sm">
        Align end
      </Box>
    </Col>
  </Grid>
);

ColumnAlign.parameters = {
  docs: {
    description: {
      story:
        "Setting Col's `align` to define vertical alignment individually. (CSS flex item `align-self`)",
    },
  },
};

export const ColumnOrder = () => (
  <>
    <Grid>
      <Col order="last">
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          First in DOM, no order applied
        </Box>
      </Col>
      <Col order={5}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Second in DOM, with a larger order
        </Box>
      </Col>
      <Col order={1}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Third in DOM, with an order of 1
        </Box>
      </Col>
    </Grid>
    <div className={spacingClass} />
    <Grid>
      <Col order="last">
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          First in DOM, ordered last
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Second in DOM, unordered
        </Box>
      </Col>
      <Col order="first">
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Third in DOM, ordered first
        </Box>
      </Col>
    </Grid>
  </>
);

ColumnOrder.parameters = {
  docs: {
    description: {
      story: "Setting Col's `order` to change it's order in the Grid. (CSS flex item `order`)",
    },
  },
};
