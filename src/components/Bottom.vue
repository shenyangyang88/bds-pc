<template>
  <div id="bottom">
    <div class="wrap">
      <span class="copyright"
        >版权所有 © 北京大学出版社 北京大学音像出版社</span
      >
      <div class="record">
        <a href="https://beian.miit.gov.cn" target="_blank">
          京ICP备09072562号-1
        </a>
        <span
          >京公网安备 11010802024978号
          出版物经营许可证新出发京批字第版0160</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#bottom {
  background-color: #606060;

  & > .wrap {
    width: 1132px;
    height: 40px;

    margin: 0 auto;

    overflow: hidden;

    & > .copyright {
      float: left;

      font-size: 14px;
      color: #ffffff;
      line-height: 40px;
    }

    & > .record {
      float: right;

      & > a {
        font-size: 14px;
        color: #ffffff;
        line-height: 40px;

        text-decoration: none;
      }

      & > span {
        font-size: 14px;
        color: #ffffff;
        line-height: 40px;
      }
    }
  }
}
</style>
