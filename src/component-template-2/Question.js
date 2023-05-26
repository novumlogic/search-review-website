
function Question({ awardData }) {

  return (
    <section class="py-5">
      <div class="container px-5 my-5">
        <div class="text-center mb-5">
          <h3 class="fw-bold"><span>Frequently Asked Questions</span></h3>
        </div>
        <div class="row gx-5 pt-4">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button h4 m-0" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="mx-2 px-2 left-outline">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until
                    the collapse plugin adds the appropriate classes that we use to style each element.
                    These classes control the overall appearance, as well as the showing and hiding via CSS
                    transitions. You can modify any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="mx-2 px-2 left-outline">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until
                    the collapse plugin adds the appropriate classes that we use to style each element.
                    These classes control the overall appearance, as well as the showing and hiding via CSS
                    transitions. You can modify any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="mx-2 px-2 left-outline">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until
                    the collapse plugin adds the appropriate classes that we use to style each element.
                    These classes control the overall appearance, as well as the showing and hiding via CSS
                    transitions. You can modify any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Question;
