import React, { useState } from 'react';
import { css } from 'linaria';
import theme from '@clad-ui/theme';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Snack from './Snack';

const { durations } = theme;

const snackStories = {
  title: 'Components/Snack',
  component: Snack,
  parameters: {
    docs: {
      description: {
        component: `Snack is used to inform user of a process that has just been performed or will perform.

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/MyM80Vl)

Snack appears temporarily, at the bottom of the screen and doesn't require user input to disappear. Snack shouldn’t interrupt the user experience, and doesn’t require user input to disappear.
`,
      },
    },
  },
  argTypes: {
    children: {
      defaultValue: 'Message for user',
      control: {
        type: 'text',
      },
    },
    desktopSize: {},
    autoHideDuration: {
      options: Object.keys(durations),
    },
  },
};

export default snackStories;

const marginTopClass = css`
  margin-top: 24px;
`;

export const Overview = (args) => {
  const [open, setOpen] = useState(false);
  const openSnackHandler = () => {
    setOpen(true);
  };
  const closeSnackHandler = () => {
    setOpen(false);
  };
  return (
    <>
      <Button color="accent" onClick={openSnackHandler}>
        Open Snack
      </Button>
      {open && <Snack {...args} onClose={closeSnackHandler} />}
    </>
  );
};

export const WithDesktopSize = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  // Snacks should not overlie each other
  const closeAllSnack = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
  };

  const openSnackHandler1 = () => {
    closeAllSnack();
    setOpen1(true);
  };
  const closeSnackHandler1 = () => {
    setOpen1(false);
  };
  const openSnackHandler2 = () => {
    closeAllSnack();
    setOpen2(true);
  };
  const closeSnackHandler2 = () => {
    setOpen2(false);
  };
  const openSnackHandler3 = () => {
    closeAllSnack();
    setOpen3(true);
  };
  const closeSnackHandler3 = () => {
    setOpen3(false);
  };
  return (
    <>
      <p>Medium size Snack</p>
      <Button color="accent" onClick={openSnackHandler1}>
        Open Snack
      </Button>
      {open1 && (
        <Snack onClose={closeSnackHandler1} desktopSize="md">
          Medium size Snack
        </Snack>
      )}
      <p className={marginTopClass}>Large size Snack (default)</p>
      <Button color="accent" onClick={openSnackHandler2}>
        Open Snack
      </Button>
      {open2 && (
        <Snack onClose={closeSnackHandler2} desktopSize="lg">
          Large size Snack
        </Snack>
      )}
      <p className={marginTopClass}>Extra-large size Snack</p>
      <Button color="accent" onClick={openSnackHandler3}>
        Open Snack
      </Button>
      {open3 && (
        <Snack onClose={closeSnackHandler3} desktopSize="xl">
          Extra-large size Snack
        </Snack>
      )}
    </>
  );
};

WithDesktopSize.storyName = 'With desktopSize';
WithDesktopSize.parameters = {
  docs: {
    description: {
      story:
        "Set Snack's `desktopSize` to set its max-width on desktop. `desktopSize` **DOES NOT** have effect on mobile and tablet viewport.",
    },
  },
};

export const WithAutoHideDuration = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const openSnackHandler1 = () => {
    // Snacks should not overlie each other
    setOpen2(false);
    setOpen1(true);
  };
  const closeSnackHandler1 = () => {
    setOpen1(false);
  };
  const openSnackHandler2 = () => {
    // Snacks should not overlie each other
    setOpen1(false);
    setOpen2(true);
  };
  const closeSnackHandler2 = () => {
    setOpen2(false);
  };
  return (
    <>
      <p>4 seconds delay before hiding (default)</p>
      <Button color="accent" onClick={openSnackHandler1}>
        Open Snack
      </Button>
      {open1 && (
        <Snack onClose={closeSnackHandler1} autoHideDuration="xl">
          4 seconds delay before hiding (default)
        </Snack>
      )}
      <p className={marginTopClass}>8 seconds delay before hiding</p>
      <Button color="accent" onClick={openSnackHandler2}>
        Open Snack
      </Button>
      {open2 && (
        <Snack onClose={closeSnackHandler2} autoHideDuration="xxxl">
          8 seconds delay before hiding
        </Snack>
      )}
    </>
  );
};

WithAutoHideDuration.storyName = 'With autoHideDuration';
WithAutoHideDuration.parameters = {
  docs: {
    description: {
      story: 'Set `autoHideDuration` for delay time before Snack disappears.',
    },
  },
};

export const ToggleStatusExample = () => {
  const [follow, setFollow] = useState(false);
  const [unFollow, setUnFollow] = useState(false);

  const closeFollowSnackHandler = () => {
    setFollow(false);
  };
  const closeUnFollowSnackHandler = () => {
    setUnFollow(false);
  };
  const onCheckboxChanged = ({ target }) => {
    if (target.checked) {
      setFollow(true);
      setUnFollow(false);
    } else {
      setFollow(false);
      setUnFollow(true);
    }
  };

  return (
    <>
      <Checkbox name="follow" label="Theo dõi tin đăng này" onChange={onCheckboxChanged} />
      {follow && (
        <Snack onClose={closeFollowSnackHandler} autoHideDuration="xl">
          Tin đã được đưa vào danh sách theo dõi.
        </Snack>
      )}
      {unFollow && (
        <Snack onClose={closeUnFollowSnackHandler} autoHideDuration="xl">
          Đã hủy theo dõi tin này.
        </Snack>
      )}
    </>
  );
};

ToggleStatusExample.storyName = 'Ex: Toggle status';
ToggleStatusExample.parameters = {
  docs: {
    description: {
      story: 'An example of switching Snack based on Checkbox status.',
    },
  },
};
