<div class="form-success text-center hidden">
  Thank you! Your submission has been received!<br>We will respond in
    1 - 3 business days.
</div>
<div class="form-error text-center hidden">
  Oops! Something went wrong and your message couldn't be sent. Please try again later.
</div>
<form id="contact_form" name="contact_form" enctype="multipart/form-data">
  <div class="row">
    <div class="col-sm-6">
      <div class="form-col">
        <label for="first_name">First Name *</label>
        <input id="first_name" maxlength="40" name="first_name" size="20" type="text">
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-col">
        <label for="last_name">Last Name *</label>
        <input id="last_name" maxlength="80" name="last_name" size="20" type="text">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6">
      <div class="form-col">
        <label for="phone">Phone *</label>
        <input id="phone" maxlength="40" name="phone" size="20" type="tel">
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-col">
        <label for="email">Email *</label>
        <input id="email" maxlength="80" name="email" size="20" type="email">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-col">
        <label for="description">Description *</label>
        <textarea id="description" maxlength="5000" name="description"></textarea>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-col">
        <label for="found_us">How You Found Us</label>
        <select id="found_us" name="found_us" title="How You Found Us">
          <option value="">&#8211;None&#8211;</option>
          <option value="I'm a return guest">I&#8217;m a return guest</option>
          <option value="Someone referred me">Someone referred me</option>
          <option value="Google">Google</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Yahoo">Yahoo</option>
          <option value="Bing">Bing</option>
          <option value="Another website">Another website</option>
          <option value="Travel agent">Travel agent</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-col">
        <label class="form-checkbox">
          <input id="opt_in" name="opt_in" type="checkbox" />
          <span class="opt-in-label">Receive emails about Venture Outdoors
            Promotions, Updates, and Discounts</span>
        </label>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-col hidden">
        <label for="extra">Extra</label>
        <input id="extra" maxlength="256" name="extra" type="text">
      </div>
    </div>
  </div>
  <div class="g-recaptcha g-recaptcha-error g-recaptcha-disabled" data-sitekey="6Ld4zykdAAAAAA-V3HxD3SHxC9H-XPFkClkOAGB4">
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-col">
        <input id="submit" name="submit" type="submit" data-wait="Please wait...">
        </div>
    </div>
  </div>
</form>