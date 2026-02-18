// Copyright (c) 2026, Michael  and contributors
// For license information, please see license.txt

frappe.ui.form.on("Loan", {
	refresh(frm) {
        // frm.set_query("field_name", function())
        frm.set_query("book",function(){
            return{
                //filters:{status:"Available"}
                filters:{status:["!=","Available"]}
            }
        })
	},
});
