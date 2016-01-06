<h1>FrameBox.js</h1>
<hr/>
<div class="row">
<div class="container ng-scope">
    <h2>Install:&nbsp; <a href="FrameBox.zip" class="btn btn-primary btn-lg" style='right:25px;'>Download Zip</a></h2>
    <hr>

    <div class="well row">
        <div class="col-sm-12">
            <span><b>Add FrameBox.min.css in between head tag.</b></span>  <pre><code>&lt;link href="https://raw.githubusercontent.com/tokyoite/FrameBox.js/master/FrameBox.css" rel="stylesheet" /&gt; </code></pre>
        </div>

        <div class="col-sm-12">
            <span><b>Add angular core js files and FrameBox.js at end of body tag </b></span>  <pre><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular-route.js"&gt;&lt;/script&gt;
&lt;script src="https://raw.githubusercontent.com/tokyoite/FrameBox.js/master/FrameBox.js"&gt;&lt;/script&gt; </code></pre>
        </div>

        <div class="col-sm-12">
            <span><b>Create your angular module then add 'ngRoute' and 'FrameBox' to your list of included components.  </b></span>
            <pre><code>&lt;script&gt;
      var app = angular.module('appTest', ['ngRoute', 'FrameBox']);
&lt;/script&gt;</code></pre>
        </div>


    </div>


    <hr>
    <h2>Directives</h2>
    <hr>
    <div class="well row">
        <div class="col-sm-12">
            <span><b class="lead">Selector [Select-It]</b>: Provides a box with a select list of frames. Click event will update image framing.</span>
            <pre><code>&lt;select-it&gt;&lt;/select-it&gt;</code></pre>
        </div>
    </div>
    <div class="well row">
        <div class="col-sm-12">
            <span><b class="lead">Selector [Frame-It] </b>: Generates the frame around the image. Requires values for 4 directive attributes, dim, image, piecename, and frameStyle.  </span><br>
            <b>Attributes</b>:
            <div class="col-sm-12">
                <b>-dim</b>: Dimensions in inches. <br>
                <b>-image</b>: Image URL to be framed. <br>
                <b>-piecename</b>: Name of piece being framed. This directive will set the title attribute for the image tag equal to the provided value. <br>
                <b>-frameStyle</b>: Identifier for type of frame style. Styles listed below.... <br><br>
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
  <div class="clearfix"></div>           
 <br>            
            <pre><code>&lt;frame-it dim="15x30" image="http://wylandflorida.com/Images/RobKaz/26/thumbsXL/thumb_KnightsofRen15x30[1].jpg" piecename="Knights of Ren" framestyle="Package_2567" id="1"&gt;&lt;/frame-it&gt;</code></pre>
        </div>
    </div>
    <div class="bs-docs-section">
        <h2 id="template" class="page-header">
            <a style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; position: absolute; margin-left: -1em; padding-right: 0.5em;" class="anchorjs-link " href="#template" aria-label="Anchor link for: template" data-anchorjs-icon=""></a>Basic template
        </h2>
        <p class="lead">Start with the basic FrameBox template below.</p>


        <pre style="overflow-x:scroll;overflow:hidden;">        <code data-lang="html" style="">
    &lt;!DOCTYPE html&gt;
        &lt;html ng-app="appTest" lang="en"&gt;
            &lt;head&gt;
                &lt;title&gt;FrameBox.js Test&lt;/title&gt;
                &lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous"&gt;
                &lt;!-- Optional theme --&gt;
                &lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous"&gt;
        <b style="color:red;">&lt;link href="https://raw.githubusercontent.com/tokyoite/FrameBox.js/master/FrameBox.css" rel="stylesheet" /&gt;</b>
            &lt;/head&gt;
            &lt;body&gt;
                &lt;div class="container"&gt;
                    &lt;h1&gt;FrameBox.js Usage&lt;/h1&gt;
                    &lt;div class="row"&gt;
                        &lt;div class="well col-lg-4 col-md-3 col-sm-12 col-xs-12"&gt;
                            &lt;!--DIRECTIVE FOR GENERATING FRAME SELECTIONS--&gt;
        <b style="color:blue;">&lt;select-it&gt;&lt;/select-it&gt;</b> 
                        &lt;/div&gt;
                        &lt;div class="well col-lg-8 col-md-9 col-sm-12 col-xs-12"&gt;
                            &lt;div class="col-sm-12"&gt;
                                &lt;!--DIRECTIVE FOR DISPLAYING FRAMED IMAGE--&gt;
        <b style="color:blue;">&lt;frame-it dim="15x30" image="http://wylandflorida.com/Images/RobKaz/26/thumbsXL/thumb_KnightsofRen15x30[1].jpg" piecename="Knights of Ren" framestyle="Package_2567" id="1"&gt;&lt;/frame-it&gt;</b>
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;!-- jQuery (necessary for Bootstrap's JavaScript plugins) --&gt;
                &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"&gt;&lt;/script&gt;
                &lt;!-- Latest compiled and minified JavaScript for Twitter Bootstrap --&gt;
                &lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"&gt;&lt;/script&gt;
        <b style="color:red;"> &lt;!--Angular Core Libraries--&gt;
                &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular.min.js"&gt;&lt;/script&gt;
                &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.8/angular-route.js"&gt;&lt;/script&gt;
                &lt;!--FrameBox.js Angular Module--&gt;
                &lt;script src="https://raw.githubusercontent.com/tokyoite/FrameBox.js/master/FrameBox.js"&gt;&lt;/script&gt;
                &lt;script&gt;
                    //Create App and add FrameBox to module array
                    var app = angular.module('appTest', ['ngRoute', 'FrameBox']);
                &lt;/script&gt;</b>
            &lt;/body&gt;
        &lt;/html&gt;            </code>
</pre>

    </div>

</div>
</div>
    </div>
