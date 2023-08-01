import{d as k,a as n,q,o as l,c as d,e,t as o,u as P,v as p,x as m,y as u,z as v,h as r,D as V,A as b}from"./index-a031bde1.js";const C={class:"card"},I=e("strong",null,"Ссылка на товар:",-1),L=e("strong",null,"Количество товара:",-1),N=e("strong",null,"Цена товара:",-1),S={class:"order-chat"},U={class:"user-message"},A={class:"order-status"},B={class:"order-status"},D={class:"order-status"},T="01.08.2023 12:34",F=k({__name:"order-info",setup(w){const x=[{id:1,link:"https://example.com/product?id=42",quantity:2,price:"$50"},{id:2,link:"https://example.com/product?id=37",quantity:1,price:"$30"}],f=n(80),_=n(90),y=n("В обработке"),M=["Зарегистрированно","Заказано","На складе","На складе без фактуры","Отказано","Реализовано"],a=n(""),i=n([{id:1,fromModerator:!0,text:"Здравствуйте, Иван! Благодарим за ваш заказ. Какой размер футболок вам нужен?"},{id:2,fromModerator:!1,text:"Размер футболок - L, а носки обычные 39-42."},{id:3,fromModerator:!0,text:"Отлично! Ваш заказ принят. Оплатите, пожалуйста, сумму в 1500 рублей на указанный ниже счет."},{id:4,fromModerator:!1,text:"Хорошо, сейчас оплачу. Как долго займет доставка?"},{id:5,fromModerator:!0,text:"После оплаты, доставка займет около 3-5 рабочих дней. Мы приложим все усилия, чтобы доставить вам заказ как можно скорее."},{id:6,fromModerator:!1,text:"Отлично, спасибо за помощь! Жду доставки."},{id:7,fromModerator:!0,text:"Не за что, Иван! Если у вас возникнут вопросы или нужна дополнительная помощь, обращайтесь."}]),h=()=>{a.value&&(i.value.push({id:i.value.length+1,fromModerator:!1,text:a.value}),a.value="")},c=q().query.orderId,g=Array.isArray(c)?c[0]:c;return($,s)=>(l(),d("div",C,[e("h5",null,"Заказ #"+o(P(g)),1),(l(),d(p,null,m(x,t=>e("div",{key:t.id,class:"order-info"},[e("h3",null,"Товар "+o(t.id),1),e("p",null,[I,r(" "+o(t.link),1)]),e("p",null,[L,r(" "+o(t.quantity),1)]),e("p",null,[N,r(" "+o(t.price),1)])])),64)),e("div",S,[(l(!0),d(p,null,m(i.value,t=>(l(),d("div",{key:t.id,class:"chat-message"},[e("p",{class:b({"from-moderator":t.fromModerator})},o(t.fromModerator?"Менеджер:":"Иван:")+" "+o(t.text),3)]))),128))]),e("div",U,[u(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t),class:"p-componet p-input",type:"text",placeholder:"Введите сообщение от вашего имени"},null,512),[[v,a.value]]),e("button",{class:"p-componet p-button",onClick:h},"Отправить")]),e("div",{class:"order-created"},"Время создания заказа: "+o(T)),e("div",A,[r(" Статус заказа: "),u(e("select",{"onUpdate:modelValue":s[1]||(s[1]=t=>y.value=t),class:"p-componet p-input"},[(l(),d(p,null,m(M,t=>e("option",{key:t},o(t),1)),64))],512),[[V,y.value]])]),e("div",B,[r(" Цена закупки: "),u(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>f.value=t),type:"number",class:"p-componet p-input",step:"0.01",min:"0"},null,512),[[v,f.value]]),r(" PLN ")]),e("div",D,[r(" Цена продажи: "),u(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>_.value=t),type:"number",class:"p-componet p-input",step:"0.01",min:"0"},null,512),[[v,_.value]]),r(" PLN ")])]))}});export{F as default};
