import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

// 此處為sidebar所需之data, Sidebar & Submenu 皆用 map 來讀取內容渲染在sidebar內

export const SidebarData = [
  {
    title: '違規紅燈直行、右轉及左轉',
    path: '#',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '案件審查',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '資料管理',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '設備管理',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '統計清冊',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '數據分析',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: '不依行向專用車道行駛偵測',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '案件審查',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '資料管理',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '設備管理',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '統計清冊',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '數據分析',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: '機車行駛於禁行機慢車道',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '案件審查',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '資料管理',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '設備管理',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '統計清冊',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '數據分析',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: '未保持路口淨空',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '案件審查',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '資料管理',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '設備管理',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '統計清冊',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '數據分析',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: '跨越禁止變換車道線',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '案件審查',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '資料管理',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '設備管理',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '統計清冊',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '數據分析',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: '車輛未禮讓行人',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '案件審查',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '資料管理',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '設備管理',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '統計清冊',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: '數據分析',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
];