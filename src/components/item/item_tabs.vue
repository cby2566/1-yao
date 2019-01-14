<template>
    <div class="item_tabs">
    <div class="item_tabs_h">
        <p :class="active=='tab-container1'?'opm':''" @click="gettab('tab-container1')">图文详情</p>
        <p :class="active=='tab-container2'?'opm':''" @click="gettab('tab-container2')">说明书</p>
        <p :class="active=='tab-container3'?'opm':''" @click="gettab('tab-container3')">评论（0）</p>
    </div>
    <mt-tab-container v-model="active" :swipeable='true' class="item_tabs_x">
      <mt-tab-container-item id="tab-container1">
        <mt-cell class="item_shuo">
            <img src="../../assets/img/shum1.jpg" />
        </mt-cell>
        <mt-cell class="item_shuo">
            <img src="../../assets/img/shum1.jpg" />
        </mt-cell>
        <mt-cell class="item_shuo">
            <img src="../../assets/img/shum1.jpg" />
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <mt-cell v-for="n in 5" title="tab-container2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 7" title="tab-container3"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    </div>
</template>

<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
import Vue from 'vue';

export default {
    data(){
        return {
            active:'tab-container1'
        }
    },
    methods:{
        gettab(e){
            this.active=e;
        }
    }

}
</script>
<style lang="scss">
@import '../../sass/mixin.scss';
.item_tabs{
    .item_tabs_h{
        display:flex;
        
        p{
            height: sss($n :28);
            line-height: sss($n :28);
            color: #666666;
            flex:1;
            border-bottom: none;
            display: inline-block;
            text-align: center;
        }
        .opm{
            color: #00aaa0;
            border-bottom: sss($n :2) solid #00aaa0;
        }
    }
    .item_shuo{
        img{
            width:100%;
        }
    }
}
.item_tabs_x{
    position:static;
    a{
       position:static;
    }
}


</style>