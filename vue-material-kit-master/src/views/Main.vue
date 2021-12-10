<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <div class="section text-center">
              <div class="container">
              <h1 class="title" style="text-align: left;">Highlights</h1>
                <div class="team">
                  <div class="md-layout">
                    <div class="md-layout-item md-medium-size-33 md-small-size-100">
                      <div class="team-player">
                        <md-card class="md-card-plain">
                          <div class="md-layout-item md-size-50 mx-auto">
                            <img
                              :src="teamImg1"
                              alt="Thumbnail Image"
                              class="img-raised rounded-circle img-fluid"
                            />
                          </div>
                          <h4 class="card-title">
                            Gigi Hadid
                            <br />
                          </h4>
                        </md-card>
                      </div>
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-100">
                      <div class="team-player">
                        <md-card class="md-card-plain">
                          <div class="md-layout-item md-size-50 mx-auto">
                            <img
                              :src="teamImg2"
                              alt="Thumbnail Image"
                              class="img-raised rounded-circle img-fluid"
                            />
                          </div>
                          <h4 class="card-title">
                            Carla Hortensia
                            <br />
                          </h4>
                        </md-card>
                      </div>
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-100">
                      <div class="team-player">
                        <md-card class="md-card-plain">
                          <div class="md-layout-item md-size-50 mx-auto">
                            <img
                              :src="teamImg3"
                              alt="Thumbnail Image"
                              class="img-raised rounded-circle img-fluid"
                            />
                          </div>
                          <h4 class="card-title">
                            Kendall Jenner
                            <br />
                          </h4>
                        </md-card>
                      </div>
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-100">
                      <div class="team-player">
                        <md-card class="md-card-plain">
                          <div class="md-layout-item md-size-50 mx-auto">
                            <img
                              :src="teamImg1"
                              alt="Thumbnail Image"
                              class="img-raised rounded-circle img-fluid"
                            />
                          </div>
                          <h4 class="card-title">
                            Gigi Hadid
                            <br />
                          </h4>
                        </md-card>
                      </div>
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-100">
                      <div class="team-player">
                        <md-card class="md-card-plain">
                          <div class="md-layout-item md-size-50 mx-auto">
                            <img
                              :src="teamImg2"
                              alt="Thumbnail Image"
                              class="img-raised rounded-circle img-fluid"
                            />
                          </div>
                          <h4 class="card-title">
                            Carla Hortensia
                            <br />
                          </h4>
                        </md-card>
                      </div>
                    </div>
                    <div class="md-layout-item md-medium-size-33 md-small-size-100">
                      <div class="team-player">
                        <md-card class="md-card-plain">
                          <div class="md-layout-item md-size-50 mx-auto">
                            <img
                              :src="teamImg3"
                              alt="Thumbnail Image"
                              class="img-raised rounded-circle img-fluid"
                            />
                          </div>
                          <h4 class="card-title">
                            Kendall Jenner
                            <br />
                          </h4>
                        </md-card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />

          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Sports Feed</h2>
              <h5 class="description">
                Here you can find updates and highlights from all your favorite athletes and teams!
              </h5>
            </div>
          </div>



          <div class="main-content">
          <div class="post">
              <div class="avatar"></div>
                <h3 class='username'>eastondavies09</h3>
                <p class='comment'>Aptent vel egestas vestibulum aliquam ullamcorper volutpat
                ullamcorper pharetra hac posuere a rhoncus purus molestie torquent. Scelerisque
                purus cursus dictum ornare a phasellus. A augue venenatis adipiscing.</p>
                  <img
                    :src="Placeholder"
                    alt="Placeholder"
                  />
                  <div class="post-footer">
                    <button class="footer-buttons">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                      </svg>  React
                    </button>
                    <button class="footer-buttons">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                      </svg> Hype!
                    </button>
                    <div id="app">
                        <form v-on:submit.prevent="addComment">
                            <input type="text" v-model="newComment">
                            <button type="submit">Add</button>
                        </form>
                        <ul>
                            <li v-for="item in sortedComments" :key="item.id">
                                <span class="glyphicon glyphicon-thumbs-up" v-on:click="incrementUpvotes(item)"></span> {{item.title}} - upvotes: {{item.upvotes}}
                            </li>
                        </ul>
                    </div>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js" integrity="sha256-mpnrJ5DpEZZkwkE1ZgkEQQJW/46CSEh/STrZKOB/qoM=" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.2/dist/vue.js"></script>
                    <script src="javascripts/app.js"></script>

                    <button class="footer-buttons">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                        <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                      </svg> Share
                    </button>
                  </div>
          </div>
            <div class="post">
              <div class="avatar"></div>
                <h3 class='username'>eastondavies09</h3>
                <p class='comment'>Aptent vel egestas vestibulum aliquam ullamcorper volutpat
                ullamcorper pharetra hac posuere a rhoncus purus molestie torquent. Scelerisque
                purus cursus dictum ornare a phasellus. A augue venenatis adipiscing.</p>
                <div class="post-footer">
                  <button class="footer-buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>  React
                  </button>
                  <button class="footer-buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                      <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg> Hype!
                  </button>
                  <button class="footer-buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                      <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg> Share
                  </button>
                </div>
            </div>
            <div class="post">
              <div class="avatar"></div>
                <h3 class='username'>eastondavies09</h3>
                <p class='comment'>Aptent vel egestas vestibulum aliquam ullamcorper volutpat
                ullamcorper pharetra hac posuere a rhoncus purus molestie torquent. Scelerisque
                purus cursus dictum ornare a phasellus. A augue venenatis adipiscing.</p>
                <img
                  :src="Placeholder"
                  alt="Placeholder"
                />
                <div class="post-footer">
                  <button class="footer-buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>  React
                  </button>
                  <button class="footer-buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                      <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg> Hype!
                  </button>
                  <button class="footer-buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                      <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg> Share
                  </button>
                </div>
              </div>
            <div class="post">
              <div class="avatar"></div>
                <h3 class='username'>eastondavies09</h3>
                <p class='comment'>Aptent vel egestas vestibulum aliquam ullamcorper volutpat
                ullamcorper pharetra hac posuere a rhoncus purus molestie torquent. Scelerisque
                purus cursus dictum ornare a phasellus. A augue venenatis adipiscing.</p>
                <div class="post-footer">
                  <button class="footer-buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>  React
                  </button>
                  <button class="footer-buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                      <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg> Hype!
                  </button>
                  <button class="footer-buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                      <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg> Share
                  </button>
                </div>
              </div>
            <div class="post">
              <div class="avatar"></div>
                <h3 class='username'>eastondavies09</h3>
                <p class='comment'>Aptent vel egestas vestibulum aliquam ullamcorper volutpat
                ullamcorper pharetra hac posuere a rhoncus purus molestie torquent. Scelerisque
                purus cursus dictum ornare a phasellus. A augue venenatis adipiscing.</p>
                <div class="post-footer">
                  <button class="footer-buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>  React
                  </button>
                  <button class="footer-buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                      <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg> Hype!
                  </button>
                  <button class="footer-buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                      <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg> Share
                  </button>
                </div>
              </div>
          </div>





        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "main-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/stadium.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
    },
    Placeholder: {
      type: String,
      default: require("@/assets/img/Placeholder.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}

.md-layout-item {
  padding: 0px !important;
}

.md-layout {
  flex-wrap: nowrap;
}
</style>
