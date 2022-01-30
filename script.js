
  debugger;
  let currentLanguage = 'ru-RU';

  class Language {
    constructor(create_field,code, name, type, avalible_values, description,visibility,create,cancel) {
      this.create_field = create_field;
      this.code = code;
      this.name = name;
      this.type = type;
      this.avalible_values = avalible_values;
      this.description = description;
      this.visibility = visibility;
      this.create = create;
      this.cancel = cancel;
    }  
  }

  const languages = new Map([
      ["en",new Language('Create Field','Code','Name','Type','Avalible Values','Description','Visibility','Create','Cancel')],
      ["es",new Language('crear campo','código','nombre','escribe','valores disponibles','descripción','visibilidad','Crear','cancelar')],
      ["ru-RU",new Language('создать поле','Kод','название','тип','доступные значения','описание','видимость','Создать','отменить')],
      ["he-IL",new Language('ליצור שדה','קוד','שם','סוג','ערכים זמינים','תאור','רְאוּת','ליצור','לבטל')],
      ["ar",new Language('خلق المجال','الشفرة','اسم','نوع','القيم المتاحة','وصف','الرؤية','يخلق','إلغاء')],
      ["de",new Language('Feld erstellen','Code','Name','Typ','Verfügbare Werte','Beschreibung','Sichtweite','Erstellen','Abbrechen')]
    ]);

  // This function gets languages from the Languages Map and sets it to inner HTML dropdown list
  function getLanguages() {
      const dropdownLangElement = document.getElementById('dropdown-list');

      for (let lang of languages.keys()) {
          // dropdownLangElement.innerHTML += `<li>'${lang}'</li>`;
          dropdownLangElement.innerHTML += `<li onclick="setLanguage('${lang}')"><a class="dropdown-item" href="#">${lang}</a></li>`;
      }
  }

  // This function runing than dropdown button will run
  function setLanguage(lang) {
      currentLanguage = lang;
      const translates = languages.get(lang);  

      // Update h4 Create Fields element language
      document.getElementById('create-fields').innerHTML = translates.create_field;
      
      // Update All "li" elements Language
      document.getElementById('code').innerHTML = translates.code;
      document.getElementById('name').innerHTML = translates.name;
      document.getElementById('type').innerHTML = translates.type;
      document.getElementById('avalible-values').innerHTML = translates.avalible_values;
      document.getElementById('description').innerHTML = translates.description;
      document.getElementById('visibility').innerHTML = translates.visibility;

      // Update Create and Cancel Buttons language
      document.getElementById('create-button').innerHTML = translates.create;
      document.getElementById('cancel-button').innerHTML = translates.cancel;

      this.setRTL();
  }

  function setDefaultLanguage () {
      if (navigator.language && languages.has(navigator.language)) {
        this.setLanguage(navigator.language);
      }    
  }

  function setRTL() {
    if(['he-IL','ar'].includes(currentLanguage)) {
      // this is an RTL Language
      document.getElementsByTagName("body")[0].setAttribute("dir","rtl");
    }
    else {
      document.getElementsByTagName("body")[0].removeAttribute("dir");        
    }
  }

  function load() {
      this.getLanguages();
      this.setDefaultLanguage();
  }

