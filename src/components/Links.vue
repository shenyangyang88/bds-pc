<template>
  <div id="links">
    <div class="wrap">
      <div class="content">
        <div class="link-left">
          <div class="title">关于我们</div>
          <a href="###" v-for="(item, index) in aboutChannelList" :key="index">
            {{ item.channelName }}
          </a>
        </div>
        <div class="link-left">
          <div class="title">联系我们</div>
          <a
            href="###"
            v-for="(item, index) in contactChannelList"
            :key="index"
          >
            {{ item.channelName }}
          </a>
        </div>
        <div class="link-right">
          <div class="title">微信公众号</div>
          <img src="../assets/echart.png" width="120" height="120" />
        </div>
        <div class="link-right">
          <div class="title">服务支持</div>
          <a
            href="###"
            v-for="(item, index) in serviceChannelList"
            :key="index"
          >
            {{ item.channelName }}
          </a>
        </div>
      </div>
      <div class="schoollogo">
        <img src="../assets/footer_logo.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState } from 'vuex';
import { ChannelAPIData } from '@/types/api';

@Options({
  computed: mapState(['aboutChannelList', 'contactChannelList']),
})
export default class Links extends Vue {
  aboutChannelList!: Array<ChannelAPIData>;

  contactChannelList!: Array<ChannelAPIData>;

  serviceChannelList: Array<ChannelAPIData> = [
    {
      channelName: '读者服务',
      url: '',
    },
    {
      channelName: '书目下载',
      url: '',
    },
    {
      channelName: '在线定制书目',
      url: '',
    },
    {
      channelName: 'marc数据下载',
      url: '',
    },
    {
      channelName: '经销商列表',
      url: '',
    },
    {
      channelName: '招聘招标',
      url: '',
    },
  ];
}
</script>

<style lang="scss">
#links {
  background-color: #e8e8e8;

  & > .wrap {
    position: relative;

    width: 1132px;

    padding: 35px 50px 15px;
    margin: 0 auto;

    overflow: hidden;

    box-sizing: border-box;

    & > .schoollogo {
      position: absolute;
      left: 50%;
      top: 35px;

      width: 104px;
      height: 104px;
      margin-left: -52px;
    }

    & > .content {
      height: 194px;
      overflow: hidden;

      & > .link-left {
        float: left;

        margin-right: 100px;
      }

      & > .link-right {
        float: right;

        margin-left: 100px;
      }

      & .title {
        margin: 0 0 15px;

        font-size: 14px;
        color: #222222;
        line-height: 1;
      }

      & a {
        display: block;

        font-size: 12px;
        color: #7f7f7f;
        line-height: 2;
        text-decoration: none;
      }
    }
  }
}
</style>
