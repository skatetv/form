      // Post label

      var labelArray = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>&quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if></b:loop></b:if>];
      var relatedPostConfig={
        homePage: &quot;<data:blog.homepageUrl.canonical/>&quot;,
        widgetTitle: &quot;<h3 class='title'><data:messages.youMayLikeThesePosts/></h3>&quot;,
        numPosts: 6,
        summaryLength: 20,
        titleLength:&quot;auto&quot;,
        thumbnailSize: 275,
        noImage: &quot;data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=&quot;,
        containerId: &quot;related-posts&quot;,
        newTabLink: false,
        moreText: &quot;Read more&quot;,
        widgetStyle: 2,
        callBack:function(){}
      }


    // Post
      
      
      /*<![CDATA[*/ var randomRelatedIndex,showRelatedPost;(function(n,m,k){var d={widgetTitle:"<h3 class='heading'>Related Posts</h3>",widgetStyle:1,homePage:"http://www.jagodesain.com",numPosts:7,summaryLength:320,titleLength:"auto",thumbnailSize:200,noImage:"data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",containerId:"related-posts",newTabLink:false,moreText:"Read more",callBack:function(){}}; for(var f in relatedPostConfig){d[f]=(relatedPostConfig[f]=="undefined")?d[f]:relatedPostConfig[f]}var j=function(a){var b=m.createElement("script");b.defer="defer";b.rel="preload";b.src=a;k.appendChild(b)},o=function(b,a){return Math.floor(Math.random()*(a-b+1))+b},l=function(a){var p=a.length,c,b;if(p===0){return false}while(--p){c=Math.floor(Math.random()*(p+1));b=a[p];a[p]=a[c];a[c]=b}return a},e=(typeof labelArray=="object"&&labelArray.length>0)?"/-/"+l(labelArray)[0]:"",h=function(b){var c=b.feed.openSearch$totalResults.$t-d.numPosts,a=o(1,(c>0?c:1));j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+d.numPosts+"&callback=showRelatedPost")},g=function(z){var s=document.getElementById(d.containerId),x=l(z.feed.entry),A=d.widgetStyle,c=d.widgetTitle+'<ul class="related style-'+A+'">',b=d.newTabLink?' target="_blank"':"",y='<!-- <div class="clear"/> -->',v,t,w,r,u;if(!s){return}for(var q=0;q<d.numPosts;q++){if(q==x.length){break}t=x[q].title.$t;w=(d.titleLength!=="auto"&&d.titleLength<t.length)?t.substring(0,d.titleLength)+"&hellip;":t; r=("media$thumbnail"in x[q]&&d.thumbnailSize!==false)?x[q].media$thumbnail.url.replace(/.*?:\/\//g , "//").replace(/\/s[0-9]+(\-c)?/, "/s"+d.thumbnailSize):d.noImage;u=("summary"in x[q]&&d.summaryLength>0)?x[q].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,d.summaryLength)+"&hellip;":"";for(var p=0,a=x[q].link.length;p<a;p++){v=(x[q].link[p].rel=="alternate")?x[q].link[p].href:"#"} if(A==2){c+='<li><div class="item-related"><div class="item-thumbnail"><a href="'+v+'"><img class="post-thumb lazy" alt="'+w+'" data-src="'+r+'" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="></a></div><div class="item-title"><a href="'+v+'"><span>'+w+'</span></a></div></div></li>'} else{c+='<li><div class="item-related"><div class="item-thumbnail"><a href="'+v+'"><img class="post-thumb lazy" alt="'+w+'" data-src="'+r+'" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="></a></div><div class="item-title"><a href="'+v+'"><span>'+w+'</span></a></div></div></li>'} }s.innerHTML=c+="</ul>";d.callBack()};randomRelatedIndex=h;showRelatedPost=g;j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0]); /*]]>*/