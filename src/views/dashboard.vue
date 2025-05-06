<template>
  <div class="HomePage" id="app">
    <UserHeader></UserHeader>
    <div class="container app-wrapper" style="width: calc(100% - 25rem);">
      <div class="page-header">
        <div class="page-title">{{$t('head[4]')}}</div>
        <div class="el-dropdown">
          <div @click="showUserDown = !showUserDown" class="right-icon el-dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-8265" role="button" tabindex="0" x-placement="bottom-end"><i class="el-icon-user"></i></div>
          <ul class="el-dropdown-menu el-popper" id="dropdown-menu-8265" v-show="showUserDown">
            <li tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$router.push('/walletAddress')"><i class="el-icon-wallet"></i> {{$t('walletAddress[0]')}} </li>
            <li tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$router.push('/loginPassword')"><i class="el-icon-lock"></i> {{$t('walletAddress[1]')}} </li>
            <li tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$router.push('/payPassword')"><i class="el-icon-lock"></i> {{$t('walletAddress[2]')}} </li>
            <li  tabindex="-1" class="el-dropdown-menu__item" style="font-weight: bold;" @click="$Model.Logout()"><i class="el-icon-switch-button"></i> {{$t('head[5]')}} </li>
            <div x-arrow="" class="popper__arrow" style="left: 142.5px;"></div>
          </ul>
        </div>
      </div>
<!--      <div class="tradingview-widget-container" style="width: 100%;">-->
<!--        <iframe scrolling="no" allowtransparency="true" frameborder="0" src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ADOGEUSD%22%2C%22title%22%3A%22Dogecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ALTCUSD%22%2C%22title%22%3A%22Litecoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABCHUSD%22%2C%22title%22%3A%22Bitcoin%20Cash%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AADAUSD%22%2C%22title%22%3A%22Cardano%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AXRPUSD%22%2C%22title%22%3A%22XRP%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A78%2C%22utm_source%22%3A%22globalecrypto.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22sunminer.com%2F%22%7D" title="ticker tape TradingView widget" lang="en" style="user-select: none; box-sizing: border-box; display: block; height: 74px; width: 100%;"></iframe>-->
<!--      </div>-->
<!--      <div class="quotes">-->
<!--        <div class="coin-list">-->
<!--          <div class="coin-item" v-for="(item,index) in coinlist" :key="index" v-if="item.price !=''">-->
<!--            <img  :src="`./static/images/${item.name}.png`"-->
<!--                 class="icon">-->
<!--            <div  class="name">{{item.name}}</div>-->
<!--            <div  class="price">{{item.price}}</div>-->
<!--            <div  class="change" style="color: rgb(40, 199, 111);" v-if="item.change>=0"> +{{item.change}} (+{{item.rate}}%)</div>-->
<!--            <div  class="change" style="color: rgb(234, 84, 85);" v-else> -{{item.change}} (-{{item.rate}}%)</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="container">
        <div class="bal mobile">
          <img :src="'./static/image/bg-div.png'">
          <div class="bal-c">
            <div class="bal-line"></div>
            <div class="flex-bal">
              <div class="bal-item">
                <h4 class="notranslate">{{InitData.currency}} {{UserInfo.balance}}</h4>
                <p>{{$t('dashboard[1]')}}</p>
              </div>
              <div class="bal-item two-sect">
                <h4 class="notranslate">{{InitData.currency}} {{statisticalData.total_profit}}</h4>
                <p>{{$t('product[4]')}}</p>
              </div>
              <div class="bal-item">
                <h4 class="notranslate">{{InitData.currency}} {{statisticalData.total_recharge}}</h4>
                <p>{{$t('dashboard[6]')}}</p>
              </div>
              <div class="bal-item two-sect">
                <h4 class="notranslate">{{InitData.currency}} {{statisticalData.total_withdraw}}</h4>
                <p>{{$t('dashboard[7]')}}</p>
              </div>
            </div>
          </div>
          <div class="bal-bg"></div>
        </div>
        <div class="mobile">
          <div class="flex-3">
            <div class="item-m" @click="$router.push('/deposit')">
              <div>
                <div class="bg"><img :src="'./static/image/credit_card.svg'"></div>
                <div class="div">{{$t('head[7]')}}</div>
              </div>
            </div>
            <div class="item-m" @click="$router.push('/withdraw')">
              <div>
                <div class="bg" style="background-color: #00bfff"><img :src="'./static/image/arrow_upward.svg'"></div>
                <div class="div">{{$t('head[8]')}}</div>
              </div>
            </div>
           <div class="item-m"  @click="$router.push('/MyPackages')">
            <div>
              <div class="bg" style="background-color: #00bfff"><img :src="'./static/image/receipt_long.svg'"></div>
              <div class="div">{{$t('head[11]')}}</div>
            </div>
            </div>
            <div class="item-m" @click="$router.push('/transactions')">
             <div>
               <div class="bg" style="background-color: #00bfff"><img :src="'./static/image/inventory_2.svg'"></div>
               <div class="div">{{$t('head[12]')}}</div>
             </div>
            </div>
          </div>
        </div>
        <div class="el-row" style="margin-left: -12px; margin-right: -12px;">
          <div class="pc">
          <div class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-6" >
            <div class="cal-item" style="background: #00bfff ;color: #fff;">
<!--              <div class="item-top"><img-->
<!--                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA8lJREFUSEullWtoHFUUx//n3slssslmd/MyzcPY0GY3wRZtFJEqFoqITVKMqQgtIoJSFBSrFgX7TQSpSK1SoT76QSNC8NEkm1RE8EtbFBuwj5jXBw3GNInZ3WS32ezuzNwjd9qobVrb3R7mywz3/H93zpOQg0WPhh8SkvcakrcQQTIApWjeUuLtio6R/VeTouvp8w9bjNjS+U4Jek0KtUmLEshWoDGAKyVxFTNgO/RxsGPsmSv1rgk4/enG4vqA9aQQ6mUpuREM/SSYxSfRNB1s7BqZ7OmB3CxanvUX2+8RMcWXPO11XecG/gtZBTh1uNVbW5neUVJo7QfhFmaCYqRsR7w/G6V3ySha5VPmS+0t9jh7FIsf/dtG770qINrX/KJh8NMEXk/EpmLCihIDFhgMgnmNX1YAhBZWwFnliMNlHSOH9Lt7Ph4J9xZItV3HUqsAsAG+bn4ujzfp9BiC9E0A5VDfgVNjnTTX37zPa9hvMCidseUry8vm0ViaF5KWz73RjZqVjnOd3wj4ffYjXo/9FpiL05axjxIDTXEhEFhMF+ys7Rz+4kYF/+/cdG/LrlLT6nZYxCkx2MQAxXwPj1UQuX+XszGDhj5sNVYcI+eHnJfuDs2DEKTEYIhZYdrfPlabi7Iu0a2Fzc9LwU+QUI1gYf7rz0yEIp14FwCF6dIcAMM9LWad1/leSL7/Un+supsuFl0leQEWIqFDUvBzICxmMvL1FMtvkwmPVWAIN0xpAA2BxAkiVOcMmPo6XO4v4hkCG7GUfMDrgWkK9QGDKGOLF6q2/3pMQxKR0J8QqMkZ8Fdvc1thgROxlTgXSInWJZ897TCVu03DvOCb8lXR7iErb0CsP9xhSNWnmH6emcHWmjWIMWBc6kp7/I8S/127h1J5A4Y/27SuoeLCBED2TNJoLjbR5fNk39RDwWLxanDb6Ds3FSLtvDAQ/k6SepCZRmeTnl1kYqoEQPWjZ+ZWyikx0DQFotqcc6AFzh65vX7tmuxJZtTpWnQUzTGQWZltOhsSXAMimXejne7eWHdrIHvAINVGwm2qy0xPY3eaup3MPOtvG6/OpZNXzka715UmzJJGG1Rk2xe/KhKq3n9BL55ySg42pUHwxBLe+xoe/+VEPpArfSa/umNzmTd1nBkZiveHjxiGekop+i3L9Fhl++jQzUAmv9nQGvRkvyTi2xxHfERnPt8QXBvM/gTi9e7CYTFOxNF8IIqpXArV5M4nponfJ8173ExM9NxZWe5dPmhI3iHABRr0z77MhXRxI2aZ0TOzyHtCO8fn/wag5M6i3vuZowAAAABJRU5ErkJggg=="-->
<!--                class="icon">-->
<!--                <div class="view-btn" @click="$router.push('/transactions')">{{$t('dashboard[0]')}}</div>-->
<!--              </div>-->
              <div class="label">{{InitData.currency}} {{UserInfo.balance}}</div>
              <div class="num">{{$t('dashboard[1]')}}</div>
            </div>
          </div>
          <div class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-6" >
            <div class="cal-item" style="background: #00bfff ;color: #fff;">
<!--              <div class="item-top"><img src="data:image/png;base64,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" class="icon">-->
<!--                <div class="view-btn" @click="$router.push('/earnings')">{{$t('dashboard[0]')}}</div>-->
<!--              </div>-->
              <div class="label">{{InitData.currency}} {{statisticalData.total_profit}}</div>
              <div class="num">{{$t('product[4]')}}</div>
            </div>
          </div>
          <div class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-6" >
            <div class="cal-item" style="background: #00bfff ;color: #fff;">
<!--              <div class="item-top"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAndJREFUSEvtld9LVEEUx8+Zmbt794e6xhaZL8GyPfgDI4tSCwqKFHqJICmsIA1fwiQIoid76bGtfyCQIhVMqWjRQAqixPIHYmkZFbWrKGX+2l/37tyZWIPajXa5W/YSztM8fM/5zJzDOV+EpPOoZS8rK59ptTBxXEqM6AY+iejswXTI3rvz1PPJZG02d0wWv+8oqyvMD99c1pRuBGkoVOy3UOESEkHnZEITpGd2WfWHZtWnlef7o2ZBKZDgneJmt1PzjQVc23Y0DI48u1phcxeGqvJVo4YxUW2hRhEjEmKcLhkGPg5p7G5gQemrahj5mAmYAgl0lTStd8Suv5zK27X99NDAr4Fj7SWedVasUVn8kELlbiszHFyg1DkZ1TjtmVtW/a/exQaOtozrybErkMHb5W6F48Ycm35sU27k0uvZ/CMg4E3G1xGMMIyX5tmMM06bXs2IYAQlxAWZ0znpC2vWex++0t59jUNfcLqr6KLLzi8jCksiqZQIiBIAUj6ZlicEiIQUAcgPEQIwIiDOSfRzWL2A0V6vjOp0OBRnbRSIucwmOi6EAIeV16mKKELtoUd+mnfWe2tHb5iIzUoS6Cw5tyE3dm0FEpx31nv+ASTYXdzsdmi+NYip3mQsV2LSK5b6NWwBYSpbGlFayNuOsoMFeZF2g5OZ4SnnnsQw/SkoLSTk39IqAE5aqIDAguOEt3b01qpDJtq2Vha4Iu3AydSLaUf1gcahxVWHfF8tgIiQ2C1/ddbmJKvy/UflSth5jubDcI9X6pyOx3R6nxD503iyKszvxVYmDitUbMZAZ+lZl127gihzzLqhWb6UsLQYU5pWzQkzgb8BLJ6EgdxfMHEAAAAASUVORK5CYII=" class="icon">-->
<!--                <div class="view-btn" @click="$router.push('/deposit')">{{$t('dashboard[0]')}}</div>-->
<!--              </div>-->
              <div class="label">{{InitData.currency}} {{statisticalData.total_recharge}}</div>
              <div class="num">{{$t('dashboard[6]')}}</div>
            </div>
          </div>
          <div class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-6" >
            <div class="cal-item" style="background: #00bfff ;color: #fff;">
<!--              <div class="item-top"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA8FJREFUSEvtlX9MW1UUx8+97/W17/U3q6+wsbCasCFQcHQsIZLAYpZsiR0Li8xfw0BmZjQaNEvU7R9ITPxjJi7+sUhEERLHwmA/nDr8R4mJq9mW0YF0hgLaCV3paC0t9Md7ffearivqHIjZP/6x889793zPuZ97T+65F8F/MP+AfW+SIPJo0+gXa01Daw30nyt/18ynjgKiMB8TOjbuG21fS+6/Aq73VoiFZqlP4NKOYEw4QEHhrDqpOyaxP47fsj6349Dw/GqgVQG/DlZUWYTkOQJoaSbM76EqKRb6nUcF5qRZ1KXPMoiqfWFhb9nzbvdKkBUBNwfsr4r6xPuLEjs4dhO/vMnKOq36RA8AUP+C0DwR0Fzcbot26TWS0x/Rtdmevt55P8g/AN8cq9BWFivHTUKqJRxTH16/b/x4JjHy1WZXLMkNMZiyGlapzXP+vCPj9522v2U1xt+LLGk+/v4XQ1vTm67EX0F/A4x0P77JJiYusJiYQlHumaL94z/kgn0D9rdFfeoopRSF4uojGxt/+jCnefu31q03LPZJCg565wzO7a1Xfstpy4Cp05VPibpEb5qgEU9o3bNPNF8K3rtlb7+9JuMrbhpz3atd7XQUFBXE+3ku/djsgrZ5y37315kYdKHTIVQ9kuowC6nDCkEgKXiGwZTLiJQgQJgChew6ENA739w48wfkroYpKATJKoZsULOEBmL8saExrgNd7q7O32yJ1sYklVGvkbvisqqRKIqUlFWlFkPqnYSMDyhpBhhWAQbBKxhBSibwSdYHoGHSp2SCj0gyncaIqgU1HYzGuVYtLy36gsLwcok8pyrKN+hTY1NzgljVOnL78mfVT27Jj/QZd3nFXDnmzpf1AKJJ6x7PoYyvvb2efX1bIMTS9C6Dc9I1fbLcus4kBzyz2tKal67dyO76ruUAwSVBLG5aBQA0aW3IAr5rr2cr7wOYnNWWOh4CHpZo5WP6vz1FoycdJUXGxRvTQd68tcUdufRpTV1pwXy/abfXmuuV4PmyLgw0YWnwvJbzhb8siTAM2WncPXHF97ndbDJL4Ul/XrHjoGtyudFGe7Y12MToRwggXyZoBgFSMBANxtSiEDyTvXsoZMaIIqJQCGd6FAFFLCaFssIEAdEUBWBUmBZSgMBEQNfiaLk2dKeT3b3VjTZx4cTtiKZtLe/sajEMRjRPnzgxFTS8UPXi1Yto9kz5Tl6lvMEwSi2huBtI9sZ8EMMMHFQU9G00wX2Abp0pqTNp0/VSGgPGDzLtn7mEAHAsgfklfvgPgPeWNnMHQ3kAAAAASUVORK5CYII=" class="icon">-->
<!--                <div class="view-btn" @click="$router.push('/withdraw')">{{$t('dashboard[0]')}}</div>-->
<!--              </div>-->
              <div class="label">{{InitData.currency}} {{statisticalData.total_withdraw}}</div>
              <div class="num">{{$t('dashboard[7]')}}</div>
            </div>
          </div>
          </div>
          <div class="el-row">
            <div class="el-col-md-6" >
              <div class="cal-item" >
                <!--              <div class="item-top"><img src="data:image/png;base64,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" class="icon">-->
                <!--                <div class="view-btn" @click="$router.push('/transactions?type=commission')">{{$t('dashboard[0]')}}</div>-->
                <!--              </div>-->
                <div class="label">{{InitData.currency}} {{statisticalData.total_revenue}}</div>
                <div class="num">{{$t('dashboard[2]')}}</div>
              </div>
            </div>
            <div class=" el-col-md-6" >
              <div class="cal-item">
                <!--              <div class="item-top"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAc5JREFUSEvtlj1LI1EUht9zb/zC0SRgo1gou5uJIEGwExFtBDXRZQV/whZrrc1u61Z2u5U/ISIqZkastLGwEFERzVhYqVhkQz6qJHOPiM4SxJ1cIZBmp7kM5+V97jnnflHeNpMAYszI4OUTAkNuGYOh2fRNNhXdIHDQi3kjE0gSMp3T6YX7zWif0arOlKJzL06EMDMcytvmWbEUWOr5fLHnBf+kzO/NkkeNKWfqtfFb/zk7YrHCYSju/PTiD5uDk+2t5VUq2JGTYln+6J67tP7OLglZNMxLBqcJKPpBGDAAfOhoc2I0gYqnvd8emOlodlfeBDyJMvbHXskyrhQFfLMQKCulUl0J57ZaVxOgUxo/zX9AzQr6lqiwG/lG4JGaLlUC18VRMH79S2sVZXei4wqiH64mQgIC6iacuDrQAmja+soau4o4CYm2npZ3ZWLclbR3ct4218H4og0gQDFvhWacea0eMIOO14b9j4hX9OGvxxUisBZAe+Y+wsY2OWt9GgsIDLhKaiUjhYuKK5xwPL2vVaKcFVlkFjEt9xcRsToPJpzfWoD3GP9L29ge1DuD00Kpabn60q8H4PnSL61SzjK3iBCtfrbUA/D0bAFw/QgXs2YAYsqfvQAAAABJRU5ErkJggg==" class="icon">-->
                <!--                <div class="view-btn" @click="$router.push('/MyPackages?status=1')">{{$t('dashboard[0]')}}</div>-->
                <!--              </div>-->
                <div class="label">{{statisticalData.activity_task}}</div>
                <div class="num">{{$t('dashboard[3]')}}</div>
              </div>
            </div>
<!--          </div>-->
<!--          <div class="el-row">-->
            <div class="el-col-md-6" >
              <div class="cal-item">
                <!--              <div class="item-top"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAqxJREFUSEvVll9IU1Ecx3+/c3bvNl3mrMRmPUTN6cqkEoIKoZco2iKnvQSRBKFWGERU0EMvUT0UiBCJFUXRS6RmNnsoBMmHXiqiObv1oIEE+W+by93pvfecuNpsVhLejVH37d7L+X3O7/v7iwAAYX/xZUrYMQJg1t9TfRjAtKLS5jxv/5mELRzuKKnIFtWeuEYaFc0UBOSYEogjFwgvtgrKqVDMvKvQF3iu28Oh1tIae3b8Tv/nnNzy2teRlCA/Dn9qWmd2FGEsKgv1BZXBlllQ28bD9iz5rvTFlr/5yNuRdIBeNW3NKXWOhyKyWOfw9d38N0Ahf1E7AXSBHjQEDsDkBb1lOJjjkQ4k/i/Ko+HH7gZCeRkCsGQAByDIOZn7hoCAJLDME7xqCJRKrBblUcZAEb/rPkG+Rgfyv1A1hgN2j3TIkHQjT9ynEXgZQWCAnAKHeYWsB44gED1XGIPAcq900RAoY9JlDBR+6rpOKXdBUuubl+dJN9EYSHke6bgh6cY6iy8Q5JuA/54LhPyMlx44VYMPefukc4ZAGZPufwKFI7JYm5buPfDQXWDPZvc4R2tCAYIMJ6dp81KL0hKRxZNpAUX9zgpA7JlS6AskfGZo6pUtq/T2EovSPhEXGhzpGHzjXa7tAvDebzHThpXVwb6EV+Eu1xWRsrNjk+aq1b5AW8qDbxYEvRMy2VJY1f9GNzjaWXIjS1DrJuLC+YL9wUtzy0kqo3z8WdEOgePL6BSWhxTy3pHFHoiUVcdUrF/hlZqTMxeH2ktr7FZjy8lwZ4nTatK6vkZte/Jt0VuUwDZFIQdzvdKjX8sDB1vX78y3TXfLU6RR4Ytbtygw0FSTajGrJ0yErQ3LQuUqX1/3n2pwpvWPdLivWQT1KEEQjRSqxnCUUL7Xtvvju4XOfweGPgQ5CS1R2AAAAABJRU5ErkJggg==" class="icon">-->
                <!--                <div class="view-btn" @click="$router.push('/MyPackages?status=3')">{{$t('dashboard[0]')}}</div>-->
                <!--              </div>-->
                <div class="label">{{statisticalData.expired_task }}</div>
                <div class="num">{{$t('dashboard[4]')}}</div>
              </div>
            </div>
            <div class="el-col-md-6" >
              <div class="cal-item">
                <!--              <div class="item-top"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAApNJREFUSEvtlk9sEkEUxmdmdwsNYFtAqZqwNa1AtUqFlmoPphcTURM1Rmw0sYmJetaT8cTZi145mFiTGsOh8WLx1vonqS3SCAgVFKrWWhttK6VbpCwzZknAaoCdyMVD57Sb75v3m/ft5GUhqLLC9zpatQ3QifOQqeaTNAQxXsopRvb1BxKVvLAoBO/vV/HajEF6fz+3ZdZ+JSCmRiwzClashxCsysEIAeqsyP5sOP62ZWy0jzkgzBmlPdE1/XyvazwjPZdgPx6bkxzCu1iGgBdxvb1528obXiOmPi7XD+w9H/TKwSIPrC5jU2bQN8E2dOyu43ndWhwAAnIiSjSeiLX9ARN8JjL9tfECYFAinVQGn4Kx9esO82dCAMQEpkunKkMlhRiJRpJu+2M7Hdo2rkmt7+Qgbm1vXh5SOd8VtpdqCE9MJLqg6+keGJ8s1gs/tLXrlOunMf7tq9ghhDCfw8O8KxItevyDhxx7DIsTqqNxeZhcdHL6JgyMuvtYS+f3RwhiJBeXpGdF9rXxTOjmRi91jF7vWeaIOnyXQ7jaRSzVFrJMxHBy+tY/wWi6kfNQdyZXiEanhnk8du7U9oyfhaTiXCQAwOQ3tdNxyT9bDk4NI26AUl2WGwyDuWpdxNKaO12uQKomGE1Mch7qzqRC0lyEVe4ikXKEQBqNZRc17JXHzvE7hC8sJGylYhAgEJvX2HouT87UFKPbDdC1bss5AHBFmAT4sKgctl4MCTXB5L4HjU4dI00xOc8mTC4hKv3/iHHVZyJTn7T2w1dfTlEdm8L0zHPQZjMuBdTOv/5BVnzmXB2TX8AEZinqUFkQJIqcyGzVHIsppA2lYRQbsjqUStKLSOXxQ0XYaGIwyGfR85b+UCGtX+9ntys+0de3AAAAAElFTkSuQmCC" class="icon">-->
                <!--                <div class="view-btn" @click="$router.push('/MyPackages')">{{$t('dashboard[0]')}}</div>-->
                <!--              </div>-->
                <div class="label">{{statisticalData.total_task}}</div>
                <div class="num">{{$t('dashboard[5]')}}</div>
              </div>
            </div>
          </div>

        </div>
        <div class="user-title">{{$t('dashboard[14]')}}</div>
        <form class="el-form user-box el-form--label-top">
          <div class="el-row" style="margin-left: -12px; margin-right: -12px;">
            <div class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-12" style="padding-left: 12px; padding-right: 12px;">
              <div class="el-form-item is-no-asterisk">
                <div style="    color: #000;
    font-size: 1.5rem;
    position: absolute;
    top: -1.5rem;">
                  {{$t('credit[0]')}}: {{UserInfo.credit}}
                </div>
                <label for="nickname" class="el-form-item__label">
                  {{$t('dashboard[8]')}}
                  <div style="display: inline-block;font-size: 2rem;margin-left: 5rem;color: #00bfff ;font-weight: bolder;height: 3rem;">{{$t('affiliates[13]')}}:{{UserInfo.useridentity}}</div>
                </label>
                <div class="el-form-item__content">
                  <div class="el-input is-disabled">
                    <input v-model="UserInfo.username" type="text" disabled="disabled" autocomplete="off" placeholder="" class="el-input__inner">
                  </div>

                </div>
              </div>
            </div>
            <div class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-12" style="padding-left: 12px; padding-right: 12px;">
              <div class="el-form-item is-no-asterisk"><label for="invite_code" class="el-form-item__label" style="margin-bottom: 1rem;">{{$t('dashboard[9]')}}</label>
                <div class="el-form-item__content">
                  <div class="input-group">
                    <div class="input el-input is-disabled">
                      <input v-model="UserInfo.idcode" type="text" disabled="disabled" autocomplete="off" placeholder="" class="el-input__inner">
                    </div>
                    <div class="copy-btn copy" @click="copy" :data-clipboard-text="UserInfo.idcode"><i class="el-icon-document-copy"></i></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="el-col el-col-24" style="padding-left: 12px; padding-right: 12px;">
              <div class="el-form-item is-no-asterisk"><label for="invite_link" class="el-form-item__label">{{$t('dashboard[10]')}}</label>
                <div class="el-form-item__content">
                  <div class="input-group">
                    <div class="input el-input is-disabled">
                      <input v-model="promoteUrl" type="text" disabled="disabled" autocomplete="off" placeholder="" class="el-input__inner">
                    </div>
                    <div class="copy-btn copy" @click="copy" :data-clipboard-text="promoteUrl"><i class="el-icon-document-copy"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="questions-block">
          <h1>{{$t('dashboard[11]')}}</h1>
          <p>{{$t('dashboard[12]')}}</p>
          <a href="javascript:;" @click="$router.push('/FAQ')"><div class="button-quest">{{$t('dashboard[13]')}}</div></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Clipboard from 'clipboard';
  import UserHeader from '@/components/UserHeader'
  export default {
    name: 'dashboard',
    components: {
      UserHeader
    },
    data() {
      return {
        showH5nav:false,
        showUserDown:false,
        showMenuDown:false,
        statisticalData:{},
        promoteUrl:'',
        coinlist:[
          {
            name:'BTC',
            symbol:'btcusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'ETH',
            symbol:'ethusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'LTC',
            symbol:'ltcusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'ATOM',
            symbol:'atomusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'TRX',
            symbol:'trxusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'CKB',
            symbol:'ckbusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'BCH',
            symbol:'bchusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'KSM',
            symbol:'ksmusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'DOT',
            symbol:'dotusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'FIL',
            symbol:'filusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'USDC',
            symbol:'usdcusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
          {
            name:'XTZ',
            symbol:'xtzusdt',
            price:'',
            change:'',
            rate:'',
            icon:'',
          },
        ],
        intv:null,
      }
    },

    computed: {
    },
    watch: {
    },
    created() {
      this.$Model.GetUserInfo();
      this.$Model.GetStatisticsInfo(data=>{
        if(data.code==1){
          this.statisticalData = data.info;
        }
      })
      this.promoteUrl = `${this.InitData.setting.reg_url}/#/register/${this.UserInfo.idcode}`;
      // let that = this;
      // that.loadData();
      // that.intv = setInterval(function () {
      //   that.loadData();
      // },3000)
      let _this = this;
      this.$Model.HasNewMessage(data=>{
        localStorage.setItem("noReadNum",data.data);
        if(data.data>0){
          _this.$Dialog.Confirm1(_this.$t('messageInfo[0]'), () => {
            _this.$router.push(`/message`)
          }, _this.$t('messageInfo[1]'));
        }
      })
    },
    mounted() {
    },
    activated() {

    },
    destroyed() {
      // clearInterval(this.intv)
    },
    methods: {
      loadData() {
        let that = this;
        for (let i = 0; i < that.coinlist.length; i++) {
          that.$Model.merged(that.coinlist[i].symbol, function (data) {
            that.coinlist[i].price = data.tick.ask[0];
            that.coinlist[i].change = (data.tick.close-data.tick.open).toFixed(2);
            that.coinlist[i].rate = parseFloat((data.tick.close-data.tick.open)/data.tick.open*100).toFixed(2);
          });
        }
      },
      copy () {
        let that = this;
        var clipboard = new Clipboard('.copy')
        clipboard.on('success', e => {
          that.$Dialog.Toast(that.$t('dialog[3]'));
          clipboard.destroy();
        })
        clipboard.on('error', e =>{
          // 不支持复制
          // 释放内存
          clipboard.destroy()
        })
      },
    }
  }
</script>
<style scoped>
  @media only screen and (min-width: 1024px) {
    .container {
      width: 100%
    }
    iframe {
      height: 54px !important;
    }
    .container .quotes {
      width: 100%;
      height: 5rem;
      box-sizing: border-box;
      margin-bottom: 2.5rem;
      border-radius: 6px;
      background-color: #fff9f0;
      overflow: hidden
    }

    .container .quotes .coin-list {
      position: relative;
      display: flex;
      align-items: center;
      width: -moz-fit-content;
      width: fit-content;
      height: 100%;
      animation: mymove-1409c966 60s infinite;
      animation-timing-function: linear;
      -webkit-animation: mymove-1409c966 60s infinite;
      -webkit-animation-timing-function: linear
    }

    .container .quotes .coin-list .coin-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 27rem;
      max-width: 27rem;
      height: inherit
    }

    .container .quotes .coin-list .coin-item:not(:last-child):after {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      content: "";
      width: 1px;
      height: 2.5rem;
      background-color: #e9e9e9
    }

    .container .quotes .coin-list .coin-item .icon {
      min-width: 2.5rem;
      max-width: 2.5rem;
      height: 2.5rem
    }

    .container .quotes .coin-list .coin-item .name {
      margin: 0 1.2rem 0 .6rem;
      font-size: 1.7rem;
      font-weight: 700;
      color: #000;
      white-space: nowrap
    }

    .container .quotes .coin-list .coin-item .price {
      margin-right: 1.2rem;
      font-size: 1.7rem;
      color: #000;
      white-space: nowrap
    }

    .container .quotes .coin-list .coin-item .change {
      font-size: 1.6rem;
      white-space: nowrap
    }
  }
  @media only screen and (max-width: 1024px) {
    .container {
      width:100%
    }
    .container .quotes {
      width: 100%;
      height: 4.5rem;
      box-sizing: border-box;
      margin-bottom: 2rem;
      border-radius: 6px;
      background-color: #fff9f0;
      overflow: hidden
    }

    .container .quotes .coin-list {
      position: relative;
      display: flex;
      align-items: center;
      width: -moz-fit-content;
      width: fit-content;
      height: 100%;
      animation: mymove-1409c966 60s infinite;
      animation-timing-function: linear;
      -webkit-animation: mymove-1409c966 60s infinite;
      -webkit-animation-timing-function: linear
    }

    .container .quotes .coin-list .coin-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 27rem;
      max-width: 27rem;
      height: inherit
    }

    .container .quotes .coin-list .coin-item:not(:last-child):after {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      content: "";
      width: 1px;
      height: 2.5rem;
      background-color: #e9e9e9
    }

    .container .quotes .coin-list .coin-item .icon {
      min-width: 2.5rem;
      max-width: 2.5rem;
      height: 2.5rem
    }

    .container .quotes .coin-list .coin-item .name {
      margin: 0 1.2rem 0 .6rem;
      font-size: 1.7rem;
      font-weight: 700;
      color: #000;
      white-space: nowrap
    }

    .container .quotes .coin-list .coin-item .price {
      margin-right: 1.2rem;
      font-size: 1.7rem;
      color: #000;
      white-space: nowrap
    }

    .container .quotes .coin-list .coin-item .change {
      font-size: 1.6rem;
      white-space: nowrap
    }
  }
  .questions-block h1 {
    color: #00bfff ;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
  }
  .questions-block {
    padding: 23px 44px 23px 44px;
    border-radius: 10px;
    background: #F0E9F3;
    margin-top: 31px;
    margin-bottom: 60px;
    font-size: 1.5rem;
    color: #000;
  }
  .button-quest {
    display: inline-block;
    color: #00bfff ;
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 10px;
    border: 1px solid #00bfff ;
    padding: 13px 32px 13px 32px;
    margin-top: 20px;
  }
  .user-title {
    color: #00bfff ;
    font-family: 'Roboto';
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  /* 超小屏幕（手机，小于 768px） */
  @media (max-width: 768px) {
    .mobile {
      display: flex;
    }
    .el-col-md-6 {
      width: 50%;
    }
    .pc {
      display: none;
    }
    .bal {
      display: block;
      width: 100%;
      height: 175px;
      border-radius: 10px;
      background-size: cover;
      background-position: center;
      position: relative;
      margin-bottom: 3rem;
    }
  }
  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: 768px) {
    .mobile {
      display: none;
    }
    .pc {
      display: flex;
    }
    .bal {
      display: none;
      width: 100%;
      height: 175px;
      border-radius: 10px;
      background-size: cover;
      background-position: center;
      position: relative;
      margin-bottom: 3rem;
    }
  }

  .bal-line {
    position: absolute;
    width: 1px;
    height: 105px;
    left: 50%;
    top: 46px;
    opacity: 1;
    -webkit-transition: 1s ease;
    transition: 1s ease;
    -webkit-animation: an 1s ease forwards;
    animation: an 1s ease forwards;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    background: #FFFFFF;
    z-index: 3;
  }
  .dts_pl {
    background-size: cover;
  }
  .flex-bal {
    padding-top: 23px;
    display: flex;
    flex-wrap: wrap;
  }
  .dts_pl::before {

  }
  .bal-bg {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 0;
    opacity: 1;
    height: 175px;
    border-radius: 10px;
    background: linear-gradient(110deg, #0d6efd, #409eff 59%, #fff);
    left: 0;
  }
  .bal-c{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .inf {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    grid-gap: 9px;
  }

  .item-inf {
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    width: 100%;
    height: 88px;
  }

  .item-inf2 {
    background: #F9F2F8;
    border-radius: 10px;
    width: 100%;
    height: 88px;
  }

  .item-inf2 p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    padding-top: 15px;
    padding-left: 12px;


    color: #A22283;
  }

  .item-inf p {
    margin-top: 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
  }

  .item-inf h4, .item-inf2 h4  {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
  }

  .item-inf2 h4 {
    color: black;
  }
  .bal-item {
    width: 50%;
  }
  .two-sect {
    margin-top: 10px;
  }
  .bal-item h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    margin-bottom: 10px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 0;
  }
  .bal-item p {
    font-family: 'Roboto';
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin: 0;
    line-height: 14px;
    color: #FFFFFF;
  }
  .bal img {
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
  }

  .flex-3 {
    width: 100%;
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 2rem;
  }
  .flex-3 a {
    text-decoration: none;
  }
  .item-m {
    cursor: pointer;
    width: 25%;
  }
  .item-m .bg {
    width: 60px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #00bfff;
    border-radius: 10px;
    margin: 0 auto;
  }
  .item-m .div {
    font-family: 'Roboto';
    font-style: normal;
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #fff;
  }
  .item-m .bg img {
    width: 24px;
    height: 18px;
  }
  .container .cal-item {
    width: 90%;
    margin: 1rem auto;
    color: #fff;
    background: #00bfff
  }
</style>



