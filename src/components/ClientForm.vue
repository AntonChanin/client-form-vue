<template>
  <div v-if="form.formActive">
    <form @submit.prevent="submitHandler">
      <div class="title">Основная информация</div>
      <div class="form-content">
        <div v-for="item in form.info" :key="item.label" class="row-main">
          <span class="label">{{ item.label }}</span>
          <div v-html="item.content"></div>
        </div>
      </div>
      <div class="title">Адрес</div>
      <div class="form-content">
        <div v-for="item in form.address" :key="item.label" class="row-address">
          <span class="label">{{ item.label }}</span>
          <div v-html="item.content"></div>
        </div>
      </div>
      <div class="title">Паспорт</div>
      <div class="form-content">
        <div
          v-for="item in form.passport"
          :key="item.label"
          class="row-passport"
        >
          <span class="label">{{ item.label }}</span>
          <div v-html="item.content"></div>
        </div>
      </div>
      <button type="submit">ДАЛЕЕ</button>
    </form>
  </div>
  <div v-else>Успех!</div>
</template>

<script>
export default {
  name: "ClientForm",
  components: {},
  data: function () {
    return {
      form: {
        info: [
          {
            label: "Фамилия*",
            content: `<input style="border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" />`,
          },
          {
            label: "Имя*",
            content: `<input style="border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" />`,
          },
          {
            label: "Отчество",
            content: `<input style="border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" />`,
          },
          {
            label: "Дата рождения*",
            content: `<input style="border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" />`,
          },
          {
            label: "Номер телефона*",
            content: `<input style="border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" />`,
          },
          {
            label: "Пол",
            content: `
<select style="height: 21px; border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" name = "Pol" >
<option value = "Мужской" selected>Мужской</option>
<option value = "Женский">Женский</option>
</select>`,
          },
          {
            label: "Группа клиентов*",
            content: `
<select style=" width: 90%; height: 21px; border: 0; border-bottom: 1px #0000007a solid; font-size: 20px;" name = "ClentGroup" >
<option value = "ОМС" selected>ОМС</option>
<option value = "VIP">VIP</option>
<option value = "Проблемные">Проблемные</option>
</select>`,
          },
          {
            label: "Лечащий врач",
            content: `
<select style=" width: 90%; height: 21px; border: 0; border-bottom: 1px #0000007a solid; font-size: 20px;" name = "Doctors" >
<option value = "Иванов" selected>Иванов</option>
<option value = "Захаров">Захаров</option>
<option value = "Чернышева">Чернышева</option>
</select>`,
          },
          { label: "Не отправлять СМС", content: "<input type=checkbox />" },
        ],
        address: [
          {
            label: "Индекс",
            content: `<input style="border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" />`,
          },
          {
            label: "Страна",
            content: `<input style="border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" />`,
          },
          {
            label: "Область",
            content: `<input style="border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" />`,
          },
          {
            label: "Город*",
            content: `<input style="border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" />`,
          },
          {
            label: "Улица",
            content: `<input style="border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" />`,
          },
          {
            label: "Дом",
            content: `<input style="border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" />`,
          },
        ],
        passport: [
          {
            label: "Тип документа*",
            content: `
<select style=" width: 90%; height: 21px; border: 0; border-bottom: 1px #0000007a solid; font-size: 20px;" class="select" name = "ClentGroup" >
<option value = "Паспорт" selected>Паспорт</option>
<option value = "Свидетельство о рождении">Свидетельство о рождении</option>
<option value = "Вод. удостоверение">Вод. удостоверение</option>
</select>`,
          },
          {
            label: "Серия",
            content: `<input style="border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" />`,
          },
          {
            label: "Номер",
            content: `<input style="border: 0; border-bottom: 1px
IIS Windows Server
IIS Windows Server
form.info
#0000007a solid; width: 90%; font-size: 20px;" />`,
          },
          {
            label: "Кем выдан",
            content: `<input style="border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" />`,
          },
          {
            label: "Дата выдачи*",
            content: `<input style="border: 0; border-bottom: 1px #0000007a solid; width: 90%; font-size: 20px;" />`,
          },
        ],
        formActive: true,
      },
    };
  },
  methods: {
    submitHandler() {
      this.form.formActive = false;
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

  .row {
    &-main,
    &-address,
    &-passport {
      width: 50%;
      height: 55px;
    }
    &-main:last-child {
      width: 100%;
      display: flex;
      margin: 5px 0px 0px 12px;
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
      }
    }

    button {
      margin: auto;
    }
  }
}
</style>