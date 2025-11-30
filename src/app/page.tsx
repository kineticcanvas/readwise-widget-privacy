import React from 'react';
import { PrivacySection } from '@/components/PrivacySection';
import { TableOfContents } from '@/components/TableOfContents';
import { ContactInfo } from '@/components/ContactInfo';

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 30, 2025";

  return (
    <main className="privacy-policy">
      <header>
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: {lastUpdated}</p>
        <p className="intro">
          Kinetic Canvas Digital, LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
          protecting your privacy. This Privacy Policy explains how our
          ReadwiseWidget Android application collects, uses, and safeguards
          your information.
        </p>
      </header>

      <TableOfContents />

      {/* Section 1: Information We Collect */}
      <PrivacySection id="information-collected" title="1. Information We Collect">
        <h3>1.1 Information You Provide</h3>
        <ul>
          <li><strong>Readwise API Token:</strong> Your personal API token from
          Readwise.io, stored locally using hardware-backed encryption
          (AES-256-GCM via Android KeyStore).</li>
          <li><strong>Widget Configuration:</strong> Your widget display preferences
          (font size, max lines, colors) stored locally on your device.</li>
        </ul>

        <h3>1.2 Information Automatically Collected</h3>
        <ul>
          <li><strong>Book Highlights:</strong> Text highlights and metadata
          synced from your Readwise account via their API.</li>
          <li><strong>Book Cover Images:</strong> Public CDN URLs for book cover
          images (loaded from third-party CDNs like images-na.ssl-images-amazon.com).</li>
        </ul>

        <h3>1.3 Information We Do NOT Collect</h3>
        <ul>
          <li>No analytics or tracking data</li>
          <li>No advertising identifiers</li>
          <li>No device fingerprinting</li>
          <li>No location data</li>
          <li>No contact information (unless you email us)</li>
        </ul>
      </PrivacySection>

      {/* Section 2: How We Use Your Information */}
      <PrivacySection id="how-we-use" title="2. How We Use Your Information">
        <p>We use the information we collect solely for the following purposes:</p>
        <ul>
          <li><strong>Display Highlights:</strong> Show your Readwise highlights
          on your Android home screen widget.</li>
          <li><strong>Sync Data:</strong> Periodically fetch new highlights from
          Readwise API to keep your widget up-to-date.</li>
          <li><strong>Local Caching:</strong> Store highlights locally for offline
          access and performance optimization (7-day automatic deletion).</li>
        </ul>
        <p><strong>We do not:</strong></p>
        <ul>
          <li>Share your data with third parties (except Readwise API as required)</li>
          <li>Use your data for advertising or marketing</li>
          <li>Sell or monetize your personal information</li>
          <li>Track your behavior or analytics</li>
        </ul>
      </PrivacySection>

      {/* Section 3: Data Storage and Security */}
      <PrivacySection id="data-security" title="3. Data Storage and Security">
        <h3>3.1 Local Storage</h3>
        <p>All data is stored exclusively on your Android device:</p>
        <ul>
          <li><strong>API Token:</strong> Encrypted using Android KeyStore with
          AES-256-GCM (EncryptedSharedPreferences)</li>
          <li><strong>Highlights Database:</strong> Room database with SQLCipher
          encryption (locally on device)</li>
          <li><strong>Widget Settings:</strong> Android SharedPreferences
          (locally on device)</li>
        </ul>

        <h3>3.2 Security Measures</h3>
        <ul>
          <li>Hardware-backed encryption (Android KeyStore)</li>
          <li>HTTPS-only communication with Readwise API</li>
          <li>No plaintext storage of sensitive data</li>
          <li>Certificate pinning for API requests</li>
        </ul>

        <h3>3.3 Data Retention</h3>
        <ul>
          <li><strong>Highlights:</strong> Automatically deleted after 7 days
          (configurable in future versions)</li>
          <li><strong>API Token:</strong> Stored until you log out or uninstall app</li>
          <li><strong>Widget Settings:</strong> Deleted when widget is removed</li>
        </ul>
      </PrivacySection>

      {/* Section 4: Third-Party Services */}
      <PrivacySection id="third-party" title="4. Third-Party Services">
        <h3>4.1 Readwise API</h3>
        <ul>
          <li><strong>Purpose:</strong> Fetch your book highlights</li>
          <li><strong>Data Shared:</strong> Your API token (via HTTPS)</li>
          <li><strong>Privacy Policy:</strong> <a href="https://readwise.io/privacy"
          target="_blank" rel="noopener noreferrer">https://readwise.io/privacy</a></li>
        </ul>

        <h3>4.2 Book Cover CDNs</h3>
        <ul>
          <li><strong>Purpose:</strong> Display book cover images in widget</li>
          <li><strong>Data Shared:</strong> Public CDN requests (no personal data)</li>
          <li><strong>Examples:</strong> images-na.ssl-images-amazon.com, etc.</li>
        </ul>

        <h3>4.3 No Other Third Parties</h3>
        <p>We do not integrate with:</p>
        <ul>
          <li>Analytics services (Google Analytics, Firebase, etc.)</li>
          <li>Advertising networks</li>
          <li>Social media platforms</li>
          <li>Crash reporting services</li>
        </ul>
      </PrivacySection>

      {/* Section 5: Your Rights (GDPR - EU) */}
      <PrivacySection id="gdpr-rights" title="5. Your Rights (GDPR - European Union)">
        <p>If you are located in the European Union, you have the following rights:</p>
        <ul>
          <li><strong>Right to Access:</strong> Request a copy of your data
          (stored locally on your device - use Android backup tools).</li>
          <li><strong>Right to Deletion:</strong> Delete your data by uninstalling
          the app or clearing app data in Android Settings.</li>
          <li><strong>Right to Rectification:</strong> Modify your data by updating
          widget settings or re-syncing from Readwise.</li>
          <li><strong>Right to Portability:</strong> Export your data using Android
          backup/export features.</li>
          <li><strong>Right to Object:</strong> Stop data processing by logging out
          or uninstalling the app.</li>
        </ul>
        <p><strong>Legal Basis:</strong> Consent (you provide your API token voluntarily)</p>
      </PrivacySection>

      {/* Section 6: Your Rights (CCPA - California) */}
      <PrivacySection id="ccpa-rights" title="6. Your Rights (CCPA - California)">
        <p>If you are a California resident, you have the following rights:</p>
        <ul>
          <li><strong>Right to Know:</strong> Request information about data collection
          (see Section 1).</li>
          <li><strong>Right to Delete:</strong> Request deletion of your data
          (uninstall app or clear app data).</li>
          <li><strong>Right to Opt-Out:</strong> We do not sell your personal information,
          so no opt-out needed.</li>
          <li><strong>Right to Non-Discrimination:</strong> We do not discriminate
          against users who exercise their privacy rights.</li>
        </ul>
        <p><strong>Note:</strong> We do not sell personal information.</p>
      </PrivacySection>

      {/* Section 7: Children's Privacy */}
      <PrivacySection id="children" title="7. Children's Privacy">
        <p>ReadwiseWidget is not intended for children under 13. We do not knowingly
        collect personal information from children under 13. If you are a parent or
        guardian and believe your child has provided us with personal information,
        please contact us immediately.</p>
      </PrivacySection>

      {/* Section 8: Data Sharing and Disclosure */}
      <PrivacySection id="data-sharing" title="8. Data Sharing and Disclosure">
        <h3>8.1 We Do Not Share Your Data</h3>
        <p>We do not share, sell, rent, or trade your personal information with
        third parties for marketing purposes.</p>

        <h3>8.2 Legal Requirements</h3>
        <p>We may disclose your information if required by law, such as:</p>
        <ul>
          <li>Court orders or subpoenas</li>
          <li>Government investigations</li>
          <li>Protection of our legal rights</li>
        </ul>
        <p><strong>Note:</strong> Since all data is stored locally on your device,
        we have no access to your data unless you provide it to us directly.</p>
      </PrivacySection>

      {/* Section 9: International Data Transfers */}
      <PrivacySection id="international" title="9. International Data Transfers">
        <p>All data is stored locally on your Android device. The only international
        data transfer occurs when:</p>
        <ul>
          <li>You sync highlights from Readwise API (HTTPS encrypted)</li>
          <li>Readwise servers may be located in the United States</li>
        </ul>
        <p><strong>Safeguards:</strong> HTTPS encryption, no third-party data sharing</p>
      </PrivacySection>

      {/* Section 10: Cookies and Tracking */}
      <PrivacySection id="cookies" title="10. Cookies and Tracking">
        <p><strong>We do not use cookies, tracking pixels, or analytics.</strong></p>
        <ul>
          <li>No advertising cookies</li>
          <li>No analytics trackers (Google Analytics, etc.)</li>
          <li>No social media pixels</li>
          <li>No fingerprinting techniques</li>
        </ul>
      </PrivacySection>

      {/* Section 11: Changes to Privacy Policy */}
      <PrivacySection id="changes" title="11. Changes to This Privacy Policy">
        <p>We may update this Privacy Policy from time to time. We will notify you of
        any material changes by:</p>
        <ul>
          <li>Updating the &quot;Last Updated&quot; date at the top of this policy</li>
          <li>Displaying a notice in the app (for significant changes)</li>
          <li>Posting updates to this webpage</li>
        </ul>
        <p>Your continued use of the app after changes constitutes acceptance of the
        updated policy.</p>
      </PrivacySection>

      {/* Section 12: Data Breach Notification */}
      <PrivacySection id="breach" title="12. Data Breach Notification">
        <p>In the unlikely event of a data breach affecting your personal information,
        we will:</p>
        <ul>
          <li>Notify affected users within 72 hours (GDPR requirement)</li>
          <li>Provide details of the breach and affected data</li>
          <li>Outline steps to mitigate harm</li>
          <li>Report to relevant authorities if required</li>
        </ul>
        <p><strong>Note:</strong> Since data is stored locally on your device, breaches
        are unlikely unless your device is compromised.</p>
      </PrivacySection>

      {/* Section 13: Contact Information */}
      <PrivacySection id="contact" title="13. Contact Information">
        <ContactInfo />
      </PrivacySection>

      {/* Section 14: Legal Basis for Processing (GDPR) */}
      <PrivacySection id="legal-basis" title="14. Legal Basis for Processing (GDPR)">
        <p>We process your personal information based on the following legal grounds:</p>
        <ul>
          <li><strong>Consent:</strong> You provide your Readwise API token voluntarily</li>
          <li><strong>Legitimate Interest:</strong> Providing widget functionality
          you requested</li>
          <li><strong>Contractual Necessity:</strong> Fulfilling our service to display
          your highlights</li>
        </ul>
      </PrivacySection>

      {/* Section 15: Data Protection Officer */}
      <PrivacySection id="dpo" title="15. Data Protection Officer">
        <p>For privacy-related inquiries, please contact:</p>
        <ContactInfo role="Data Protection Officer" />
      </PrivacySection>

      <footer>
        <p>&copy; {new Date().getFullYear()} Kinetic Canvas Digital, LLC. All rights reserved.</p>
        <p><a href="mailto:corporate@kcd.works">Contact Us</a></p>
      </footer>
    </main>
  );
}
