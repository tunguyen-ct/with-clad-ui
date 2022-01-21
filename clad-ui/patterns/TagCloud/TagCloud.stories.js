import React, { useState, useEffect } from 'react';
import { css } from 'linaria';
import TagCloud from './TagCloud';
import { guideImageClass } from '../../storybook/components/GuideImage';

const gridClass = css`
  /* stylelint-disable declaration-no-important */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 -8px !important;

  & > div {
    padding: 0 8px;
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    & > div {
      width: 50%;
    }
  }
`;

const checkboxStories = {
  title: 'Patterns/Tag Cloud',
  component: TagCloud,
  parameters: {
    docs: {
      description: {
        component: `Tag Cloud pattern, including multiple Chip components

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/DPdwPmk)

## How to use

<div className="${gridClass}">
  <div>
    <h3>Single Selection</h3>
    <img className="${guideImageClass}" src="./tagcloud-singleselection.png" />
    <p>The active state switches among Chips. There is always one (and only one) active Chip at a time.</p>
  </div>

  <div>
    <h3>Multiple Selection</h3>
    <img className="${guideImageClass}" src="./tagcloud-multiselection.png" />
    <p>Having multiple active Chip is allowed.</p>
    <ul>
      <li>If Tag Cloud is not required, deactivating all Chips is also allowed.</li>
      <li>If Tag Cloud is required, deactivating all Chips should result in <code>status=&quot;error&quot;</code>.</li>
    </ul>
  </div>
</div>

### Tag Cloud as Tabs
Tag Cloud is a form of Tabs, used for page navigation. Default active Chip should be the first Chip.
<img className="${guideImageClass}" src="./tagcloud-how.png" />
`,
      },
    },
  },
  argTypes: {
    label: {
      defaultValue: 'Gear box',
    },
    options: {
      defaultValue: [
        { value: 'automatic', label: 'Automatic' },
        { value: 'manual', label: 'Manual' },
        { value: 'semi', label: 'Semi-automatic' },
      ],
    },
    value: {
      defaultValue: 'automatic',
    },
    maxSelection: {
      control: {
        type: 'number',
        min: 0,
      },
    },
    helptext: {
      defaultValue: 'Types of car transmission',
    },
    required: {},
    multiple: {},
    status: {},
    tagCloudRef: { control: null },
    onChange: { control: null },
    className: { control: null },
  },
};

export default checkboxStories;

export const Overview = (args) => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    if (args.value) setValue(args.value);
  }, [args.value]);

  const onTagCloudChanged = ({ target }) => {
    setValue(target.value);
  };

  return <TagCloud {...args} value={value} onChange={onTagCloudChanged} />;
};

export const WithHelptext = () => {
  const [value, setValue] = useState('automatic');
  const onTagCloudChanged = ({ target }) => {
    setValue(target.value);
  };
  return (
    <TagCloud
      label="Gear box"
      helptext="Help text"
      options={[
        { value: 'automatic', label: 'Automatic' },
        { value: 'manual', label: 'Manual' },
        { value: 'semi', label: 'Semi-automatic' },
      ]}
      value={value}
      onChange={onTagCloudChanged}
    />
  );
};

WithHelptext.storyName = 'With helptext';
WithHelptext.parameters = {
  docs: {
    description: {
      story: 'Help text is the small caption below the Tag cloud box.',
    },
  },
};

export const SingleActive = () => {
  const [value, setValue] = useState('automatic');
  const onTagCloudChanged = ({ target }) => {
    setValue(target.value);
  };
  return (
    <TagCloud
      label="Gear box"
      options={[
        { value: 'automatic', label: 'Automatic' },
        { value: 'manual', label: 'Manual' },
        { value: 'semi', label: 'Semi-automatic' },
      ]}
      value={value}
      onChange={onTagCloudChanged}
    />
  );
};

SingleActive.storyName = 'Single active';
SingleActive.parameters = {
  docs: {
    description: {
      story: 'Only one chip is active at a time.',
    },
  },
};

export const MultiActive = () => {
  const [value, setValue] = useState([]);
  const onTagCloudChanged = ({ target }) => {
    setValue(target.value);
  };
  return (
    <TagCloud
      label="Mô tả bản thân"
      options={[
        { value: 'exp', label: 'Trên 3 năm kinh nghiệm' },
        { value: 'english', label: 'Anh văn giao tiếp' },
        { value: 'computer', label: 'Tin học văn phòng' },
        { value: 'loyal', label: 'Gắn bó lâu dài' },
        { value: 'instant', label: 'Đi làm ngay' },
        { value: 'laborious', label: 'Hiền lành, chăm chỉ' },
        { value: 'honest', label: 'Trung thực, đáng tin cậy' },
        { value: 'dedicated', label: 'Chịu khó, có trách nhiệm' },
      ]}
      value={value}
      multiple
      onChange={onTagCloudChanged}
    />
  );
};

MultiActive.storyName = 'Multiple Selection';
MultiActive.parameters = {
  docs: {
    description: {
      story: 'Number of active chip is not limited (tap again to deactive).',
    },
  },
};

export const WithMaxSelection = () => {
  const [value, setValue] = useState([]);
  const onTagCloudChanged = ({ target }) => {
    setValue(target.value);
  };
  const label = `Mô tả bản thân (${value.length}/5)`;
  return (
    <TagCloud
      label={label}
      options={[
        { value: 'exp', label: 'Trên 3 năm kinh nghiệm' },
        { value: 'english', label: 'Anh văn giao tiếp' },
        { value: 'computer', label: 'Tin học văn phòng' },
        { value: 'loyal', label: 'Gắn bó lâu dài' },
        { value: 'instant', label: 'Đi làm ngay' },
        { value: 'laborious', label: 'Hiền lành, chăm chỉ' },
        { value: 'honest', label: 'Trung thực, đáng tin cậy' },
        { value: 'dedicated', label: 'Chịu khó, có trách nhiệm' },
      ]}
      value={value}
      multiple
      maxSelection={5}
      helptext="Max selection is 5"
      onChange={onTagCloudChanged}
    />
  );
};

WithMaxSelection.storyName = 'Multiple with maxSelection';
WithMaxSelection.parameters = {
  docs: {
    description: {
      story:
        'Set the `maxSelection` to set limit to number of active chip in case of multiple active.',
    },
  },
};

export const IsRequired = () => {
  const [value, setValue] = useState('automatic');
  const onTagCloudChanged = ({ target }) => {
    setValue(target.value);
  };
  return (
    <TagCloud
      label="Gear box"
      required
      options={[
        { value: 'automatic', label: 'Automatic' },
        { value: 'manual', label: 'Manual' },
        { value: 'semi', label: 'Semi-automatic' },
      ]}
      value={value}
      onChange={onTagCloudChanged}
    />
  );
};

IsRequired.storyName = 'Required';
IsRequired.parameters = {
  docs: {
    description: {
      story:
        'Enable `required` will let Tag cloud display a red * on the label but validation is not forced for now.',
    },
  },
};

export const ErrorStatus = () => {
  const [value, setValue] = useState([]);
  const status = value.length < 2 ? 'error' : 'default';

  const onTagCloudChanged = ({ target }) => {
    setValue(target.value);
  };
  return (
    <TagCloud
      label="Genres"
      required
      status={status}
      helptext="Choose at least 2"
      multiple
      options={[
        { value: 'action', label: 'Action' },
        { value: 'comedy', label: 'Comedy' },
        { value: 'romance', label: 'Romance' },
        { value: 'thriller', label: 'Thriller' },
        { value: 'horror', label: 'Horror' },
      ]}
      value={value}
      onChange={onTagCloudChanged}
    />
  );
};

ErrorStatus.storyName = 'Error status';
ErrorStatus.parameters = {
  docs: {
    description: {
      story: 'Set `status="error"` will let Tag cloud has red helptext.',
    },
  },
};

export const WithoutLabel = () => {
  const [value, setValue] = useState('automatic');
  const onTagCloudChanged = ({ target }) => {
    setValue(target.value);
  };
  return (
    <TagCloud
      options={[
        { value: 'automatic', label: 'Automatic' },
        { value: 'manual', label: 'Manual' },
        { value: 'semi', label: 'Semi-automatic' },
      ]}
      value={value}
      onChange={onTagCloudChanged}
    />
  );
};

WithoutLabel.storyName = 'Without label';
WithoutLabel.parameters = {
  docs: {
    description: {
      story: 'Tag cloud without label.',
    },
  },
};

export const WithClassName = () => {
  const styleClass = css`
    border-radius: 8px;
    padding: 16px 24px;
    background-color: #cacaca;
  `;

  const [value, setValue] = useState('automatic');
  const onTagCloudChanged = ({ target }) => {
    setValue(target.value);
  };
  return (
    <TagCloud
      className={styleClass}
      label="Gear box"
      options={[
        { value: 'automatic', label: 'Automatic' },
        { value: 'manual', label: 'Manual' },
        { value: 'semi', label: 'Semi-automatic' },
      ]}
      value={value}
      onChange={onTagCloudChanged}
    />
  );
};

WithClassName.storyName = 'With className';
WithClassName.parameters = {
  docs: {
    description: {
      story: 'Pass className to add more styles to tag cloud.',
    },
  },
};
