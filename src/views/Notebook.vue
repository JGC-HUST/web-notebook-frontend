<template>
<<<<<<< HEAD
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo">网络日志</div>
      <div class="avator">
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" href="#">{{ userInfo.username }}
            <a-icon type="down"/>
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a href="http://www.alipay.com/">1st menu item</a>
            </a-menu-item>
            <a-menu-item key="1">
              <a href="http://www.taobao.com/">2nd menu item</a>
            </a-menu-item>
            <a-menu-divider/>
            <a-menu-item key="3">3rd menu item</a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
            mode="inline"
            :defaultSelectedKeys="['1']"
            :defaultOpenKeys="['sub1']"
            :style="{ height: '100%', borderRight: 0 }"
        >
          <template v-for="cate in $store.getters.getCategories">
            <a-menu-item class="menu-item" @click="toList(cate.title)">{{cate.title}}</a-menu-item>
            <a-menu-divider/>
          </template>

          <a-button type="dashed" id="addBtn1" @click="showModal">添加分类</a-button>
        </a-menu>
      </a-layout-sider>
      <a-modal
          title="新建分类"
          :visible="visible"
          @ok="handleOk"
          :confirmLoading="confirmLoading"
          @cancel="handleCancel"
      >
        <a-input placeholder="请输入分类名" v-model="newCateName"/>
      </a-modal>
      <a-layout style="padding: 0 24px 24px;background: #ccc">
<!--        <a-breadcrumb style="margin: 16px 0">-->
<!--          <a-breadcrumb-item>Home</a-breadcrumb-item>-->
<!--          <a-breadcrumb-item>List</a-breadcrumb-item>-->
<!--          <a-breadcrumb-item>App</a-breadcrumb-item>-->
<!--        </a-breadcrumb>-->
        <p></p>
        <div id="page" :style="{ background: '#fff', padding: '20px', margin: 0 }">
          <router-view></router-view>
        </div>
      </a-layout>
    </a-layout>
  </a-layout>
=======
	<a-layout id="components-layout-demo-top-side-2">
		<a-layout-header class="header">
			<div class="logo" @click="$router.push({ path: '/notebook/monitor' })">网络日志</div>
			<div class="avator">
				<a-dropdown :trigger="['click']">
					<a class="ant-dropdown-link" href="#">{{ userInfo.username }} <a-icon type="down" /> </a>
					<a-menu slot="overlay">
						<a-menu-item key="0">
							<a href="http://www.alipay.com/">1st menu item</a>
						</a-menu-item>
						<a-menu-item key="1">
							<a href="http://www.taobao.com/">2nd menu item</a>
						</a-menu-item>
						<a-menu-divider />
						<a-menu-item key="3">3rd menu item</a-menu-item>
					</a-menu>
				</a-dropdown>
			</div>
		</a-layout-header>
		<a-layout>
			<a-layout-sider width="200" style="background: #fff">
				<a-menu
					mode="inline"
					:defaultSelectedKeys="['1']"
					:defaultOpenKeys="['sub1']"
					:style="{ height: '100%', borderRight: 0 }"
				>
					<a-menu-item class="menu-item">option4</a-menu-item>
					<a-menu-divider />
					<a-menu-item class="menu-item">option4</a-menu-item>
					<a-menu-divider />
					<a-menu-item class="menu-item">option4</a-menu-item>
					<a-menu-divider />
					<a-button type="dashed" id="addBtn1" @click="showModal">添加分类</a-button>
				</a-menu>
			</a-layout-sider>
			<a-modal
				title="新建分类"
				:visible="visible"
				@ok="handleOk"
				:confirmLoading="confirmLoading"
				@cancel="handleCancel"
			>
				<a-input placeholder="请输入分类名" v-model="newCateName" />
			</a-modal>
			<a-layout style="padding: 0 24px 24px;background: #ccc">
				<a-breadcrumb style="margin: 16px 0">
					<a-breadcrumb-item>Home</a-breadcrumb-item>
					<a-breadcrumb-item>List</a-breadcrumb-item>
					<a-breadcrumb-item>App</a-breadcrumb-item>
				</a-breadcrumb>
				<div id="page" :style="{ background: '#fff', padding: '20px', margin: 0 }">
					<router-view></router-view>
				</div>
			</a-layout>
		</a-layout>
	</a-layout>
>>>>>>> d4c8f5f6142a6b3b498214087a915e047acd121a
</template>
<script>
  export default {
    data() {
      return {
        userInfo: this.$store.getters.getUserInfo,
        collapsed: false,
        visible: false,
        confirmLoading: false,
        newCateName: ""
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        let that = this;
        this.confirmLoading = true;
        this.axios.post("http://127.0.0.1:8360/cate/add", {
          username: this.$store.getters.getUserInfo.username,
          catename: this.newCateName
        }).then(response => {
          let result = response.data.data;
          that.confirmLoading = false;
          if (result.code === 1) {
            this.$store.commit('addCategory', that.newCateName);
          } else {
            this.$message.error("分类创建失败", 3);
          }
          this.visible = false;
        })
      },
      handleCancel(e) {
        console.log("Clicked cancel button");
        this.visible = false;
      },
      toList(e){
        this.$router.push({path:'/notebook/list', query:{catename: e}})
      }
    }
  };
</script>

<style>
<<<<<<< HEAD
  #components-layout-demo-top-side-2 {
    height: 100%;
  }

  #components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
    line-height: 31px;
    color: #ffffff;
    text-align: center;
  }

  .ant-layout-has-sider {
    min-height: calc(100% - 64px);
  }

  .avator {
    float: right;
  }

  #addBtn1 {
    display: list-item !important;
    height: 30px;
    margin: auto;
    width: 150px;
    margin-top: 10px;
  }

  .menu-item {
    text-align: center;
  }
  /*#page {*/
  /*  min-height: 700px;*/
  /*}*/
=======
#components-layout-demo-top-side-2 {
	height: 100%;
}
#components-layout-demo-top-side-2 .logo {
	width: 120px;
	height: 31px;
	background: rgba(255, 255, 255, 0.2);
	margin: 16px 28px 16px 0;
	float: left;
	line-height: 31px;
	color: #ffffff;
	text-align: center;
}
.ant-layout-has-sider {
	min-height: calc(100% - 64px);
}
.avator {
	float: right;
}
#addBtn1 {
	display: list-item !important;
	height: 30px;
	margin: auto;
	width: 150px;
	margin-top: 10px;
}
.menu-item {
	text-align: center;
}
.logo:hover {
	cursor: pointer;
}
>>>>>>> d4c8f5f6142a6b3b498214087a915e047acd121a
</style>
