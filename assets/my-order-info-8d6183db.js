import{d as v,a as u,q as x,o as s,c as a,e,t as r,u as y,v as c,x as m,y as h,z as M,h as l,A as g}from"./index-a031bde1.js";const k={class:"card"},q=e("strong",null,"Ссылка на товар:",-1),P=e("strong",null,"Количество товара:",-1),C=e("strong",null,"Цена товара:",-1),I={class:"order-chat"},L={class:"user-message"},N=80,b=90,A="В обработке",B="01.08.2023 12:34",R=v({__name:"my-order-info",setup(T){const p=[{id:1,link:"https://example.com/product?id=42",quantity:2,price:"$50"},{id:2,link:"https://example.com/product?id=37",quantity:1,price:"$30"}],o=u(""),d=u([{id:1,fromModerator:!0,text:"Здравствуйте, Иван! Благодарим за ваш заказ. Какой размер футболок вам нужен?"},{id:2,fromModerator:!1,text:"Размер футболок - L, а носки обычные 39-42."},{id:3,fromModerator:!0,text:"Отлично! Ваш заказ принят. Оплатите, пожалуйста, сумму в 1500 рублей на указанный ниже счет."},{id:4,fromModerator:!1,text:"Хорошо, сейчас оплачу. Как долго займет доставка?"},{id:5,fromModerator:!0,text:"После оплаты, доставка займет около 3-5 рабочих дней. Мы приложим все усилия, чтобы доставить вам заказ как можно скорее."},{id:6,fromModerator:!1,text:"Отлично, спасибо за помощь! Жду доставки."},{id:7,fromModerator:!0,text:"Не за что, Иван! Если у вас возникнут вопросы или нужна дополнительная помощь, обращайтесь."}]),f=()=>{o.value&&(d.value.push({id:d.value.length+1,fromModerator:!1,text:o.value}),o.value="")},n=x().query.orderId,_=Array.isArray(n)?n[0]:n;return(z,i)=>(s(),a("div",k,[e("h5",null,"Заказ #"+r(y(_)),1),(s(),a(c,null,m(p,t=>e("div",{key:t.id,class:"order-info"},[e("h3",null,"Товар "+r(t.id),1),e("p",null,[q,l(" "+r(t.link),1)]),e("p",null,[P,l(" "+r(t.quantity),1)]),e("p",null,[C,l(" "+r(t.price),1)])])),64)),e("div",I,[(s(!0),a(c,null,m(d.value,t=>(s(),a("div",{key:t.id,class:"chat-message"},[e("p",{class:g({"from-moderator":t.fromModerator})},r(t.fromModerator?"Менеджер:":"Иван:")+" "+r(t.text),3)]))),128))]),e("div",L,[h(e("input",{"onUpdate:modelValue":i[0]||(i[0]=t=>o.value=t),class:"p-componet p-input",type:"text",placeholder:"Введите сообщение от вашего имени"},null,512),[[M,o.value]]),e("button",{class:"p-componet p-button",onClick:f},"Отправить")]),e("div",{class:"order-created"},"Время создания заказа: "+r(B)),e("div",{class:"order-status"},"Статус заказа: "+r(A)),e("div",{class:"order-status"},"Цена закупки: "+r(N)+" PLN"),e("div",{class:"order-status"},"Цена продажи: "+r(b)+" PLN")]))}});export{R as default};
