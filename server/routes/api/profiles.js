// @login & register
const express = require('express');
const router = express.Router();
const passport = require('passport');

const Profile = require('../../models/Profile');

// @route  GET api/profiles/test
// @desc   返回的请求的json数据
// @access public
router.get('/test', (req, res) => {
  res.json({ msg: 'profile works' });
});

// @route  GET api/profiles/homepage
// @desc   返回的首页请求的json数据
// @access public
router.get('/homepage', (req, res) => {
  res.json({
    swipers: [
      {
        image: '/image/jd1.jpg'
      },
      {
        image: '/image/jd2.jpg'
      },
      {
        image: '/image/jd3.jpg'
      },
      {
        image: '/image/jd4.jpg'
      },
      {
        image: '/image/jd5.jpg'
      }
    ],
    logos: [
      {
        image: '/image/logo1.png',
        title: '京东超市'
      },
      {
        image: '/image/logo2.png',
        title: '全球购'
      },
      {
        image: '/image/logo3.png',
        title: '服装城'
      },
      {
        image: '/image/logo4.png',
        title: '京东生鲜'
      },
      {
        image: '/image/logo5.png',
        title: '京东到家'
      },
      {
        image: '/image/logo6.png',
        title: '充值中心'
      },
      {
        image: '/image/logo7.png',
        title: '京东金融'
      },
      {
        image: '/image/logo8.png',
        title: '物流查询'
      },
      {
        image: '/image/logo9.png',
        title: '领券'
      },
      {
        image: '/image/logo10.png',
        title: '我的关注'
      }
    ],
    quicks: [
      {
        image: '/image/quick1.jpg',
        price: '￥123'
      },
      {
        image: '/image/quick2.jpg',
        price: '￥124'
      },
      {
        image: '/image/quick3.jpg',
        price: '￥125'
      },
      {
        image: '/image/quick4.jpg',
        price: '￥126'
      },
      {
        image: '/image/quick5.jpg',
        price: '￥127'
      },
      {
        image: '/image/quick6.jpg',
        price: '￥128'
      }
    ],
    pageRow: [
      ['/image/ad-0.jpg', '/image/ad-big.jpg', '/image/ad-1.jpg'],
      ['/image/ad-left.jpg', '/image/ad-right.jpg']
    ]
  });
});

// @route  GET api/profiles/productionDetail
// @desc   返回的商品详情的json数据
// @access public
router.get('/productionDetail', (req, res) => {
  const details = [
    {
      partData: {
        id: '3a4c8b8e4d8c22a97a94b46f58c1f3b9',
        loopImgUrl: [
          '/image/classify/phone.png',
          '/image/classify/miphone.png',
          '/image/classify/huawei.png'
        ],
        title:
          '荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待',
        price: '1499.00',
        count: 1
      },
      baitiao: [
        {
          desc: '不分期',
          tip: '先用后付，0服务费',
          select: true
        },
        {
          desc: '3期 x 506.83元起',
          tip: '含手续费，每期7.49元起，费率0.5%起',
          select: false
        },
        {
          desc: '6期 x 257.14元起',
          tip: '含手续费，每期7.49元起，费率0.5%起',
          select: false
        },
        {
          desc: '12期 x 132.36元起',
          tip: '含手续费，每期7.49元起，费率0.5%起',
          select: false
        },
        {
          desc: '24期 x 69.83元起',
          tip: '含手续费，每期7.49元起，费率0.5%起',
          select: false
        }
      ]
    },
    {
      partData: {
        id: '4a4c8b8e4d8c22a97a94b46f58c1f3b9',
        loopImgUrl: [
          '/image/classify/miphone.png',
          '/image/classify/phone.png',
          '/image/classify/huawei.png'
        ],
        title:
          '黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机',
        price: '3388.00',
        count: 1
      },
      baitiao: [
        {
          desc: '不分期',
          tip: '先用后付，0服务费',
          select: true
        },
        {
          desc: '3期 x 1146.28元起',
          tip: '含手续费，每期16.94元起，费率0.5%起',
          select: false
        },
        {
          desc: '6期 x 581.59元起',
          tip: '含手续费，每期16.94元起，费率0.5%起',
          select: false
        },
        {
          desc: '12期 x 299.31元起',
          tip: '含手续费，每期16.94元起，费率0.5%起',
          select: false
        },
        {
          desc: '24期 x 158.03元起',
          tip: '含手续费，每期16.94元起，费率0.5%起',
          select: false
        }
      ]
    },
    {
      partData: {
        id: '5a4c8b8e4d8c22a97a94b46f58c1f3b9',
        loopImgUrl: [
          '/image/classify/huawei.png',
          '/image/classify/miphone.png',
          '/image/classify/phone.png'
        ],
        title:
          'HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待',
        price: '4499.00',
        count: 1
      },
      baitiao: [
        {
          desc: '不分期',
          tip: '先用后付，0服务费',
          select: true
        },
        {
          desc: '3期 x 1522.16元起',
          tip: '含手续费，每期22.50元起，费率0.5%起',
          select: false
        },
        {
          desc: '6期 x 772.35元起',
          tip: '含手续费，每期22.50元起，费率0.5%起',
          select: false
        },
        {
          desc: '12期 x 397.38元起',
          tip: '含手续费，每期22.50元起，费率0.5%起',
          select: false
        },
        {
          desc: '24期 x 209.92元起',
          tip: '含手续费，每期22.50元起，费率0.5%起',
          select: false
        }
      ]
    }
  ];
  res.json(details);
});

// @route  GET api/profiles/productions
// @desc   返回的商品的json数据
// @access public
router.get('/productions', (req, res) => {
  res.json({
    navLeftItems: [
      '热门推荐',
      '手机数码',
      '女装内衣',
      '男装内衣',
      '家用电器',
      '鞋靴箱包',
      '运动户外',
      '电脑办公',
      '美妆护肤',
      '个护清洁',
      '生活充值',
      '家用建材',
      '家居家纺'
    ],
    navRightItems: [
      [
        {
          title: '热门分类',
          desc: [
            {
              text: 'U盘',
              img: '/image/classify/usb.png'
            },
            {
              text: '牛奶',
              img: '/image/classify/milk.png'
            },
            {
              text: '充电宝',
              img: '/image/classify/power.png'
            },
            {
              text: '洗衣液',
              img: '/image/classify/laundry.png'
            },
            {
              text: '男士内裤',
              img: '/image/classify/briefs.png'
            },
            {
              text: '耳机',
              img: '/image/classify/headset.png'
            },
            {
              text: '路由器',
              img: '/image/classify/router.png'
            },
            {
              text: '吃鸡神器',
              img: '/image/classify/game.png'
            },
            {
              text: '剃须刀',
              img: '/image/classify/shaver.png'
            },
            {
              text: '大闸蟹',
              img: '/image/classify/crab.png'
            }
          ]
        },
        {
          title: '热卖手机',
          desc: [
            {
              text: '小米',
              img: '/image/classify/miphone.png'
            },
            {
              text: '华为',
              img: '/image/classify/huawei.png'
            },
            {
              text: 'vivo',
              img: '/image/classify/phone.png'
            }
          ]
        },
        {
          title: '家电热搜',
          desc: [
            {
              text: '微波炉',
              img: '/image/classify/microwave.png'
            },
            {
              text: '电饭煲',
              img: '/image/classify/cooker.png'
            }
          ]
        }
      ],
      [
        {
          title: '手机品牌',
          desc: [
            {
              text: '小米',
              img: '/image/classify/miphone.png'
            },
            {
              text: '华为',
              img: '/image/classify/huawei.png'
            },
            {
              text: 'vivo',
              img: '/image/classify/phone.png'
            }
          ]
        },
        {
          title: '手机配件',
          desc: [
            {
              text: '充电宝',
              img: '/image/classify/power.png'
            },
            {
              text: '耳机',
              img: '/image/classify/headset.png'
            },
            {
              text: '吃鸡神器',
              img: '/image/classify/game.png'
            }
          ]
        }
      ]
    ]
  });
});

// @route  GET api/profiles/productionsList
// @desc   返回的商品列表的json数据
// @access public
router.get('/productionsList', (req, res) => {
  let prolist = [
    {
      id: '4a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/miphone.png',
      title:
        '黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机',
      price: '3388.00',
      comment: '6239',
      rate: '99%'
    },
    {
      id: '5a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/huawei.png',
      title:
        'HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待',
      price: '4499.00',
      comment: '27万',
      rate: '99%'
    },
    {
      cover: '/image/classify/phone.png',
      title:
        '荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待',
      price: '1499.00',
      comment: '3万',
      rate: '99%',
      id: '3a4c8b8e4d8c22a97a94b46f58c1f3b9'
    },
    {
      id: '4a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/miphone.png',
      title:
        '黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机',
      price: '3388.00',
      comment: '6239',
      rate: '99%'
    },
    {
      id: '5a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/huawei.png',
      title:
        'HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待',
      price: '4499.00',
      comment: '27万',
      rate: '99%'
    },
    {
      cover: '/image/classify/phone.png',
      title:
        '荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待',
      price: '1499.00',
      comment: '3万',
      rate: '99%',
      id: '3a4c8b8e4d8c22a97a94b46f58c1f3b9'
    },
    {
      id: '4a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/miphone.png',
      title:
        '黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机',
      price: '3388.00',
      comment: '6239',
      rate: '99%'
    },
    {
      id: '5a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/huawei.png',
      title:
        'HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待',
      price: '4499.00',
      comment: '27万',
      rate: '99%'
    },
    {
      cover: '/image/classify/phone.png',
      title:
        '荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待',
      price: '1499.00',
      comment: '3万',
      rate: '99%',
      id: '3a4c8b8e4d8c22a97a94b46f58c1f3b9'
    },
    {
      id: '4a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/miphone.png',
      title:
        '黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机',
      price: '3388.00',
      comment: '6239',
      rate: '99%'
    },
    {
      id: '5a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/huawei.png',
      title:
        'HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待',
      price: '4499.00',
      comment: '27万',
      rate: '99%'
    },
    {
      cover: '/image/classify/phone.png',
      title:
        '荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待',
      price: '1499.00',
      comment: '3万',
      rate: '99%',
      id: '3a4c8b8e4d8c22a97a94b46f58c1f3b9'
    },
    {
      id: '4a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/miphone.png',
      title:
        '黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机',
      price: '3388.00',
      comment: '6239',
      rate: '99%'
    },
    {
      id: '5a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/huawei.png',
      title:
        'HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待',
      price: '4499.00',
      comment: '27万',
      rate: '99%'
    },
    {
      cover: '/image/classify/phone.png',
      title:
        '荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待',
      price: '1499.00',
      comment: '3万',
      rate: '99%',
      id: '3a4c8b8e4d8c22a97a94b46f58c1f3b9'
    }
  ];

  let newProlist = [];

  for (let i = 0; i < 5; i++) {
    if (prolist[i] != null) {
      newProlist.push(prolist[i]);
    }
  }
  res.json(newProlist);
});

// @route  GET api/profiles/:page/:size
// @desc   上拉加载的接口
// @access private
// 10条 下拉刷新(请求)3条 上拉加载(请求)3条
router.get('/productionsList/:page/:size', (req, res) => {
  let prolist = [
    {
      id: '4a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/miphone.png',
      title:
        '黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机',
      price: '3388.00',
      comment: '6239',
      rate: '99%'
    },
    {
      id: '5a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/huawei.png',
      title:
        'HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待',
      price: '4499.00',
      comment: '27万',
      rate: '99%'
    },
    {
      cover: '/image/classify/phone.png',
      title:
        '荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待',
      price: '1499.00',
      comment: '3万',
      rate: '99%',
      id: '3a4c8b8e4d8c22a97a94b46f58c1f3b9'
    },
    {
      id: '4a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/miphone.png',
      title:
        '黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机',
      price: '3388.00',
      comment: '6239',
      rate: '99%'
    },
    {
      id: '5a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/huawei.png',
      title:
        'HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待',
      price: '4499.00',
      comment: '27万',
      rate: '99%'
    },
    {
      cover: '/image/classify/phone.png',
      title:
        '荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待',
      price: '1499.00',
      comment: '3万',
      rate: '99%',
      id: '3a4c8b8e4d8c22a97a94b46f58c1f3b9'
    },
    {
      id: '4a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/miphone.png',
      title:
        '黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机',
      price: '3388.00',
      comment: '6239',
      rate: '99%'
    },
    {
      id: '5a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/huawei.png',
      title:
        'HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待',
      price: '4499.00',
      comment: '27万',
      rate: '99%'
    },
    {
      cover: '/image/classify/phone.png',
      title:
        '荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待',
      price: '1499.00',
      comment: '3万',
      rate: '99%',
      id: '3a4c8b8e4d8c22a97a94b46f58c1f3b9'
    },
    {
      id: '4a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/miphone.png',
      title:
        '黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机',
      price: '3388.00',
      comment: '6239',
      rate: '99%'
    },
    {
      id: '5a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/huawei.png',
      title:
        'HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待',
      price: '4499.00',
      comment: '27万',
      rate: '99%'
    },
    {
      cover: '/image/classify/phone.png',
      title:
        '荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待',
      price: '1499.00',
      comment: '3万',
      rate: '99%',
      id: '3a4c8b8e4d8c22a97a94b46f58c1f3b9'
    },
    {
      id: '4a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/miphone.png',
      title:
        '黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机',
      price: '3388.00',
      comment: '6239',
      rate: '99%'
    },
    {
      id: '5a4c8b8e4d8c22a97a94b46f58c1f3b9',
      cover: '/image/classify/huawei.png',
      title:
        'HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待',
      price: '4499.00',
      comment: '27万',
      rate: '99%'
    },
    {
      cover: '/image/classify/phone.png',
      title:
        '荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待',
      price: '1499.00',
      comment: '3万',
      rate: '99%',
      id: '3a4c8b8e4d8c22a97a94b46f58c1f3b9'
    }
  ];
  let size = req.params.size;
  let page = req.params.page;
  let index = size * (page - 1);
  let newProlist = [];
  for (let i = index; i < size * page; i++) {
    if (prolist[i] != null) {
      newProlist.unshift(prolist[i]);
    }
  }
  res.json(newProlist);
});

module.exports = router;
