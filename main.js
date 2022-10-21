// the flags

let dropbtn = document.getElementById("dropbtn");
let dropdownContent = document.getElementById("dropdown-content")
dropbtn.addEventListener("click" , (eo) => {
  dropdownContent.classList.toggle("block");
}
)



// my multi-step form

let form = [
  ` 
 <div class="bg-light rounded">
        <button class="btn-light p-2 btn-form">
          اضغط هنا لتعرف كيف تعمل المنصة
        </button>
        <h3>طلب عرض سعر</h3>
        <h1>خرسانة جاهزة</h1>
        <div class="text-center">
          <img class="col-2 mb-3" src="images/1.jpg" alt="" />
        </div>
        <div class="text-end">
          <button class="mt-3 btn-form mb-5">1 معلومات عن المنتج</button>
          <button class="mt-3 btn-form mb-5" disabled>2 المشروع</button>
          <button class="mt-3 btn-form mb-5" disabled>3 تفاصيل اخرى</button>
          <button class="mt-3 btn-form mb-5" disabled>4 ازاي نوصلك</button>
        </div>

<form class="text-end">
          <div class="my-bg">
            <p class="text-end pt-5" style="color: gray">اسم المنتج المطلوب</p>
            <div class="col-3 bg-light rounded-2">
              <p class="col-6 btn-form">خرسانة جاهزة</p>
            </div>
            <p class="text-end" style="color: gray">الكمية</p>
            <input type="number" placeholder="ادخل الكمية" required />
            <button class="btn d-block mt-2 border-info">
              اضف صورة للمنتج
            </button>
            <p class="text-end" style="color: gray">نوع العنصر</p>
            <input list="options" id="mount" required />
            <datalist id="options">
              <option value="اسقف"   >اسقف</option>
              <option value="اعمدة">اعمدة</option>
              <option value="قواعد مسلحة و سملات">قواعد مسلحة و سملات</option>
              <option value="لبشة مسطحة">لبشة مسطحة</option>
              <option value="لبشة عادية">لبشة عادية</option>
              <option value="حوائط مسطحة">حوائط مسطحة</option>
              <option value="ارضية">ارضية</option>
              <option value="أخرى">أخرى</option>
            </datalist>
            <p class="text-end" style="color: gray">المحتوى الأسمنتى كجم/م3</p>
            <input type="number" required />

            <p class="text-end" style="color: gray">الإجهاد المطلوب كجم/سم2</p>
            <input list="suffer" required />
            <datalist id="suffer">
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="180">180</option>
              <option value="250">250</option>
              <option value="300">300</option>
              <option value="350">350</option>
              <option value="400">400</option>
            </datalist>

            <p class="text-end" style="color: gray">نوع الاسمنت</p>
            <input list="type" required />
            <datalist id="type">
              <option value="عادي">عادي</option>
              <option value="مقاوم">مقاوم</option>
            </datalist>

            <p class="text-end" style="color: gray">طول ذراع المضخة بالمتر</p>
            <input list="length" required />
            <datalist id="length">
              <option value="36">36</option>
              <option value="42">42</option>
              <option value="47">47</option>
              <option value="49">49</option>
              <option value="52">52</option>
              <option value="55">55</option>
              <option value="غير مطلوب مضخة">غير مطلوب مضخة</option>
            </datalist>
          </div>

          
        </form>
        </div>
        ` 
        , 




        `

         <div class="bg-light rounded">
        <button class="btn-light p-2 bg-light">
          اضغط هنا لتعرف كيف تعمل المنصة
        </button>
        <h3>طلب عرض سعر</h3>
        <h1>خرسانة جاهزة</h1>
        <div class="text-center">
          <img class="col-2 mb-3" src="images/1.jpg" alt="" />
        </div>
        <div class="text-end">
          <button class="mt-3 btn-form btn-form-comblete mb-5">
            1 معلومات عن المنتج
          </button>
          <button class="mt-3 btn-form mb-5">2 المشروع</button>
          <button class="mt-3 btn-form mb-5" disabled>3 تفاصيل اخرى</button>
          <button class="mt-3 btn-form mb-5" disabled>4 ازاي نوصلك</button>
        </div>
        <form class="text-end">
          <div class="my-bg">
            <p class="text-end pt-5" style="color: gray">مكان المشروع</p>
            <input list="options" id="mount" required />
            <datalist id="options">
              <option value="القاهرة" selected>القاهرة</option>
              <option value="الاسكندرية">الاسكندرية</option>
              <option value="سوهاج">سوهاج</option>
              <option value="اسيوط">اسيوط</option>
              <option value="المنيا">المنيا</option>
              <option value="الفيوم">الفيوم</option>
              <option value="المنصورة">المنصورة</option>
              <option value="بني سويف">بني سويف</option>
            </datalist>

            <p class="text-end" style="color: gray">ادخل عنوان المشروع</p>

            <input type="text" required placeholder="عنوان المشروع" />

            <p class="text-end" style="color: gray">مرحلة المشروع</p>
            <input list="level" required />
            <datalist id="level">
              <option value="مرحلة تقديم المناقاصات" selected>
                مرحلة تقديم المناقاصات
              </option>
              <option value="مرحلة التنفيذ">مرحلة التنفيذ</option>
            </datalist>
            <label for="birthday">Date</label>
            <input type="date" id="birthday" name="birthday" />
            
          </div>
        </form>
      </div>
        
        
        `

        , 

        `
          <div class="bg-light rounded">
        <button class="btn-light p-2 bg-light">
          اضغط هنا لتعرف كيف تعمل المنصة
        </button>
        <h3>طلب عرض سعر</h3>
        <h1>خرسانة جاهزة</h1>
        <div class="text-center">
          <img class="col-2 mb-3" src="images/1.jpg" alt="" />
        </div>
        <div class="text-end">
          <button  class="mt-3 btn-form btn-form-comblete mb-5">
            1 معلومات عن المنتج
          </button>
          <button class="mt-3 btn-form btn-form-comblete mb-5">
            2 المشروع
          </button>
          <button class="mt-3 btn-form mb-5">3 تفاصيل اخرى</button>
          <button class="mt-3 btn-form mb-5" disabled>4 ازاي نوصلك</button>
        </div>
        <form class="text-end">
          <div class="my-bg">
            <p class="text-end pt-5" style="color: gray">طريقة الدفع</p>
            <input list="options" id="mount" required />
            <datalist id="options">
              <option value="اجل" selected>اجل</option>
              <option value="كاش او تحويل بنكي">كاش او تحويل بنكي</option>
            </datalist>
            <p class="text-end" style="color: gray">تفاصيل اخرى بالطلب</p>
            <input type="text" required />
            
          </div>
        </form>
      </div>
        
        ` 
        ,

        `
          <div class="bg-light rounded">
        <button class="btn-light p-2 bg-light">
          اضغط هنا لتعرف كيف تعمل المنصة
        </button>
        <h3>طلب عرض سعر</h3>
        <h1>خرسانة جاهزة</h1>
        <div class="text-center">
          <img class="col-2 mb-3" src="images/1.jpg" alt="" />
        </div>
        <div class="text-end">
          <button class="mt-3 btn-form btn-form-comblete mb-5">
            1 معلومات عن المنتج
          </button>
          <button class="mt-3 btn-form btn-form-comblete mb-5">
            2 المشروع
          </button>
          <button class="mt-3 btn-form btn-form-comblete mb-5">
            3 تفاصيل اخرى
          </button>
          <button class="mt-3 btn-form mb-5">4 ازاي نوصلك</button>
        </div>
        <form class="text-end">
          <div class="my-bg">
            <p class="text-end pt-5" style="color: gray">اسم شركتك ايه؟</p>
            <input type="text" required />

            <p class="text-end" style="color: gray">اسم الشخص المفوض ثنائي</p>
            <input type="text" required />
            <p class="text-end" style="color: gray">
              رقم الموبايل المسجل على واتساب
            </p>
            <input type="number" />
            <p class="text-end" style="color: gray">ايميلك</p>
            <input type="email" placeholder="مثال usamarabie21@gmail.com" />
            <div class="mt-3">
              <input
                class="checkbox col-1"
                type="checkbox"
                id="remmber"
                checked
              />
              <label for="remmber">تذكرني على هذا الجهاز</label>
            </div>

            <div class="mt-3">
              <input
                class="checkbox col-1"
                type="checkbox"
                id="remmber2"
                checked
              />
              <label for="remmber2"> تذكر المشروع</label>
            </div>
            
          </div>
        </form>
      </div>
        `
      ];
      let main = document.getElementById("main");
      let i = 0;
      main.innerHTML = `${form[i]}`;
      let next = document.getElementById("next");
      let back = document.getElementById("back");
      // when press next
      next.addEventListener("click" , (eo) => {
         i++;
        console.log(i);
        main.innerHTML = form[`${i}`];
        if(i>0)
          back.removeAttribute("disabled");
        if(i==form.length-1)
           next.setAttribute("disabled" , "");
      
      }
      )

// when press back
       back.addEventListener("click" , (eo) => {
         next.removeAttribute("disabled");
         i--;
        console.log(i);
        main.innerHTML = form[`${i}`];
        if(i==0)
         back.setAttribute("disabled" , "");
         
          

      }
      )