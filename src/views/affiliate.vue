<template>
  <div class="HomePage">
    <Header></Header>
    <div class="container text-center">
      <div class="mt-3">
        <h6 class="border border-0 rounded-3 p-2  bg-hs1" style="display: inline-block;"><span class="text-z-fs fw-bold">REFERRAL SYSTEM</span></h6>
        <h2 class="text-lh pt-2">Become Our Affiliate Partner and Boost Your Earnings Effortlessly!</h2>
        <h6 class="text-ls pt-2" style="line-height: 1.8;">Join our affiliate program and unlock a simple and effective way to grow your income. By sharing your unique referral link with friends, family, and online networks, you can earn commissions through a multi-level referral system—even without investing yourself.</h6>
      </div>
      <div class="mt-3 text-start ">
        <div class="border border-0 rounded-3 p-2 bg-hs1 p-4 single-settings-box top-flashlight light-xl leftside mt-4">
          <h5 class="text-ls">How It Works:</h5>
          <div>
            <jr_normal_card
              :listData="jrNormalCardData"
              colName="el-col-xs-24 el-col-sm-24 el-col-md-24 el-col-lg-8"
              ref="jrNormalCard"
            ></jr_normal_card>
          </div>
          <!-- <h6 class="text-ls">Share Your Link: Send your unique referral link to your network.<br>
            Earn Commissions: Receive a 5% commission for every investment made by your direct referrals.<br>
            Multi-Level Rewards: Additionally, earn 1% commissions from the investments of referrals brought in by your network.<br>
            Three-Level Reward System Example:</h6> -->
          <div class="row border-top border-0 border-hhs mt-3 pt-3">
            <div class="col-12 d-flex">
              <img :src="'./static/images/img/af1.png'" alt="" width="48px" height="48px" style="margin-right: 10px;">
              <div>
                <h6 class="text-ls fw-bold">Level 1 (Direct Referral Rewards):</h6>
                <h6 class="text-bhs">{{ $t('i18n.Affiliate.text7') }}</h6>
              </div>
            </div>
          </div>
          <div class="row  border-0  mt-3 pt-3">
            <div class="col-12 d-flex">
              <img :src="'./static/images/img/af2.png'" alt="" width="48px" height="48px" style="margin-right: 10px;">
              <div>
                <h6 class="text-ls fw-bold">Level 2 (Indirect Referral Rewards):</h6>
                <h6 class="text-bhs">{{$t('i18n.Affiliate.text8')}}</h6>
              </div>
            </div>
          </div>
          <!-- <div class="row  border-0  mt-3 pt-3">
            <div class="col-12 d-flex">
              <img :src="'./static/images/img/af3.png'" alt="" width="48px" height="48px" style="margin-right: 10px;">
              <div>
                <h6 class="text-ls fw-bold">Level 3 (Indirect Referral Rewards):</h6>
                <h6 class="text-bhs">When user B refers C, you earn 1% on all investments made by C.</h6>
              </div>
            </div>
          </div> -->
        </div>
        <div class="mt-3 text-start ">
          <div class="border border-0 rounded-3 p-2 bg-hs1 p-4 single-settings-box top-flashlight light-xl leftside mt-4">
            <h5 class="text-ls">For Example:</h5>
            <div class="row border-top border-0 border-hhs mt-3 pt-3">
              <h6 class="text-ls fw-bold">If your direct referral A invests $10000, You'll get 5%, $500.</h6>
              <h6 class="text-ls fw-bold">If A refers B, and B invests $10000, You'll get 1%, $100.</h6>
              <h6 class="text-ls fw-bold">If B refers C, and C invests $10000, You'll get 1%, $100.</h6>
              <h6 class="text-ls fw-bold">Start Earning Now!</h6>
              <h6 class="text-ls fw-bold">Share your referral link, invite your friends to register and invest, and watch your income grow. Join our affiliate program today and enjoy the benefits of a multi-level referral system with ongoing rewards!</h6>

            </div>
          </div>
          <div class="border border-0 rounded-3 p-2 bg-hs1 p-4 single-settings-box top-flashlight light-xl leftside mt-4">
            <h5 class="text-ls">Our affiliate program includes many benefits</h5>
            <div class="row border-top border-0 border-hhs mt-3 pt-3">
              <div class="row">
                <div class="col-lg-3 py-5 " style="padding-left: 0px; padding-right: 0px;">
                  <h6 class="text-center">01</h6>
                  <div class="progress-line d-none d-lg-block" style="width: 50%; left: 50%;">
                    <div class="line-inner" style="background-color: #8B2AB8;"></div>
                  </div>
                  <div class="progress-dot d-none d-lg-block">
                    <div class="dot-level">
                      <div class="dot-inner" style="background-color: #8B2AB8;  "></div>
                    </div>
                  </div>
                  <div class="col-6 mx-auto pt-2 text-center">
                    <span class="text-ls fw-bold" style="font-size: 13px;">Sign up and get a referral link.</span>
                  </div>
                </div>
                <div class="col-lg-3 py-5" style="padding-left: 0px; padding-right: 0px;">
                  <h6 class="text-center">02</h6>
                  <div class="progress-line d-none d-lg-block" style="width: 100%; ">
                    <div class="line-inner" style="background-color: #8B2AB8;"></div>
                  </div>
                  <div class="progress-dot d-none d-lg-block">
                    <div class="dot-level">
                      <div class="dot-inner" style="background-color: #8B2AB8;"></div>
                    </div>
                  </div>
                  <div class="col-6 mx-auto pt-2 text-center">
                    <span class="text-ls fw-bold" style="font-size: 13px;">Invite your friends use referral link.</span>
                  </div>
                </div>
                <div class="col-lg-3 py-5" style="padding-left: 0px; padding-right: 0px;">
                  <h6 class="text-center">03</h6>
                  <div class="progress-line d-none d-lg-block" style="width: 100%; ">
                    <div class="line-inner" style="background-color: #8B2AB8;"></div>
                  </div>
                  <div class="progress-dot d-none d-lg-block">
                    <div class="dot-level">
                      <div class="dot-inner" style="background-color: #8B2AB8;"></div>
                    </div>
                  </div>
                  <div class="col-6 mx-auto pt-2 text-center">
                    <span class="text-ls fw-bold" style="font-size: 13px;">Referrals buy packages.</span>
                  </div>
                </div>
                <div class="col-lg-3 py-5 " style="padding-left: 0px; padding-right: 0px;">
                  <h6 class="text-center">04</h6>
                  <div class="progress-line d-none d-lg-block" style="width: 50%;">
                    <div class="line-inner" style="background-color: #8B2AB8;"></div>
                  </div>
                  <div class="progress-dot d-none d-lg-block">
                    <div class="dot-level">
                      <div class="dot-inner" style="background-color: #8B2AB8;"></div>
                    </div>
                  </div>
                  <div class="col-6 mx-auto pt-2 text-center">
                    <span class="text-ls fw-bold" style="font-size: 13px;">Get Your Reward.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center my-5">
          <a href="javascript:;" @click="$router.push('/affiliates')"  type="button" class="btn staking-btn border border-0  py-3 text-light fw-bold">Refer Friends</a>
        </div>
      </div>
      <div class="d-none d-lg-block">
        <div class="rainbow-gradient-circle"></div>
        <div class="rainbow-gradient-circle theme-pink"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import jr_normal_card from '../components/common/jr_normal_card.vue';
  export default {
    name: 'affiliate',
    components: {
      jr_normal_card
    },
    data() {
      return {
        jrNormalCardData: [
          { imageUrl: require('../../static/images/img/4.png'), title: this.$t('i18n.Affiliate.text1'), content: this.$t('i18n.Affiliate.text2') },
          { imageUrl: require('../../static/images/img/5.png'), title: this.$t('i18n.Affiliate.text3'), content: this.$t('i18n.Affiliate.text4') },
          { imageUrl: require('../../static/images/img/6.png'), title: this.$t('i18n.Affiliate.text5'), content: this.$t('i18n.Affiliate.text6') },
        ],
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {

    },
    methods: {
      jump() {
        if (this.UserInfo) {
          this.$router.push('/dashboard');
        } else {
          this.$router.push('/register');
        }
      }
    }
  }
</script>
<style scoped>


</style>
