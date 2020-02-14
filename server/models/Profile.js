const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  swipers: [
    {
      image: {
        type: String
      }
    }
  ],
  logos: [
    {
      image: {
        type: String
      },
      title: {
        type: String
      }
    }
  ],
  quicks: [
    {
      image: {
        type: String
      },
      price: {
        type: String
      }
    }
  ],
  navLeftItems: {
    type: [String]
  },
  navRightItems: [
    {
      title: {
        type: String
      },
      desc: [
        {
          text: {
            type: String
          },
          img: {
            type: String
          }
        }
      ]
    }
  ],
  navRightItems: [
    {
      cover: {
        type: String
      },
      title: {
        type: String
      },
      price: {
        type: String
      },
      comment: {
        type: String
      },
      rate: {
        type: String
      }
    }
  ],
  partData: {
    loopImgUrl: {
      type: [String]
    },
    title: {
      type: String
    },
    price: {
      type: String
    },
    baitiao: [
      {
        dec: {
          type: String
        },
        tip: {
          type: String
        }
      }
    ]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
