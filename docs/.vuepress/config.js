module.exports = {
	base:'/interview/',
    title: '这是页头',
    description: 'Just playing around',
    configureWebpack:{
	  	resolve:{
	  		alias:{
	  			'public':'./.vuepress/public'
	  		}
	  	}
  	},
	markdown:{
	  	lineNumbers:true
	}
}