import type { Metadata } from "next";
import "./sales-page.css";

const checkoutUrl = "https://buy.stripe.com/aFa3cxfEWgRoa8EbeiaAw00";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pain-Free Latch Blueprint | Breastfeeding Guide",
  description:
    "A premium beginner breastfeeding guide for new moms who want a deeper latch, calmer feeds, and less nipple pain.",
  openGraph: {
    title: "Pain-Free Latch Blueprint",
    description:
      "Learn the latch before pain becomes the whole story. Premium PDF with diagrams, checklists, and a 7-day latch reset.",
    images: ["/breastfeeding-product/assets/mother-baby-hero.png"]
  }
};

export default function SalesPage() {
  return (
    <main className="pf-page">
      <section className="pf-hero">
        <img
          src="/breastfeeding-product/assets/mother-baby-hero.png"
          alt="Smiling mother holding her baby in a soft nursery"
        />
        <div className="pf-wrap">
          <div className="pf-eyebrow">Premium breastfeeding guide for first-time moms</div>
          <h1>Learn the latch before pain becomes the whole story.</h1>
          <p className="pf-lead">
            A visual, step-by-step PDF for new moms who want a deeper latch, calmer feeds, and a clear plan
            for what to check when breastfeeding hurts.
          </p>
          <div className="pf-actions">
            <a className="pf-button" href="#buy">
              Get The Guide Today
            </a>
            <a className="pf-button pf-secondary" href="#inside">
              See What Is Inside
            </a>
          </div>
          <div className="pf-trust">
            <span>24-page premium PDF</span>
            <span>Visual diagrams</span>
            <span>7-day latch reset</span>
            <span>Printable checklists</span>
          </div>
        </div>
      </section>

      <section className="pf-section pf-blush">
        <div className="pf-wrap pf-two">
          <div>
            <div className="pf-kicker">If this sounds familiar</div>
            <h2>The first weeks can feel tender, confusing, and lonely.</h2>
            <p>
              You are trying to feed your baby, recover from birth, and stay calm while every feed feels like a
              test. A lot of new moms are told breastfeeding is natural, but they are never shown what a deep latch
              actually looks like.
            </p>
            <div className="pf-pain-list">
              <div className="pf-pain-item">"The latch starts okay, then it turns into pinching."</div>
              <div className="pf-pain-item">"My nipple looks flattened after feeds and I do not know what that means."</div>
              <div className="pf-pain-item">"I keep changing positions, but I am still guessing."</div>
              <div className="pf-pain-item">"I want to keep breastfeeding, but I need it to hurt less."</div>
            </div>
            <p className="pf-mini">
              These are composite voice-of-mom excerpts based on common early breastfeeding struggles, not
              individual customer claims.
            </p>
          </div>
          <div className="pf-photo">
            <img src="/breastfeeding-product/assets/pain-moment.png" alt="New mother looking concerned in a nursery" />
          </div>
        </div>
      </section>

      <section className="pf-section pf-band">
        <div className="pf-wrap">
          <div className="pf-kicker">You are not the only one</div>
          <h2>Relatable moments from new moms learning to breastfeed</h2>
          <div className="pf-grid">
            <div className="pf-quote">
              <p>
                "I thought pain meant I just had to be tougher. What I really needed was someone to show me what
                to check before baby latched."
              </p>
              <div className="pf-name">Composite story - first week postpartum</div>
            </div>
            <div className="pf-quote">
              <p>
                "At 3 a.m. I could not remember any advice. I needed a simple order: get close, wait for wide,
                chin first, then check how it feels."
              </p>
              <div className="pf-name">Composite story - nighttime feeds</div>
            </div>
            <div className="pf-quote">
              <p>
                "I kept wondering if my baby was getting enough. Having a guide that explained comfort and milk
                transfer helped me know when to call for help."
              </p>
              <div className="pf-name">Composite story - anxious first-time mom</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pf-section">
        <div className="pf-wrap pf-two">
          <div>
            <div className="pf-kicker">The method</div>
            <h2>A clearer latch starts before baby's mouth closes.</h2>
            <p>
              Pain-Free Latch Blueprint teaches a simple sequence you can repeat during real feeds: settle your
              body, align baby, aim nose to nipple, wait for a wide mouth, bring baby in chin first, then check
              comfort and nipple shape.
            </p>
            <ul>
              <li>Understand the difference between a shallow and deeper latch.</li>
              <li>Know what pinching, slipping, clicking, or flattened nipples may be telling you.</li>
              <li>Use a gentle 10-second reset instead of pulling baby off or pushing through pain.</li>
              <li>Know when symptoms deserve support from an IBCLC or clinician.</li>
            </ul>
          </div>
          <div className="pf-photo">
            <img
              src="/breastfeeding-product/assets/ebook-visuals/latch-sequence.png"
              alt="Five step latch sequence diagram"
            />
          </div>
        </div>
      </section>

      <section id="inside" className="pf-section pf-band">
        <div className="pf-wrap">
          <div className="pf-kicker">What you get</div>
          <h2>Inside the premium guide</h2>
          <div className="pf-inside">
            <div className="pf-card">
              <h3>10 practical chapters</h3>
              <p>
                Mindset, latch anatomy, setup, deep latch sequence, positions, pain troubleshooting, milk transfer,
                special situations, and printables.
              </p>
            </div>
            <div className="pf-card">
              <h3>Custom visual diagrams</h3>
              <p>Deep vs shallow latch map, five-step latch sequence, position finder, pain reset, and 7-day tracker.</p>
            </div>
            <div className="pf-card">
              <h3>7-day latch reset</h3>
              <p>A realistic practice plan that changes one thing at a time so the next feed feels less chaotic.</p>
            </div>
            <div className="pf-card">
              <h3>Printable support sheets</h3>
              <p>Pre-feed checklist, after-feed notes, and a lactation support prep sheet for appointments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pf-section pf-blush">
        <div className="pf-wrap pf-two">
          <div className="pf-photo">
            <img src="/breastfeeding-product/assets/guide-author.png" alt="Calm mother in a nursery" />
          </div>
          <div>
            <div className="pf-kicker">What changes</div>
            <h2>Instead of guessing, you know what to check next.</h2>
            <p>
              This guide does not promise a perfect feed or replace a lactation consultant. It gives you language,
              visuals, and a step-by-step routine so you can stop collecting random tips and start noticing the
              latch clues that matter.
            </p>
            <div className="pf-card">
              <h3>Use it during the next feed</h3>
              <p>
                Open the checklist on your phone, follow the sequence, and write down what changes: pain timing,
                nipple shape, baby's body position, and swallowing signs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="buy" className="pf-section pf-band">
        <div className="pf-wrap pf-two">
          <div>
            <div className="pf-kicker">Instant access</div>
            <h2>Start the next feed with a better plan.</h2>
            <p>Get the premium PDF and keep the latch checklist open during your next breastfeeding session.</p>
            <ul>
              <li>24-page premium digital guide</li>
              <li>Works on phone, tablet, laptop, or print</li>
              <li>Visual diagrams and printable practice sheets</li>
              <li>30-day confidence guarantee</li>
            </ul>
            <div className="pf-guarantee">
              <h3>Gentle guarantee</h3>
              <p>If the guide does not help you understand what to check during feeds, request a refund within 30 days.</p>
            </div>
          </div>
          <div className="pf-price">
            <div className="pf-eyebrow">Launch offer</div>
            <div>
              <span className="pf-strike">$67</span> today only
            </div>
            <div className="pf-amount">$37</div>
            <p>Pain-Free Latch Blueprint PDF + diagrams + 7-day latch reset + printable checklists.</p>
            <a className="pf-button" href={checkoutUrl}>
              Buy Now
            </a>
            <p className="pf-mini">Replace this checkout link with your payment platform before publishing.</p>
          </div>
        </div>
      </section>

      <section className="pf-section pf-faq">
        <div className="pf-wrap">
          <h2>Questions</h2>
          <details>
            <summary>Does this replace a lactation consultant?</summary>
            <p>
              No. It is educational support. An IBCLC, pediatrician, OB-GYN, or midwife can assess your unique
              situation, baby's weight, and milk transfer.
            </p>
          </details>
          <details>
            <summary>What if pain is severe or I have nipple damage?</summary>
            <p>
              Seek professional support promptly, especially with cracked or bleeding nipples, fever, red hot breast
              areas, poor diaper output, unusual sleepiness, or weight concerns.
            </p>
          </details>
          <details>
            <summary>Is this only for first-time moms?</summary>
            <p>
              It is written for beginners, but any breastfeeding parent who wants clearer latch mechanics and a simple
              practice plan can use it.
            </p>
          </details>
        </div>
      </section>

      <footer className="pf-footer">
        <div className="pf-wrap">
          <p>
            Pain-Free Latch Blueprint. Educational content only. Consult your clinician or an IBCLC for personalized
            breastfeeding support.
          </p>
        </div>
      </footer>
    </main>
  );
}
