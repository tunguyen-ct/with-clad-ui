import React, { useState } from 'react';
import theme from '@clad-ui/theme';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import Tooltip from './Tooltip';
import RadioButton from '../RadioButton/RadioButton';
import Button from '../Button/Button';
import { guideImageClass } from '../../storybook/components/GuideImage';

const { colors, durations, space } = theme;

const keysOfSpace = Object.keys(space);
const keysOfDurations = Object.keys(durations);

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

  @media screen and (min-width: 768px) {
    & > div {
      width: 50%;
    }
  }
`;

const tooltipStories = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: `Tooltip is a common graphical user interface that appears when user hovers a specific text or component to provide information that user needs to be aware of.

Tooltip's position, rendering logic and most of its API is handled by [react-laag](https://www.react-laag.com/) hook.

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/g0Z54kr)

## How to use

Wrap Tooltip around a target (a.k.a trigger) text or element and set its content via \`text\` or \`dangerousHtml\`. There are 2 ways a Tooltip can be triggered:

- Tooltip is visible right away when rendered and can be closed by tapping anywhere on the page (default).

- Tooltip is hidden initially and will appear when user hover (desktop) or tap (mobile) on the target (see \`hoverable\` prop).

Delay time before Tooltip appears or disappears can be adjusted.

Currently, Tooltip supports 2 themes:

- \`dark\`: default theme for Tooltip.

- \`light\`: use for Tooltip with long content.

<div className="${gridClass}">
  <div>
    <h3>Dark theme Tooltip</h3>
    <img className="${guideImageClass}" src="./tooltip-how-1.png" />
  </div>

  <div>
    <h3>Light theme Tooltip</h3>
    <img className="${guideImageClass}" src="./tooltip-how-2.png" />
  </div>
</div>
`,
      },
    },
  },
  argTypes: {
    text: { defaultValue: 'Tooltip' },
    variant: {},
    placement: {},
    hoverable: { defaultValue: true },
    manual: {},
    delayEnter: { options: keysOfDurations },
    delayLeave: { options: keysOfDurations },
    arrowOffset: { options: keysOfSpace },
    triggerOffset: { options: keysOfSpace },
    children: { control: null },
    dangerousHtml: { control: null },
  },
};

export default tooltipStories;

const playGroundClass = css`
  height: 250px;
  display: grid;
  place-items: center;
  background-color: ${colors.background};
  border: 1px solid ${colors.border};
`;

const Highlight = styled.span`
  color: ${colors.link};
  text-decoration: underline;
  text-decoration-style: dotted;
`;

export const Overview = (args) => (
  <>
    <p>
      <Tooltip {...args}>
        <Highlight>Clad UI</Highlight>
      </Tooltip>{' '}
      Design System is a system of design tokens, guidelines, theming solution and components
      library that helps{' '}
      <Tooltip {...args}>
        <Highlight>Chotot</Highlight>
      </Tooltip>{' '}
      front end and mobile engineers build consistent{' '}
      <Tooltip {...args}>
        <Highlight>UIs</Highlight>
      </Tooltip>{' '}
      faster and more satisfyingly.
    </p>
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  </>
);

export const WithVariant = () => (
  <>
    <p>
      <Tooltip hoverable variant="dark" text="Tooltip with dark theme">
        <Highlight>Tooltip</Highlight>
      </Tooltip>{' '}
      with variant=&quot;dark&quot; (default)
    </p>

    <p>
      <Tooltip hoverable variant="light" text="Tooltip with light theme">
        <Highlight>Tooltip</Highlight>
      </Tooltip>{' '}
      with variant=&quot;light&quot;
    </p>
  </>
);

WithVariant.storyName = 'With variant';
WithVariant.parameters = {
  docs: {
    description: {
      story:
        "Change Tooltip's theme with `variant`. `variant` accepts 2 themes: dark and light.",
    },
  },
};

export const WithPlacement = () => {
  const [value, setValue] = useState('top-start');
  const onRadioChanged = ({ target }) => {
    setValue(target.value);
  };
  return (
    <>
      <p>Possible placements:</p>
      <RadioButton
        name="placement"
        label="top-start"
        onChange={onRadioChanged}
        value="top-start"
        checked
      />
      <br />
      <RadioButton
        name="placement"
        label="top-center"
        onChange={onRadioChanged}
        value="top-center"
      />
      <br />
      <RadioButton name="placement" label="top-end" onChange={onRadioChanged} value="top-end" />
      <br />
      <RadioButton
        name="placement"
        label="bottom-start"
        onChange={onRadioChanged}
        value="bottom-start"
      />
      <br />
      <RadioButton
        name="placement"
        label="bottom-center (default)"
        onChange={onRadioChanged}
        value="bottom-center"
      />
      <br />
      <RadioButton
        name="placement"
        label="bottom-end"
        onChange={onRadioChanged}
        value="bottom-end"
      />
      <br />
      <RadioButton
        name="placement"
        label="left-start"
        onChange={onRadioChanged}
        value="left-start"
      />
      <br />
      <RadioButton
        name="placement"
        label="left-center"
        onChange={onRadioChanged}
        value="left-center"
      />
      <br />
      <RadioButton name="placement" label="left-end" onChange={onRadioChanged} value="left-end" />
      <br />
      <RadioButton
        name="placement"
        label="right-start"
        onChange={onRadioChanged}
        value="right-start"
      />
      <br />
      <RadioButton
        name="placement"
        label="right-center"
        onChange={onRadioChanged}
        value="right-center"
      />
      <br />
      <RadioButton name="placement" label="right-end" onChange={onRadioChanged} value="right-end" />
      <br />
      <RadioButton name="placement" label="center" onChange={onRadioChanged} value="center" />
      <br />

      <p>
        You are currently choosing <strong>{value}</strong> placement.
      </p>
      <div className={playGroundClass}>
        <Tooltip
          text="Use placement prop to adjust preferred position of the Tooltip"
          placement={value}
          manual
          hoverable
        >
          <Highlight>Hover me</Highlight>
        </Tooltip>
      </div>
    </>
  );
};

WithPlacement.storyName = 'With placement';
WithPlacement.parameters = {
  docs: {
    description: {
      story: 'Use Tooltip `placement` to set its preferred position.',
    },
  },
};

export const WithManual = () => (
  <>
    <p>
      <em>
        The second Tooltip has its manual enabled. Try scroll it to the end of the screen, you will
        see its position is not automatically switched to topside compared to the first one.
      </em>
    </p>
    <p>
      <Tooltip hoverable text="Normal Tooltip">
        <Highlight>Tooltip</Highlight>
      </Tooltip>{' '}
      without manual (default).
    </p>
    <p>
      <Tooltip hoverable manual text="Tooltip with manual enabled">
        <Highlight>Tooltip</Highlight>
      </Tooltip>{' '}
      with manual.
    </p>
  </>
);

WithManual.storyName = 'With manual';
WithManual.parameters = {
  docs: {
    description: {
      story:
        "`manual` prop turns off Tooltip's ability to switch automatically to a placement that is more visible on the screen. By default `manual` is set to **false**.",
    },
  },
};

export const WithDelay = () => (
  <>
    <p>
      <Tooltip hoverable text="Tooltip">
        <Highlight>Tooltip</Highlight>
      </Tooltip>{' '}
      with default delayEnter and delayLeave (300ms)
    </p>
    <p>
      <Tooltip hoverable delayEnter="xxxs" delayLeave="md" text="Tooltip">
        <Highlight>Tooltip</Highlight>
      </Tooltip>{' '}
      with 100ms delayEnter and 1000ms delayLeave
    </p>
    <p>
      <Tooltip hoverable delayEnter="xxxs" delayLeave="xxxs" text="Tooltip">
        <Highlight>Tooltip</Highlight>
      </Tooltip>{' '}
      with 100ms delayEnter and 100ms delayLeave
    </p>
  </>
);

WithDelay.storyName = 'With delay';
WithDelay.parameters = {
  docs: {
    description: {
      story:
        'Set `delayEnter` for delay time before Tooltip appears and `delayLeave` for delay time before disappear.',
    },
  },
};

export const WithOffset = () => (
  <>
    <p>
      <em>In this story, Tooltip&apos;s placement is set to &quot;bottom-start&quot;.</em>
    </p>
    <p>
      <Tooltip
        hoverable
        text="arrowOffset and triggerOffset example Tooltip"
        placement="bottom-start"
      >
        <Highlight>Tooltip</Highlight>
      </Tooltip>{' '}
      with default arrowOffset and triggerOffset
    </p>
    <p>
      <Tooltip
        hoverable
        arrowOffset="lg"
        text="arrowOffset and triggerOffset example Tooltip"
        placement="bottom-start"
      >
        <Highlight>Tooltip</Highlight>
      </Tooltip>{' '}
      with 24px of arrowOffset
    </p>
    <p>
      <Tooltip
        hoverable
        triggerOffset="lg"
        text="arrowOffset and triggerOffset example Tooltip"
        placement="bottom-start"
      >
        <Highlight>Tooltip</Highlight>
      </Tooltip>{' '}
      with 24px of triggerOffset
    </p>
  </>
);

WithOffset.storyName = 'With offset';
WithOffset.parameters = {
  docs: {
    description: {
      story:
        'Set `arrowOffset` for the minimal distance in pixels between arrow and Tooltip edges and `triggerOffset` for distance in pixels between Tooltip and trigger.',
    },
  },
};

export const Triggers = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <p>
        <em>
          Click anywhere on page will close Tooltip without hoverable and it can&apos;t be opened
          again via user interaction, you can <strong>click the Render button below</strong> to
          render Tooltip without hoverable and see it in action.
        </em>
      </p>
      <Button onClick={() => setOpen(!open)}>{open ? 'Restart' : 'Render'}</Button>
      <p style={{ marginTop: '24px' }}>
        Normal{' '}
        <Tooltip hoverable text="Tooltip">
          <Highlight>Tooltip</Highlight>
        </Tooltip>{' '}
        with hoverable.
      </p>
      {!open ? (
        <p>
          Click Render button to simulate page loading with Tooltip that doesn&apos;t have hoverable
          enabled.
        </p>
      ) : (
        <p>
          <Tooltip text=" Tooltip ">
            <Highlight>Tooltip</Highlight>
          </Tooltip>{' '}
          without hoverable. Click anywhere to close it.
        </p>
      )}
    </>
  );
};

Triggers.storyName = 'Ways to trigger';
Triggers.parameters = {
  docs: {
    description: {
      story: `Set \`hoverable\` to define how Tooltip should be trigger.

Tooltip is visible when rendered by default and will close when tap or click outside.
When \`hoverable=true\`, it will be invisible by default and will show when user tap or hover on trigger element.
        `,
    },
  },
};

export const HtmlExample = () => (
  <p>
    <Tooltip
      hoverable
      dangerousHtml="<strong>Tooltip</strong> with <em>HTML</em> contents.<br/>Even < br > should work."
    >
      <Highlight>Clad UI</Highlight>
    </Tooltip>{' '}
    Design System is a system of design tokens, guidelines, theming solution and components library
    that helps{' '}
    <Tooltip
      hoverable
      dangerousHtml="<strong>Tooltip</strong> with <em>HTML</em> contents.<br/>Even < br > should work."
      variant="light"
    >
      <Highlight>Chotot</Highlight>
    </Tooltip>{' '}
    front end and mobile engineers build consistent{' '}
    <Tooltip
      hoverable
      dangerousHtml="<strong>Tooltip</strong> with <em>HTML</em> contents.<br/>Even < br > should work."
    >
      <Highlight>UIs</Highlight>
    </Tooltip>{' '}
    faster and more satisfyingly.
  </p>
);

HtmlExample.storyName = 'Ex: HTML content';
HtmlExample.parameters = {
  docs: {
    description: {
      story:
        "Tooltip  component has a special `dangerousHtml` prop which accepts HTML string which will be lightly sanitized (so it's still dangerous), automatically wrapped in `{__html}` and passed to `dangerouslySetInnerHTML` of the rendered styled Tooltip. Avoid passing user's input directly to this prop and the HTML string should be properly sanitized at server side.",
    },
  },
};
