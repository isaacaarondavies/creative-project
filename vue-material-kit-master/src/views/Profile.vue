<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">Easton Davies</h3>
                  <h6>Pitcher</h6>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-dribbble"
                    ><i class="fab fa-dribbble"></i
                  ></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-twitter"
                    ><i class="fab fa-twitter"></i
                  ></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-pinterest"
                    ><i class="fab fa-pinterest"></i
                  ></md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              ASU commit, sophomore in high school, pitcher
            </p>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Highlights', 'Stats']"
              :tab-icon="['camera', 'favorite']"
              plain
              nav-pills-icons
              color-button="warning"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane1[0].image" class="rounded" />
                    <img :src="tabPane1[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane1[3].image" class="rounded" />
                    <img :src="tabPane1[2].image" class="rounded" />
                  </div>
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane2[0].image" class="rounded" />
                    <img :src="tabPane2[1].image" class="rounded" />
                    <img :src="tabPane2[2].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane2[3].image" class="rounded" />
                    <img :src="tabPane2[4].image" class="rounded" />
                  </div>
                </div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<div class="about-column">
  <h2 style="font-weight: 100;">Athlete Portfolio</h2>
  <hr class="sidebar-line">
  <ol><span class="subtitle-style">Past Teams:</span>
    <li>RA Academy</li>
    <li>Orem Highschool</li>
    <li>All-star</li>
  </ol>
  <ol><span class="subtitle-style">Awards:</span>
    <li>RA Academy</li>
    <li>Orem Highschool</li>
    <li>All-star</li>
  </ol>
  <ol><span class="subtitle-style">Extracurriculars:</span>
    <li>Clubs</li>
    <li>Service</li>
    <li>Other</li>
  </ol>
  <ol><span class="subtitle-style">Other Hobbies:</span>
    <li>Fortnite</li>
    <li>Weightlifting</li>
    <li>Selling Sea Shells</li>
  </ol>
</div>



<script>
import { Tabs } from "@/components";
export default {
  components: {
    Tabs
  },
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ]
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile-header.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    }
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
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
