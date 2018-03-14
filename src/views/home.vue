../assets/img/<template lang="html">
	<div id="home-content-container">
		<!-- 幻灯片 -->
		<div class="home-slide">
			<ul class="home-slide-images">
				<li><img src="../assets/img/home-img.jpg"></li>
				<li><img src="../assets/img/home-img.jpg"></li>
				<li><img src="../assets/img/home-img.jpg"></li>
			</ul>
			<ul class="switch-point">
				<li></li>
				<li class="acitve"></li>
				<li></li>
			</ul>
		</div>
		<!-- 营销产品 -->
		<div class="four-inline breath-series">
			<ul class="four-inline-images">
				<li v-for="item,index in homedata.home_activities">
					<a class="breath-a" target="_blank" :href="item.link">
						<img class="breath-img" :src="item.image" alt="">
						<div class="wrappy"></div>
					</a>
				</li>
			</ul>
		</div>
		<!-- 热卖商品 -->
		<div class="hot-goods">
			<ul class="switch-goods">
				<li class="ori-left"></li>
				<li class="ori-right"></li>
			</ul>
			<div class="header-title">
				<h5 class="header-title">热门商品</h5>
			</div>
			<ul class="every-hot-good">
				<li is="goods-list" v-for="item,index in homedata.home_hot" :item='item'>
					<div slot="promotionsTag" :class="['specific-discount',{'buygive':buygive(item)}]">{{promo(item)}}</div>
				</li>
			</ul>
		</div>
		<!-- 空气净化系列 -->
		<div class="products purifier clear">
			<div class="header-title">
				<h5 class="header-title">净化器及配件</h5>
			</div>
			<ul class="every-hot-good clear">
				<li class="big-img">
					<a href="javascript:">
						<img src="../assets/img/home-img.jpg" alt="">
					</a>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>

				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>

				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
			</ul>
		</div>
		<div class="products org-selected">
			<div class="header-title">
				<h5 class="header-title">官方精选</h5>
			</div>
			<ul class="every-hot-good clear">
				<li class="big-img">
					<a href="javascript:">
						<img src="../assets/img/home-img.jpg" alt="">
					</a>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>

				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>

				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
			</ul>
		</div>
		<div class="products brand-side">
			<div class="header-title">
				<h5 class="header-title">品牌周边</h5>
			</div>
			<ul class="every-hot-good clear">
				<li class="big-img">
					<a href="javascript:">
						<img src="../assets/img/home-img.jpg" alt="">
					</a>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>

				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>

				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
			</ul>
		</div>
		<div class="products brand-selected">
			<div class="header-title">
				<h5 class="header-title">品牌精选</h5>
			</div>
			<ul class="every-hot-good clear">
				<li class="big-img">
					<a href="javascript:">
						<img src="../assets/img/home-img.jpg" alt="">
					</a>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>

				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>

				<li class="content-goods">
					<div class="specific-discount">限时</div>
					<a target="_blank" class="to-item">
						<img class="goods-img" src="../assets/img/home-img.jpg" />
					</a>
					<a class="content-href" href="#">
						<h3 class="content-name">手机</h3>
						<h6 class="content-info">锤子手机</h6>
					</a>
					<ul class="color-select">
						<li class="select-active">
							<img>
							<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
							<div class="cart-btn clear">
								<button><a target="_blank">查看详情</a></button>
								<button>加入购物车</button>
							</div>
						</li>
					</ul>
					<span class="content-price">￥ 298.00</span>
				</li>
			</ul>
		</div>
		<div class="four-inline office-about">
			<ul class="four-inline-images clear">
				<li>
					<a class="breath-a" href="#">
						<img class="breath-img" src="../assets/logo.png" alt="">
					</a>
				</li>
				<li>
					<a class="breath-a" href="#">
						<img class="breath-img" src="../assets/logo.png" alt="">
					</a>
				</li>
				<li>
					<a class="breath-a" href="#">
						<img class="breath-img" src="../assets/logo.png" alt="">
					</a>
				</li>
				<li>
					<a class="breath-a" href="#">
						<img class="breath-img" src="../assets/logo.png" alt="">
					</a>
				</li>
			</ul>
		</div>
		<div class="office-app">
			<div class="right-corner-link">
				<a href="#">全部应用 ></a>
			</div>
			<div class="header-title">
				<h5 class="header-title">锤子应用</h5>
			</div>
			<ul class="smart-apps clear">
				<li>
					<div class="pre-link">
						<div class="app-img"></div>
						<div class="info">
							<h6>HandShaker</h6>
							<p>
								<span>在 Mac 和 Windows 电脑上也可以方便自如地</span>
								<span>管理你在 Android 手机中的内容</span>
							</p>
						</div>
						<div class="platform">
							<span class="platform-icon platform-win platform-border-right"></span>
							<span class="platform-icon platform-ios"></span>
						</div>
					</div>
					<div class="after-link">
						<div class="load-btns">
							<a class="win-btn" href="https://sf.smartisan.com/download/win/simple/10">下载Windows版安装软件</a>
							<a class="ios-btn" href="https://sf.smartisan.com/sf/release/download">下载Mac版安装软件</a>
						</div>
						<a href="http://www.smartisan.com/apps/handshaker" target="_blank">进一步了解HandShaker ></a>
						<!-- <a href=""></a> -->
					</div>
				</li>
				<li>
					<div class="pre-link">
						<div class="app-img"></div>
						<div class="info">
							<h6>锤子便签</h6>
							<p>
								<span>雅致的信纸、精心调整的文字排版</span>
								<span>这可能是最让人想写字的便签应用</span>
							</p>
						</div>
						<div class="platform">
							<span class="platform-icon platform-win platform-border-right"></span>
							<span class="platform-icon platform-ios"></span>
						</div>
					</div>
					<div class="after-link">
						<div class="qrcode"></div>
						<p class="code-des">扫码二维码下载锤子便签</p>
						<a href="http://www.smartisan.com/apps/notes" target="_blank">进一步了解锤子便签 ></a>
						<!-- <a href=""></a> -->
					</div>
				</li>
				<li>
					<div class="pre-link">
						<div class="app-img"></div>
						<div class="info">
							<h6>锤子桌面</h6>
							<p>
								<span>它示范了何为美观、易用和人性化</span>
							</p>
						</div>
						<div class="platform">
							<span class="platform-icon platform-win platform-border-right"></span>
							<span class="platform-icon platform-ios"></span>
						</div>
					</div>
					<div class="after-link">
						<div class="qrcode"></div>
						<p class="code-des">扫码二维码下载锤子桌面</p>
						<a href="http://www.smartisan.com/apps/launcher" target="_blank">进一步了解锤子便签 ></a>
						<!-- <a href=""></a> -->
					</div>
				</li>
				<li>
					<div class="pre-link">
						<div class="app-img"></div>
						<div class="info">
							<h6>锤子科技论坛</h6>
							<p>
								<span>是一个科技论坛</span>
								<span>不只是科技论坛</span>
							</p>
						</div>
						<div class="platform">
							<span class="platform-icon platform-win platform-border-right"></span>
							<span class="platform-icon platform-ios"></span>
						</div>
					</div>
					<div class="after-link">
						<div class="qrcode"></div>
						<p class="code-des">扫码二维码下载锤子科技论坛</p>
						<a href="http://www.smartisan.com/apps/bbs" target="_blank">进一步了解锤子便签 ></a>
						<!-- <a href=""></a> -->
					</div>
				</li>
			</ul>
		</div>
		<div class="bbs">
			<div class="right-corner-link">
				<a href="#">前往论坛 ></a>
			</div>
			<div class="header-title">
				<h5 class="header-title">论坛精选</h5>
			</div>
			<ul class="bbs-articals">
				<li>
					<img class="artical-img" src="https://resource.smartisan.com/resource/0ac4853da0303c131147044f85d4bb1c.jpg" alt="">
					<div class="content-info">
						<h6 class="artical-title">坚果Pro官方开箱照</h6>
						<p class="artical-content">坚果 Pro 2 现已上市，1799 元起。下面是一些坚果 Pro 2 的实拍图。</p>
						<a class="read-all" href="#">阅读全文 ></a>
					</div>
					<a class="artical-link" href="#"></a>
				</li>
				<li>
					<img class="artical-img" src="https://resource.smartisan.com/resource/d00bbc1b5fc369c6bca2475b1a89b6c9.png" alt="">
					<div class="content-info">
						<h6 class="artical-title">坚果Pro官方开箱照</h6>
						<p class="artical-content">坚果 Pro 2 现已上市，1799 元起。下面是一些坚果 Pro 2 的实拍图。</p>
						<a class="read-all" href="#">阅读全文 ></a>
					</div>
					<a class="artical-link" href="#"></a>
				</li>
				<li>
					<img class="artical-img" src="https://resource.smartisan.com/resource/c819e2f96fdb67ce3c38e99386212222.png" alt="">
					<div class="content-info">
						<h6 class="artical-title">坚果Pro官方开箱照</h6>
						<p class="artical-content">坚果 Pro 2 现已上市，1799 元起。下面是一些坚果 Pro 2 的实拍图。</p>
						<a class="read-all" href="#">阅读全文 ></a>
					</div>
					<a class="artical-link" href="#"></a>
				</li>
				<li>
					<img class="artical-img" src="https://resource.smartisan.com/resource/94a8a611307344b9957df83a37ef1ee0.jpg" alt="">
					<div class="content-info">
						<h6 class="artical-title">坚果Pro官方开箱照</h6>
						<p class="artical-content">坚果 Pro 2 现已上市，1799 元起。下面是一些坚果 Pro 2 的实拍图。</p>
						<a class="read-all" href="#">阅读全文 ></a>
					</div>
					<a class="artical-link" href="#"></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import goodsList from '../components/home-goods'
export default {
	name: 'Home',
	data () {
		return {
			homedata: '',
			promotions: ''
		}
	},
	components:{
		goodsList
	},
	// computed:{
	// 	buygive(item){
	// 		return this.promo(item)==="买赠"? true:false
	// 	}
	// },
	methods: {
		promo(item){
			console.log(item);
			let i = 0
			let t = this.promotions;
			let m = t.map(
				function(item, index){
					return item.rule.condition
				}
			)
			let s = m.filter(function(item,index,arr){
				if (arr[index].main_skus.indexOf(Number(item.sku_id))!=-1 && Object.keys(arr[index]).indexOf('money')==-1) {
					// 最终的目的是获得index的值
					i = index;
				}
				return arr[index].main_skus.indexOf(Number(item.sku_id))!=-1
			})
			// console.log(t[i].tag);
			return t[i].tag
		},
		buygive(item){
			let t = this.promo(item)
			// console.log(t);
			return t === "买赠"? true:false
		},
		fetchData () {
			this.$http.get('api/home').then(
				function(res) {
					let t = JSON.parse(JSON.stringify(res.body.data));
					this.homedata = t
				}
			)
			this.$http.get('api/promotions?with_num=true').then(
				function(res){
					let t = JSON.parse(JSON.stringify(res.body.data.list));
					this.promotions = t;
					console.log(t);
				}
			)
		}
	},
	created(){
		this.fetchData()
	}
}
</script>

<style scoped>
#home-content-container .every-hot-good .content-goods .buygive{
	color: #d03b4f;
	border: 1px solid #f3938b;
	background-color: #ffe7e5;
}
#home-content-container {
  width: 1220px;
  margin: 0 auto;
}
#home-content-container > div {
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  overflow: hidden;
  background: white;
  margin-bottom: 25px;
}
#home-content-container .header-title {
  background: #fafafa;
  height: 60px;
}
#home-content-container .header-title h5 {
  margin-left: 30px;
  font-size: 18px;
  line-height: 60px;
  font-family: Microsoft Yahei, sans-serif;
}
#home-content-container .every-hot-good {
  overflow: hidden;
  height: 428px;
}
#home-content-container .every-hot-good .content-goods {
  width: 25%;
  height: 428px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  float: left;
  transition: all 0.2s;
  position: relative;
  box-sizing: border-box;
  height: 429px;
}
#home-content-container .every-hot-good .content-goods .specific-discount {
  box-sizing: border-box;
  text-align: center;
  position: absolute;
  height: 22px;
  padding: 0 10px;
  border: 1px solid #d4b37f;
  border-radius: 11px;
  background-color: #fefade;
  min-width: 56px;
  font-size: 0.54545455px "微软雅黑";
  color: #a06e37;
  top: 18px;
  right: 20px;
}
#home-content-container .every-hot-good .content-goods .to-item {
  width: 206px;
  height: 206px;
  margin: 50px auto 10px;
  cursor: pointer;
  display: block;
}
#home-content-container .every-hot-good .content-goods .to-item .goods-img {
  width: 206px;
  height: 206px;
}
#home-content-container .every-hot-good .content-goods .content-href {
  display: block;
  width: auto;
}
#home-content-container .every-hot-good .content-goods .content-href h3,
#home-content-container .every-hot-good .content-goods .content-href h6 {
  text-align: center;
}
#home-content-container .every-hot-good .content-goods .content-href h3 {
  font: 16px/26px "微软雅黑";
  color: #424242;
}
#home-content-container .every-hot-good .content-goods .content-href h6 {
  font: 12px/22px "微软雅黑";
  color: #d0d0d0;
}
#home-content-container .every-hot-good .content-goods .color-select {
  padding-top: 20px;
  text-align: center;
  font-size: 0;
}
#home-content-container .every-hot-good .content-goods .color-select li {
  border: 1px solid #e7e7e7;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  padding: 1px;
  display: inline-block;
  margin: 0 5px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}
#home-content-container .every-hot-good .content-goods .color-select li img {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #fff;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active {
  border-color: #b9b9b9;
  background: #b9b9b9;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active .cart-btn {
  padding: 0 46px;
  margin-bottom: 29px;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: all .3s;
  display: none;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active .cart-btn button {
  width: 98px;
  padding: 8px 0;
  display: block;
  float: left;
  border-radius: 4px;
  font: 12px/12px "微软雅黑";
  text-align: center;
  margin-right: 10px;
  position: relative;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active .cart-btn button a {
  display: block;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active .cart-btn button:nth-of-type(1) {
  border: 1px solid #d5d5d5;
  color: #a9a6a9;
  background: #fff;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active .cart-btn button:nth-of-type(1):hover {
  background: #f1f1f1;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active .cart-btn button:nth-of-type(2) {
  border: 1px solid #5c81e3;
  color: #e6ecf4;
  background: linear-gradient(to bottom, #7699e8, #5c81e3);
  margin: 0;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active .cart-btn button:nth-of-type(2):hover {
  background: linear-gradient(to bottom, #6d8dd4, #5374c8);
}
#home-content-container .every-hot-good .content-goods .content-price {
  display: block;
  padding-top: 21px;
  text-align: center;
  color: #d44d44;
  font-weight: bold;
  font-size: 18px;
}
#home-content-container .every-hot-good .content-goods:hover .content-price {
  display: none;
}
#home-content-container .every-hot-good .content-goods:hover .color-select .select-active .cart-btn {
  display: block;
}
#home-content-container .every-hot-good .content-goods:nth-of-type(4n) {
  border-right: none;
}
#home-content-container .home-slide {
  height: 500px;
  position: relative;
}
#home-content-container .home-slide .switch-point {
  position: absolute;
  left: 580px;
  bottom: 20px;
}
#home-content-container .home-slide .switch-point li {
  display: inline-block;
  vertical-align: middle;
  width: 18px;
  height: 18px;
  cursor: pointer;
  background: url(../assets/img/home-icon.png) no-repeat 0 0;
}
#home-content-container .home-slide .switch-point .acitve {
  background: url(../assets/img/home-icon.png) no-repeat 0 -18px;
}
#home-content-container .four-inline .four-inline-images li {
  width: 25%;
  float: left;
}
#home-content-container .four-inline .four-inline-images li .breath-a {
  display: block;
  background: white;
  position: relative;
}
#home-content-container .four-inline .four-inline-images li .breath-a .wrappy {
	width: 100%;
	height: 200px;
	position: absolute;
	left: 0;
	top: -1px;
	opacity: .1;
    box-sizing: border-box;
    border-right: 1px solid #000;
}
#home-content-container .four-inline .four-inline-images li:nth-of-type(4) .breath-a .wrappy{
	border: none;
}
#home-content-container .four-inline .four-inline-images li .breath-a .wrappy:hover {
	transition: all .2s;
	box-shadow: 0px 0px 20px 5px #999999 inset;
}
#home-content-container .four-inline .four-inline-images li .breath-a .breath-img {
  width: 305px;
  height: 200px;
}
#home-content-container .hot-goods {
  position: relative;
}
#home-content-container .hot-goods .switch-goods {
  position: absolute;
  right: 12px;
}
#home-content-container .hot-goods .switch-goods li {
  display: inline-block;
  margin-top: 12px;
  cursor: pointer;
}
#home-content-container .hot-goods .switch-goods .ori-left {
  width: 36px;
  height: 36px;
  background: url(../assets/img/arrow.png) no-repeat 0 0;
}
#home-content-container .hot-goods .switch-goods .over-left {
  width: 36px;
  height: 36px;
  background: url(../assets/img/arrow.png) no-repeat -46px 0;
}
#home-content-container .hot-goods .switch-goods .ori-right {
  width: 36px;
  height: 36px;
  background: url(../assets/img/arrow.png) no-repeat 100% 0;
  margin-left: 17px;
}
#home-content-container .hot-goods .switch-goods .over-right {
  width: 36px;
  height: 36px;
  background: url(../assets/img/arrow.png) no-repeat -92px 0;
  margin-left: 17px;
}
#home-content-container .hot-goods .content-goods:nth-of-type(1) {
  border-left: none;
}
#home-content-container .products .big-img {
  float: left;
  width: 50%;
  height: 429px;
  box-sizing: border-box;
}
#home-content-container .products .big-img a {
  display: block;
}
#home-content-container .products .big-img a img {
  width: 610px;
  height: 429px;
}
#home-content-container .products li:nth-of-type(4) {
  border-left: none;
}
#home-content-container .office-app {
  position: relative;
}
#home-content-container .office-app .smart-apps li {
  float: left;
  width: 25%;
  height: 255px;
  padding: 30px 0;
  text-align: center;
  position: relative;
}
#home-content-container .office-app .smart-apps li .pre-link {
  width: 245px;
  height: 255px;
  margin: 0 auto;
  position: relative;
  transition: opacity 0.2s ease-out 0.1s;
}
#home-content-container .office-app .smart-apps li .pre-link .app-img {
  width: 96px;
  height: 96px;
  background: url(../assets/img/smart-app.png) no-repeat 3px 3px;
  margin: 0 auto;
  margin-top: 22px;
}
#home-content-container .office-app .smart-apps li .pre-link .info {
  margin-top: 40px;
  width: 100%;
}
#home-content-container .office-app .smart-apps li .pre-link .info h6 {
  font-size: 15px;
  line-height: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #424242;
}
#home-content-container .office-app .smart-apps li .pre-link .info p {
  margin-top: 15px;
  font-size: 12px;
  font-weight: 200;
}
#home-content-container .office-app .smart-apps li .pre-link .info p span {
  display: block;
  font-family: Helvetica Neue,PingFang SC,Helvetica,Arial,Hiragino Sans GB;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #b2b2b2;
  margin-top: 6px;
  line-height: 1.2;
}
#home-content-container .office-app .smart-apps li .pre-link .platform {
  position: absolute;
  top: 208px;
  left: 0;
  width: 100%;
  height: 16px;
  text-align: center;
}
#home-content-container .office-app .smart-apps li .pre-link .platform .platform-icon {
  display: inline-block;
  margin: 0 5px;
  position: relative;
}
#home-content-container .office-app .smart-apps li .pre-link .platform .platform-win::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(../assets/img/win-logo.png);
}
#home-content-container .office-app .smart-apps li .pre-link .platform .platform-border-right::after {
  content: "";
  display: inline-block;
  position: absolute;
  right: -10px;
  top: 4px;
  width: 1px;
  height: 8px;
  background: #eee;
}
#home-content-container .office-app .smart-apps li .pre-link .platform .platform-ios::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(../assets/img/apple-logo.png);
}
#home-content-container .office-app .smart-apps li .after-link {
  top: -306px;
  width: 100%;
  height: 315px;
  background: white;
  opacity: 0;
  position: relative;
  transition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
}
#home-content-container .office-app .smart-apps li .after-link .load-btns {
  padding: 84px 0 15px;
}
#home-content-container .office-app .smart-apps li .after-link .load-btns .win-btn,
#home-content-container .office-app .smart-apps li .after-link .load-btns .ios-btn {
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 10px 20px;
  width: 210px;
  height: 50px;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  white-space: nowrap;
  color: #fff;
  background-color: #6f97e5;
  background-image: linear-gradient(#6f97e5, #527ed9);
  box-shadow: inset 0 1px 2px #7ea1e8;
  text-shadow: #4f70b3 0 -1px 0;
  cursor: pointer;
}
#home-content-container .office-app .smart-apps li .after-link > a {
  color: #5079d9;
  font-size: 12px;
  display: inline-block;
  margin-top: 16px;
}
#home-content-container .office-app .smart-apps li .after-link .qrcode {
  margin: 64px auto 0;
  box-sizing: border-box;
  border: 1px solid #f7f7f7;
  padding: 4px;
  width: 120px;
  height: 120px;
  background: url(../assets/img/qrcode.jpg);
}
#home-content-container .office-app .smart-apps li .after-link .code-des {
  margin-top: 35px;
  line-height: 1.2;
}
#home-content-container .office-app .smart-apps li:hover .after-link {
  opacity: 1;
}
#home-content-container .office-app .smart-apps li:hover .pre-link {
  opacity: 0;
}
#home-content-container .office-app .smart-apps li:nth-of-type(2) .app-img {
  background: url(../assets/img/smart-app.png) no-repeat -189px 3px;
}
#home-content-container .office-app .smart-apps li:nth-of-type(3) .app-img {
  background: url(../assets/img/smart-app.png) no-repeat -93px 3px;
}
#home-content-container .office-app .smart-apps li:nth-of-type(4) .app-img {
  background: url(../assets/img/smart-app.png) no-repeat -372px 3px;
}
#home-content-container .bbs {
  position: relative;
}
#home-content-container .bbs .bbs-articals li {
  width: 25%;
  float: left;
  box-sizing: border-box;
  padding: 30px;
  height: 315px;
  text-align: left;
}
#home-content-container .bbs .bbs-articals li .artical-img {
  margin: 0 auto;
  margin-bottom: 30px;
  border-radius: 6px;
  width: 246px;
  height: 138px;
}
#home-content-container .bbs .bbs-articals li .content-info {
  box-sizing: border-box;
  width: 100%;
}
#home-content-container .bbs .bbs-articals li .content-info .artical-title {
  overflow: hidden;
  font-size: 15px;
  line-height: 1;
  color: #424242;
}
#home-content-container .bbs .bbs-articals li .content-info .artical-content {
  margin-top: 12px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 200;
  color: #b2b2b2;
}
#home-content-container .bbs .bbs-articals li .content-info .read-all {
  display: block;
  margin-top: 13px;
  font-size: 12px;
  font-weight: 500;
  color: #5079d9;
}
#home-content-container .right-corner-link {
  position: absolute;
  right: 14px;
  top: 14px;
  font-size: 14px;
}
#home-content-container .right-corner-link a {
  display: inline-block;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  padding: 0 15px 0 19px;
  line-height: 34px;
  color: #666;
  background-color: #fff;
  background-image: linear-gradient(180deg, #ffffff, #fafafa);
}

</style>
