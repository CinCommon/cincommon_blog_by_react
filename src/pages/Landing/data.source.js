import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航一', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航二', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航三', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航四', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page k08brv3gitf-editor_css' },
        textWrapper: {
          className: 'banner2-text-wrapper k08brwkx0be-editor_css',
        },
        bg: { className: 'bg bg0 k08btofwrj-editor_css' },
        title: {
          className: 'banner2-title k08brnjf8l-editor_css',
          children: (
            <>
              <p>Steven Yin</p>
            </>
          ),
        },
        content: {
          className: 'banner2-content k08brzpozd8-editor_css',
          children: (
            <>
              <p>Full-Stack Learner: Java | React | Vue</p>
            </>
          ),
        },
        button: {
          className: 'banner2-button',
          onClick: () => {
            window.location.href = '/'
          },
          children: (
            <>
              <p>进入首页</p>
            </>
          ),
        },
      },
    ],
  },
};
export const Teams00DataSource = {
  wrapper: {
    className: 'home-page-wrapper teams0-wrapper k08cix6la4t-editor_css',
  },
  OverPack: { playScale: 0.3, className: 'home-page teams0' },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://avatars2.githubusercontent.com/u/20436656?s=460&v=4',
              className: 'teams0-image k08cbmkp2pg-editor_css',
              url: 'https://github.com/CinCommon',
            },
            {
              name: 'content',
              children: (
                <>
                  <p>Java/H5 Engineer, working at KPMG.</p>
                </>
              ),
              className: 'teams0-content',
            },
            {
              name: 'title',
              children: (
                <>
                  <p>尹子凡 Steven Yin</p>
                </>
              ),
              className: 'teams0-h1',
            },
            {
              name: 'content~k08chbmb4ys',
              className: 'k08chgjvshs-editor_css',
              children: (
                <>
                  <p>Liverpool supporter. #JFT96 #YNWA&nbsp;</p>
                  <p>English &amp; Japanese &amp; Italiano Learner.</p>
                  <p>Java &amp; React &amp; Vue Developer.</p>
                  <p>Tara Boram</p>
                </>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6 k08ep7lpip-editor_css' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>Blogs</p>
          </>
        ),
        className: 'title-h1',
      },
    ],
  },
  img: {
    children:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRao-XdSmwV9V0SbQNfQZNMa0djpIcaJohJSCKpjjPXSjRtvELlCw',
    className: 'content6-img k08egq5kw0o-editor_css',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: {
          className: 'content6-title',
          children: (
            <>
              <p>TITLE</p>
            </>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <>
              <p>Introduce</p>
            </>
          ),
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <>
              <p>TITLE</p>
            </>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <>
              <p>Introduce</p>
              <p>
                <br />
              </p>
            </>
          ),
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <>
              <p>TITLE</p>
            </>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <>
              <p>Introduce</p>
            </>
          ),
        },
      },
    ],
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children:
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <>
        <p>Next Match</p>
      </>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <>
        <p>TBD</p>
      </>
    ),
  },
};
export const Footer20DataSource = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/NuuAwJBxewWglRSoNjET.png',
        className: 'copyright-logo',
      },
      {
        name: 'group',
        children: '蚂蚁金服体验科技大会',
        className: 'copyright-group',
      },
      {
        name: 'image2',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/fgGmQUfiUfSBfvsQpfOj.svg',
        className: 'copyright-line',
      },
      {
        name: 'copyright',
        children: 'Copyright © 蚂蚁金融服务集团',
        className: 'copyright-text',
      },
    ],
  },
  links: {
    className: 'links',
    children: [
      {
        name: 'github',
        href: 'https://github.com/CinCommon',
        className: 'icon-github'
      },
      {
        name: 'twitter',
        href: 'https://twitter.com/CommonCin',
        className: 'icon-twitter'
      },
      {
        name: 'facebook',
        href: 'https://www.facebook.com/CinCommon',
        className: 'icon-facebook'
      },
      {
        name: 'steam',
        href: 'https://steamcommunity.com/id/CinCommon/',
        className: 'icon-steam'
      },
    ],
  },
};
