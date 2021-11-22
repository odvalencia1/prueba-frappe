# Copyright (c) 2021, orlando Cholota and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class Solicitud(Document):
	def before_save(self):
		self.capital = self.totalactivo - self.totalpasivo
	def before_insert(self):
		self.capital = self.totalactivo - self.totalpasivo
