<template>
  <div v-if="formActive">
    <form @submit.prevent="submitHandler">
      <div class="title">Основная информация</div>
      <div class="form-content">
        <div class="row-main">
          <span class="label">Фамилия*</span>
          <input
            v-modal.trim="firstname"
            :class="{
              invalid:
                ($v.firstname.$dirty && !$v.firstname.required) ||
                ($v.firstname.$dirty && $v.firstname.firstname),
            }"
          />
        </div>
        <div class="row-main">
          <span class="label">Имя*</span>
          <input />
        </div>
        <div class="row-main">
          <span class="label">Отчество</span>
          <input />
        </div>
        <div class="row-main">
          <span class="label">Дата рождения*</span>
          <input />
        </div>
        <div class="row-main">
          <span class="label">Номер телефона*</span>
          <input />
        </div>
        <div class="row-main">
          <span class="label">Пол</span>
          <select class="select_gender" style="" name="Gender">
            <option value="Мужской" selected>Мужской</option>
            <option value="Женский">Женский</option>
          </select>
        </div>
        <div class="row-main">
          <span class="label">Группа клиентов*</span>
          <select
            class="select_client-group"
            name="ClentGroup"
            @change="onChangeGroup($event)"
          >
            <option value="ОМС" selected>ОМС</option>
            <option value="VIP">VIP</option>
            <option value="Проблемные">Проблемные</option>
          </select>
          <div class="multiselect">
            <span v-for="item in currentGroup" :key="item">{{ item }}</span>
          </div>
        </div>
        <div class="row-main">
          <span class="label">Лечащий врач</span>
          <select class="select_doctor" name="Doctors">
            <option value="Иванов" selected>Иванов</option>
            <option value="Захаров">Захаров</option>
            <option value="Чернышева">Чернышева</option>
          </select>
        </div>
        <div class="row-main">
          <span class="label">Не отправлять СМС</span>
          <input class="input_checkbox" type="checkbox" />
        </div>
      </div>
      <div class="title">Адрес</div>
      <div class="form-content">
        <div class="row-address">
          <span class="label">Индекс</span>
          <input />
        </div>
        <div class="row-address">
          <span class="label">Страна</span>
          <input />
        </div>
        <div class="row-address">
          <span class="label">Область</span>
          <input />
        </div>
        <div class="row-address">
          <span class="label">Город*</span>
          <input />
        </div>
        <div class="row-address">
          <span class="label">Улица</span>
          <input />
        </div>
        <div class="row-address">
          <span class="label">Дом</span>
          <input />
        </div>
      </div>
      <div class="title">Паспорт</div>
      <div class="form-content">
        <div class="row-passport">
          <span class="label">Тип документа*</span>
          <select class="select_doc" name="ClientDoc">
            <option value="Паспорт" selected>Паспорт</option>
            <option value="Свидетельство о рождении">
              Свидетельство о рождении
            </option>
            <option value="Вод. удостоверение">Вод. удостоверение</option>
          </select>
        </div>
        <div class="row-passport">
          <span class="label">Серия</span>
          <input />
        </div>
        <div class="row-passport">
          <span class="label">Номер</span>
          <input />
        </div>
        <div class="row-passport">
          <span class="label">Кем выдан</span>
          <input />
        </div>
        <div class="row-passport">
          <span class="label">Дата выдачи*</span>
          <input />
        </div>
      </div>
      <button type="submit">ДАЛЕЕ</button>
    </form>
  </div>
  <div v-else>Успех!</div>
</template>

<script>
import { required, minLength, numeric } from "vuelidate/lib/validators";

export default {
  name: "ClientForm",
  components: {},
  data: function () {
    return {
      formActive: true,
      currentGroup: [],
      firstname: "",
      lastname: "",
      patronim: "",
      dateOfBirthday: "",
      phone: "",
    };
  },
  methods: {
    submitHandler() {
      if (this.$v.$inyalid) {
        this.$v.$touch();
        console.log(this.$v.$inyalid);
        return;
      }
      // this.formActive = false;
    },
    onChangeGroup(event) {
      !this.currentGroup.find((el) => el === event.target.value)
        ? this.currentGroup.push(event.target.value)
        : this.currentGroup.splice(
            this.currentGroup.indexOf(
              this.currentGroup.find((el) => el === event.target.value)
            ),
            1
          );
      return;
    },
  },
  validations: {
    firstname: { required },
    lastname: { required },
    patronim: {},
    dateOfBirthday: { required },
    phone: { required, minLength: minLength(11), numeric },
  },
};
</script>

<!— Add "scoped" attribute to limit CSS to this component only —>
<style lang="scss" scoped>
form {
  background-color: #fff;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);
  width: 540px;
  padding: 20px 0;
  margin: auto;

  input {
    border: 0;
    border-bottom: 1px #0000007a solid;
    width: 90%;
    font-size: 20px;
    height: 21px;
  }
  .input_checkbox {
    width: auto;
    margin-right: 12px;
  }

  .row {
    &-main,
    &-address,
    &-passport {
      width: 50%;
      height: 55px;
    }
    &-main {
      .multiselect {
        height: 21px;
        display: flex;
        justify-content: space-evenly;
        margin-top: 12px;
        span {
          border: 1px #0000007a solid;
          border-radius: 5px;
          padding: 3px;
        }
      }
      .select_ {
        &gender,
        &client-group,
        &doctor {
          height: 21px;
          border: 0;
          border-bottom: 1px #0000007a solid;
          width: 90%;
          font-size: 20px;
        }
      }
      &:last-child {
        width: 50%;
        display: flex;
        justify-content: space-between;
        float: inline-start;
        margin-left: 50%;
      }
    }
    &-passport {
      .select_doc {
        height: 21px;
        border: 0;
        border-bottom: 1px #0000007a solid;
        width: 90%;
        font-size: 20px;
      }
    }
  }

  .form-content {
    display: flex;
    flex-wrap: wrap;
    max-width: 940px;
    margin: auto;
    justify-content: flex-start;
  }

  .title {
    font-size: 28px;
    padding: 20px 10px 10px 10px;
  }

  button {
    background-color: indianred;
    border: 0;
    border-radius: 8px;
    color: #fff;
    width: 180px;
    height: 30px;
    display: block;
    margin: 12px 0 0 12px;
  }

  .label {
    display: flex;
    margin: 0 0 0 12px;
  }

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 440px) {
    width: 100%;
    .form-content {
      flex-direction: column;
    }
    .row {
      &-main,
      &-address,
      &-passport {
        width: 100%;
      }
      &-main:last-child {
        width: 90%;
        justify-content: space-between;
        margin-left: 0;
      }
    }

    button {
      margin: auto;
    }
  }
}
</style>