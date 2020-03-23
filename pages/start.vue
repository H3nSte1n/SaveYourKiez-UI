<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" push-sm="1" push-md="2">
        <h1 class="display-2 mb-10">
          shoutout.
          <s>jetzt</s>
          <span class="font-weight-black">bald</span>
        </h1>
        <p class="font-weight-bold">
          Ihr braucht ein Shoutout oder wollt shoutouten?
        </p>
        <p>Dann lasst uns eure E-Mail Adresse da und wir schicken euch eine Benachrichtigung, sobald wir live sind.</p>
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
          <form
            id="mc-embedded-subscribe-form"
            action="https://jetzt.us19.list-manage.com/subscribe/post?u=302cdd14aadcf8513d7086d26&amp;id=15cdd750e4"
            method="post"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <v-flex class="d-md-flex fillheight">
                <v-text-field
                  id="mce-EMAIL"
                  type="email"
                  value=""
                  outlined
                  tile
                  color="#000"
                  name="EMAIL"
                  label="Deine E-Mail Adresse"
                  class="required email mr-3"
                />
                <v-btn
                  id="mc-embedded-subscribe"
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  dark
                  color="#000"
                  tile
                  x-large
                  class="align-self-auto mb-10 mb-md-0"
                >
                  Ab auf die Liste
                </v-btn>
              </v-flex>
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube-nocookie.com/embed/WgSPyhn-6Gg?rel=0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <div id="mce-responses" class="clear">
                <div id="mce-error-response" class="response" style="display:none" />
                <div id="mce-success-response" class="response" style="display:none" />
              </div>
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input type="text" name="b_302cdd14aadcf8513d7086d26_15cdd750e4" tabindex="-1" value="">
              </div>
            </div>
          </form>
        </div>
        <!--End mc_embed_signup-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
}
</script>
