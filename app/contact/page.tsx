"use client"

import type React from "react"

import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title={t("contactTitle")}
        description={t("contactDescription")}
        backgroundImage="/antalya-sunset.png"
      />

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t("contactGetInTouch")}</h2>
            <p className="text-gray-600 mb-8">{t("contactMessage")}</p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t("contactPhone")}</h3>
                  <p className="text-gray-600">+90 555 123 4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t("contactEmail")}</h3>
                  <p className="text-gray-600">info@aurasmilestudio.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t("contactAddress")}</h3>
                  <p className="text-gray-600">{t("contactAddressLine")}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">{t("contactSendMessage")}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contactFormName")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contactFormEmail")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contactFormSubject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("contactFormMessage")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors flex items-center justify-center"
                >
                  {formStatus === "submitting" ? (
                    t("contactFormSubmitting")
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      {t("contactFormSubmit")}
                    </>
                  )}
                </button>

                {formStatus === "success" && (
                  <div className="text-green-600 text-center font-medium">{t("contactFormSuccess")}</div>
                )}

                {formStatus === "error" && (
                  <div className="text-red-600 text-center font-medium">{t("contactFormError")}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
