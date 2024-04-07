<template>
  <div id="projectDetail">
    <NavbarComponent></NavbarComponent>
    <div class="particles ">
      <vue-particles
        id="tsparticles"
        class="tsparticles"
        :particlesLoaded="particlesLoaded"
        :options="options"
      />
    </div>
    <main v-if="data" class="text-container">
      <div>
        <h1>{{ data.title }}</h1>
      </div>
      <div class="main-project">
        <div class="project-img">
          <img :src="data.imgURL" alt="專案圖片" />
          <div class="button-area">
            <a :href=data.GitHubPage target="_blank" class="btn btn-outline-primary btn-lg" type="button"> GitHub Page</a>
            <a :href=data.GitHub target="_blank" class="btn btn-outline-primary btn-lg" type="button"> GitHub</a>
          </div>
        </div>

        <div class="project-info">
          <div class="info-list">
            <p class="list-title">作品類型:</p>
            <p class="list-describe">{{ data.type }}{{ data.category }}</p>
          </div>

          <div class="info-list">
            <p class="list-title">製作時間:</p>
            <p class="list-describe">{{ data.time }}</p>
          </div>

          <div
            class="info-list"
            v-for="(skill, indexSkill) in data?.skills"
            :key="`skill-${indexSkill}`"
          >
            <p class="list-title">{{ skill.subTitle }}:</p>
            <div class="list-describe">
              <ul>
                <li
                  v-for="(skillItem, skillIndex) in skill.skill"
                  :key="`skillItem-${skillIndex}`"
                >
                  {{ skillItem }}
                </li>
              </ul>
              <ul>
                <li class="indentation"
                  v-for="(skillDes, indexDes) in skill.des"
                  :key="`skilldes-${indexDes}`"
                >
                  {{ indexDes + 1 }}. {{ skillDes }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="main-content">
        <h3>內容</h3>
        <ul>
            <li class="content-list" v-for="(content, contentIndex) in data.contents"
                  :key="`content-${contentIndex}`">
                  {{ content.subTitle }}:
                  <ul class="list-des" :class="{'indentation':content.des.length>1}">
                    <li v-for="(des, desIndex) in content.des"
                  :key="`content-${desIndex}`">
                  <RiKey2Line color="gray" size="14px" v-show="content.des.length > 1" ></RiKey2Line>
                  {{ des }}
                </li>
                  </ul>
            </li>
        </ul>
        <div class="content-design" v-if="data.design">
            <p>圖稿: </p>
            <ul>
            <li  v-for="(other, oIndex) in data.design" :key="`other-${oIndex}`">
                <a  :href=other.link target="_blank">{{ other.subTitle }}  </a>
           </li>
        </ul>

        </div>

      </div>
    </main>
    <footer>
        <router-link :to="`/`" class="btn btn-outline-info btn-lg">回首頁</router-link>
        <button class="btn btn-warning btn-lg" @click="clickPrev">上一個</button>
        <button class="btn btn-warning btn-lg" @click="clickNext">下一個</button>
    </footer>
  </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import projectData from '../config/project.json'
import { RiKey2Line } from '@remixicon/vue'

export default {
  components: {
    RiKey2Line,
    NavbarComponent
  },

  data () {
    return {
      options: {
        background: {
          color: {
            // value: '#6d6daa'
          }
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            }
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#6d6daa'
          },
          links: {
            color: '#6d6daa',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'bounce',
            random: false,
            speed: 4,
            straight: false
          },
          number: {
            density: {
              enable: true
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 5 }
          }
        },
        detectRetina: true
      },
      projectData,
      id: 0,
      data: '',
      idIndex: 0
    }
  },
  mounted () {
    this.getProject()
  },
  methods: {
    getProject () {
      this.id = Number(this.$route.params.id)
      this.data = this.projectData.find((item) => item.id === this.id)
      this.idIndex = Number(this.projectData.findIndex(item => item.id === this.id))
    },
    clickPrev () {
      if (this.idIndex > 0) {
        this.idIndex--
        this.changePage(this.idIndex)
      }
    },
    clickNext () {
      if (this.idIndex < this.projectData.length - 1) {
        this.idIndex++
        this.changePage(this.idIndex)
      }
    },
    changePage (index) {
      const newId = this.projectData[index].id
      this.$router.push({ path: `/project/${newId}` })
    }
  },
  watch: {
    '$route.params.id' (newId, oldId) {
      if (newId !== oldId) {
        this.getProject()
      }
    }
  }

}
</script>
<style>
@import "../style/ProjectDetail.scss";
</style>
