import React from 'react';
import { css } from 'linaria';
import theme from '@clad-ui/theme';
import Grid from './Grid';
import Col from './Col';
import Box from '../Box/Box';

const { colors, sizes, space } = theme;

const gridStories = {
  title: 'Style Guide/Layout/Grid',
  component: Grid,
  subcomponents: { Col },
  parameters: {
    docs: {
      description: {
        component: `Clad UI Grid System uses a series of Components to layout and align content.
It’s built with **flexbox**, based on [Bootstrap 5 Grid System](https://getbootstrap.com/docs/5.0/layout/grid/) and is fully responsive.

\`🧪Beta\`

Clad UI Grid System has two main components to mimic CSS Flexbox: **\`Grid\`** as flex container and **\`Col\`** as flex item.
`,
      },
    },
  },
  argTypes: {
    width: {
      options: Object.keys(sizes),
      defaultValue: 'full',
    },
    rowCols: {
      control: {
        type: 'number',
      },
    },
    align: {},
    justify: {}, // auto control, placing it here to deliberately sort it
    gutter: {
      options: Object.keys(space),
      defaultValue: 'none',
    },
    children: {
      defaultValue: 3,
      control: {
        type: 'number',
        min: 1,
        max: 12,
        step: 1,
      },
    },
    className: { control: null },
    gutterx: { control: null },
    guttery: { control: null },
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

const marginClass = css`
  margin-bottom: 48px;
`;

export const GridSystem = (args) => (
  <Grid {...args} className={gridWithHeightStyleClass}>
    {Array.from({ length: args.children }, (_, i) => (
      <Col key={`col${i.toString()}`}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Column
        </Box>
      </Col>
    ))}
  </Grid>
);

export const GridWidth = () => (
  <>
    <Grid width="full" className={gridStyleClass}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Column
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Column
        </Box>
      </Col>
    </Grid>
    <Grid width="twoThird" className={gridStyleClass}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Column
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Column
        </Box>
      </Col>
    </Grid>
    <Grid width="half" className={gridStyleClass}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Column
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Column
        </Box>
      </Col>
    </Grid>
    <Grid width="third" className={gridStyleClass}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Column
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Column
        </Box>
      </Col>
    </Grid>
    <p>Responsive prop:</p>
    <Grid width={['third', 'half', 'twoThird', 'full']} className={gridStyleClass}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Column
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Column
        </Box>
      </Col>
    </Grid>
  </>
);

GridWidth.parameters = {
  docs: {
    description: {
      story: 'Setting the `width` of the Grid container',
    },
  },
};

export const RowCols = () => (
  <>
    <Grid rowCols={2} className={gridStyleClass}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Two columns per row
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Two columns per row
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Two columns per row
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Two columns per row
        </Box>
      </Col>
    </Grid>
    <Grid rowCols={3} className={gridStyleClass}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Three columns per row
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Three columns per row
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Three columns per row
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Three columns per row
        </Box>
      </Col>
    </Grid>
    <Grid rowCols={[1, 2, 3, 4]} className={gridStyleClass}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Responsive number of columns
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Responsive number of columns
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Responsive number of columns
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Responsive number of columns
        </Box>
      </Col>
    </Grid>
  </>
);

RowCols.storyName = 'Cols per Row';
RowCols.parameters = {
  docs: {
    description: {
      story:
        "Setting Grid's `rowCols` to define uniformed number of columns per row. Clad UI also use the universal 12-column grid system, so `rowCols` can be set from 1 - 12. Besides, [Col can have its own width by setting its `span` prop](?path=/docs/style-guide-layout-col--column-span).",
    },
  },
};

export const VerticalAlign = () => (
  <>
    <Grid align="start" className={gridWithHeightStyleClass}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Align start
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Align start
        </Box>
      </Col>
    </Grid>
    <Grid align="center" className={gridWithHeightStyleClass}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Align center
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Align center
        </Box>
      </Col>
    </Grid>
    <Grid align="end" className={gridWithHeightStyleClass}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Align end
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Align end
        </Box>
      </Col>
    </Grid>
  </>
);

VerticalAlign.parameters = {
  docs: {
    description: {
      story:
        "Setting Grid's `align` to align all columns vertically. (CSS flex box `align-items`). We can also [vertically align individual column by setting Col's `align` prop](?path=/docs/style-guide-layout-col--column-align).",
    },
  },
};

export const HorizontalJustify = () => (
  <>
    <p>justify=&quot;start&quot;</p>
    <Grid justify="start" className={gridStyleClass}>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
    </Grid>
    <p>justify=&quot;center&quot;</p>
    <Grid justify="center" className={gridStyleClass}>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
    </Grid>
    <p>justify=&quot;end&quot;</p>
    <Grid justify="end" className={gridStyleClass}>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
    </Grid>
    <p>justify=&quot;around&quot;</p>
    <Grid justify="around" className={gridStyleClass}>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
    </Grid>
    <p>justify=&quot;between&quot;</p>
    <Grid justify="between" className={gridStyleClass}>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
      <Col span={3}>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Span of 3
        </Box>
      </Col>
    </Grid>
  </>
);

HorizontalJustify.parameters = {
  docs: {
    description: {
      story:
        "Setting Grid's `justify` to justify columns horizontally. (CSS flex box `justify-content`)",
    },
  },
};

export const ColumnSpacing = () => (
  <>
    <p>Grid gutter with single value</p>
    <Grid gutter="sm" rowCols={2}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with gutter
        </Box>
      </Col>
    </Grid>
    <div className={marginClass} />
    <p>Grid gutter with responsive array values</p>
    <Grid gutter={['xs', 'sm', 'md', 'lg', 'xl']} rowCols={2}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with responsive gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with responsive gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with responsive gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with responsive gutter
        </Box>
      </Col>
    </Grid>
  </>
);

ColumnSpacing.parameters = {
  docs: {
    description: {
      story:
        "Setting Grid's `gutter` to define vertical & horizontal space between columns using theme `space` tokens",
    },
  },
};

export const HorizontalSpace = () => (
  <>
    <p>Grid gutterx with single value</p>
    <Grid gutterx="sm" rowCols={2}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with horizontal gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with horizontal gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with horizontal gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with horizontal gutter
        </Box>
      </Col>
    </Grid>
    <div className={marginClass} />
    <p>Grid gutterx with responsive array values</p>
    <Grid gutterx={['xs', 'sm', 'md', 'lg', 'xl']} rowCols={2}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with responsive horizontal gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with responsive horizontal gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with responsive horizontal gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with responsive horizontal gutter
        </Box>
      </Col>
    </Grid>
  </>
);

HorizontalSpace.parameters = {
  docs: {
    description: {
      story:
        "Setting Grid's `gutterx` to define horizontal space between columns using theme `space` tokens",
    },
  },
};

export const VerticalSpace = () => (
  <>
    <p>Grid guttery with single value</p>
    <Grid guttery="sm" rowCols={2}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with vertical gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with vertical gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with vertical gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with vertical gutter
        </Box>
      </Col>
    </Grid>
    <div className={marginClass} />
    <p>Grid guttery with responsive array values</p>
    <Grid guttery={['xs', 'sm', 'md', 'lg', 'xl']} rowCols={2}>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with responsive vertical gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with responsive vertical gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with responsive vertical gutter
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="background" borderWidth="sm" padding="sm">
          Grid with responsive vertical gutter
        </Box>
      </Col>
    </Grid>
  </>
);

VerticalSpace.parameters = {
  docs: {
    description: {
      story:
        "Setting Grid's `guttery` to define vertical space between columns using theme `space` tokens",
    },
  },
};
