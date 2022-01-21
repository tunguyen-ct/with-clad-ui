import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Announcer from './Announcer';
import Grid from '../Grid/Grid';
import Col from '../Grid/Col';
import GuideImage from '../../storybook/components/GuideImage';

const announcerStories = {
  title: 'Components/Announcer',
  component: Announcer,
  parameters: {
    docs: {
      description: {
        component: `Announcer box is used to displayed system messages, which can be dismissed.

\`🧪 Beta\` [\`💎 Sketch Specs\`](https://www.sketch.com/s/061b5b52-f0d0-439f-9fde-2bfbcfaaf97e/a/09xl9VA)

## How to use

Announcer can be used to display:

- Information/Tips: Common information or notification, tips or usage guide.

- Time Information/Pending/Reviewing: Time-related information.

- Gift/Promotion: Gift or promotion that can be claimed.

- Soft Warning/Reminder: Caution, warning or reminder that needs user's attention.

- Success: Success message after performing an action.

- Hard Warning/Error/Expired: Inform user about issues or something has just gone wrong.
`,
      },
    },
  },
  argTypes: {
    title: { defaultValue: '[Thông báo] Nâng cấp hệ thống' },
    children: {
      control: {
        type: 'text',
      },
      defaultValue:
        'Chợ Tốt đang thực hiện nâng cấp hệ thống nên có thể ảnh hưởng tới một số tính năng liên quan đến quản lý và hiển thị tin đăng, chúng tôi sẽ cập nhật thông tin ngay khi hoàn thành. Xin lỗi Quý khách vì sự bất tiện này!',
    },
    type: {},
    btnLabel: { defaultValue: 'Xem thêm' },
    compact: {},
    open: { defaultValue: true },
    onClose: { control: null },
    onButtonClick: { control: null },
    dangerousHtml: { control: null },
  },
};

export default announcerStories;

const onActionBtnClick = () => {
  // eslint-disable-next-line no-alert
  alert('Action button clicked.');
};

export const Overview = (args) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setOpen(args.open);
  }, [args.open]);
  return (
    <>
      {!open && <Button onClick={handleOpen}>Reopen Announcer</Button>}
      <Announcer {...args} open={open} onClose={handleClose} onButtonClick={onActionBtnClick} />
    </>
  );
};

export const WithoutTitle = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {!open && <Button onClick={handleOpen}>Reopen Announcer</Button>}
      <Announcer
        btnLabel="Xem thêm"
        open={open}
        onClose={handleClose}
        onButtonClick={onActionBtnClick}
      >
        Chợ Tốt đang thực hiện nâng cấp hệ thống nên có thể ảnh hưởng tới một số tính năng liên quan
        đến quản lý và hiển thị tin đăng, chúng tôi sẽ cập nhật thông tin ngay khi hoàn thành. Xin
        lỗi Quý khách vì sự bất tiện này!
      </Announcer>
    </>
  );
};

WithoutTitle.storyName = 'Without title';
WithoutTitle.parameters = {
  docs: {
    description: {
      story:
        "Announcer won't have title if `title` prop is not found. Announcer's children will occupy the empty space.",
    },
  },
};

export const WithoutButton = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {!open && <Button onClick={handleOpen}>Reopen Announcer</Button>}
      <Announcer
        title="[Thông báo] Nâng cấp hệ thống"
        open={open}
        onClose={handleClose}
        onButtonClick={onActionBtnClick}
      >
        Chợ Tốt đang thực hiện nâng cấp hệ thống nên có thể ảnh hưởng tới một số tính năng liên quan
        đến quản lý và hiển thị tin đăng, chúng tôi sẽ cập nhật thông tin ngay khi hoàn thành. Xin
        lỗi Quý khách vì sự bất tiện này!
      </Announcer>
    </>
  );
};

WithoutButton.storyName = 'Without btnLabel';
WithoutButton.parameters = {
  docs: {
    description: {
      story:
        "Announcer won't have action button at the bottom if `btnLabel` prop is not found. Announcer's children will occupy the empty space. On mobile viewport, if children's number of line is more than 4, it will be truncated into 2 with an expand button.",
    },
  },
};

export const WithoutCloseButton = () => (
  <Announcer title="[Thông báo] Nâng cấp hệ thống" open>
    Chợ Tốt đang thực hiện nâng cấp hệ thống nên có thể ảnh hưởng tới một số tính năng liên quan đến
    quản lý và hiển thị tin đăng, chúng tôi sẽ cập nhật thông tin ngay khi hoàn thành. Xin lỗi Quý
    khách vì sự bất tiện này!
  </Announcer>
);

WithoutCloseButton.storyName = 'Without btnClose';
WithoutCloseButton.parameters = {
  docs: {
    description: {
      story:
        "Announcer won't have the close button at the top-right if the `onClose` prop is not a function.",
    },
  },
};

export const WithType = () => (
  <>
    <p>
      <em>Open and close functionality are disabled in this story.</em>
    </p>
    <p>type=&quot;info&quot;</p>
    <Announcer
      type="info"
      title="[Thông báo] Nâng cấp hệ thống"
      btnLabel="Xem thêm"
      open
      onButtonClick={onActionBtnClick}
    >
      Chợ Tốt đang thực hiện nâng cấp hệ thống nên có thể ảnh hưởng tới một số tính năng liên quan
      đến quản lý và hiển thị tin đăng, chúng tôi sẽ cập nhật thông tin ngay khi hoàn thành. Xin lỗi
      Quý khách vì sự bất tiện này!
    </Announcer>
    <br />
    <p>type=&quot;time&quot;</p>
    <Announcer
      type="time"
      title="Tin của bạn đang được duyệt"
      open
      onButtonClick={onActionBtnClick}
    >
      Bạn có thể cập nhật thông báo tình trạng tin đăng tại mục Quản lý tin đăng
    </Announcer>
    <br />
    <p>type=&quot;gift&quot;</p>
    <Announcer
      type="gift"
      title="Chương trình giảm giá đặc biệt"
      btnLabel="Mua dịch vụ"
      open
      onButtonClick={onActionBtnClick}
    >
      Bán nhanh hơn với dịch vụ đẩy tin của Chợ Tốt. Chương trình khuyến mãi chỉ dành cho người dùng
      nhận được thông báo này.
    </Announcer>
    <br />
    <p>type=&quot;warning&quot;</p>
    <Announcer
      type="warning"
      title="Cửa hàng Điện tử sắp hết hạn"
      btnLabel="Gia hạn cửa hàng"
      open
      onButtonClick={onActionBtnClick}
    >
      Chợ Tốt đang thực hiện nâng cấp hệ thống nên có thể ảnh hưởng tới một số tính năng liên quan
      đến quản lý và hiển thị tin đăng, chúng tôi sẽ cập nhật thông tin ngay khi hoàn thành. Xin lỗi
      Quý khách vì sự bất tiện này!
    </Announcer>
    <br />
    <p>type=&quot;success&quot;</p>
    <Announcer
      type="success"
      title="Cửa hàng Điện tử được duyệt thành công!"
      btnLabel="Bán nhanh hơn"
      open
      onButtonClick={onActionBtnClick}
    >
      Chúc mừng, Cửa hàng Điện tử của bạn đã đi vào hoạt động! Đăng tin ngay để thu hút nhiều Người
      mua đến với Cửa hàng. Xem Hướng dẫn quản lý Cửa hàng.
    </Announcer>
    <br />
    <p>type=&quot;error&quot;</p>
    <Announcer
      type="error"
      title="Cửa hàng điện tử đã hết hạn"
      btnLabel="Gia hạn cửa hàng"
      open
      onButtonClick={onActionBtnClick}
    >
      Cửa hàng Điện tử của bạn đã hết hạn. Để tiếp tục việc kinh doanh, gia hạn Cửa hàng ngay bạn
      nhé.
    </Announcer>
  </>
);

WithType.storyName = 'With type';
WithType.parameters = {
  docs: {
    description: {
      story:
        'Announcer comes with various different types. Each has an unique icon, a suitable theme color and serves different purposes.',
    },
  },
};

export const EmptyState = () => (
  <>
    <p>type=&quot;neutral&quot;</p>
    <Announcer type="neutral">Rất tiếc, chưa có tin đăng nào được cập nhật</Announcer>
  </>
);

EmptyState.storyName = 'With type="neutral"';
EmptyState.parameters = {
  docs: {
    description: {
      story:
        '`type="neutral"` is a special Announcer type. Setting this will turn Announcer to empty state Announcer, which can\'t be dismissed via user\'s interaction. Empty state Announcer does not depend on `open` prop to appear and will ignore `title`, `btnLabel` and `compact` props.',
    },
  },
};

export const WithCompact = () => (
  <>
    <p>
      <em>Open and close functionality are disabled in this story.</em>
    </p>
    <Announcer type="info" compact open>
      Info
    </Announcer>
    <br />
    <Announcer type="time" compact open>
      Time
    </Announcer>
    <br />
    <Announcer type="gift" compact open>
      Gift
    </Announcer>
    <br />
    <Announcer type="warning" compact open>
      Warning
    </Announcer>
    <br />
    <Announcer type="success" compact open>
      Success
    </Announcer>
    <br />
    <Announcer type="error" compact open>
      Error
    </Announcer>
  </>
);

WithCompact.storyName = 'With compact';
WithCompact.parameters = {
  docs: {
    description: {
      story:
        'Setting `compact` prop to turn Announcer to single line. Useful when Announcer description is short and action button is not required.',
    },
  },
};

export const HtmlContentExample = () => (
  <>
    <p>
      <em>Open and close functionality are disabled in this story.</em>
    </p>
    <p>type=&quot;info&quot;</p>
    <Announcer
      type="info"
      title="[Thông báo] Nâng cấp hệ thống"
      btnLabel="Xem thêm"
      open
      onButtonClick={onActionBtnClick}
      dangerousHtml="<p><strong>Chợ Tốt</strong> đang thực hiện nâng cấp hệ thống nên có thể ảnh hưởng tới một số tính năng liên quan
      đến quản lý và hiển thị tin đăng, chúng tôi sẽ cập nhật thông tin ngay khi hoàn thành. Xin lỗi
      Quý khách vì sự bất tiện này!</p>"
    />
    <br />
    <p>type=&quot;neutral&quot;</p>
    <Announcer type="neutral" dangerousHtml="<p>Rất tiếc, chưa có tin đăng nào được cập nhật</p>" />
    <br />
    <p>With compact prop enabled</p>
    <Announcer type="info" compact open dangerousHtml="<p>Info</p>" />
  </>
);

HtmlContentExample.storyName = 'Ex: HTML content';
HtmlContentExample.parameters = {
  docs: {
    description: {
      story:
        "Announcer component has a special `dangerousHtml` prop which accepts HTML string which will be lightly sanitized (so it's still dangerous), automatically wrapped in `{__html}` and passed to `dangerouslySetInnerHTML` of the rendered styled container. Avoid passing user's input directly to this prop and the HTML string should be properly sanitized at server side.",
    },
  },
};

export const UsageGuide = () => (
  <>
    <h4>Collapsed on mobile</h4>
    <p>
      On mobile viewport, when Announcer description (a.k.a children or dangerousHtml prop) number
      of line is more than 4, it will be truncated into 2 with an expand button.
    </p>
    <GuideImage src="./announcer-collapsed.png" alt="Announcer - Collapsed" />
    <br />
    <h4>DO&apos;s</h4>
    <Grid rowCols={[1, 1, 2]} gutterx="sm" align="center">
      <Col>
        <GuideImage isGood src="./announcer-do-1.png" alt="Announcer - Do_1" />
      </Col>
      <Col>
        <GuideImage isGood src="./announcer-do-2.png" alt="Announcer - Do_2" />
      </Col>
    </Grid>
    <br />
    <h4>DON&apos;Ts</h4>
    <Grid rowCols={[1, 1, 2]} gutterx="sm" align="center">
      <Col>
        <GuideImage isBad src="./announcer-dont-1.png" alt="Announcer - Dont_1" />
        <p>Wrong icon as well as background-color.</p>
      </Col>
      <Col>
        <GuideImage isBad src="./announcer-dont-2.png" alt="Announcer - Dont_2" />
        <p>Wrong color on both regular Announcer and empty state Announcer.</p>
      </Col>
    </Grid>
  </>
);
UsageGuide.parameters = {
  docs: {
    source: { code: [] },
  },
};
