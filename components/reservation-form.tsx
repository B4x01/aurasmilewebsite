"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "./language-provider"

export default function ReservationForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form and show success message
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    })
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-4">
          {t("formSuccessMessage")}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t("formNameLabel")} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[rgb(var(--primary))] focus:border-[rgb(var(--primary))] outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t("formEmailLabel")} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[rgb(var(--primary))] focus:border-[rgb(var(--primary))] outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {t("formPhoneLabel")} *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[rgb(var(--primary))] focus:border-[rgb(var(--primary))] outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            {t("formServiceLabel")} *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[rgb(var(--primary))] focus:border-[rgb(var(--primary))] outline-none transition-colors"
          >
            <option value="">{t("formServiceSelectOption")}</option>
            <option value="dental">{t("formServiceDental")}</option>
            <option value="aesthetic">{t("formServiceAesthetic")}</option>
            <option value="accommodation">{t("formServiceAccommodation")}</option>
            <option value="transfer">{t("formServiceTransfer")}</option>
            <option value="tickets">{t("formServiceTickets")}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
          {t("formDateLabel")}
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[rgb(var(--primary))] focus:border-[rgb(var(--primary))] outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {t("formMessageLabel")} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[rgb(var(--primary))] focus:border-[rgb(var(--primary))] outline-none transition-colors"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))]/90 text-white font-bold py-3 px-6 rounded-md transition-colors disabled:opacity-70"
      >
        {isSubmitting ? t("formSubmitting") : t("formSubmitButton")}
      </button>
    </form>
  )
}
