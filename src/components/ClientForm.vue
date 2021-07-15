<template>
  <form @submit.prevent="submitHandler" id="reg">
    <div class="title">Основная информация</div>
    <div class="form-content">
      <div class="row-main">
        <span class="label">Фамилия*</span>
        <input
          form="reg"
          v-model.trim="lastname"
          @input="setLastName($event.target.value)"
        />
        <div class="invalid-feedback">
          <span v-if="!$v.lastname.required && show">
            Это поле должно быть заполнено!
          </span>
        </div>
      </div>
      <div class="row-main">
        <span class="label">Имя*</span>
        <input
          form="reg"
          v-model.trim="firstname"
          @input="setFirstName($event.target.value)"
        />
        <div class="invalid-feedback">
          <span v-if="!$v.firstname.required && show">
            Это поле должно быть заполнено!
          </span>
        </div>
      </div>
      <div class="row-main">
        <span class="label">Отчество</span>
        <input form="reg" />
      </div>
      <div class="row-main">
        <span class="label">Дата рождения*</span>
        <input
          form="reg"
          v-model.trim="dateOfBirthday"
          @input="setDate($event.target.value)"
        />
        <span v-if="!$v.dateOfBirthday.required && show">
          Это поле должно быть заполнено!
        </span>
        <span v-if="!$v.dateOfBirthday.date && dateOfBirthday !== ''">
          Шаблон: DD/MM/YYYY
        </span>
      </div>
      <div class="row-main">
        <span class="label">Номер телефона*</span>
        <input
          form="reg"
          v-model.trim="phoneNumber"
          @input="setPhoneNumber($event.target.value)"
        />
        <span v-if="!$v.phoneNumber.required && show">
          Это поле должно быть заполнено!
        </span>
        <span v-if="!$v.phoneNumber.phone && phoneNumber !== ''">
          Шаблон: +7dddddddddd
        </span>
      </div>
      <div class="row-main">
        <span class="label">Пол</span>
        <select form="reg" class="select_gender" style="" name="Gender">
          <option value="Мужской" selected>Мужской</option>
          <option value="Женский">Женский</option>
        </select>
      </div>
      <div class="row-main">
        <span class="label">Группа клиентов*</span>
        <select
          form="reg"
          class="select_client-group"
          name="ClentGroup"
          @change="onChangeGroup($event)"
        >
          <option value="ОМС" selected>ОМС</option>
          <option value="VIP">VIP</option>
          <option value="Проблемные">Проблемные</option>
        </select>
        <div class="multiselect" v-if="currentGroup.length">
          <span class="current-group" v-for="item in currentGroup" :key="item">
            {{ item }}
            <button class="current-group_btn" @click="remove(item)">x</button>
          </span>
        </div>
        <span v-if="!currentGroup.length && show"
          >Здесь должна быть хотя бы 1 категория!</span
        >
      </div>
      <div class="row-main">
        <span class="label">Лечащий врач</span>
        <select form="reg" class="select_doctor" name="Doctors">
          <option value="Иванов" selected>Иванов</option>
          <option value="Захаров">Захаров</option>
          <option value="Чернышева">Чернышева</option>
        </select>
      </div>
      <div class="row-main">
        <span class="label">Не отправлять СМС</span>
        <input form="reg" class="input_checkbox" type="checkbox" />
      </div>
    </div>
    <div class="title">Адрес</div>
    <div class="form-content">
      <div class="row-address">
        <span class="label">Индекс</span>
        <input form="reg" />
      </div>
      <div class="row-address">
        <span class="label">Страна</span>
        <input form="reg" />
      </div>
      <div class="row-address">
        <span class="label">Область</span>
        <input />
      </div>
      <div class="row-address">
        <span class="label">Город*</span>
        <input
          form="reg"
          v-model.trim="city"
          @input="setCity($event.target.value)"
        />
        <span v-if="!$v.city.required && show">
          Это поле должно быть заполнено!
        </span>
      </div>
      <div class="row-address">
        <span class="label">Улица</span>
        <input form="reg" />
      </div>
      <div class="row-address">
        <span class="label">Дом</span>
        <input form="reg" />
      </div>
    </div>
    <div class="title">Паспорт</div>
    <div class="form-content">
      <div class="row-passport">
        <span class="label">Тип документа*</span>
        <select
          form="reg"
          class="select_doc"
          name="ClientDoc"
          v-model.trim="doc"
          @input="setDoc($event.target.value)"
        >
          <option value="Паспорт" selected>Паспорт</option>
          <option value="Свидетельство о рождении">
            Свидетельство о рождении
          </option>
          <option value="Вод. удостоверение">Вод. удостоверение</option>
        </select>
        <span v-if="!$v.doc.required && show"
          >Это поле должно быть заполнено!</span
        >
      </div>
      <div class="row-passport">
        <span class="label">Серия</span>
        <input form="reg" />
      </div>
      <div class="row-passport">
        <span class="label">Номер</span>
        <input form="reg" />
      </div>
      <div class="row-passport">
        <span class="label">Кем выдан</span>
        <input form="reg" />
      </div>
      <div class="row-passport">
        <span class="label">Дата выдачи*</span>
        <input
          form="reg"
          v-model.trim="dateOfGettedDoc"
          @input="setDocDate($event.target.value)"
        />
        <span v-if="!$v.dateOfGettedDoc.required && show">
          Это поле должно быть заполнено!
        </span>
        <span v-if="!$v.dateOfGettedDoc.date && dateOfGettedDoc !== ''">
          Шаблон: DD/MM/YYYY
        </span>
      </div>
    </div>
    <button type="submit" @click="submitHandler">ДАЛЕЕ</button>
  </form>
</template>

<script>
import { required, minLength, helpers } from "vuelidate/lib/validators";
const regexpPhone = /\+7\d\d\d\d\d\d\d\d\d\d/;
const phone = (value) => helpers.req(value.trim().match(regexpPhone));
const regexpDate =
  /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
const date = (value) => helpers.req(value.match(regexpDate));
const selectCategory = (value) => helpers.req(value.length > 0);

export default {
  name: "ClientForm",
  components: {},
  data: function () {
    return {
      currentGroup: [],
      firstname: "",
      lastname: "",
      dateOfBirthday: "",
      phoneNumber: "",
      city: "",
      doc: "",
      dateOfGettedDoc: "",
      show: false,
    };
  },
  validations: {
    firstname: { required },
    lastname: { required },
    dateOfBirthday: { required, date },
    phoneNumber: { required, minLength: minLength(11), phone },
    currentGroup: { required, selectCategory },
    city: { required },
    doc: { required },
    dateOfGettedDoc: { required, date },
  },
  methods: {
    setFirstName(value) {
      this.firstname = value;
      this.$v.firstname.$touch();
    },
    setLastName(value) {
      this.lastname = value;
      this.$v.lastname.$touch();
    },
    setDate(value) {
      this.dateOfBirthday = value;
      this.$v.dateOfBirthday.$touch();
    },
    setPhoneNumber(value) {
      this.phoneNumber = value;
      this.$v.phoneNumber.$touch();
    },
    setCity(value) {
      this.city = value;
      this.$v.city.$touch();
    },
    setDoc(value) {
      this.doc = value;
      this.$v.doc.$touch();
    },
    setDocDate(value) {
      this.dateOfGettedDoc = value;
      this.$v.dateOfGettedDoc.$touch();
    },
    remove(value) {
      this.currentGroup.splice(this.currentGroup.indexOf(value), 1);
    },
    submitHandler() {
      if (
        this.currentGroup.length &&
        this.$v.dateOfGettedDoc.date &&
        this.$v.dateOfGettedDoc.required &&
        this.$v.dateOfBirthday.date &&
        this.$v.dateOfBirthday.required &&
        this.$v.phoneNumber.phone &&
        this.$v.phoneNumber.required &&
        this.$v.doc.required &&
        this.$v.firstname.required &&
        this.$v.lastname.required &&
        this.$v.city.required
      ) {
        alert("Новый клиет успешно создан!");
      } else {
        this.show = true;
        setTimeout(() => (this.show = false), 2500);
      }
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
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
        width: 243px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 12px;
        span {
          border: 1px #0000007a solid;
          border-radius: 5px;
          padding: 3px;
          margin-left: 12px;
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
  .current-group {
    display: flex;
    height: 19px;
    &_btn {
      width: 28px;
      width: 20px;
      height: 20px;
      margin: 0 2px;
    }
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