// Copyright (c) 2021, orlando Cholota and contributors
// For license information, please see license.txt

frappe.ui.form.on('Solicitud', {
	validate:function(frm){
		if( frm.doc.producto =="Microcrédito" && frm.doc.montosolicitado> 1000 ) {	
			frappe.throw("Monto no válido para producto");
		}
		if( frm.doc.producto =="Consumo" && frm.doc.montosolicitado<= 1000 || frm.doc.producto =="Consumo" && frm.doc.montosolicitado> 20000 ) {	
			frappe.throw("Monto no válido para producto");
		}
		if( frm.doc.producto =="Vivienda" && frm.doc.montosolicitado<= 20000  ) {	
			frappe.throw("Monto no válido para producto");
		}
		if( frm.doc.solicitante == frm.doc.garante ) {	
			frappe.throw("Garante no valido");
		}
	}
});
