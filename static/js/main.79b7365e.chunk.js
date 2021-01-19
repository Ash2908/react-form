(this["webpackJsonpshift-form"]=this["webpackJsonpshift-form"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),i=a(14),d=a.n(i),r=(a(26),a(27),a(2)),l=a(15),h=a(16),j=a(17),o=a(20),u=a(19),b=(a(28),function(){return Object(n.jsx)("div",{style:{color:"white"},children:"List of All Shifts"})}),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var c;Object(h.a)(this,a),(c=t.call(this,e)).handleSubmit=function(e){c.setState({isSubmitted:!0}),e.preventDefault()},c.handleChange=function(e){var t=e.target,a="radio"===t.type?t.checked:t.value,n=t.name;c.setState(Object(l.a)({},n,a))},c.handleOptionChange=function(e){c.setState({daySelected:e.target.value})},c.renderForm=function(){return Object(n.jsxs)("div",{className:"shift-form",children:[Object(n.jsx)("h4",{children:"Select Start Date and Shift Times"}),Object(n.jsx)("span",{children:"each row represents a shift"}),Object(n.jsxs)("form",{onSubmit:c.handleSubmit,children:[Object(n.jsxs)("label",{className:"spacing",children:[Object(n.jsx)("h5",{children:"Select Start Date"}),Object(n.jsx)("input",{type:"date",name:"start_date",value:c.state.start_date,onChange:c.handleChange,required:!0})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("label",{className:"spacing",children:[Object(n.jsx)("h5",{children:"Select Repeat Type"}),Object(n.jsxs)("select",{name:"repeat_type",value:c.state.repeat_type,onChange:c.handleChange,required:!0,children:[Object(n.jsx)("option",{value:"Repeats",children:"Repeats"}),Object(n.jsx)("option",{value:"None",children:"None"}),Object(n.jsx)("option",{value:"Daily",children:"Daily"}),Object(n.jsx)("option",{value:"Weekly",children:"Weekly"})]})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("label",{className:"spacing",children:[Object(n.jsx)("h5",{children:"Select Shift"}),Object(n.jsxs)("select",{name:"shift",value:c.state.shift,onChange:c.handleChange,required:!0,children:[Object(n.jsx)("option",{value:"Shifts",children:"Shifts"}),Object(n.jsx)("option",{value:"Morning Shift - 5am to 9am",children:"Morning Shift - 5am to 9am"})]})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("label",{className:"spacing",children:[Object(n.jsx)("h5",{children:"Select Start Time"}),Object(n.jsx)("input",{type:"time",name:"start_time",value:c.state.start_time,onChange:c.handleChange,required:!0})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("label",{className:"spacing",children:[Object(n.jsx)("h5",{children:"Select End Time"}),Object(n.jsx)("input",{type:"time",name:"end_time",value:c.state.end_time,onChange:c.handleChange,required:!0})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("fieldset",{children:[Object(n.jsx)("legend",{className:"spacing linewrap",children:"Please select the day of the week"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"radio",name:"Monday",value:"Monday",checked:"Monday"===c.state.daySelected,onChange:c.handleOptionChange}),"MON",Object(n.jsx)("input",{type:"radio",name:"Tuesday",value:"Tuesday",checked:"Tuesday"===c.state.daySelected,onChange:c.handleOptionChange}),"TUE",Object(n.jsx)("input",{type:"radio",name:"Wednesday",value:"Wednesday",checked:"Wednesday"===c.state.daySelected,onChange:c.handleOptionChange}),"WED",Object(n.jsx)("input",{type:"radio",name:"Thursday",value:"Thursday",checked:"Thursday"===c.state.daySelected,onChange:c.handleOptionChange}),"THU",Object(n.jsx)("input",{type:"radio",name:"Friday",value:"Friday",checked:"Friday"===c.state.daySelected,onChange:c.handleOptionChange}),"FRI",Object(n.jsx)("input",{type:"radio",name:"Saturday",value:"Saturday",checked:"Saturday"===c.state.daySelected,onChange:c.handleOptionChange}),"SAT",Object(n.jsx)("input",{type:"radio",name:"Sunday",value:"Sunday",checked:"Sunday"===c.state.daySelected,onChange:c.handleChange}),"SUN"]}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"radio",name:"Weekdays",checked:c.state.weekdays===!("Saturday"===c.state.daySelected||"Sunday"===c.state.daySelected),onChange:c.handleChange}),Object(n.jsx)("h5",{children:"Weekdays Only"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{className:"spacing",type:"submit",value:"Submit Form"})]})]})};var s=new Date;return c.state={start_date:s,repeat_type:"Repeats",shift:"Shifts",start_time:"00:00",end_time:"00:01",daySelected:"Monday",weekdays:!0,isSubmitted:!1},c}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:this.state.isSubmitted?Object(n.jsx)(b,{}):this.renderForm()})}}]),a}(s.a.Component);var O=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(r.c,{children:[Object(n.jsx)(r.a,{exact:!0,path:"/react-form",component:p}),Object(n.jsx)(r.a,{exact:!0,path:"/shifts",component:b})]})})},y=a(11),m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};d.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(y.a,{children:Object(n.jsx)(O,{})})}),document.getElementById("root")),m()}},[[37,1,2]]]);
//# sourceMappingURL=main.79b7365e.chunk.js.map