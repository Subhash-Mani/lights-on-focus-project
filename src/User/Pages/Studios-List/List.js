
import './List.css'
export const Studio_Listing = ()=>{

    return(
        <>
         <div class="header-3">
        <nav class="navbar navbar-expand-lg bg-primary navbar-absolute lsting-navbar">
          <div class="container">
            <div class="navbar-translate">
              <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
              <a class="navbar-brand" href="#pablo">Creative Tim</a>
            </div>
            <div class="collapse navbar-collapse show" data-nav-image="./assets/img//blurred-image-1.jpg">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#pablo">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#pablo">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#pablo">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          
        </div>
        <div id="carouselExampleIndicators" class="carousel slide carosel_for_listing">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item">
              <div class="page-header header-filter">
                <div class="page-header-image" style={{ 
                    backgroundImage: 'url("../../../../public/assets/img/bg17.jpg")'}}></div>
                <div class="container text-left">
                  <div class="content-center">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="iframe-container">
                          <iframe height="250" src="https://www.youtube.com/embed/rmfmdKOLzVI?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
                        </div>
                      </div>
                      <div class="col-md-6 ml-auto mr-auto text-right">
                        <h1 class="title">On the run tour.</h1>
                        <h4 class="description ">On the Run Tour: Beyoncé and Jay Z is a 2014 concert special which documents the September 12 and 13, 2014, shows of American singers' Beyoncé and Jay-Z joint co-headlining venture On the Run Tour.</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="page-header header-filter">
                <div class="page-header-image"
                style={{ 
                    backgroundImage: 'url("https://media.geeksforgeeks.org/'+ 
                    'wp-content/uploads/20201221222410/download3.png")'}} ></div>
                <div class="container">
                  <div class="content-center">
                    <div class="row">
                      <div class="col-md-8 ml-auto mr-auto text-center">
                        <h1 class="title">Island of legends.</h1>
                        <h4 class="description ">The islands of Malta and Gozo are brilliant for a family holiday, packed with fun places to visit whatever your children’s ages. The islands’ small size means everywhere is within easy reach.</h4>
                        <br />
                        <h5>Connect with us on:</h5>
                        <div class="buttons">
                          <a href="#pablo" class="btn btn-icon btn-neutral btn-danger btn-round mt-2">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#pablo" class="btn btn-icon btn-neutral btn-danger btn-round mt-2">
                            <i class="fab fa-facebook-square"></i>
                          </a>
                          <a href="#pablo" class="btn btn-icon btn-neutral btn-danger btn-round mt-2">
                            <i class="fab fa-google-plus"></i>
                          </a>
                          <a href="#pablo" class="btn btn-icon btn-neutral btn-danger btn-round  mt-2">
                            <i class="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="page-header header-filter">
                <div class="page-header-image" style={{ 
                    backgroundImage: 'url("https://media.geeksforgeeks.org/'+ 
                    'wp-content/uploads/20201221222410/download3.png")'}}></div>
                <div class="container">
                  <div class="content-center">
                    <div class="row">
                      <div class="col-md-6 text-left">
                        <h1 class="title">Arctic Sea ice.</h1>
                        <h4 class="description ">According to the National Oceanic and Atmospheric Administration, Ted Scambos, NSIDC lead scientist, puts the potentially record low maximum sea ice extent this year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h4>
                        <br />
                        <div class="buttons">
                          <a href="#pablo" class="btn btn-neutral btn-primary btn-lg mr-1">
                            <i class="now-ui-icons files_single-copy-04"></i> Read More..
                          </a>
                          <a href="#pablo" class="btn btn-primary btn-lg">
                            <i class="now-ui-icons arrows-1_share-66"></i> Subscribe
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <i class="now-ui-icons arrows-1_minimal-left"></i>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <i class="now-ui-icons arrows-1_minimal-right"></i>
          </a>
        </div>
      </div>

        </>
    )


}