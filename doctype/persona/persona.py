# Copyright (c) 2021, orlando Cholota and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class Persona(Document):
	def before_insert(self):
		self.codigo=self.cedula + "-" + self.apellidos + " " + self.nombres
