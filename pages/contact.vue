<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p class="text-xl text-gray-600">
          Ready to find your dream property? Get in touch with our expert team.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">
            Send us a message
          </h2>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            class="space-y-6"
            @submit.prevent="submitForm"
          >
            <!-- Hidden fields for Netlify -->
            <input type="hidden" name="form-name" value="contact" >
            <div style="display: none">
              <label
                >Don't fill this out if you're human: <input name="bot-field"
              ></label>
            </div>

            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                name="name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your full name"
              >
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                name="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="your.email@example.com"
              >
            </div>

            <div>
              <label
                for="phone"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                name="phone"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="(555) 123-4567"
              >
            </div>

            <div>
              <label
                for="interest"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                I'm interested in
              </label>
              <select
                id="interest"
                v-model="form.interest"
                name="interest"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select an option</option>
                <option value="buying">Buying a property</option>
                <option value="selling">Selling a property</option>
                <option value="renting">Renting a property</option>
                <option value="investment">Investment opportunities</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                name="message"
                rows="5"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Tell us about your property needs..."
              />
            </div>

            <UButton
              type="submit"
              size="lg"
              class="w-full"
              :loading="isSubmitting"
              :disabled="isSubmitting"
            >
              <UIcon
                v-if="!isSubmitting"
                name="i-heroicons-paper-airplane"
                class="w-5 h-5 mr-2"
              />
              {{ isSubmitting ? "Sending..." : "Send Message" }}
            </UButton>
          </form>

          <!-- Success Message -->
          <div
            v-if="showSuccess"
            class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <div class="flex items-center">
              <UIcon
                name="i-heroicons-check-circle"
                class="w-5 h-5 text-green-500 mr-2"
              />
              <p class="text-green-800">
                Thank you! Your message has been sent successfully.
              </p>
            </div>
          </div>

          <!-- Error Message -->
          <div
            v-if="showError"
            class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <div class="flex items-center">
              <UIcon
                name="i-heroicons-exclamation-triangle"
                class="w-5 h-5 text-red-500 mr-2"
              />
              <p class="text-red-800">
                Sorry, there was an error sending your message. Please try
                again.
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div>
          <h2 class="text-2xl font-semibold text-gray-900 mb-6">
            Get in touch
          </h2>

          <div class="space-y-6">
            <div class="flex items-start">
              <UIcon
                name="i-heroicons-map-pin"
                class="w-6 h-6 text-primary-600 mr-4 mt-1"
              />
              <div>
                <h3 class="font-semibold text-gray-900">Address</h3>
                <p class="text-gray-600">
                  123 Property Street<br >Real Estate District<br >City, State
                  12345
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <UIcon
                name="i-heroicons-phone"
                class="w-6 h-6 text-primary-600 mr-4 mt-1"
              />
              <div>
                <h3 class="font-semibold text-gray-900">Phone</h3>
                <p class="text-gray-600">(555) 123-4567</p>
              </div>
            </div>

            <div class="flex items-start">
              <UIcon
                name="i-heroicons-envelope"
                class="w-6 h-6 text-primary-600 mr-4 mt-1"
              />
              <div>
                <h3 class="font-semibold text-gray-900">Email</h3>
                <p class="text-gray-600">hello@propertydemo.com</p>
              </div>
            </div>

            <div class="flex items-start">
              <UIcon
                name="i-heroicons-clock"
                class="w-6 h-6 text-primary-600 mr-4 mt-1"
              />
              <div>
                <h3 class="font-semibold text-gray-900">Office Hours</h3>
                <p class="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br >
                  Saturday: 10:00 AM - 4:00 PM<br >
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="mt-8 p-6 bg-primary-50 rounded-lg">
            <h3 class="font-semibold text-gray-900 mb-2">
              Ready to get started?
            </h3>
            <p class="text-gray-600 mb-4">
              Our team of experts is here to help you find the perfect property
              or get the best value for your current one.
            </p>
            <NuxtLink to="/">
              <UButton variant="outline">
                <UIcon name="i-heroicons-home-modern" class="w-4 h-4 mr-2" />
                Browse Properties
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: "Contact Us - PropertyDemo",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with our property experts. We're here to help you find your dream home or sell your current property.",
    },
  ],
});

// Form state
const form = ref({
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
});

const isSubmitting = ref(false);
const showSuccess = ref(false);
const showError = ref(false);

// Form submission
const submitForm = async () => {
  isSubmitting.value = true;
  showSuccess.value = false;
  showError.value = false;

  try {
    // Create form data for Netlify
    const formData: Record<string, string> = {
      "form-name": "contact",
      ...form.value,
    };

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      showSuccess.value = true;
      // Reset form
      form.value = {
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      };
    } else {
      showError.value = true;
    }
  } catch (error) {
    console.error("Form submission error:", error);
    showError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};
</script>
