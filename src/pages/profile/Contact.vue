<script setup lang="ts">
import ArrowIcon from '../../components/ui/ArrowIcon.vue'
import PageHeading from '../../components/ui/PageHeading.vue'
import SocialLinks from '../../components/ui/SocialLinks.vue'
import { profile } from './data/profile'
</script>

<template>
  <div>
    <PageHeading eyebrow="Get in touch" title="Good software starts with a conversation." description="Have a project, an opportunity, or an idea to share? I’d like to hear from you." />
    <div class="contact-grid">
      <section class="contact-panel" aria-labelledby="direct-title" data-reveal>
        <p class="eyebrow">Say hello</p>
        <h2 id="direct-title">Let’s connect.</h2>
        <dl class="contact-details">
          <div>
            <dt>Email</dt>
            <dd><a :href="`mailto:${profile.email}`">{{ profile.email }} <ArrowIcon /></a></dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd><a :href="profile.phoneHref">{{ profile.phone }} <ArrowIcon /></a></dd>
          </div>
          <div><dt>Location</dt><dd>{{ profile.location }}</dd></div>
        </dl>
      </section>
      <section class="contact-social" aria-labelledby="elsewhere-title" data-reveal>
        <p class="eyebrow">Around the web</p>
        <h2 id="elsewhere-title">Find me elsewhere.</h2>
        <p>Explore my code, connect professionally, or say hello on social media.</p>
        <SocialLinks />
        <p class="muted contact-note">Email and phone links open your device’s email or calling app.</p>
      </section>
    </div>
  </div>
</template>
