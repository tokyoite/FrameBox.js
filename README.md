
        &lt;h1&gt;FrameBox.js Demo&lt;/h1&gt;
        &lt;hr /&gt;
        &lt;div class=&quot;row&quot;&gt;
            &lt;div class=&quot;well col-lg-4 col-md-3 col-sm-12 col-xs-12&quot;&gt;
                &lt;!--FRAME SELECTION FEATURE--&gt;
                &lt;p class=&quot;lead text-center&quot;&gt;Select a Frame&lt;/p&gt;
<i style="color:blue;">&lt;div select-it &gt;&lt;/div&gt;</i>
            &lt;/div&gt;
            &lt;div class=&quot;well col-lg-8 col-md-9 col-sm-12 col-xs-12&quot;&gt;
                &lt;div class=&quot;col-sm-12&quot;&gt;
                    &lt;!--IMAGE BEING FRAMED--&gt;
<i style="color:blue;">&lt;div  frame-it
                          dim=&quot;15x30&quot;
                          image=&quot;http://wylandflorida.com/Images/RobKaz/26/thumbsXL/thumb_KnightsofRen15x30[1].jpg&quot;
                          piecename=&quot;Knights of Ren&quot;
                          framestyle=&quot;Package_2567&quot;&gt;
                      &lt;/div&gt;</i>
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;well col-lg-8 col-md-9 col-sm-12 col-xs-12&quot;&gt;
                &lt;div class=&quot;col-sm-12&quot;&gt;
                    &lt;!--IMAGE BEING FRAMED--&gt;
<i style="color:blue;">&lt;div frame-it
                         dim=&quot;25x40&quot;
                         image=&quot;http://wylandflorida.com/Images/RobKaz/26/thumbsXL/thumb_Kaz Lifting the Xwing.jpg&quot;
                         piecename=&quot;Lifting the X-Wing&quot;
                         framestyle=&quot;Package_2567&quot;&gt;
                     &lt;/div&gt;</i>
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;well col-lg-4 col-md-3 col-sm-12 col-xs-12&quot;&gt;
                &lt;!--FRAME SELECTION FEATURE--&gt;
                &lt;p class=&quot;lead text-center&quot;&gt;Select a Frame&lt;/p&gt;
<i style="color:blue;">&lt;div select-it&gt;&lt;/div&gt;</i>
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- jQuery (necessary for Bootstrap&#39;s JavaScript plugins): OPTIONAL --&gt;
    &lt;script src=&quot;https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;!-- Latest compiled and minified JavaScript for Twitter Bootstrap: OPTIONAL  --&gt;
    &lt;script src=&quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js&quot; integrity=&quot;sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;
    &lt;!--Angular Core Libraries: REQUIRED--&gt;
<i style="color:red;">&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular.min.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular-route.js&quot;&gt;&lt;/script&gt;
    &lt;!--FrameBox.js Angular Module: REQUIRED--&gt;
    &lt;script src=&quot;FrameBox/FrameBox.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
        //Create App and add FrameBox to module array
        var app = angular.module(&#39;appTest&#39;, [&#39;ngRoute&#39;, &#39;FrameBox&#39;]);
    &lt;/script&gt;</i>
