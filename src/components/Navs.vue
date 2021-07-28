<template>
  <div id="navs">
    <div class="wrap">
      <div class="logo">
        <a href="###">
          <img src="../assets/logo.png" />
        </a>
      </div>
      <div class="menus">
        <div class="menu" v-for="item in menuList" :key="item.id">
          <div class="content">
            <div class="title">
              {{ item.name }}
            </div>
            <div class="desc">
              {{ item.enName }}
            </div>
          </div>
          <div class="submenu" v-if="item.children">
            <div
              class="submenuitem"
              v-for="item in item.children"
              :key="item.id"
            >
              <a href="###">
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>
        <div class="menu">
          <div class="content">
            <div class="title">关于我们</div>
            <div class="desc">About</div>
          </div>
          <div class="submenu">
            <div
              class="submenuitem"
              v-for="(item, index) in aboutChannelList"
              :key="index"
            >
              <a href="###">
                {{ item.channelName }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState } from 'vuex';
import type { Menu } from '@/types';
import { ChannelAPIData } from '@/types/api';

@Options({
  computed: mapState(['aboutChannelList']),
})
export default class Navs extends Vue {
  aboutChannelList!: Array<ChannelAPIData>;

  menuList: Array<Menu> = [
    {
      id: 1,
      name: '首页',
      enName: 'Home',
      url: '',
    },
    {
      id: 2,
      name: '图书',
      enName: 'Books',
      url: '',
    },
    {
      id: 3,
      name: '新闻',
      enName: 'News',
      children: [
        {
          id: 31,
          name: '新闻动态',
          url: '',
        },
        {
          id: 32,
          name: '党建之窗',
          url: '',
        },
        {
          id: 33,
          name: '职工之家',
          url: '',
        },
      ],
    },
    {
      id: 4,
      name: '服务',
      enName: 'Services',
      children: [
        {
          id: 41,
          name: '样书课件',
          url: '',
        },
        {
          id: 42,
          name: '书目下载',
          url: '',
        },
        {
          id: 43,
          name: '在线定制书目',
          url: '',
        },
        {
          id: 44,
          name: 'Marc数据下载',
          url: '',
        },
        {
          id: 45,
          name: '经销商列表',
          url: '',
        },
        {
          id: 46,
          name: '授权书列表',
          url: '',
        },
      ],
    },
  ];
}
</script>

<style lang="scss">
#navs {
  border-bottom: 4px #94070a solid;

  & > .wrap {
    width: 1132px;
    height: 90px;

    margin: 0 auto;

    & > .logo {
      float: left;

      width: 240px;
      height: 47px;

      margin: 21px 0;
    }

    & > .menus {
      float: right;

      & > .menu:hover > .submenu {
        display: block;
      }

      & > .menu {
        float: left;

        position: relative;

        height: 89px;

        margin-left: 50px;

        cursor: pointer;

        & > .submenu {
          position: absolute;
          left: 50%;
          top: 90px;
          z-index: 9;

          display: none;
          width: 120px;
          margin-left: -60px;
          padding: 10px 0;

          background-color: #94070a;

          & > .submenuitem:hover {
            background-color: #660507;
          }

          & > .submenuitem {
            height: 36px;

            text-align: center;

            & > a {
              font-size: 16px;
              line-height: 36px;
              color: #ffffff;
              text-decoration: none;
            }
          }
        }

        & > .content {
          height: 55px;

          margin: 17px 0;

          & > .title {
            font-size: 20px;
            text-align: center;
            line-height: 35px;
            color: #222222;
          }

          & > .desc {
            font-size: 14px;
            text-align: center;
            line-height: 20px;
            color: #a9a9a9;
          }
        }
      }
    }
  }
}
</style>
