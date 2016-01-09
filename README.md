<div class="container">
<h2> <a style="float:right;" href="http://tokyoite.github.io">CLICK HERE FOR DEMO</a></h2>
    <hr/>
    <h2>FrameBox.js Usage</h2>
    <hr />

    <div class="well row">
        <div class="col-sm-12">
            <span><b>Add FrameBox.min.css in between head tag.</b></span>  <pre><code>&lt;link href=&quot;../App/FrameBox/FrameBox.css&quot; rel=&quot;stylesheet&quot; /&gt; </code></pre>
        </div>

        <div class="col-sm-12">
            <span><b>Add angular core js files and FrameBox.js at end of body tag </b></span>  <pre><code>&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular-route.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;../App/FrameBox/FrameBox.js&quot;&gt;&lt;/script&gt; </code></pre>
        </div>

        <div class="col-sm-12">
            <span><b>Create your angular module then add 'ngRoute' and 'FrameBox' to your list of included components.  </b></span>
            <pre><code>&lt;script&gt;
      var app = angular.module(&#39;appTest&#39;, [&#39;ngRoute&#39;, &#39;FrameBox&#39;]);
&lt;/script&gt;</code></pre>
        </div>


    </div>


    <hr />
    <h2>Directives</h2>
    <hr />
    <div class="well row">
        <div class="col-sm-12">
            <span><b class="lead">Selector [Select-It]</b>: Provides a box with a select list of frames. Click event will update image framing.</span>
            <pre><code>&lt;div select-it &gt;&lt;/div&gt;</code></pre>
        </div>
    </div>
    <div class="well row">
        <div class="col-sm-12">
            <span><b class="lead">Selector [Frame-It] </b>: Generates the frame around the image. Requires values for 4 directive attributes, dim, image, piecename, and frameStyle.  </span><br/>
            <b>Attributes</b>:
            <div class="col-sm-12">
                <b>-dim</b>: Dimensions in inches. <br />
                <b>-image</b>: Image URL to be framed. <br />
                <b>-piecename</b>: Name of piece being framed. This directive will set the title attribute for the image tag equal to the provided value. <br/>
                <b>-frameStyle</b>: Identifier for type of frame style. Styles listed below.... <br /><br />
                <i style="color:yellow">                    Package_2514,
                    Package_2515,
                    Package_2516,
                    Package_2517,
                    Package_2519,
                    Package_2525,
                    Package_2544,
                    Package_2533,
                    Package_2552,
                    Package_2554,
                    Package_2559,
                    Package_2566,
                    Package_2567,
                    Package_2569,
                    Package_2571</i>
            </div>
  <div class="clearfix"
></div>           
 <br/>            
<pre><code>&lt;div frame-it
    dim=&quot;25x40&quot;
    image=&quot;http://wylandflorida.com/Images/RobKaz/26/thumbsXL/thumb_Kaz Lifting the Xwing.jpg&quot;
    piecename=&quot;Lifting the X-Wing&quot;
    framestyle=&quot;Package_2567&quot;&gt;
&lt;/div&gt;</code></pre>
        </div>
    </div>
    <div class="bs-docs-section">
        <h2 id="template" class="page-header">
            <a style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; position: absolute; margin-left: -1em; padding-right: 0.5em;" class="anchorjs-link " href="#template" aria-label="Anchor link for: template" data-anchorjs-icon=""></a>Basic template
        </h2>
        <p class="lead">Start with the basic FrameBox template below.</p>


        <pre style="overflow-x:scroll;overflow:hidden;">
        <code data-lang="html" style="">
&lt;!DOCTYPE html&gt;
&lt;html <i style="color:red;">ng-app=&quot;appTest&quot;</i> lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;title&gt;FrameBox.js Demo&lt;/title&gt;
    &lt;!--TWITTER BOOTSTRAP CSS: OPTIONAL--&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css&quot; integrity=&quot;sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7&quot; crossorigin=&quot;anonymous&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css&quot; integrity=&quot;sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r&quot; crossorigin=&quot;anonymous&quot;&gt;
    &lt;!--FRAMEBOX CSS: REQUIRED--&gt;
    <i style="color:red;">&lt;link href=&quot;FrameBox/FrameBox.css&quot; rel=&quot;stylesheet&quot; /&gt;</i>
&lt;/head&gt;
&lt;body&gt;
    &lt;div class=&quot;container&quot;&gt;
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
&lt;/body&gt;
&lt;/html&gt;
      </code>
</pre>

    </div>

</div>

## License

Copyright (c) 2015, Octavio Gomez
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
