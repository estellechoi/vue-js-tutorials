<template>
  <div>
    <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <!-- <div>{{ userData.id }}</div> -->
        <slot name="username">
          <!-- 상의 컴포넌트에서 정의할 영역 -->
        </slot>
        <div class="time">
          <!-- {{ userData.created }} -->
          <slot name="time">
            <!-- 상의 컴포넌트에서 정의할 영역 -->
          </slot>
        </div>
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userData: Object
  }
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>
