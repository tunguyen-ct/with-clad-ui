import React, { useState, useCallback } from 'react';
import theme from '@clad-ui/theme';
import { css } from 'linaria';
import debounce from 'lodash/debounce';
import SearchInput from './SearchInput';
import { guideImageClass } from '../../storybook/components/GuideImage';
import Grid from '../../components/Grid/Grid';
import Col from '../../components/Grid/Col';
import Button from '../../components/Button/Button';

const { sizes, mediaQueries } = theme;

const searchInputStories = {
  title: 'Patterns/Search Input',
  component: SearchInput,
  parameters: {
    docs: {
      description: {
        component: `Search Input component that carefully takes care of accessibility
and allow keyboard controls.

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/9PW0DdP)

## How to use

Use case:

- Simple search box in which search results will display inline in the dropdown menu.
- Dropdowns that have very long options list (countries, provinces...)

Usage:

- User key in the text field to start searching.
- Search results / select options will displayed in a dropdown menu.
- User will make selection by tapping on an option in the menu. User can also use up & down arrows to move the highlight cursor and make selection via Enter.

<img className="${guideImageClass}" src="./search-input.png" alt="Search Input screenshot" />
`,
      },
    },
  },
  argTypes: {
    label: {
      defaultValue: 'Search used phones on Chợ Tốt',
    },
    helptext: {
      defaultValue: 'Please enter apple or samsung phones',
    },
    width: {
      options: Object.keys(sizes),
      control: {
        type: 'select',
      },
    },
    menuMaxHeight: { options: Object.keys(sizes) },
    type: {},
    disabled: {},
    required: {},
    allowClear: {},
    status: {},
    tooltip: {},
    inputMode: {},
    id: {},
    name: {},
    value: {
      control: { disable: true },
      defaultValue: {
        selected: {
          data: { brand: 'apple', category: 'Điện thoại', name: 'iphone xs max' },
          html: '<mark>a</mark>pple iphone xs m<mark>a</mark>x <strong>trong Điện thoại</strong>',
          text: 'apple iphone xs max',
        },
        text: 'apple iphone xs max',
      },
    },
    options: {
      control: null,
      defaultValue: [
        {
          data: { brand: 'apple', category: 'Điện thoại', name: 'iphone xs max' },
          html: '<mark>apple iphone xs max</mark> <strong>trong Điện thoại</strong>',
          text: 'apple iphone xs max',
        },
      ],
    },
    onChange: { control: null },
    onBlur: { control: null },
    onFocus: { control: null },
    onInput: { control: null },
    onSelect: { control: null },
    inputRef: { control: null },
  },
};

export default searchInputStories;

// top-most story will have the props breakdown
// FIXME: only in this story, selecting value from option menu causes console warnings
export const Overview = (args) => {
  const [value, setValue] = useState(null);

  const handleSearchInput = (event) => {
    setValue(event.value);
  };

  return (
    <Grid rowCols={[1, 1, 2]}>
      <Col>
        <SearchInput
          {...args}
          value={value}
          onChange={handleSearchInput}
          options={searchItems(value?.text)}
        />
        <p>
          Selected data:{' '}
          {value?.selected
            ? `{name: "${value?.selected?.data?.name}", brand: "${value.selected?.data?.brand}"}`
            : '[No data]'}
        </p>
      </Col>
    </Grid>
  );
};

export const ValueBinding = () => {
  const [value, setValue] = useState({ text: '', selected: null });

  const handleSearchInput = (event) => {
    setValue(event.value);
  };

  return (
    <Grid rowCols={[1, 1, 2]}>
      <Col>
        <SearchInput
          id="si-value-binding"
          label="Search used phones on Chợ Tốt"
          value={value}
          onInput={handleSearchInput}
          onSelect={handleSearchInput}
          options={searchItems(value?.text)}
        />
        <p>
          Selected data:{' '}
          {value.selected
            ? `{name: "${value.selected?.data?.name}", brand: "${value.selected?.data?.brand}"}`
            : '[No data]'}
        </p>
      </Col>
    </Grid>
  );
};

ValueBinding.parameters = {
  docs: {
    description: {
      story:
        "Search Input is also a controlled React component. The text field's value is bound via `value: {text: string, selected: Object}` prop, the dropdown menu is bound via `options: Array<{text: string, html: string, data?: any}>` prop. `onInput` will callback when user types in any text. `onSelect` will callback when user makes a selection in the dropdown menu. `onChange` will callback when user either types or makes selection.",
    },
  },
};

export const MenuMaxHeight = () => {
  const [value1, setValue1] = useState({ text: '', selected: null });
  const [value2, setValue2] = useState({ text: '', selected: null });

  const handleSearchInput1 = (event) => {
    setValue1(event.value);
  };

  const handleSearchInput2 = (event) => {
    setValue2(event.value);
  };

  return (
    <Grid rowCols={[1, 1, 2]}>
      <Col>
        <p>menuMaxHeight=&quot;$sm&quot; (default)</p>
        <SearchInput
          menuMaxHeight="$sm"
          label="Search used phones on Chợ Tốt"
          value={value1}
          onInput={handleSearchInput1}
          options={searchItems(value1?.text)}
        />
        <p>menuMaxHeight=&quot;$md&quot;</p>
        <SearchInput
          menuMaxHeight="$md"
          label="Search used phones on Chợ Tốt"
          value={value2}
          onInput={handleSearchInput2}
          options={searchItems(value2?.text)}
        />
      </Col>
    </Grid>
  );
};

MenuMaxHeight.storyName = 'With menuMaxHeight';
MenuMaxHeight.parameters = {
  docs: {
    description: {
      story: "`menuMaxHeight` is used to set option menu's max-height.",
    },
  },
};

export const AllowClear = () => {
  const [value, setValue] = useState({ text: '', selected: null });

  const handleSearchInput = (event) => {
    setValue(event.value);
  };

  return (
    <Grid rowCols={[1, 1, 2]}>
      <Col>
        <SearchInput
          allowClear
          label="Search used phones on Chợ Tốt"
          value={value}
          onChange={handleSearchInput}
          options={searchItems(value?.text)}
        />
      </Col>
    </Grid>
  );
};

AllowClear.storyName = 'With allowClear';
AllowClear.parameters = {
  docs: {
    description: {
      story: '`allowClear` enable a clear icon when input has value.',
    },
  },
};

export const Required = () => {
  const [value, setValue] = useState({ text: '', selected: null });

  const handleSearchInput = (event) => {
    setValue(event.value);
  };

  return (
    <Grid rowCols={[1, 1, 2]}>
      <Col>
        <SearchInput
          required
          label="Search used phones on Chợ Tốt"
          value={value}
          onChange={handleSearchInput}
          options={searchItems(value?.text)}
        />
      </Col>
    </Grid>
  );
};

Required.storyName = 'With required';
Required.parameters = {
  docs: {
    description: {
      story:
        'Enable `required` will let Input display a red * on the label but validation is not forced for now.',
    },
  },
};

export const ErrorStatus = () => {
  const [value, setValue] = useState({ text: '', selected: null });
  const status = value?.text.trim() === '' ? 'error' : 'default';

  const handleSearchInput = (event) => {
    setValue(event.value);
  };

  return (
    <Grid rowCols={[1, 1, 2]}>
      <Col>
        <SearchInput
          status={status}
          label="Search used phones on Chợ Tốt"
          value={value}
          onChange={handleSearchInput}
          options={searchItems(value?.text)}
        />
      </Col>
    </Grid>
  );
};

ErrorStatus.parameters = {
  docs: {
    description: {
      story:
        'Set `status="error"` will let Input has red borders and helpText, indicate error status.',
    },
  },
};

const marginClass = css`
  margin-bottom: 100px;

  @media ${mediaQueries.tablet} {
    margin-bottom: 0;
  }
`;

const lessItems = [
  { name: 'iphone 11 pro max', brand: 'apple', category: 'Điện thoại' },
  { name: 'galaxy note 10 plus', brand: 'Samsung', category: 'Điện Thoại' },
  { name: 'galaxy s20 ultra', brand: 'Samsung', category: 'Điện Thoại' },
];

export const Events = () => {
  const [value, setValue] = useState({ text: '', selected: null });
  const [typeValue, setTypeValue] = useState('');
  const [countChange, setCountChange] = useState(0);
  const [countInput, setCountInput] = useState(0);
  const [countSelect, setCountSelect] = useState(0);

  const handleSearchInput = (event) => {
    setCountChange(countChange + 1);
    setValue(event.value);
  };

  const handleType = (event) => {
    setCountInput(countInput + 1);
    setTypeValue(event.target.value);
  };

  const handleSelect = () => {
    setCountSelect(countSelect + 1);
  };

  const handleReset = () => {
    setValue({ text: '', selected: null });
    setTypeValue('');
    setCountChange(0);
    setCountInput(0);
    setCountSelect(0);
  };

  /* use less search items in this story so that the empty space
  for option menu on mobile doesn't have to be too big */
  return (
    <Grid rowCols={[1, 1, 2]} gutterx="md">
      <Col>
        <SearchInput
          label="Search used phones on Chợ Tốt"
          value={value}
          onChange={handleSearchInput}
          options={searchItems(value?.text, lessItems)}
          onInput={handleType}
          onSelect={handleSelect}
        />
      </Col>
      <Col>
        <div className={marginClass} />
        <p>
          onChange has been called: <strong>{countChange}</strong> time(s)
        </p>
        <p>
          onInput has been called: <strong>{countInput}</strong> time(s)
        </p>
        <p>
          onSelect has been called: <strong>{countSelect}</strong> time(s)
        </p>
        <br />
        <p>Current text in input: {value?.text}</p>
        <p>Text typed from keyboard: {typeValue}</p>
        <p>Text selected from option menu: {value?.selected?.text}</p>
        <Button onClick={handleReset}>Reset</Button>
      </Col>
    </Grid>
  );
};

Events.storyName = 'Events handling';
Events.parameters = {
  docs: {
    description: {
      story:
        'Search input has 3 callbacks. `onInput` is called when user manually types value from keyboard. `onSelect` is called when user selects an option from option menu. `onChange` is called when input value changes, which means, when either `onInput` or `onSelect` is called.',
    },
  },
};

export const AsyncSearching = () => {
  const [value, setValue] = useState({ text: '', selected: null });
  const [options, setOptions] = useState([]);

  const simulateFetchingData = (query) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(searchItems(query));
      }, 500);
    });

  const handleFetch = useCallback(
    debounce(async (inputText) => {
      if (inputText.trim()) {
        const fetchedItems = await simulateFetchingData(inputText);
        setOptions(fetchedItems);
      } else {
        setOptions([]);
      }
    }, 500),
    []
  );

  // move fetch API logic to onInput so that it's not called when value is selected from option menu
  const handleType = (event) => {
    handleFetch(event.value.text);
  };

  const handleSearchInput = (event) => {
    setValue(event.value);
  };

  return (
    <Grid rowCols={[1, 1, 2]}>
      <Col>
        <SearchInput
          label="Search used phones on Chợ Tốt"
          value={value}
          onInput={handleType}
          onChange={handleSearchInput}
          options={options}
        />
        <p>
          Selected data:{' '}
          {value.selected
            ? `{name: "${value.selected?.data?.name}", brand: "${value.selected?.data?.brand}"}`
            : '[No data]'}
        </p>
      </Col>
    </Grid>
  );
};

AsyncSearching.storyName = 'Ex: Async Searching';
AsyncSearching.parameters = {
  docs: {
    description: {
      story:
        "An example showing how to use debounce combined with asynchronously fetching data from server on user's typing.",
    },
  },
};

// -----------------------------------------------------------------------

/**
 * @type {Array<{name: string, brand: string, category: string}>}
 */
const items = [
  { name: 'iphone 11 pro max', brand: 'apple', category: 'Điện thoại' },
  { name: 'iphone xs max', brand: 'apple', category: 'Điện thoại' },
  { name: 'iphone 6s plus', brand: 'apple', category: 'Điện thoại' },
  { name: 'iphone 8 plus', brand: 'apple', category: 'Điện thoại' },
  { name: 'iphone 7 plus', brand: 'apple', category: 'Điện thoại' },
  { name: 'iphone 11 pro', brand: 'apple', category: 'Điện thoại' },
  { name: 'iphone 12 pro max', brand: 'apple', category: 'Điện thoại' },
  { name: 'iphone 6 plus', brand: 'apple', category: 'Điện thoại' },
  { name: 'iphone 5s', brand: 'apple', category: 'Điện thoại' },
  { name: 'iphone x', brand: 'apple', category: 'Điện thoại' },
  { name: 'galaxy note 10 plus', brand: 'Samsung', category: 'Điện Thoại' },
  { name: 'galaxy note 9', brand: 'Samsung', category: 'Điện Thoại' },
  { name: 'galaxy note 8', brand: 'Samsung', category: 'Điện Thoại' },
  { name: 'galaxy s10 plus', brand: 'Samsung', category: 'Điện Thoại' },
  { name: 'galaxy j7 pro', brand: 'Samsung', category: 'Điện Thoại' },
  { name: 'galaxy s20 ultra', brand: 'Samsung', category: 'Điện Thoại' },
  { name: 'galaxy note 10', brand: 'Samsung', category: 'Điện Thoại' },
  { name: 'galaxy s9 plus', brand: 'Samsung', category: 'Điện Thoại' },
  { name: 'galaxy a51', brand: 'Samsung', category: 'Điện Thoại' },
];

// demo and simulate data transformation for the SearchInput component
function searchItems(qs = '', optionData = null) {
  const data = optionData ? [...optionData] : [...items];
  // to simplify stuff, convert all strings to lower case
  qs = qs.trim().toLowerCase();
  if (qs.trim()) {
    return data
      .filter((item) => {
        const text = item.brand + ' ' + item.name;
        return text.toLowerCase().includes(qs);
      })
      .map(({ name, brand, category }) => {
        const text = `${brand} ${name}`.toLowerCase();
        const html = text.split(qs).join(`<mark>${qs}</mark>`);

        return {
          text,
          html: `${html} trong <span>${category}</span>`,
          data: { name, brand, category },
        };
      });
  }
  return [];
}
