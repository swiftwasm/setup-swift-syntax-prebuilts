/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6631:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Attribute = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
class Attribute {
    constructor(params = {}) {
        this.attrType = "";
        this.attrValues = [];
        Object.assign(this, params);
    }
}
exports.Attribute = Attribute;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], Attribute.prototype, "attrType", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any, repeated: "set" })
], Attribute.prototype, "attrValues", void 0);


/***/ }),

/***/ 4976:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CounterSignature = exports.id_counterSignature = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const signer_info_1 = __nccwpck_require__(248);
exports.id_counterSignature = "1.2.840.113549.1.9.6";
let CounterSignature = class CounterSignature extends signer_info_1.SignerInfo {
};
exports.CounterSignature = CounterSignature;
exports.CounterSignature = CounterSignature = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], CounterSignature);


/***/ }),

/***/ 8657:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.id_contentType = void 0;
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(4976), exports);
tslib_1.__exportStar(__nccwpck_require__(7485), exports);
tslib_1.__exportStar(__nccwpck_require__(8632), exports);
exports.id_contentType = "1.2.840.113549.1.9.3";


/***/ }),

/***/ 7485:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageDigest = exports.id_messageDigest = void 0;
const asn1_schema_1 = __nccwpck_require__(7261);
exports.id_messageDigest = "1.2.840.113549.1.9.4";
class MessageDigest extends asn1_schema_1.OctetString {
}
exports.MessageDigest = MessageDigest;


/***/ }),

/***/ 8632:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SigningTime = exports.id_signingTime = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_x509_1 = __nccwpck_require__(3594);
const asn1_schema_1 = __nccwpck_require__(7261);
exports.id_signingTime = "1.2.840.113549.1.9.5";
let SigningTime = class SigningTime extends asn1_x509_1.Time {
};
exports.SigningTime = SigningTime;
exports.SigningTime = SigningTime = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], SigningTime);


/***/ }),

/***/ 159:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var CertificateSet_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CertificateSet = exports.CertificateChoices = exports.OtherCertificateFormat = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
const asn1_x509_attr_1 = __nccwpck_require__(4938);
class OtherCertificateFormat {
    constructor(params = {}) {
        this.otherCertFormat = "";
        this.otherCert = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.OtherCertificateFormat = OtherCertificateFormat;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], OtherCertificateFormat.prototype, "otherCertFormat", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any })
], OtherCertificateFormat.prototype, "otherCert", void 0);
let CertificateChoices = class CertificateChoices {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.CertificateChoices = CertificateChoices;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.Certificate })
], CertificateChoices.prototype, "certificate", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_attr_1.AttributeCertificate, context: 2, implicit: true })
], CertificateChoices.prototype, "v2AttrCert", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: OtherCertificateFormat, context: 3, implicit: true })
], CertificateChoices.prototype, "other", void 0);
exports.CertificateChoices = CertificateChoices = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], CertificateChoices);
let CertificateSet = CertificateSet_1 = class CertificateSet extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, CertificateSet_1.prototype);
    }
};
exports.CertificateSet = CertificateSet;
exports.CertificateSet = CertificateSet = CertificateSet_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Set, itemType: CertificateChoices })
], CertificateSet);


/***/ }),

/***/ 2657:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentInfo = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
class ContentInfo {
    constructor(params = {}) {
        this.contentType = "";
        this.content = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.ContentInfo = ContentInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], ContentInfo.prototype, "contentType", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any, context: 0 })
], ContentInfo.prototype, "content", void 0);


/***/ }),

/***/ 3797:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EncapsulatedContentInfo = exports.EncapsulatedContent = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
let EncapsulatedContent = class EncapsulatedContent {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.EncapsulatedContent = EncapsulatedContent;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString })
], EncapsulatedContent.prototype, "single", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any })
], EncapsulatedContent.prototype, "any", void 0);
exports.EncapsulatedContent = EncapsulatedContent = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], EncapsulatedContent);
class EncapsulatedContentInfo {
    constructor(params = {}) {
        this.eContentType = "";
        Object.assign(this, params);
    }
}
exports.EncapsulatedContentInfo = EncapsulatedContentInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], EncapsulatedContentInfo.prototype, "eContentType", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: EncapsulatedContent, context: 0, optional: true })
], EncapsulatedContentInfo.prototype, "eContent", void 0);


/***/ }),

/***/ 4264:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EncryptedContentInfo = exports.EncryptedContent = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const types_1 = __nccwpck_require__(8442);
let EncryptedContent = class EncryptedContent {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.EncryptedContent = EncryptedContent;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString, context: 0, implicit: true, optional: true })
], EncryptedContent.prototype, "value", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_1.OctetString,
        converter: asn1_schema_1.AsnConstructedOctetStringConverter,
        context: 0,
        implicit: true,
        optional: true,
        repeated: "sequence",
    })
], EncryptedContent.prototype, "constructedValue", void 0);
exports.EncryptedContent = EncryptedContent = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], EncryptedContent);
class EncryptedContentInfo {
    constructor(params = {}) {
        this.contentType = "";
        this.contentEncryptionAlgorithm = new types_1.ContentEncryptionAlgorithmIdentifier();
        Object.assign(this, params);
    }
}
exports.EncryptedContentInfo = EncryptedContentInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], EncryptedContentInfo.prototype, "contentType", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: types_1.ContentEncryptionAlgorithmIdentifier })
], EncryptedContentInfo.prototype, "contentEncryptionAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: EncryptedContent, optional: true })
], EncryptedContentInfo.prototype, "encryptedContent", void 0);


/***/ }),

/***/ 4937:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var UnprotectedAttributes_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnvelopedData = exports.UnprotectedAttributes = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const types_1 = __nccwpck_require__(8442);
const attribute_1 = __nccwpck_require__(6631);
const recipient_infos_1 = __nccwpck_require__(8014);
const originator_info_1 = __nccwpck_require__(5692);
const encrypted_content_info_1 = __nccwpck_require__(4264);
let UnprotectedAttributes = UnprotectedAttributes_1 = class UnprotectedAttributes extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, UnprotectedAttributes_1.prototype);
    }
};
exports.UnprotectedAttributes = UnprotectedAttributes;
exports.UnprotectedAttributes = UnprotectedAttributes = UnprotectedAttributes_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Set, itemType: attribute_1.Attribute })
], UnprotectedAttributes);
class EnvelopedData {
    constructor(params = {}) {
        this.version = types_1.CMSVersion.v0;
        this.recipientInfos = new recipient_infos_1.RecipientInfos();
        this.encryptedContentInfo = new encrypted_content_info_1.EncryptedContentInfo();
        Object.assign(this, params);
    }
}
exports.EnvelopedData = EnvelopedData;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], EnvelopedData.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: originator_info_1.OriginatorInfo, context: 0, implicit: true, optional: true })
], EnvelopedData.prototype, "originatorInfo", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: recipient_infos_1.RecipientInfos })
], EnvelopedData.prototype, "recipientInfos", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: encrypted_content_info_1.EncryptedContentInfo })
], EnvelopedData.prototype, "encryptedContentInfo", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: UnprotectedAttributes, context: 1, implicit: true, optional: true })
], EnvelopedData.prototype, "unprotectedAttrs", void 0);


/***/ }),

/***/ 1467:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(8657), exports);
tslib_1.__exportStar(__nccwpck_require__(6631), exports);
tslib_1.__exportStar(__nccwpck_require__(159), exports);
tslib_1.__exportStar(__nccwpck_require__(2657), exports);
tslib_1.__exportStar(__nccwpck_require__(3797), exports);
tslib_1.__exportStar(__nccwpck_require__(4264), exports);
tslib_1.__exportStar(__nccwpck_require__(4937), exports);
tslib_1.__exportStar(__nccwpck_require__(2025), exports);
tslib_1.__exportStar(__nccwpck_require__(7497), exports);
tslib_1.__exportStar(__nccwpck_require__(1390), exports);
tslib_1.__exportStar(__nccwpck_require__(6216), exports);
tslib_1.__exportStar(__nccwpck_require__(2527), exports);
tslib_1.__exportStar(__nccwpck_require__(5692), exports);
tslib_1.__exportStar(__nccwpck_require__(3469), exports);
tslib_1.__exportStar(__nccwpck_require__(6715), exports);
tslib_1.__exportStar(__nccwpck_require__(8014), exports);
tslib_1.__exportStar(__nccwpck_require__(7114), exports);
tslib_1.__exportStar(__nccwpck_require__(4094), exports);
tslib_1.__exportStar(__nccwpck_require__(891), exports);
tslib_1.__exportStar(__nccwpck_require__(248), exports);
tslib_1.__exportStar(__nccwpck_require__(8442), exports);


/***/ }),

/***/ 2025:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IssuerAndSerialNumber = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
class IssuerAndSerialNumber {
    constructor(params = {}) {
        this.issuer = new asn1_x509_1.Name();
        this.serialNumber = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.IssuerAndSerialNumber = IssuerAndSerialNumber;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.Name })
], IssuerAndSerialNumber.prototype, "issuer", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], IssuerAndSerialNumber.prototype, "serialNumber", void 0);


/***/ }),

/***/ 7497:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KEKRecipientInfo = exports.KEKIdentifier = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const other_key_attribute_1 = __nccwpck_require__(9274);
const types_1 = __nccwpck_require__(8442);
class KEKIdentifier {
    constructor(params = {}) {
        this.keyIdentifier = new asn1_schema_1.OctetString();
        Object.assign(this, params);
    }
}
exports.KEKIdentifier = KEKIdentifier;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString })
], KEKIdentifier.prototype, "keyIdentifier", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.GeneralizedTime, optional: true })
], KEKIdentifier.prototype, "date", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: other_key_attribute_1.OtherKeyAttribute, optional: true })
], KEKIdentifier.prototype, "other", void 0);
class KEKRecipientInfo {
    constructor(params = {}) {
        this.version = types_1.CMSVersion.v4;
        this.kekid = new KEKIdentifier();
        this.keyEncryptionAlgorithm = new types_1.KeyEncryptionAlgorithmIdentifier();
        this.encryptedKey = new asn1_schema_1.OctetString();
        Object.assign(this, params);
    }
}
exports.KEKRecipientInfo = KEKRecipientInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], KEKRecipientInfo.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: KEKIdentifier })
], KEKRecipientInfo.prototype, "kekid", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: types_1.KeyEncryptionAlgorithmIdentifier })
], KEKRecipientInfo.prototype, "keyEncryptionAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString })
], KEKRecipientInfo.prototype, "encryptedKey", void 0);


/***/ }),

/***/ 1390:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var RecipientEncryptedKeys_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyAgreeRecipientInfo = exports.OriginatorIdentifierOrKey = exports.OriginatorPublicKey = exports.RecipientEncryptedKeys = exports.RecipientEncryptedKey = exports.KeyAgreeRecipientIdentifier = exports.RecipientKeyIdentifier = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const types_1 = __nccwpck_require__(8442);
const issuer_and_serial_number_1 = __nccwpck_require__(2025);
const asn1_x509_1 = __nccwpck_require__(3594);
const other_key_attribute_1 = __nccwpck_require__(9274);
class RecipientKeyIdentifier {
    constructor(params = {}) {
        this.subjectKeyIdentifier = new asn1_x509_1.SubjectKeyIdentifier();
        Object.assign(this, params);
    }
}
exports.RecipientKeyIdentifier = RecipientKeyIdentifier;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.SubjectKeyIdentifier })
], RecipientKeyIdentifier.prototype, "subjectKeyIdentifier", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.GeneralizedTime, optional: true })
], RecipientKeyIdentifier.prototype, "date", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: other_key_attribute_1.OtherKeyAttribute, optional: true })
], RecipientKeyIdentifier.prototype, "other", void 0);
let KeyAgreeRecipientIdentifier = class KeyAgreeRecipientIdentifier {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.KeyAgreeRecipientIdentifier = KeyAgreeRecipientIdentifier;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: RecipientKeyIdentifier, context: 0, implicit: true, optional: true })
], KeyAgreeRecipientIdentifier.prototype, "rKeyId", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: issuer_and_serial_number_1.IssuerAndSerialNumber, optional: true })
], KeyAgreeRecipientIdentifier.prototype, "issuerAndSerialNumber", void 0);
exports.KeyAgreeRecipientIdentifier = KeyAgreeRecipientIdentifier = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], KeyAgreeRecipientIdentifier);
class RecipientEncryptedKey {
    constructor(params = {}) {
        this.rid = new KeyAgreeRecipientIdentifier();
        this.encryptedKey = new asn1_schema_1.OctetString();
        Object.assign(this, params);
    }
}
exports.RecipientEncryptedKey = RecipientEncryptedKey;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: KeyAgreeRecipientIdentifier })
], RecipientEncryptedKey.prototype, "rid", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString })
], RecipientEncryptedKey.prototype, "encryptedKey", void 0);
let RecipientEncryptedKeys = RecipientEncryptedKeys_1 = class RecipientEncryptedKeys extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, RecipientEncryptedKeys_1.prototype);
    }
};
exports.RecipientEncryptedKeys = RecipientEncryptedKeys;
exports.RecipientEncryptedKeys = RecipientEncryptedKeys = RecipientEncryptedKeys_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: RecipientEncryptedKey })
], RecipientEncryptedKeys);
class OriginatorPublicKey {
    constructor(params = {}) {
        this.algorithm = new asn1_x509_1.AlgorithmIdentifier();
        this.publicKey = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.OriginatorPublicKey = OriginatorPublicKey;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.AlgorithmIdentifier })
], OriginatorPublicKey.prototype, "algorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BitString })
], OriginatorPublicKey.prototype, "publicKey", void 0);
let OriginatorIdentifierOrKey = class OriginatorIdentifierOrKey {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.OriginatorIdentifierOrKey = OriginatorIdentifierOrKey;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.SubjectKeyIdentifier, context: 0, implicit: true, optional: true })
], OriginatorIdentifierOrKey.prototype, "subjectKeyIdentifier", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: OriginatorPublicKey, context: 1, implicit: true, optional: true })
], OriginatorIdentifierOrKey.prototype, "originatorKey", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: issuer_and_serial_number_1.IssuerAndSerialNumber, optional: true })
], OriginatorIdentifierOrKey.prototype, "issuerAndSerialNumber", void 0);
exports.OriginatorIdentifierOrKey = OriginatorIdentifierOrKey = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], OriginatorIdentifierOrKey);
class KeyAgreeRecipientInfo {
    constructor(params = {}) {
        this.version = types_1.CMSVersion.v3;
        this.originator = new OriginatorIdentifierOrKey();
        this.keyEncryptionAlgorithm = new types_1.KeyEncryptionAlgorithmIdentifier();
        this.recipientEncryptedKeys = new RecipientEncryptedKeys();
        Object.assign(this, params);
    }
}
exports.KeyAgreeRecipientInfo = KeyAgreeRecipientInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], KeyAgreeRecipientInfo.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: OriginatorIdentifierOrKey, context: 0 })
], KeyAgreeRecipientInfo.prototype, "originator", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString, context: 1, optional: true })
], KeyAgreeRecipientInfo.prototype, "ukm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: types_1.KeyEncryptionAlgorithmIdentifier })
], KeyAgreeRecipientInfo.prototype, "keyEncryptionAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: RecipientEncryptedKeys })
], KeyAgreeRecipientInfo.prototype, "recipientEncryptedKeys", void 0);


/***/ }),

/***/ 6216:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyTransRecipientInfo = exports.RecipientIdentifier = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const types_1 = __nccwpck_require__(8442);
const issuer_and_serial_number_1 = __nccwpck_require__(2025);
const asn1_x509_1 = __nccwpck_require__(3594);
let RecipientIdentifier = class RecipientIdentifier {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.RecipientIdentifier = RecipientIdentifier;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.SubjectKeyIdentifier, context: 0, implicit: true })
], RecipientIdentifier.prototype, "subjectKeyIdentifier", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: issuer_and_serial_number_1.IssuerAndSerialNumber })
], RecipientIdentifier.prototype, "issuerAndSerialNumber", void 0);
exports.RecipientIdentifier = RecipientIdentifier = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], RecipientIdentifier);
class KeyTransRecipientInfo {
    constructor(params = {}) {
        this.version = types_1.CMSVersion.v0;
        this.rid = new RecipientIdentifier();
        this.keyEncryptionAlgorithm = new types_1.KeyEncryptionAlgorithmIdentifier();
        this.encryptedKey = new asn1_schema_1.OctetString();
        Object.assign(this, params);
    }
}
exports.KeyTransRecipientInfo = KeyTransRecipientInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], KeyTransRecipientInfo.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: RecipientIdentifier })
], KeyTransRecipientInfo.prototype, "rid", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: types_1.KeyEncryptionAlgorithmIdentifier })
], KeyTransRecipientInfo.prototype, "keyEncryptionAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString })
], KeyTransRecipientInfo.prototype, "encryptedKey", void 0);


/***/ }),

/***/ 2527:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.id_authData = exports.id_encryptedData = exports.id_digestedData = exports.id_envelopedData = exports.id_signedData = exports.id_data = exports.id_ct_contentInfo = void 0;
exports.id_ct_contentInfo = "1.2.840.113549.1.9.16.1.6";
exports.id_data = "1.2.840.113549.1.7.1";
exports.id_signedData = "1.2.840.113549.1.7.2";
exports.id_envelopedData = "1.2.840.113549.1.7.3";
exports.id_digestedData = "1.2.840.113549.1.7.5";
exports.id_encryptedData = "1.2.840.113549.1.7.6";
exports.id_authData = "1.2.840.113549.1.9.16.1.2";


/***/ }),

/***/ 5692:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OriginatorInfo = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const certificate_choices_1 = __nccwpck_require__(159);
const revocation_info_choice_1 = __nccwpck_require__(7114);
class OriginatorInfo {
    constructor(params = {}) {
        Object.assign(this, params);
    }
}
exports.OriginatorInfo = OriginatorInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: certificate_choices_1.CertificateSet, context: 0, implicit: true, optional: true })
], OriginatorInfo.prototype, "certs", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: revocation_info_choice_1.RevocationInfoChoices, context: 1, implicit: true, optional: true })
], OriginatorInfo.prototype, "crls", void 0);


/***/ }),

/***/ 9274:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OtherKeyAttribute = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
class OtherKeyAttribute {
    constructor(params = {}) {
        this.keyAttrId = "";
        Object.assign(this, params);
    }
}
exports.OtherKeyAttribute = OtherKeyAttribute;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], OtherKeyAttribute.prototype, "keyAttrId", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any, optional: true })
], OtherKeyAttribute.prototype, "keyAttr", void 0);


/***/ }),

/***/ 3469:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordRecipientInfo = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const types_1 = __nccwpck_require__(8442);
class PasswordRecipientInfo {
    constructor(params = {}) {
        this.version = types_1.CMSVersion.v0;
        this.keyEncryptionAlgorithm = new types_1.KeyEncryptionAlgorithmIdentifier();
        this.encryptedKey = new asn1_schema_1.OctetString();
        Object.assign(this, params);
    }
}
exports.PasswordRecipientInfo = PasswordRecipientInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], PasswordRecipientInfo.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: types_1.KeyDerivationAlgorithmIdentifier, context: 0, optional: true })
], PasswordRecipientInfo.prototype, "keyDerivationAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: types_1.KeyEncryptionAlgorithmIdentifier })
], PasswordRecipientInfo.prototype, "keyEncryptionAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString })
], PasswordRecipientInfo.prototype, "encryptedKey", void 0);


/***/ }),

/***/ 6715:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecipientInfo = exports.OtherRecipientInfo = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const key_agree_recipient_info_1 = __nccwpck_require__(1390);
const key_trans_recipient_info_1 = __nccwpck_require__(6216);
const kek_recipient_info_1 = __nccwpck_require__(7497);
const password_recipient_info_1 = __nccwpck_require__(3469);
class OtherRecipientInfo {
    constructor(params = {}) {
        this.oriType = "";
        this.oriValue = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.OtherRecipientInfo = OtherRecipientInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], OtherRecipientInfo.prototype, "oriType", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any })
], OtherRecipientInfo.prototype, "oriValue", void 0);
let RecipientInfo = class RecipientInfo {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.RecipientInfo = RecipientInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: key_trans_recipient_info_1.KeyTransRecipientInfo, optional: true })
], RecipientInfo.prototype, "ktri", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: key_agree_recipient_info_1.KeyAgreeRecipientInfo, context: 1, implicit: true, optional: true })
], RecipientInfo.prototype, "kari", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: kek_recipient_info_1.KEKRecipientInfo, context: 2, implicit: true, optional: true })
], RecipientInfo.prototype, "kekri", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: password_recipient_info_1.PasswordRecipientInfo, context: 3, implicit: true, optional: true })
], RecipientInfo.prototype, "pwri", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: OtherRecipientInfo, context: 4, implicit: true, optional: true })
], RecipientInfo.prototype, "ori", void 0);
exports.RecipientInfo = RecipientInfo = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], RecipientInfo);


/***/ }),

/***/ 8014:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var RecipientInfos_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecipientInfos = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const recipient_info_1 = __nccwpck_require__(6715);
let RecipientInfos = RecipientInfos_1 = class RecipientInfos extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, RecipientInfos_1.prototype);
    }
};
exports.RecipientInfos = RecipientInfos;
exports.RecipientInfos = RecipientInfos = RecipientInfos_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Set, itemType: recipient_info_1.RecipientInfo })
], RecipientInfos);


/***/ }),

/***/ 7114:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var RevocationInfoChoices_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RevocationInfoChoices = exports.RevocationInfoChoice = exports.OtherRevocationInfoFormat = exports.id_ri_scvp = exports.id_ri_ocsp_response = exports.id_ri = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
exports.id_ri = `${asn1_x509_1.id_pkix}.16`;
exports.id_ri_ocsp_response = `${exports.id_ri}.2`;
exports.id_ri_scvp = `${exports.id_ri}.4`;
class OtherRevocationInfoFormat {
    constructor(params = {}) {
        this.otherRevInfoFormat = "";
        this.otherRevInfo = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.OtherRevocationInfoFormat = OtherRevocationInfoFormat;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], OtherRevocationInfoFormat.prototype, "otherRevInfoFormat", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any })
], OtherRevocationInfoFormat.prototype, "otherRevInfo", void 0);
let RevocationInfoChoice = class RevocationInfoChoice {
    constructor(params = {}) {
        this.other = new OtherRevocationInfoFormat();
        Object.assign(this, params);
    }
};
exports.RevocationInfoChoice = RevocationInfoChoice;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: OtherRevocationInfoFormat, context: 1, implicit: true })
], RevocationInfoChoice.prototype, "other", void 0);
exports.RevocationInfoChoice = RevocationInfoChoice = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], RevocationInfoChoice);
let RevocationInfoChoices = RevocationInfoChoices_1 = class RevocationInfoChoices extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, RevocationInfoChoices_1.prototype);
    }
};
exports.RevocationInfoChoices = RevocationInfoChoices;
exports.RevocationInfoChoices = RevocationInfoChoices = RevocationInfoChoices_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Set, itemType: RevocationInfoChoice })
], RevocationInfoChoices);


/***/ }),

/***/ 4094:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var DigestAlgorithmIdentifiers_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignedData = exports.DigestAlgorithmIdentifiers = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const certificate_choices_1 = __nccwpck_require__(159);
const types_1 = __nccwpck_require__(8442);
const encapsulated_content_info_1 = __nccwpck_require__(3797);
const revocation_info_choice_1 = __nccwpck_require__(7114);
const signer_info_1 = __nccwpck_require__(248);
let DigestAlgorithmIdentifiers = DigestAlgorithmIdentifiers_1 = class DigestAlgorithmIdentifiers extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, DigestAlgorithmIdentifiers_1.prototype);
    }
};
exports.DigestAlgorithmIdentifiers = DigestAlgorithmIdentifiers;
exports.DigestAlgorithmIdentifiers = DigestAlgorithmIdentifiers = DigestAlgorithmIdentifiers_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Set, itemType: types_1.DigestAlgorithmIdentifier })
], DigestAlgorithmIdentifiers);
class SignedData {
    constructor(params = {}) {
        this.version = types_1.CMSVersion.v0;
        this.digestAlgorithms = new DigestAlgorithmIdentifiers();
        this.encapContentInfo = new encapsulated_content_info_1.EncapsulatedContentInfo();
        this.signerInfos = new signer_info_1.SignerInfos();
        Object.assign(this, params);
    }
}
exports.SignedData = SignedData;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], SignedData.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: DigestAlgorithmIdentifiers })
], SignedData.prototype, "digestAlgorithms", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: encapsulated_content_info_1.EncapsulatedContentInfo })
], SignedData.prototype, "encapContentInfo", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: certificate_choices_1.CertificateSet, context: 0, implicit: true, optional: true })
], SignedData.prototype, "certificates", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: revocation_info_choice_1.RevocationInfoChoices, context: 1, implicit: true, optional: true })
], SignedData.prototype, "crls", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: signer_info_1.SignerInfos })
], SignedData.prototype, "signerInfos", void 0);


/***/ }),

/***/ 891:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignerIdentifier = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const issuer_and_serial_number_1 = __nccwpck_require__(2025);
const asn1_x509_1 = __nccwpck_require__(3594);
let SignerIdentifier = class SignerIdentifier {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.SignerIdentifier = SignerIdentifier;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.SubjectKeyIdentifier, context: 0, implicit: true })
], SignerIdentifier.prototype, "subjectKeyIdentifier", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: issuer_and_serial_number_1.IssuerAndSerialNumber })
], SignerIdentifier.prototype, "issuerAndSerialNumber", void 0);
exports.SignerIdentifier = SignerIdentifier = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], SignerIdentifier);


/***/ }),

/***/ 248:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var SignerInfos_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignerInfos = exports.SignerInfo = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const signer_identifier_1 = __nccwpck_require__(891);
const types_1 = __nccwpck_require__(8442);
const attribute_1 = __nccwpck_require__(6631);
class SignerInfo {
    constructor(params = {}) {
        this.version = types_1.CMSVersion.v0;
        this.sid = new signer_identifier_1.SignerIdentifier();
        this.digestAlgorithm = new types_1.DigestAlgorithmIdentifier();
        this.signatureAlgorithm = new types_1.SignatureAlgorithmIdentifier();
        this.signature = new asn1_schema_1.OctetString();
        Object.assign(this, params);
    }
}
exports.SignerInfo = SignerInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], SignerInfo.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: signer_identifier_1.SignerIdentifier })
], SignerInfo.prototype, "sid", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: types_1.DigestAlgorithmIdentifier })
], SignerInfo.prototype, "digestAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: attribute_1.Attribute,
        repeated: "set",
        context: 0,
        implicit: true,
        optional: true,
        raw: true,
    })
], SignerInfo.prototype, "signedAttrs", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: types_1.SignatureAlgorithmIdentifier })
], SignerInfo.prototype, "signatureAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString })
], SignerInfo.prototype, "signature", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: attribute_1.Attribute, repeated: "set", context: 1, implicit: true, optional: true })
], SignerInfo.prototype, "unsignedAttrs", void 0);
let SignerInfos = SignerInfos_1 = class SignerInfos extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, SignerInfos_1.prototype);
    }
};
exports.SignerInfos = SignerInfos;
exports.SignerInfos = SignerInfos = SignerInfos_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Set, itemType: SignerInfo })
], SignerInfos);


/***/ }),

/***/ 8442:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyDerivationAlgorithmIdentifier = exports.MessageAuthenticationCodeAlgorithm = exports.ContentEncryptionAlgorithmIdentifier = exports.KeyEncryptionAlgorithmIdentifier = exports.SignatureAlgorithmIdentifier = exports.DigestAlgorithmIdentifier = exports.CMSVersion = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_x509_1 = __nccwpck_require__(3594);
const asn1_schema_1 = __nccwpck_require__(7261);
var CMSVersion;
(function (CMSVersion) {
    CMSVersion[CMSVersion["v0"] = 0] = "v0";
    CMSVersion[CMSVersion["v1"] = 1] = "v1";
    CMSVersion[CMSVersion["v2"] = 2] = "v2";
    CMSVersion[CMSVersion["v3"] = 3] = "v3";
    CMSVersion[CMSVersion["v4"] = 4] = "v4";
    CMSVersion[CMSVersion["v5"] = 5] = "v5";
})(CMSVersion || (exports.CMSVersion = CMSVersion = {}));
let DigestAlgorithmIdentifier = class DigestAlgorithmIdentifier extends asn1_x509_1.AlgorithmIdentifier {
};
exports.DigestAlgorithmIdentifier = DigestAlgorithmIdentifier;
exports.DigestAlgorithmIdentifier = DigestAlgorithmIdentifier = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], DigestAlgorithmIdentifier);
let SignatureAlgorithmIdentifier = class SignatureAlgorithmIdentifier extends asn1_x509_1.AlgorithmIdentifier {
};
exports.SignatureAlgorithmIdentifier = SignatureAlgorithmIdentifier;
exports.SignatureAlgorithmIdentifier = SignatureAlgorithmIdentifier = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], SignatureAlgorithmIdentifier);
let KeyEncryptionAlgorithmIdentifier = class KeyEncryptionAlgorithmIdentifier extends asn1_x509_1.AlgorithmIdentifier {
};
exports.KeyEncryptionAlgorithmIdentifier = KeyEncryptionAlgorithmIdentifier;
exports.KeyEncryptionAlgorithmIdentifier = KeyEncryptionAlgorithmIdentifier = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], KeyEncryptionAlgorithmIdentifier);
let ContentEncryptionAlgorithmIdentifier = class ContentEncryptionAlgorithmIdentifier extends asn1_x509_1.AlgorithmIdentifier {
};
exports.ContentEncryptionAlgorithmIdentifier = ContentEncryptionAlgorithmIdentifier;
exports.ContentEncryptionAlgorithmIdentifier = ContentEncryptionAlgorithmIdentifier = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], ContentEncryptionAlgorithmIdentifier);
let MessageAuthenticationCodeAlgorithm = class MessageAuthenticationCodeAlgorithm extends asn1_x509_1.AlgorithmIdentifier {
};
exports.MessageAuthenticationCodeAlgorithm = MessageAuthenticationCodeAlgorithm;
exports.MessageAuthenticationCodeAlgorithm = MessageAuthenticationCodeAlgorithm = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], MessageAuthenticationCodeAlgorithm);
let KeyDerivationAlgorithmIdentifier = class KeyDerivationAlgorithmIdentifier extends asn1_x509_1.AlgorithmIdentifier {
};
exports.KeyDerivationAlgorithmIdentifier = KeyDerivationAlgorithmIdentifier;
exports.KeyDerivationAlgorithmIdentifier = KeyDerivationAlgorithmIdentifier = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], KeyDerivationAlgorithmIdentifier);


/***/ }),

/***/ 5705:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var Attributes_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Attributes = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
let Attributes = Attributes_1 = class Attributes extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, Attributes_1.prototype);
    }
};
exports.Attributes = Attributes;
exports.Attributes = Attributes = Attributes_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: asn1_x509_1.Attribute })
], Attributes);


/***/ }),

/***/ 7402:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CertificationRequest = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const certification_request_info_1 = __nccwpck_require__(7949);
const asn1_x509_1 = __nccwpck_require__(3594);
class CertificationRequest {
    constructor(params = {}) {
        this.certificationRequestInfo = new certification_request_info_1.CertificationRequestInfo();
        this.signatureAlgorithm = new asn1_x509_1.AlgorithmIdentifier();
        this.signature = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.CertificationRequest = CertificationRequest;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: certification_request_info_1.CertificationRequestInfo, raw: true })
], CertificationRequest.prototype, "certificationRequestInfo", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.AlgorithmIdentifier })
], CertificationRequest.prototype, "signatureAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BitString })
], CertificationRequest.prototype, "signature", void 0);


/***/ }),

/***/ 7949:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CertificationRequestInfo = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
const attributes_1 = __nccwpck_require__(5705);
class CertificationRequestInfo {
    constructor(params = {}) {
        this.version = 0;
        this.subject = new asn1_x509_1.Name();
        this.subjectPKInfo = new asn1_x509_1.SubjectPublicKeyInfo();
        this.attributes = new attributes_1.Attributes();
        Object.assign(this, params);
    }
}
exports.CertificationRequestInfo = CertificationRequestInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], CertificationRequestInfo.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.Name })
], CertificationRequestInfo.prototype, "subject", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.SubjectPublicKeyInfo })
], CertificationRequestInfo.prototype, "subjectPKInfo", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: attributes_1.Attributes, implicit: true, context: 0, optional: true })
], CertificationRequestInfo.prototype, "attributes", void 0);


/***/ }),

/***/ 6474:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(5705), exports);
tslib_1.__exportStar(__nccwpck_require__(7402), exports);
tslib_1.__exportStar(__nccwpck_require__(7949), exports);


/***/ }),

/***/ 245:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ecdsaWithSHA512 = exports.ecdsaWithSHA384 = exports.ecdsaWithSHA256 = exports.ecdsaWithSHA224 = exports.ecdsaWithSHA1 = void 0;
const asn1_x509_1 = __nccwpck_require__(3594);
const oid = __nccwpck_require__(2599);
function create(algorithm) {
    return new asn1_x509_1.AlgorithmIdentifier({ algorithm });
}
exports.ecdsaWithSHA1 = create(oid.id_ecdsaWithSHA1);
exports.ecdsaWithSHA224 = create(oid.id_ecdsaWithSHA224);
exports.ecdsaWithSHA256 = create(oid.id_ecdsaWithSHA256);
exports.ecdsaWithSHA384 = create(oid.id_ecdsaWithSHA384);
exports.ecdsaWithSHA512 = create(oid.id_ecdsaWithSHA512);


/***/ }),

/***/ 3070:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ECParameters = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const rfc3279_1 = __nccwpck_require__(7575);
let ECParameters = class ECParameters {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.ECParameters = ECParameters;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], ECParameters.prototype, "namedCurve", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Null })
], ECParameters.prototype, "implicitCurve", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: rfc3279_1.SpecifiedECDomain })
], ECParameters.prototype, "specifiedCurve", void 0);
exports.ECParameters = ECParameters = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], ECParameters);


/***/ }),

/***/ 2795:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ECPrivateKey = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const ec_parameters_1 = __nccwpck_require__(3070);
class ECPrivateKey {
    constructor(params = {}) {
        this.version = 1;
        this.privateKey = new asn1_schema_1.OctetString();
        Object.assign(this, params);
    }
}
exports.ECPrivateKey = ECPrivateKey;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], ECPrivateKey.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString })
], ECPrivateKey.prototype, "privateKey", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: ec_parameters_1.ECParameters, context: 0, optional: true })
], ECPrivateKey.prototype, "parameters", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BitString, context: 1, optional: true })
], ECPrivateKey.prototype, "publicKey", void 0);


/***/ }),

/***/ 1696:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ECDSASigValue = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
class ECDSASigValue {
    constructor(params = {}) {
        this.r = new ArrayBuffer(0);
        this.s = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.ECDSASigValue = ECDSASigValue;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], ECDSASigValue.prototype, "r", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], ECDSASigValue.prototype, "s", void 0);


/***/ }),

/***/ 3683:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(245), exports);
tslib_1.__exportStar(__nccwpck_require__(3070), exports);
tslib_1.__exportStar(__nccwpck_require__(2795), exports);
tslib_1.__exportStar(__nccwpck_require__(1696), exports);
tslib_1.__exportStar(__nccwpck_require__(2599), exports);
tslib_1.__exportStar(__nccwpck_require__(7575), exports);


/***/ }),

/***/ 2599:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.id_sect571r1 = exports.id_sect571k1 = exports.id_secp521r1 = exports.id_sect409r1 = exports.id_sect409k1 = exports.id_secp384r1 = exports.id_sect283r1 = exports.id_sect283k1 = exports.id_secp256r1 = exports.id_sect233r1 = exports.id_sect233k1 = exports.id_secp224r1 = exports.id_sect163r2 = exports.id_sect163k1 = exports.id_secp192r1 = exports.id_ecdsaWithSHA512 = exports.id_ecdsaWithSHA384 = exports.id_ecdsaWithSHA256 = exports.id_ecdsaWithSHA224 = exports.id_ecdsaWithSHA1 = exports.id_ecMQV = exports.id_ecDH = exports.id_ecPublicKey = void 0;
exports.id_ecPublicKey = "1.2.840.10045.2.1";
exports.id_ecDH = "1.3.132.1.12";
exports.id_ecMQV = "1.3.132.1.13";
exports.id_ecdsaWithSHA1 = "1.2.840.10045.4.1";
exports.id_ecdsaWithSHA224 = "1.2.840.10045.4.3.1";
exports.id_ecdsaWithSHA256 = "1.2.840.10045.4.3.2";
exports.id_ecdsaWithSHA384 = "1.2.840.10045.4.3.3";
exports.id_ecdsaWithSHA512 = "1.2.840.10045.4.3.4";
exports.id_secp192r1 = "1.2.840.10045.3.1.1";
exports.id_sect163k1 = "1.3.132.0.1";
exports.id_sect163r2 = "1.3.132.0.15";
exports.id_secp224r1 = "1.3.132.0.33";
exports.id_sect233k1 = "1.3.132.0.26";
exports.id_sect233r1 = "1.3.132.0.27";
exports.id_secp256r1 = "1.2.840.10045.3.1.7";
exports.id_sect283k1 = "1.3.132.0.16";
exports.id_sect283r1 = "1.3.132.0.17";
exports.id_secp384r1 = "1.3.132.0.34";
exports.id_sect409k1 = "1.3.132.0.36";
exports.id_sect409r1 = "1.3.132.0.37";
exports.id_secp521r1 = "1.3.132.0.35";
exports.id_sect571k1 = "1.3.132.0.38";
exports.id_sect571r1 = "1.3.132.0.39";


/***/ }),

/***/ 7575:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpecifiedECDomain = exports.ECPVer = exports.Curve = exports.FieldElement = exports.ECPoint = exports.FieldID = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
let FieldID = class FieldID {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.FieldID = FieldID;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], FieldID.prototype, "fieldType", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any })
], FieldID.prototype, "parameters", void 0);
exports.FieldID = FieldID = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], FieldID);
class ECPoint extends asn1_schema_1.OctetString {
}
exports.ECPoint = ECPoint;
class FieldElement extends asn1_schema_1.OctetString {
}
exports.FieldElement = FieldElement;
let Curve = class Curve {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.Curve = Curve;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.OctetString })
], Curve.prototype, "a", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.OctetString })
], Curve.prototype, "b", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BitString, optional: true })
], Curve.prototype, "seed", void 0);
exports.Curve = Curve = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], Curve);
var ECPVer;
(function (ECPVer) {
    ECPVer[ECPVer["ecpVer1"] = 1] = "ecpVer1";
})(ECPVer || (exports.ECPVer = ECPVer = {}));
let SpecifiedECDomain = class SpecifiedECDomain {
    constructor(params = {}) {
        this.version = ECPVer.ecpVer1;
        Object.assign(this, params);
    }
};
exports.SpecifiedECDomain = SpecifiedECDomain;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], SpecifiedECDomain.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: FieldID })
], SpecifiedECDomain.prototype, "fieldID", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: Curve })
], SpecifiedECDomain.prototype, "curve", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: ECPoint })
], SpecifiedECDomain.prototype, "base", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], SpecifiedECDomain.prototype, "order", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, optional: true })
], SpecifiedECDomain.prototype, "cofactor", void 0);
exports.SpecifiedECDomain = SpecifiedECDomain = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], SpecifiedECDomain);


/***/ }),

/***/ 1388:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var PKCS12AttrSet_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PKCS12AttrSet = exports.PKCS12Attribute = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
class PKCS12Attribute {
    constructor(params = {}) {
        this.attrId = "";
        this.attrValues = [];
        Object.assign(params);
    }
}
exports.PKCS12Attribute = PKCS12Attribute;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], PKCS12Attribute.prototype, "attrId", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any, repeated: "set" })
], PKCS12Attribute.prototype, "attrValues", void 0);
let PKCS12AttrSet = PKCS12AttrSet_1 = class PKCS12AttrSet extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, PKCS12AttrSet_1.prototype);
    }
};
exports.PKCS12AttrSet = PKCS12AttrSet;
exports.PKCS12AttrSet = PKCS12AttrSet = PKCS12AttrSet_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: PKCS12Attribute })
], PKCS12AttrSet);


/***/ }),

/***/ 3727:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var AuthenticatedSafe_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticatedSafe = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_cms_1 = __nccwpck_require__(1467);
let AuthenticatedSafe = AuthenticatedSafe_1 = class AuthenticatedSafe extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, AuthenticatedSafe_1.prototype);
    }
};
exports.AuthenticatedSafe = AuthenticatedSafe;
exports.AuthenticatedSafe = AuthenticatedSafe = AuthenticatedSafe_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: asn1_cms_1.ContentInfo })
], AuthenticatedSafe);


/***/ }),

/***/ 2851:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.id_sdsiCertificate = exports.id_x509Certificate = exports.id_certTypes = exports.CertBag = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const types_1 = __nccwpck_require__(6351);
class CertBag {
    constructor(params = {}) {
        this.certId = "";
        this.certValue = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.CertBag = CertBag;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], CertBag.prototype, "certId", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any, context: 0 })
], CertBag.prototype, "certValue", void 0);
exports.id_certTypes = `${types_1.id_pkcs_9}.22`;
exports.id_x509Certificate = `${exports.id_certTypes}.1`;
exports.id_sdsiCertificate = `${exports.id_certTypes}.2`;


/***/ }),

/***/ 5640:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.id_x509CRL = exports.id_crlTypes = exports.CRLBag = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const types_1 = __nccwpck_require__(6351);
class CRLBag {
    constructor(params = {}) {
        this.crlId = "";
        this.crltValue = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.CRLBag = CRLBag;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], CRLBag.prototype, "crlId", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any, context: 0 })
], CRLBag.prototype, "crltValue", void 0);
exports.id_crlTypes = `${types_1.id_pkcs_9}.23`;
exports.id_x509CRL = `${exports.id_crlTypes}.1`;


/***/ }),

/***/ 5954:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(2851), exports);
tslib_1.__exportStar(__nccwpck_require__(5640), exports);
tslib_1.__exportStar(__nccwpck_require__(364), exports);
tslib_1.__exportStar(__nccwpck_require__(9919), exports);
tslib_1.__exportStar(__nccwpck_require__(1477), exports);
tslib_1.__exportStar(__nccwpck_require__(6351), exports);


/***/ }),

/***/ 364:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyBag = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_pkcs8_1 = __nccwpck_require__(5003);
const asn1_schema_1 = __nccwpck_require__(7261);
let KeyBag = class KeyBag extends asn1_pkcs8_1.PrivateKeyInfo {
};
exports.KeyBag = KeyBag;
exports.KeyBag = KeyBag = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], KeyBag);


/***/ }),

/***/ 9919:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PKCS8ShroudedKeyBag = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_pkcs8_1 = __nccwpck_require__(5003);
const asn1_schema_1 = __nccwpck_require__(7261);
let PKCS8ShroudedKeyBag = class PKCS8ShroudedKeyBag extends asn1_pkcs8_1.EncryptedPrivateKeyInfo {
};
exports.PKCS8ShroudedKeyBag = PKCS8ShroudedKeyBag;
exports.PKCS8ShroudedKeyBag = PKCS8ShroudedKeyBag = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], PKCS8ShroudedKeyBag);


/***/ }),

/***/ 1477:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SecretBag = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
class SecretBag {
    constructor(params = {}) {
        this.secretTypeId = "";
        this.secretValue = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.SecretBag = SecretBag;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], SecretBag.prototype, "secretTypeId", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any, context: 0 })
], SecretBag.prototype, "secretValue", void 0);


/***/ }),

/***/ 6351:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.id_pkcs_9 = exports.id_SafeContents = exports.id_SecretBag = exports.id_CRLBag = exports.id_certBag = exports.id_pkcs8ShroudedKeyBag = exports.id_keyBag = void 0;
const object_identifiers_1 = __nccwpck_require__(9654);
exports.id_keyBag = `${object_identifiers_1.id_bagtypes}.1`;
exports.id_pkcs8ShroudedKeyBag = `${object_identifiers_1.id_bagtypes}.2`;
exports.id_certBag = `${object_identifiers_1.id_bagtypes}.3`;
exports.id_CRLBag = `${object_identifiers_1.id_bagtypes}.4`;
exports.id_SecretBag = `${object_identifiers_1.id_bagtypes}.5`;
exports.id_SafeContents = `${object_identifiers_1.id_bagtypes}.6`;
exports.id_pkcs_9 = "1.2.840.113549.1.9";


/***/ }),

/***/ 8624:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(1388), exports);
tslib_1.__exportStar(__nccwpck_require__(3727), exports);
tslib_1.__exportStar(__nccwpck_require__(5954), exports);
tslib_1.__exportStar(__nccwpck_require__(3977), exports);
tslib_1.__exportStar(__nccwpck_require__(9654), exports);
tslib_1.__exportStar(__nccwpck_require__(626), exports);
tslib_1.__exportStar(__nccwpck_require__(6570), exports);


/***/ }),

/***/ 3977:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MacData = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_rsa_1 = __nccwpck_require__(7300);
const asn1_schema_1 = __nccwpck_require__(7261);
class MacData {
    constructor(params = {}) {
        this.mac = new asn1_rsa_1.DigestInfo();
        this.macSalt = new asn1_schema_1.OctetString();
        this.iterations = 1;
        Object.assign(this, params);
    }
}
exports.MacData = MacData;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_rsa_1.DigestInfo })
], MacData.prototype, "mac", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString })
], MacData.prototype, "macSalt", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, defaultValue: 1 })
], MacData.prototype, "iterations", void 0);


/***/ }),

/***/ 9654:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.id_bagtypes = exports.id_pbewithSHAAnd40BitRC2_CBC = exports.id_pbeWithSHAAnd128BitRC2_CBC = exports.id_pbeWithSHAAnd2_KeyTripleDES_CBC = exports.id_pbeWithSHAAnd3_KeyTripleDES_CBC = exports.id_pbeWithSHAAnd40BitRC4 = exports.id_pbeWithSHAAnd128BitRC4 = exports.id_pkcs_12PbeIds = exports.id_pkcs_12 = exports.id_pkcs = exports.id_rsadsi = void 0;
exports.id_rsadsi = "1.2.840.113549";
exports.id_pkcs = `${exports.id_rsadsi}.1`;
exports.id_pkcs_12 = `${exports.id_pkcs}.12`;
exports.id_pkcs_12PbeIds = `${exports.id_pkcs_12}.1`;
exports.id_pbeWithSHAAnd128BitRC4 = `${exports.id_pkcs_12PbeIds}.1`;
exports.id_pbeWithSHAAnd40BitRC4 = `${exports.id_pkcs_12PbeIds}.2`;
exports.id_pbeWithSHAAnd3_KeyTripleDES_CBC = `${exports.id_pkcs_12PbeIds}.3`;
exports.id_pbeWithSHAAnd2_KeyTripleDES_CBC = `${exports.id_pkcs_12PbeIds}.4`;
exports.id_pbeWithSHAAnd128BitRC2_CBC = `${exports.id_pkcs_12PbeIds}.5`;
exports.id_pbewithSHAAnd40BitRC2_CBC = `${exports.id_pkcs_12PbeIds}.6`;
exports.id_bagtypes = `${exports.id_pkcs_12}.10.1`;


/***/ }),

/***/ 626:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PFX = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_cms_1 = __nccwpck_require__(1467);
const mac_data_1 = __nccwpck_require__(3977);
class PFX {
    constructor(params = {}) {
        this.version = 3;
        this.authSafe = new asn1_cms_1.ContentInfo();
        this.macData = new mac_data_1.MacData();
        Object.assign(this, params);
    }
}
exports.PFX = PFX;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], PFX.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_cms_1.ContentInfo })
], PFX.prototype, "authSafe", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: mac_data_1.MacData, optional: true })
], PFX.prototype, "macData", void 0);


/***/ }),

/***/ 6570:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var SafeContents_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SafeContents = exports.SafeBag = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const attribute_1 = __nccwpck_require__(1388);
class SafeBag {
    constructor(params = {}) {
        this.bagId = "";
        this.bagValue = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.SafeBag = SafeBag;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], SafeBag.prototype, "bagId", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any, context: 0 })
], SafeBag.prototype, "bagValue", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: attribute_1.PKCS12Attribute, repeated: "set", optional: true })
], SafeBag.prototype, "bagAttributes", void 0);
let SafeContents = SafeContents_1 = class SafeContents extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, SafeContents_1.prototype);
    }
};
exports.SafeContents = SafeContents;
exports.SafeContents = SafeContents = SafeContents_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: SafeBag })
], SafeContents);


/***/ }),

/***/ 7750:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EncryptedPrivateKeyInfo = exports.EncryptedData = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
class EncryptedData extends asn1_schema_1.OctetString {
}
exports.EncryptedData = EncryptedData;
class EncryptedPrivateKeyInfo {
    constructor(params = {}) {
        this.encryptionAlgorithm = new asn1_x509_1.AlgorithmIdentifier();
        this.encryptedData = new EncryptedData();
        Object.assign(this, params);
    }
}
exports.EncryptedPrivateKeyInfo = EncryptedPrivateKeyInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.AlgorithmIdentifier })
], EncryptedPrivateKeyInfo.prototype, "encryptionAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: EncryptedData })
], EncryptedPrivateKeyInfo.prototype, "encryptedData", void 0);


/***/ }),

/***/ 5003:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(7750), exports);
tslib_1.__exportStar(__nccwpck_require__(4927), exports);


/***/ }),

/***/ 4927:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var Attributes_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrivateKeyInfo = exports.Attributes = exports.PrivateKey = exports.Version = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
var Version;
(function (Version) {
    Version[Version["v1"] = 0] = "v1";
})(Version || (exports.Version = Version = {}));
class PrivateKey extends asn1_schema_1.OctetString {
}
exports.PrivateKey = PrivateKey;
let Attributes = Attributes_1 = class Attributes extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, Attributes_1.prototype);
    }
};
exports.Attributes = Attributes;
exports.Attributes = Attributes = Attributes_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: asn1_x509_1.Attribute })
], Attributes);
class PrivateKeyInfo {
    constructor(params = {}) {
        this.version = Version.v1;
        this.privateKeyAlgorithm = new asn1_x509_1.AlgorithmIdentifier();
        this.privateKey = new PrivateKey();
        Object.assign(this, params);
    }
}
exports.PrivateKeyInfo = PrivateKeyInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], PrivateKeyInfo.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.AlgorithmIdentifier })
], PrivateKeyInfo.prototype, "privateKeyAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: PrivateKey })
], PrivateKeyInfo.prototype, "privateKey", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: Attributes, implicit: true, context: 0, optional: true })
], PrivateKeyInfo.prototype, "attributes", void 0);


/***/ }),

/***/ 3772:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var ExtensionRequest_1, ExtendedCertificateAttributes_1, SMIMECapabilities_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateOfBirth = exports.UnstructuredAddress = exports.UnstructuredName = exports.EmailAddress = exports.EncryptedPrivateKeyInfo = exports.UserPKCS12 = exports.Pkcs7PDU = exports.PKCS9String = exports.id_at_pseudonym = exports.crlTypes = exports.id_certTypes = exports.id_smime = exports.id_pkcs9_mr_signingTimeMatch = exports.id_pkcs9_mr_caseIgnoreMatch = exports.id_pkcs9_sx_signingTime = exports.id_pkcs9_sx_pkcs9String = exports.id_pkcs9_at_countryOfResidence = exports.id_pkcs9_at_countryOfCitizenship = exports.id_pkcs9_at_gender = exports.id_pkcs9_at_placeOfBirth = exports.id_pkcs9_at_dateOfBirth = exports.id_ietf_at = exports.id_pkcs9_at_pkcs7PDU = exports.id_pkcs9_at_sequenceNumber = exports.id_pkcs9_at_randomNonce = exports.id_pkcs9_at_encryptedPrivateKeyInfo = exports.id_pkcs9_at_pkcs15Token = exports.id_pkcs9_at_userPKCS12 = exports.id_pkcs9_at_localKeyId = exports.id_pkcs9_at_friendlyName = exports.id_pkcs9_at_smimeCapabilities = exports.id_pkcs9_at_extensionRequest = exports.id_pkcs9_at_signingDescription = exports.id_pkcs9_at_extendedCertificateAttributes = exports.id_pkcs9_at_unstructuredAddress = exports.id_pkcs9_at_challengePassword = exports.id_pkcs9_at_counterSignature = exports.id_pkcs9_at_signingTime = exports.id_pkcs9_at_messageDigest = exports.id_pkcs9_at_contentType = exports.id_pkcs9_at_unstructuredName = exports.id_pkcs9_at_emailAddress = exports.id_pkcs9_oc_naturalPerson = exports.id_pkcs9_oc_pkcsEntity = exports.id_pkcs9_mr = exports.id_pkcs9_sx = exports.id_pkcs9_at = exports.id_pkcs9_oc = exports.id_pkcs9_mo = exports.id_pkcs9 = void 0;
exports.SMIMECapabilities = exports.SMIMECapability = exports.SigningDescription = exports.LocalKeyId = exports.FriendlyName = exports.ExtendedCertificateAttributes = exports.ExtensionRequest = exports.ChallengePassword = exports.CounterSignature = exports.SequenceNumber = exports.RandomNonce = exports.SigningTime = exports.MessageDigest = exports.ContentType = exports.Pseudonym = exports.CountryOfResidence = exports.CountryOfCitizenship = exports.Gender = exports.PlaceOfBirth = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const cms = __nccwpck_require__(1467);
const pfx = __nccwpck_require__(8624);
const pkcs8 = __nccwpck_require__(5003);
const x509 = __nccwpck_require__(3594);
const attr = __nccwpck_require__(4938);
exports.id_pkcs9 = "1.2.840.113549.1.9";
exports.id_pkcs9_mo = `${exports.id_pkcs9}.0`;
exports.id_pkcs9_oc = `${exports.id_pkcs9}.24`;
exports.id_pkcs9_at = `${exports.id_pkcs9}.25`;
exports.id_pkcs9_sx = `${exports.id_pkcs9}.26`;
exports.id_pkcs9_mr = `${exports.id_pkcs9}.27`;
exports.id_pkcs9_oc_pkcsEntity = `${exports.id_pkcs9_oc}.1`;
exports.id_pkcs9_oc_naturalPerson = `${exports.id_pkcs9_oc}.2`;
exports.id_pkcs9_at_emailAddress = `${exports.id_pkcs9}.1`;
exports.id_pkcs9_at_unstructuredName = `${exports.id_pkcs9}.2`;
exports.id_pkcs9_at_contentType = `${exports.id_pkcs9}.3`;
exports.id_pkcs9_at_messageDigest = `${exports.id_pkcs9}.4`;
exports.id_pkcs9_at_signingTime = `${exports.id_pkcs9}.5`;
exports.id_pkcs9_at_counterSignature = `${exports.id_pkcs9}.6`;
exports.id_pkcs9_at_challengePassword = `${exports.id_pkcs9}.7`;
exports.id_pkcs9_at_unstructuredAddress = `${exports.id_pkcs9}.8`;
exports.id_pkcs9_at_extendedCertificateAttributes = `${exports.id_pkcs9}.9`;
exports.id_pkcs9_at_signingDescription = `${exports.id_pkcs9}.13`;
exports.id_pkcs9_at_extensionRequest = `${exports.id_pkcs9}.14`;
exports.id_pkcs9_at_smimeCapabilities = `${exports.id_pkcs9}.15`;
exports.id_pkcs9_at_friendlyName = `${exports.id_pkcs9}.20`;
exports.id_pkcs9_at_localKeyId = `${exports.id_pkcs9}.21`;
exports.id_pkcs9_at_userPKCS12 = `2.16.840.1.113730.3.1.216`;
exports.id_pkcs9_at_pkcs15Token = `${exports.id_pkcs9_at}.1`;
exports.id_pkcs9_at_encryptedPrivateKeyInfo = `${exports.id_pkcs9_at}.2`;
exports.id_pkcs9_at_randomNonce = `${exports.id_pkcs9_at}.3`;
exports.id_pkcs9_at_sequenceNumber = `${exports.id_pkcs9_at}.4`;
exports.id_pkcs9_at_pkcs7PDU = `${exports.id_pkcs9_at}.5`;
exports.id_ietf_at = `1.3.6.1.5.5.7.9`;
exports.id_pkcs9_at_dateOfBirth = `${exports.id_ietf_at}.1`;
exports.id_pkcs9_at_placeOfBirth = `${exports.id_ietf_at}.2`;
exports.id_pkcs9_at_gender = `${exports.id_ietf_at}.3`;
exports.id_pkcs9_at_countryOfCitizenship = `${exports.id_ietf_at}.4`;
exports.id_pkcs9_at_countryOfResidence = `${exports.id_ietf_at}.5`;
exports.id_pkcs9_sx_pkcs9String = `${exports.id_pkcs9_sx}.1`;
exports.id_pkcs9_sx_signingTime = `${exports.id_pkcs9_sx}.2`;
exports.id_pkcs9_mr_caseIgnoreMatch = `${exports.id_pkcs9_mr}.1`;
exports.id_pkcs9_mr_signingTimeMatch = `${exports.id_pkcs9_mr}.2`;
exports.id_smime = `${exports.id_pkcs9}.16`;
exports.id_certTypes = `${exports.id_pkcs9}.22`;
exports.crlTypes = `${exports.id_pkcs9}.23`;
exports.id_at_pseudonym = `${attr.id_at}.65`;
let PKCS9String = class PKCS9String extends x509.DirectoryString {
    constructor(params = {}) {
        super(params);
    }
    toString() {
        const o = {};
        o.toString();
        return this.ia5String || super.toString();
    }
};
exports.PKCS9String = PKCS9String;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.IA5String })
], PKCS9String.prototype, "ia5String", void 0);
exports.PKCS9String = PKCS9String = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], PKCS9String);
let Pkcs7PDU = class Pkcs7PDU extends cms.ContentInfo {
};
exports.Pkcs7PDU = Pkcs7PDU;
exports.Pkcs7PDU = Pkcs7PDU = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], Pkcs7PDU);
let UserPKCS12 = class UserPKCS12 extends pfx.PFX {
};
exports.UserPKCS12 = UserPKCS12;
exports.UserPKCS12 = UserPKCS12 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], UserPKCS12);
let EncryptedPrivateKeyInfo = class EncryptedPrivateKeyInfo extends pkcs8.EncryptedPrivateKeyInfo {
};
exports.EncryptedPrivateKeyInfo = EncryptedPrivateKeyInfo;
exports.EncryptedPrivateKeyInfo = EncryptedPrivateKeyInfo = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], EncryptedPrivateKeyInfo);
let EmailAddress = class EmailAddress {
    constructor(value = "") {
        this.value = value;
    }
    toString() {
        return this.value;
    }
};
exports.EmailAddress = EmailAddress;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.IA5String })
], EmailAddress.prototype, "value", void 0);
exports.EmailAddress = EmailAddress = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], EmailAddress);
let UnstructuredName = class UnstructuredName extends PKCS9String {
};
exports.UnstructuredName = UnstructuredName;
exports.UnstructuredName = UnstructuredName = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], UnstructuredName);
let UnstructuredAddress = class UnstructuredAddress extends x509.DirectoryString {
};
exports.UnstructuredAddress = UnstructuredAddress;
exports.UnstructuredAddress = UnstructuredAddress = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], UnstructuredAddress);
let DateOfBirth = class DateOfBirth {
    constructor(value = new Date()) {
        this.value = value;
    }
};
exports.DateOfBirth = DateOfBirth;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.GeneralizedTime })
], DateOfBirth.prototype, "value", void 0);
exports.DateOfBirth = DateOfBirth = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], DateOfBirth);
let PlaceOfBirth = class PlaceOfBirth extends x509.DirectoryString {
};
exports.PlaceOfBirth = PlaceOfBirth;
exports.PlaceOfBirth = PlaceOfBirth = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], PlaceOfBirth);
let Gender = class Gender {
    constructor(value = "M") {
        this.value = value;
    }
    toString() {
        return this.value;
    }
};
exports.Gender = Gender;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.PrintableString })
], Gender.prototype, "value", void 0);
exports.Gender = Gender = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], Gender);
let CountryOfCitizenship = class CountryOfCitizenship {
    constructor(value = "") {
        this.value = value;
    }
    toString() {
        return this.value;
    }
};
exports.CountryOfCitizenship = CountryOfCitizenship;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.PrintableString })
], CountryOfCitizenship.prototype, "value", void 0);
exports.CountryOfCitizenship = CountryOfCitizenship = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], CountryOfCitizenship);
let CountryOfResidence = class CountryOfResidence extends CountryOfCitizenship {
};
exports.CountryOfResidence = CountryOfResidence;
exports.CountryOfResidence = CountryOfResidence = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], CountryOfResidence);
let Pseudonym = class Pseudonym extends x509.DirectoryString {
};
exports.Pseudonym = Pseudonym;
exports.Pseudonym = Pseudonym = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], Pseudonym);
let ContentType = class ContentType {
    constructor(value = "") {
        this.value = value;
    }
    toString() {
        return this.value;
    }
};
exports.ContentType = ContentType;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], ContentType.prototype, "value", void 0);
exports.ContentType = ContentType = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], ContentType);
class MessageDigest extends asn1_schema_1.OctetString {
}
exports.MessageDigest = MessageDigest;
let SigningTime = class SigningTime extends x509.Time {
};
exports.SigningTime = SigningTime;
exports.SigningTime = SigningTime = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], SigningTime);
class RandomNonce extends asn1_schema_1.OctetString {
}
exports.RandomNonce = RandomNonce;
let SequenceNumber = class SequenceNumber {
    constructor(value = 0) {
        this.value = value;
    }
    toString() {
        return this.value.toString();
    }
};
exports.SequenceNumber = SequenceNumber;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], SequenceNumber.prototype, "value", void 0);
exports.SequenceNumber = SequenceNumber = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], SequenceNumber);
let CounterSignature = class CounterSignature extends cms.SignerInfo {
};
exports.CounterSignature = CounterSignature;
exports.CounterSignature = CounterSignature = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], CounterSignature);
let ChallengePassword = class ChallengePassword extends x509.DirectoryString {
};
exports.ChallengePassword = ChallengePassword;
exports.ChallengePassword = ChallengePassword = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], ChallengePassword);
let ExtensionRequest = ExtensionRequest_1 = class ExtensionRequest extends x509.Extensions {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, ExtensionRequest_1.prototype);
    }
};
exports.ExtensionRequest = ExtensionRequest;
exports.ExtensionRequest = ExtensionRequest = ExtensionRequest_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], ExtensionRequest);
let ExtendedCertificateAttributes = ExtendedCertificateAttributes_1 = class ExtendedCertificateAttributes extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, ExtendedCertificateAttributes_1.prototype);
    }
};
exports.ExtendedCertificateAttributes = ExtendedCertificateAttributes;
exports.ExtendedCertificateAttributes = ExtendedCertificateAttributes = ExtendedCertificateAttributes_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Set, itemType: cms.Attribute })
], ExtendedCertificateAttributes);
let FriendlyName = class FriendlyName {
    constructor(value = "") {
        this.value = value;
    }
    toString() {
        return this.value;
    }
};
exports.FriendlyName = FriendlyName;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BmpString })
], FriendlyName.prototype, "value", void 0);
exports.FriendlyName = FriendlyName = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], FriendlyName);
class LocalKeyId extends asn1_schema_1.OctetString {
}
exports.LocalKeyId = LocalKeyId;
class SigningDescription extends x509.DirectoryString {
}
exports.SigningDescription = SigningDescription;
let SMIMECapability = class SMIMECapability extends x509.AlgorithmIdentifier {
};
exports.SMIMECapability = SMIMECapability;
exports.SMIMECapability = SMIMECapability = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], SMIMECapability);
let SMIMECapabilities = SMIMECapabilities_1 = class SMIMECapabilities extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, SMIMECapabilities_1.prototype);
    }
};
exports.SMIMECapabilities = SMIMECapabilities;
exports.SMIMECapabilities = SMIMECapabilities = SMIMECapabilities_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: SMIMECapability })
], SMIMECapabilities);


/***/ }),

/***/ 4276:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sha512_256WithRSAEncryption = exports.sha512_224WithRSAEncryption = exports.sha512WithRSAEncryption = exports.sha384WithRSAEncryption = exports.sha256WithRSAEncryption = exports.sha224WithRSAEncryption = exports.sha1WithRSAEncryption = exports.md5WithRSAEncryption = exports.md2WithRSAEncryption = exports.rsaEncryption = exports.pSpecifiedEmpty = exports.mgf1SHA1 = exports.sha512_256 = exports.sha512_224 = exports.sha512 = exports.sha384 = exports.sha256 = exports.sha224 = exports.sha1 = exports.md4 = exports.md2 = void 0;
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
const oid = __nccwpck_require__(8586);
function create(algorithm) {
    return new asn1_x509_1.AlgorithmIdentifier({ algorithm, parameters: null });
}
exports.md2 = create(oid.id_md2);
exports.md4 = create(oid.id_md5);
exports.sha1 = create(oid.id_sha1);
exports.sha224 = create(oid.id_sha224);
exports.sha256 = create(oid.id_sha256);
exports.sha384 = create(oid.id_sha384);
exports.sha512 = create(oid.id_sha512);
exports.sha512_224 = create(oid.id_sha512_224);
exports.sha512_256 = create(oid.id_sha512_256);
exports.mgf1SHA1 = new asn1_x509_1.AlgorithmIdentifier({
    algorithm: oid.id_mgf1,
    parameters: asn1_schema_1.AsnConvert.serialize(exports.sha1),
});
exports.pSpecifiedEmpty = new asn1_x509_1.AlgorithmIdentifier({
    algorithm: oid.id_pSpecified,
    parameters: asn1_schema_1.AsnConvert.serialize(asn1_schema_1.AsnOctetStringConverter.toASN(new Uint8Array([
        0xda, 0x39, 0xa3, 0xee, 0x5e, 0x6b, 0x4b, 0x0d, 0x32, 0x55, 0xbf, 0xef, 0x95, 0x60, 0x18,
        0x90, 0xaf, 0xd8, 0x07, 0x09,
    ]).buffer)),
});
exports.rsaEncryption = create(oid.id_rsaEncryption);
exports.md2WithRSAEncryption = create(oid.id_md2WithRSAEncryption);
exports.md5WithRSAEncryption = create(oid.id_md5WithRSAEncryption);
exports.sha1WithRSAEncryption = create(oid.id_sha1WithRSAEncryption);
exports.sha224WithRSAEncryption = create(oid.id_sha512_224WithRSAEncryption);
exports.sha256WithRSAEncryption = create(oid.id_sha512_256WithRSAEncryption);
exports.sha384WithRSAEncryption = create(oid.id_sha384WithRSAEncryption);
exports.sha512WithRSAEncryption = create(oid.id_sha512WithRSAEncryption);
exports.sha512_224WithRSAEncryption = create(oid.id_sha512_224WithRSAEncryption);
exports.sha512_256WithRSAEncryption = create(oid.id_sha512_256WithRSAEncryption);


/***/ }),

/***/ 7300:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(421), exports);
tslib_1.__exportStar(__nccwpck_require__(4276), exports);
tslib_1.__exportStar(__nccwpck_require__(8586), exports);
tslib_1.__exportStar(__nccwpck_require__(4197), exports);
tslib_1.__exportStar(__nccwpck_require__(5150), exports);
tslib_1.__exportStar(__nccwpck_require__(3044), exports);


/***/ }),

/***/ 8586:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.id_mgf1 = exports.id_md5 = exports.id_md2 = exports.id_sha512_256 = exports.id_sha512_224 = exports.id_sha512 = exports.id_sha384 = exports.id_sha256 = exports.id_sha224 = exports.id_sha1 = exports.id_sha512_256WithRSAEncryption = exports.id_sha512_224WithRSAEncryption = exports.id_sha512WithRSAEncryption = exports.id_sha384WithRSAEncryption = exports.id_sha256WithRSAEncryption = exports.id_ssha224WithRSAEncryption = exports.id_sha224WithRSAEncryption = exports.id_sha1WithRSAEncryption = exports.id_md5WithRSAEncryption = exports.id_md2WithRSAEncryption = exports.id_RSASSA_PSS = exports.id_pSpecified = exports.id_RSAES_OAEP = exports.id_rsaEncryption = exports.id_pkcs_1 = void 0;
exports.id_pkcs_1 = "1.2.840.113549.1.1";
exports.id_rsaEncryption = `${exports.id_pkcs_1}.1`;
exports.id_RSAES_OAEP = `${exports.id_pkcs_1}.7`;
exports.id_pSpecified = `${exports.id_pkcs_1}.9`;
exports.id_RSASSA_PSS = `${exports.id_pkcs_1}.10`;
exports.id_md2WithRSAEncryption = `${exports.id_pkcs_1}.2`;
exports.id_md5WithRSAEncryption = `${exports.id_pkcs_1}.4`;
exports.id_sha1WithRSAEncryption = `${exports.id_pkcs_1}.5`;
exports.id_sha224WithRSAEncryption = `${exports.id_pkcs_1}.14`;
exports.id_ssha224WithRSAEncryption = exports.id_sha224WithRSAEncryption;
exports.id_sha256WithRSAEncryption = `${exports.id_pkcs_1}.11`;
exports.id_sha384WithRSAEncryption = `${exports.id_pkcs_1}.12`;
exports.id_sha512WithRSAEncryption = `${exports.id_pkcs_1}.13`;
exports.id_sha512_224WithRSAEncryption = `${exports.id_pkcs_1}.15`;
exports.id_sha512_256WithRSAEncryption = `${exports.id_pkcs_1}.16`;
exports.id_sha1 = "1.3.14.3.2.26";
exports.id_sha224 = "2.16.840.1.101.3.4.2.4";
exports.id_sha256 = "2.16.840.1.101.3.4.2.1";
exports.id_sha384 = "2.16.840.1.101.3.4.2.2";
exports.id_sha512 = "2.16.840.1.101.3.4.2.3";
exports.id_sha512_224 = "2.16.840.1.101.3.4.2.5";
exports.id_sha512_256 = "2.16.840.1.101.3.4.2.6";
exports.id_md2 = "1.2.840.113549.2.2";
exports.id_md5 = "1.2.840.113549.2.5";
exports.id_mgf1 = `${exports.id_pkcs_1}.8`;


/***/ }),

/***/ 4197:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var OtherPrimeInfos_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OtherPrimeInfos = exports.OtherPrimeInfo = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
class OtherPrimeInfo {
    constructor(params = {}) {
        this.prime = new ArrayBuffer(0);
        this.exponent = new ArrayBuffer(0);
        this.coefficient = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.OtherPrimeInfo = OtherPrimeInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], OtherPrimeInfo.prototype, "prime", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], OtherPrimeInfo.prototype, "exponent", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], OtherPrimeInfo.prototype, "coefficient", void 0);
let OtherPrimeInfos = OtherPrimeInfos_1 = class OtherPrimeInfos extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, OtherPrimeInfos_1.prototype);
    }
};
exports.OtherPrimeInfos = OtherPrimeInfos;
exports.OtherPrimeInfos = OtherPrimeInfos = OtherPrimeInfos_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: OtherPrimeInfo })
], OtherPrimeInfos);


/***/ }),

/***/ 421:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(135), exports);
tslib_1.__exportStar(__nccwpck_require__(9384), exports);
tslib_1.__exportStar(__nccwpck_require__(9987), exports);


/***/ }),

/***/ 135:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RSAES_OAEP = exports.RsaEsOaepParams = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
const object_identifiers_1 = __nccwpck_require__(8586);
const algorithms_1 = __nccwpck_require__(4276);
class RsaEsOaepParams {
    constructor(params = {}) {
        this.hashAlgorithm = new asn1_x509_1.AlgorithmIdentifier(algorithms_1.sha1);
        this.maskGenAlgorithm = new asn1_x509_1.AlgorithmIdentifier({
            algorithm: object_identifiers_1.id_mgf1,
            parameters: asn1_schema_1.AsnConvert.serialize(algorithms_1.sha1),
        });
        this.pSourceAlgorithm = new asn1_x509_1.AlgorithmIdentifier(algorithms_1.pSpecifiedEmpty);
        Object.assign(this, params);
    }
}
exports.RsaEsOaepParams = RsaEsOaepParams;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.AlgorithmIdentifier, context: 0, defaultValue: algorithms_1.sha1 })
], RsaEsOaepParams.prototype, "hashAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.AlgorithmIdentifier, context: 1, defaultValue: algorithms_1.mgf1SHA1 })
], RsaEsOaepParams.prototype, "maskGenAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.AlgorithmIdentifier, context: 2, defaultValue: algorithms_1.pSpecifiedEmpty })
], RsaEsOaepParams.prototype, "pSourceAlgorithm", void 0);
exports.RSAES_OAEP = new asn1_x509_1.AlgorithmIdentifier({
    algorithm: object_identifiers_1.id_RSAES_OAEP,
    parameters: asn1_schema_1.AsnConvert.serialize(new RsaEsOaepParams()),
});


/***/ }),

/***/ 9987:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DigestInfo = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_x509_1 = __nccwpck_require__(3594);
const asn1_schema_1 = __nccwpck_require__(7261);
class DigestInfo {
    constructor(params = {}) {
        this.digestAlgorithm = new asn1_x509_1.AlgorithmIdentifier();
        this.digest = new asn1_schema_1.OctetString();
        Object.assign(this, params);
    }
}
exports.DigestInfo = DigestInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.AlgorithmIdentifier })
], DigestInfo.prototype, "digestAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString })
], DigestInfo.prototype, "digest", void 0);


/***/ }),

/***/ 9384:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RSASSA_PSS = exports.RsaSaPssParams = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
const object_identifiers_1 = __nccwpck_require__(8586);
const algorithms_1 = __nccwpck_require__(4276);
class RsaSaPssParams {
    constructor(params = {}) {
        this.hashAlgorithm = new asn1_x509_1.AlgorithmIdentifier(algorithms_1.sha1);
        this.maskGenAlgorithm = new asn1_x509_1.AlgorithmIdentifier({
            algorithm: object_identifiers_1.id_mgf1,
            parameters: asn1_schema_1.AsnConvert.serialize(algorithms_1.sha1),
        });
        this.saltLength = 20;
        this.trailerField = 1;
        Object.assign(this, params);
    }
}
exports.RsaSaPssParams = RsaSaPssParams;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.AlgorithmIdentifier, context: 0, defaultValue: algorithms_1.sha1 })
], RsaSaPssParams.prototype, "hashAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.AlgorithmIdentifier, context: 1, defaultValue: algorithms_1.mgf1SHA1 })
], RsaSaPssParams.prototype, "maskGenAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, context: 2, defaultValue: 20 })
], RsaSaPssParams.prototype, "saltLength", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, context: 3, defaultValue: 1 })
], RsaSaPssParams.prototype, "trailerField", void 0);
exports.RSASSA_PSS = new asn1_x509_1.AlgorithmIdentifier({
    algorithm: object_identifiers_1.id_RSASSA_PSS,
    parameters: asn1_schema_1.AsnConvert.serialize(new RsaSaPssParams()),
});


/***/ }),

/***/ 5150:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RSAPrivateKey = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const other_prime_info_1 = __nccwpck_require__(4197);
class RSAPrivateKey {
    constructor(params = {}) {
        this.version = 0;
        this.modulus = new ArrayBuffer(0);
        this.publicExponent = new ArrayBuffer(0);
        this.privateExponent = new ArrayBuffer(0);
        this.prime1 = new ArrayBuffer(0);
        this.prime2 = new ArrayBuffer(0);
        this.exponent1 = new ArrayBuffer(0);
        this.exponent2 = new ArrayBuffer(0);
        this.coefficient = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.RSAPrivateKey = RSAPrivateKey;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], RSAPrivateKey.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "modulus", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "publicExponent", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "privateExponent", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "prime1", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "prime2", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "exponent1", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "exponent2", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], RSAPrivateKey.prototype, "coefficient", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: other_prime_info_1.OtherPrimeInfos, optional: true })
], RSAPrivateKey.prototype, "otherPrimeInfos", void 0);


/***/ }),

/***/ 3044:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RSAPublicKey = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
class RSAPublicKey {
    constructor(params = {}) {
        this.modulus = new ArrayBuffer(0);
        this.publicExponent = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.RSAPublicKey = RSAPublicKey;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], RSAPublicKey.prototype, "modulus", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], RSAPublicKey.prototype, "publicExponent", void 0);


/***/ }),

/***/ 9334:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsnConvert = void 0;
const asn1js = __nccwpck_require__(4549);
const pvtsutils_1 = __nccwpck_require__(4583);
const parser_1 = __nccwpck_require__(7714);
const serializer_1 = __nccwpck_require__(9453);
class AsnConvert {
    static serialize(obj) {
        return serializer_1.AsnSerializer.serialize(obj);
    }
    static parse(data, target) {
        return parser_1.AsnParser.parse(data, target);
    }
    static toString(data) {
        const buf = pvtsutils_1.BufferSourceConverter.isBufferSource(data)
            ? pvtsutils_1.BufferSourceConverter.toArrayBuffer(data)
            : AsnConvert.serialize(data);
        const asn = asn1js.fromBER(buf);
        if (asn.offset === -1) {
            throw new Error(`Cannot decode ASN.1 data. ${asn.result.error}`);
        }
        return asn.result.toString();
    }
}
exports.AsnConvert = AsnConvert;


/***/ }),

/***/ 9004:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsnNullConverter = exports.AsnGeneralizedTimeConverter = exports.AsnUTCTimeConverter = exports.AsnCharacterStringConverter = exports.AsnGeneralStringConverter = exports.AsnVisibleStringConverter = exports.AsnGraphicStringConverter = exports.AsnIA5StringConverter = exports.AsnVideotexStringConverter = exports.AsnTeletexStringConverter = exports.AsnPrintableStringConverter = exports.AsnNumericStringConverter = exports.AsnUniversalStringConverter = exports.AsnBmpStringConverter = exports.AsnUtf8StringConverter = exports.AsnConstructedOctetStringConverter = exports.AsnOctetStringConverter = exports.AsnBooleanConverter = exports.AsnObjectIdentifierConverter = exports.AsnBitStringConverter = exports.AsnIntegerBigIntConverter = exports.AsnIntegerArrayBufferConverter = exports.AsnEnumeratedConverter = exports.AsnIntegerConverter = exports.AsnAnyConverter = void 0;
exports.defaultConverter = defaultConverter;
const asn1js = __nccwpck_require__(4549);
const enums_1 = __nccwpck_require__(4635);
const index_1 = __nccwpck_require__(1243);
exports.AsnAnyConverter = {
    fromASN: (value) => value instanceof asn1js.Null ? null : value.valueBeforeDecodeView,
    toASN: (value) => {
        if (value === null) {
            return new asn1js.Null();
        }
        const schema = asn1js.fromBER(value);
        if (schema.result.error) {
            throw new Error(schema.result.error);
        }
        return schema.result;
    },
};
exports.AsnIntegerConverter = {
    fromASN: (value) => value.valueBlock.valueHexView.byteLength >= 4
        ? value.valueBlock.toString()
        : value.valueBlock.valueDec,
    toASN: (value) => new asn1js.Integer({ value: +value }),
};
exports.AsnEnumeratedConverter = {
    fromASN: (value) => value.valueBlock.valueDec,
    toASN: (value) => new asn1js.Enumerated({ value }),
};
exports.AsnIntegerArrayBufferConverter = {
    fromASN: (value) => value.valueBlock.valueHexView,
    toASN: (value) => new asn1js.Integer({ valueHex: value }),
};
exports.AsnIntegerBigIntConverter = {
    fromASN: (value) => value.toBigInt(),
    toASN: (value) => asn1js.Integer.fromBigInt(value),
};
exports.AsnBitStringConverter = {
    fromASN: (value) => value.valueBlock.valueHexView,
    toASN: (value) => new asn1js.BitString({ valueHex: value }),
};
exports.AsnObjectIdentifierConverter = {
    fromASN: (value) => value.valueBlock.toString(),
    toASN: (value) => new asn1js.ObjectIdentifier({ value }),
};
exports.AsnBooleanConverter = {
    fromASN: (value) => value.valueBlock.value,
    toASN: (value) => new asn1js.Boolean({ value }),
};
exports.AsnOctetStringConverter = {
    fromASN: (value) => value.valueBlock.valueHexView,
    toASN: (value) => new asn1js.OctetString({ valueHex: value }),
};
exports.AsnConstructedOctetStringConverter = {
    fromASN: (value) => new index_1.OctetString(value.getValue()),
    toASN: (value) => value.toASN(),
};
function createStringConverter(Asn1Type) {
    return {
        fromASN: (value) => value.valueBlock.value,
        toASN: (value) => new Asn1Type({ value }),
    };
}
exports.AsnUtf8StringConverter = createStringConverter(asn1js.Utf8String);
exports.AsnBmpStringConverter = createStringConverter(asn1js.BmpString);
exports.AsnUniversalStringConverter = createStringConverter(asn1js.UniversalString);
exports.AsnNumericStringConverter = createStringConverter(asn1js.NumericString);
exports.AsnPrintableStringConverter = createStringConverter(asn1js.PrintableString);
exports.AsnTeletexStringConverter = createStringConverter(asn1js.TeletexString);
exports.AsnVideotexStringConverter = createStringConverter(asn1js.VideotexString);
exports.AsnIA5StringConverter = createStringConverter(asn1js.IA5String);
exports.AsnGraphicStringConverter = createStringConverter(asn1js.GraphicString);
exports.AsnVisibleStringConverter = createStringConverter(asn1js.VisibleString);
exports.AsnGeneralStringConverter = createStringConverter(asn1js.GeneralString);
exports.AsnCharacterStringConverter = createStringConverter(asn1js.CharacterString);
exports.AsnUTCTimeConverter = {
    fromASN: (value) => value.toDate(),
    toASN: (value) => new asn1js.UTCTime({ valueDate: value }),
};
exports.AsnGeneralizedTimeConverter = {
    fromASN: (value) => value.toDate(),
    toASN: (value) => new asn1js.GeneralizedTime({ valueDate: value }),
};
exports.AsnNullConverter = {
    fromASN: () => null,
    toASN: () => {
        return new asn1js.Null();
    },
};
function defaultConverter(type) {
    switch (type) {
        case enums_1.AsnPropTypes.Any:
            return exports.AsnAnyConverter;
        case enums_1.AsnPropTypes.BitString:
            return exports.AsnBitStringConverter;
        case enums_1.AsnPropTypes.BmpString:
            return exports.AsnBmpStringConverter;
        case enums_1.AsnPropTypes.Boolean:
            return exports.AsnBooleanConverter;
        case enums_1.AsnPropTypes.CharacterString:
            return exports.AsnCharacterStringConverter;
        case enums_1.AsnPropTypes.Enumerated:
            return exports.AsnEnumeratedConverter;
        case enums_1.AsnPropTypes.GeneralString:
            return exports.AsnGeneralStringConverter;
        case enums_1.AsnPropTypes.GeneralizedTime:
            return exports.AsnGeneralizedTimeConverter;
        case enums_1.AsnPropTypes.GraphicString:
            return exports.AsnGraphicStringConverter;
        case enums_1.AsnPropTypes.IA5String:
            return exports.AsnIA5StringConverter;
        case enums_1.AsnPropTypes.Integer:
            return exports.AsnIntegerConverter;
        case enums_1.AsnPropTypes.Null:
            return exports.AsnNullConverter;
        case enums_1.AsnPropTypes.NumericString:
            return exports.AsnNumericStringConverter;
        case enums_1.AsnPropTypes.ObjectIdentifier:
            return exports.AsnObjectIdentifierConverter;
        case enums_1.AsnPropTypes.OctetString:
            return exports.AsnOctetStringConverter;
        case enums_1.AsnPropTypes.PrintableString:
            return exports.AsnPrintableStringConverter;
        case enums_1.AsnPropTypes.TeletexString:
            return exports.AsnTeletexStringConverter;
        case enums_1.AsnPropTypes.UTCTime:
            return exports.AsnUTCTimeConverter;
        case enums_1.AsnPropTypes.UniversalString:
            return exports.AsnUniversalStringConverter;
        case enums_1.AsnPropTypes.Utf8String:
            return exports.AsnUtf8StringConverter;
        case enums_1.AsnPropTypes.VideotexString:
            return exports.AsnVideotexStringConverter;
        case enums_1.AsnPropTypes.VisibleString:
            return exports.AsnVisibleStringConverter;
        default:
            return null;
    }
}


/***/ }),

/***/ 8831:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsnProp = exports.AsnSequenceType = exports.AsnSetType = exports.AsnChoiceType = exports.AsnType = void 0;
const converters = __nccwpck_require__(9004);
const enums_1 = __nccwpck_require__(4635);
const storage_1 = __nccwpck_require__(2816);
const AsnType = (options) => (target) => {
    let schema;
    if (!storage_1.schemaStorage.has(target)) {
        schema = storage_1.schemaStorage.createDefault(target);
        storage_1.schemaStorage.set(target, schema);
    }
    else {
        schema = storage_1.schemaStorage.get(target);
    }
    Object.assign(schema, options);
};
exports.AsnType = AsnType;
const AsnChoiceType = () => (0, exports.AsnType)({ type: enums_1.AsnTypeTypes.Choice });
exports.AsnChoiceType = AsnChoiceType;
const AsnSetType = (options) => (0, exports.AsnType)({ type: enums_1.AsnTypeTypes.Set, ...options });
exports.AsnSetType = AsnSetType;
const AsnSequenceType = (options) => (0, exports.AsnType)({ type: enums_1.AsnTypeTypes.Sequence, ...options });
exports.AsnSequenceType = AsnSequenceType;
const AsnProp = (options) => (target, propertyKey) => {
    let schema;
    if (!storage_1.schemaStorage.has(target.constructor)) {
        schema = storage_1.schemaStorage.createDefault(target.constructor);
        storage_1.schemaStorage.set(target.constructor, schema);
    }
    else {
        schema = storage_1.schemaStorage.get(target.constructor);
    }
    const copyOptions = Object.assign({}, options);
    if (typeof copyOptions.type === "number" && !copyOptions.converter) {
        const defaultConverter = converters.defaultConverter(options.type);
        if (!defaultConverter) {
            throw new Error(`Cannot get default converter for property '${propertyKey}' of ${target.constructor.name}`);
        }
        copyOptions.converter = defaultConverter;
    }
    copyOptions.raw = options.raw;
    schema.items[propertyKey] = copyOptions;
};
exports.AsnProp = AsnProp;


/***/ }),

/***/ 4635:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsnPropTypes = exports.AsnTypeTypes = void 0;
var AsnTypeTypes;
(function (AsnTypeTypes) {
    AsnTypeTypes[AsnTypeTypes["Sequence"] = 0] = "Sequence";
    AsnTypeTypes[AsnTypeTypes["Set"] = 1] = "Set";
    AsnTypeTypes[AsnTypeTypes["Choice"] = 2] = "Choice";
})(AsnTypeTypes || (exports.AsnTypeTypes = AsnTypeTypes = {}));
var AsnPropTypes;
(function (AsnPropTypes) {
    AsnPropTypes[AsnPropTypes["Any"] = 1] = "Any";
    AsnPropTypes[AsnPropTypes["Boolean"] = 2] = "Boolean";
    AsnPropTypes[AsnPropTypes["OctetString"] = 3] = "OctetString";
    AsnPropTypes[AsnPropTypes["BitString"] = 4] = "BitString";
    AsnPropTypes[AsnPropTypes["Integer"] = 5] = "Integer";
    AsnPropTypes[AsnPropTypes["Enumerated"] = 6] = "Enumerated";
    AsnPropTypes[AsnPropTypes["ObjectIdentifier"] = 7] = "ObjectIdentifier";
    AsnPropTypes[AsnPropTypes["Utf8String"] = 8] = "Utf8String";
    AsnPropTypes[AsnPropTypes["BmpString"] = 9] = "BmpString";
    AsnPropTypes[AsnPropTypes["UniversalString"] = 10] = "UniversalString";
    AsnPropTypes[AsnPropTypes["NumericString"] = 11] = "NumericString";
    AsnPropTypes[AsnPropTypes["PrintableString"] = 12] = "PrintableString";
    AsnPropTypes[AsnPropTypes["TeletexString"] = 13] = "TeletexString";
    AsnPropTypes[AsnPropTypes["VideotexString"] = 14] = "VideotexString";
    AsnPropTypes[AsnPropTypes["IA5String"] = 15] = "IA5String";
    AsnPropTypes[AsnPropTypes["GraphicString"] = 16] = "GraphicString";
    AsnPropTypes[AsnPropTypes["VisibleString"] = 17] = "VisibleString";
    AsnPropTypes[AsnPropTypes["GeneralString"] = 18] = "GeneralString";
    AsnPropTypes[AsnPropTypes["CharacterString"] = 19] = "CharacterString";
    AsnPropTypes[AsnPropTypes["UTCTime"] = 20] = "UTCTime";
    AsnPropTypes[AsnPropTypes["GeneralizedTime"] = 21] = "GeneralizedTime";
    AsnPropTypes[AsnPropTypes["DATE"] = 22] = "DATE";
    AsnPropTypes[AsnPropTypes["TimeOfDay"] = 23] = "TimeOfDay";
    AsnPropTypes[AsnPropTypes["DateTime"] = 24] = "DateTime";
    AsnPropTypes[AsnPropTypes["Duration"] = 25] = "Duration";
    AsnPropTypes[AsnPropTypes["TIME"] = 26] = "TIME";
    AsnPropTypes[AsnPropTypes["Null"] = 27] = "Null";
})(AsnPropTypes || (exports.AsnPropTypes = AsnPropTypes = {}));


/***/ }),

/***/ 8865:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(8793), exports);


/***/ }),

/***/ 8793:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsnSchemaValidationError = void 0;
class AsnSchemaValidationError extends Error {
    constructor() {
        super(...arguments);
        this.schemas = [];
    }
}
exports.AsnSchemaValidationError = AsnSchemaValidationError;


/***/ }),

/***/ 6109:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isConvertible = isConvertible;
exports.isTypeOfArray = isTypeOfArray;
exports.isArrayEqual = isArrayEqual;
function isConvertible(target) {
    if (typeof target === "function" && target.prototype) {
        if (target.prototype.toASN && target.prototype.fromASN) {
            return true;
        }
        else {
            return isConvertible(target.prototype);
        }
    }
    else {
        return !!(target && typeof target === "object" && "toASN" in target && "fromASN" in target);
    }
}
function isTypeOfArray(target) {
    var _a;
    if (target) {
        const proto = Object.getPrototypeOf(target);
        if (((_a = proto === null || proto === void 0 ? void 0 : proto.prototype) === null || _a === void 0 ? void 0 : _a.constructor) === Array) {
            return true;
        }
        return isTypeOfArray(proto);
    }
    return false;
}
function isArrayEqual(bytes1, bytes2) {
    if (!(bytes1 && bytes2)) {
        return false;
    }
    if (bytes1.byteLength !== bytes2.byteLength) {
        return false;
    }
    const b1 = new Uint8Array(bytes1);
    const b2 = new Uint8Array(bytes2);
    for (let i = 0; i < bytes1.byteLength; i++) {
        if (b1[i] !== b2[i]) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ 7261:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsnSerializer = exports.AsnParser = exports.AsnPropTypes = exports.AsnTypeTypes = exports.AsnSetType = exports.AsnSequenceType = exports.AsnChoiceType = exports.AsnType = exports.AsnProp = void 0;
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(9004), exports);
tslib_1.__exportStar(__nccwpck_require__(1243), exports);
var decorators_1 = __nccwpck_require__(8831);
Object.defineProperty(exports, "AsnProp", ({ enumerable: true, get: function () { return decorators_1.AsnProp; } }));
Object.defineProperty(exports, "AsnType", ({ enumerable: true, get: function () { return decorators_1.AsnType; } }));
Object.defineProperty(exports, "AsnChoiceType", ({ enumerable: true, get: function () { return decorators_1.AsnChoiceType; } }));
Object.defineProperty(exports, "AsnSequenceType", ({ enumerable: true, get: function () { return decorators_1.AsnSequenceType; } }));
Object.defineProperty(exports, "AsnSetType", ({ enumerable: true, get: function () { return decorators_1.AsnSetType; } }));
var enums_1 = __nccwpck_require__(4635);
Object.defineProperty(exports, "AsnTypeTypes", ({ enumerable: true, get: function () { return enums_1.AsnTypeTypes; } }));
Object.defineProperty(exports, "AsnPropTypes", ({ enumerable: true, get: function () { return enums_1.AsnPropTypes; } }));
var parser_1 = __nccwpck_require__(7714);
Object.defineProperty(exports, "AsnParser", ({ enumerable: true, get: function () { return parser_1.AsnParser; } }));
var serializer_1 = __nccwpck_require__(9453);
Object.defineProperty(exports, "AsnSerializer", ({ enumerable: true, get: function () { return serializer_1.AsnSerializer; } }));
tslib_1.__exportStar(__nccwpck_require__(8865), exports);
tslib_1.__exportStar(__nccwpck_require__(341), exports);
tslib_1.__exportStar(__nccwpck_require__(9334), exports);


/***/ }),

/***/ 341:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsnArray = void 0;
class AsnArray extends Array {
    constructor(items = []) {
        if (typeof items === "number") {
            super(items);
        }
        else {
            super();
            for (const item of items) {
                this.push(item);
            }
        }
    }
}
exports.AsnArray = AsnArray;


/***/ }),

/***/ 7714:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsnParser = void 0;
const asn1js = __nccwpck_require__(4549);
const enums_1 = __nccwpck_require__(4635);
const converters = __nccwpck_require__(9004);
const errors_1 = __nccwpck_require__(8865);
const helper_1 = __nccwpck_require__(6109);
const storage_1 = __nccwpck_require__(2816);
class AsnParser {
    static parse(data, target) {
        const asn1Parsed = asn1js.fromBER(data);
        if (asn1Parsed.result.error) {
            throw new Error(asn1Parsed.result.error);
        }
        const res = this.fromASN(asn1Parsed.result, target);
        return res;
    }
    static fromASN(asn1Schema, target) {
        try {
            if ((0, helper_1.isConvertible)(target)) {
                const value = new target();
                return value.fromASN(asn1Schema);
            }
            const schema = storage_1.schemaStorage.get(target);
            storage_1.schemaStorage.cache(target);
            let targetSchema = schema.schema;
            const choiceResult = this.handleChoiceTypes(asn1Schema, schema, target, targetSchema);
            if (choiceResult === null || choiceResult === void 0 ? void 0 : choiceResult.result) {
                return choiceResult.result;
            }
            if (choiceResult === null || choiceResult === void 0 ? void 0 : choiceResult.targetSchema) {
                targetSchema = choiceResult.targetSchema;
            }
            const sequenceResult = this.handleSequenceTypes(asn1Schema, schema, target, targetSchema);
            const res = new target();
            if ((0, helper_1.isTypeOfArray)(target)) {
                return this.handleArrayTypes(asn1Schema, schema, target);
            }
            this.processSchemaItems(schema, sequenceResult, res);
            return res;
        }
        catch (error) {
            if (error instanceof errors_1.AsnSchemaValidationError) {
                error.schemas.push(target.name);
            }
            throw error;
        }
    }
    static handleChoiceTypes(asn1Schema, schema, target, targetSchema) {
        if (asn1Schema.constructor === asn1js.Constructed &&
            schema.type === enums_1.AsnTypeTypes.Choice &&
            asn1Schema.idBlock.tagClass === 3) {
            for (const key in schema.items) {
                const schemaItem = schema.items[key];
                if (schemaItem.context === asn1Schema.idBlock.tagNumber && schemaItem.implicit) {
                    if (typeof schemaItem.type === "function" &&
                        storage_1.schemaStorage.has(schemaItem.type)) {
                        const fieldSchema = storage_1.schemaStorage.get(schemaItem.type);
                        if (fieldSchema && fieldSchema.type === enums_1.AsnTypeTypes.Sequence) {
                            const newSeq = new asn1js.Sequence();
                            if ("value" in asn1Schema.valueBlock &&
                                Array.isArray(asn1Schema.valueBlock.value) &&
                                "value" in newSeq.valueBlock) {
                                newSeq.valueBlock.value = asn1Schema.valueBlock.value;
                                const fieldValue = this.fromASN(newSeq, schemaItem.type);
                                const res = new target();
                                res[key] = fieldValue;
                                return { result: res };
                            }
                        }
                    }
                }
            }
        }
        else if (asn1Schema.constructor === asn1js.Constructed &&
            schema.type !== enums_1.AsnTypeTypes.Choice) {
            const newTargetSchema = new asn1js.Constructed({
                idBlock: {
                    tagClass: 3,
                    tagNumber: asn1Schema.idBlock.tagNumber,
                },
                value: schema.schema.valueBlock.value,
            });
            for (const key in schema.items) {
                delete asn1Schema[key];
            }
            return { targetSchema: newTargetSchema };
        }
        return null;
    }
    static handleSequenceTypes(asn1Schema, schema, target, targetSchema) {
        if (schema.type === enums_1.AsnTypeTypes.Sequence) {
            const asn1ComparedSchema = asn1js.compareSchema({}, asn1Schema, targetSchema);
            if (!asn1ComparedSchema.verified) {
                throw new errors_1.AsnSchemaValidationError(`Data does not match to ${target.name} ASN1 schema.${asn1ComparedSchema.result.error ? ` ${asn1ComparedSchema.result.error}` : ""}`);
            }
            return asn1ComparedSchema;
        }
        else {
            const asn1ComparedSchema = asn1js.compareSchema({}, asn1Schema, targetSchema);
            if (!asn1ComparedSchema.verified) {
                throw new errors_1.AsnSchemaValidationError(`Data does not match to ${target.name} ASN1 schema.${asn1ComparedSchema.result.error ? ` ${asn1ComparedSchema.result.error}` : ""}`);
            }
            return asn1ComparedSchema;
        }
    }
    static processRepeatedField(asn1Elements, asn1Index, schemaItem) {
        let elementsToProcess = asn1Elements.slice(asn1Index);
        if (elementsToProcess.length === 1 && elementsToProcess[0].constructor.name === "Sequence") {
            const seq = elementsToProcess[0];
            if (seq.valueBlock && seq.valueBlock.value && Array.isArray(seq.valueBlock.value)) {
                elementsToProcess = seq.valueBlock.value;
            }
        }
        if (typeof schemaItem.type === "number") {
            const converter = converters.defaultConverter(schemaItem.type);
            if (!converter)
                throw new Error(`No converter for ASN.1 type ${schemaItem.type}`);
            return elementsToProcess
                .filter((el) => el && el.valueBlock)
                .map((el) => {
                try {
                    return converter.fromASN(el);
                }
                catch {
                    return undefined;
                }
            })
                .filter((v) => v !== undefined);
        }
        else {
            return elementsToProcess
                .filter((el) => el && el.valueBlock)
                .map((el) => {
                try {
                    return this.fromASN(el, schemaItem.type);
                }
                catch {
                    return undefined;
                }
            })
                .filter((v) => v !== undefined);
        }
    }
    static processPrimitiveField(asn1Element, schemaItem) {
        const converter = converters.defaultConverter(schemaItem.type);
        if (!converter)
            throw new Error(`No converter for ASN.1 type ${schemaItem.type}`);
        return converter.fromASN(asn1Element);
    }
    static isOptionalChoiceField(schemaItem) {
        return (schemaItem.optional &&
            typeof schemaItem.type === "function" &&
            storage_1.schemaStorage.has(schemaItem.type) &&
            storage_1.schemaStorage.get(schemaItem.type).type === enums_1.AsnTypeTypes.Choice);
    }
    static processOptionalChoiceField(asn1Element, schemaItem) {
        try {
            const value = this.fromASN(asn1Element, schemaItem.type);
            return { processed: true, value };
        }
        catch (err) {
            if (err instanceof errors_1.AsnSchemaValidationError &&
                /Wrong values for Choice type/.test(err.message)) {
                return { processed: false };
            }
            throw err;
        }
    }
    static handleArrayTypes(asn1Schema, schema, target) {
        if (!("value" in asn1Schema.valueBlock && Array.isArray(asn1Schema.valueBlock.value))) {
            throw new Error(`Cannot get items from the ASN.1 parsed value. ASN.1 object is not constructed.`);
        }
        const itemType = schema.itemType;
        if (typeof itemType === "number") {
            const converter = converters.defaultConverter(itemType);
            if (!converter) {
                throw new Error(`Cannot get default converter for array item of ${target.name} ASN1 schema`);
            }
            return target.from(asn1Schema.valueBlock.value, (element) => converter.fromASN(element));
        }
        else {
            return target.from(asn1Schema.valueBlock.value, (element) => this.fromASN(element, itemType));
        }
    }
    static processSchemaItems(schema, asn1ComparedSchema, res) {
        for (const key in schema.items) {
            const asn1SchemaValue = asn1ComparedSchema.result[key];
            if (!asn1SchemaValue) {
                continue;
            }
            const schemaItem = schema.items[key];
            const schemaItemType = schemaItem.type;
            let parsedValue;
            if (typeof schemaItemType === "number" || (0, helper_1.isConvertible)(schemaItemType)) {
                parsedValue = this.processPrimitiveSchemaItem(asn1SchemaValue, schemaItem, schemaItemType);
            }
            else {
                parsedValue = this.processComplexSchemaItem(asn1SchemaValue, schemaItem, schemaItemType);
            }
            if (parsedValue &&
                typeof parsedValue === "object" &&
                "value" in parsedValue &&
                "raw" in parsedValue) {
                res[key] = parsedValue.value;
                res[`${key}Raw`] = parsedValue.raw;
            }
            else {
                res[key] = parsedValue;
            }
        }
    }
    static processPrimitiveSchemaItem(asn1SchemaValue, schemaItem, schemaItemType) {
        var _a;
        const converter = (_a = schemaItem.converter) !== null && _a !== void 0 ? _a : ((0, helper_1.isConvertible)(schemaItemType)
            ? new schemaItemType()
            : null);
        if (!converter) {
            throw new Error("Converter is empty");
        }
        if (schemaItem.repeated) {
            return this.processRepeatedPrimitiveItem(asn1SchemaValue, schemaItem, converter);
        }
        else {
            return this.processSinglePrimitiveItem(asn1SchemaValue, schemaItem, schemaItemType, converter);
        }
    }
    static processRepeatedPrimitiveItem(asn1SchemaValue, schemaItem, converter) {
        if (schemaItem.implicit) {
            const Container = schemaItem.repeated === "sequence" ? asn1js.Sequence : asn1js.Set;
            const newItem = new Container();
            newItem.valueBlock = asn1SchemaValue.valueBlock;
            const newItemAsn = asn1js.fromBER(newItem.toBER(false));
            if (newItemAsn.offset === -1) {
                throw new Error(`Cannot parse the child item. ${newItemAsn.result.error}`);
            }
            if (!("value" in newItemAsn.result.valueBlock &&
                Array.isArray(newItemAsn.result.valueBlock.value))) {
                throw new Error("Cannot get items from the ASN.1 parsed value. ASN.1 object is not constructed.");
            }
            const value = newItemAsn.result.valueBlock.value;
            return Array.from(value, (element) => converter.fromASN(element));
        }
        else {
            return Array.from(asn1SchemaValue, (element) => converter.fromASN(element));
        }
    }
    static processSinglePrimitiveItem(asn1SchemaValue, schemaItem, schemaItemType, converter) {
        let value = asn1SchemaValue;
        if (schemaItem.implicit) {
            let newItem;
            if ((0, helper_1.isConvertible)(schemaItemType)) {
                newItem = new schemaItemType().toSchema("");
            }
            else {
                const Asn1TypeName = enums_1.AsnPropTypes[schemaItemType];
                const Asn1Type = asn1js[Asn1TypeName];
                if (!Asn1Type) {
                    throw new Error(`Cannot get '${Asn1TypeName}' class from asn1js module`);
                }
                newItem = new Asn1Type();
            }
            newItem.valueBlock = value.valueBlock;
            value = asn1js.fromBER(newItem.toBER(false)).result;
        }
        return converter.fromASN(value);
    }
    static processComplexSchemaItem(asn1SchemaValue, schemaItem, schemaItemType) {
        if (schemaItem.repeated) {
            if (!Array.isArray(asn1SchemaValue)) {
                throw new Error("Cannot get list of items from the ASN.1 parsed value. ASN.1 value should be iterable.");
            }
            return Array.from(asn1SchemaValue, (element) => this.fromASN(element, schemaItemType));
        }
        else {
            const valueToProcess = this.handleImplicitTagging(asn1SchemaValue, schemaItem, schemaItemType);
            if (this.isOptionalChoiceField(schemaItem)) {
                try {
                    return this.fromASN(valueToProcess, schemaItemType);
                }
                catch (err) {
                    if (err instanceof errors_1.AsnSchemaValidationError &&
                        /Wrong values for Choice type/.test(err.message)) {
                        return undefined;
                    }
                    throw err;
                }
            }
            else {
                const parsedValue = this.fromASN(valueToProcess, schemaItemType);
                if (schemaItem.raw) {
                    return {
                        value: parsedValue,
                        raw: asn1SchemaValue.valueBeforeDecodeView,
                    };
                }
                return parsedValue;
            }
        }
    }
    static handleImplicitTagging(asn1SchemaValue, schemaItem, schemaItemType) {
        if (schemaItem.implicit && typeof schemaItem.context === "number") {
            const schema = storage_1.schemaStorage.get(schemaItemType);
            if (schema.type === enums_1.AsnTypeTypes.Sequence) {
                const newSeq = new asn1js.Sequence();
                if ("value" in asn1SchemaValue.valueBlock &&
                    Array.isArray(asn1SchemaValue.valueBlock.value) &&
                    "value" in newSeq.valueBlock) {
                    newSeq.valueBlock.value = asn1SchemaValue.valueBlock.value;
                    return newSeq;
                }
            }
            else if (schema.type === enums_1.AsnTypeTypes.Set) {
                const newSet = new asn1js.Set();
                if ("value" in asn1SchemaValue.valueBlock &&
                    Array.isArray(asn1SchemaValue.valueBlock.value) &&
                    "value" in newSet.valueBlock) {
                    newSet.valueBlock.value = asn1SchemaValue.valueBlock.value;
                    return newSet;
                }
            }
        }
        return asn1SchemaValue;
    }
}
exports.AsnParser = AsnParser;


/***/ }),

/***/ 5578:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsnSchemaStorage = void 0;
const asn1js = __nccwpck_require__(4549);
const enums_1 = __nccwpck_require__(4635);
const helper_1 = __nccwpck_require__(6109);
class AsnSchemaStorage {
    constructor() {
        this.items = new WeakMap();
    }
    has(target) {
        return this.items.has(target);
    }
    get(target, checkSchema = false) {
        const schema = this.items.get(target);
        if (!schema) {
            throw new Error(`Cannot get schema for '${target.prototype.constructor.name}' target`);
        }
        if (checkSchema && !schema.schema) {
            throw new Error(`Schema '${target.prototype.constructor.name}' doesn't contain ASN.1 schema. Call 'AsnSchemaStorage.cache'.`);
        }
        return schema;
    }
    cache(target) {
        const schema = this.get(target);
        if (!schema.schema) {
            schema.schema = this.create(target, true);
        }
    }
    createDefault(target) {
        const schema = { type: enums_1.AsnTypeTypes.Sequence, items: {} };
        const parentSchema = this.findParentSchema(target);
        if (parentSchema) {
            Object.assign(schema, parentSchema);
            schema.items = Object.assign({}, schema.items, parentSchema.items);
        }
        return schema;
    }
    create(target, useNames) {
        const schema = this.items.get(target) || this.createDefault(target);
        const asn1Value = [];
        for (const key in schema.items) {
            const item = schema.items[key];
            const name = useNames ? key : "";
            let asn1Item;
            if (typeof item.type === "number") {
                const Asn1TypeName = enums_1.AsnPropTypes[item.type];
                const Asn1Type = asn1js[Asn1TypeName];
                if (!Asn1Type) {
                    throw new Error(`Cannot get ASN1 class by name '${Asn1TypeName}'`);
                }
                asn1Item = new Asn1Type({ name });
            }
            else if ((0, helper_1.isConvertible)(item.type)) {
                const instance = new item.type();
                asn1Item = instance.toSchema(name);
            }
            else if (item.optional) {
                const itemSchema = this.get(item.type);
                if (itemSchema.type === enums_1.AsnTypeTypes.Choice) {
                    asn1Item = new asn1js.Any({ name });
                }
                else {
                    asn1Item = this.create(item.type, false);
                    asn1Item.name = name;
                }
            }
            else {
                asn1Item = new asn1js.Any({ name });
            }
            const optional = !!item.optional || item.defaultValue !== undefined;
            if (item.repeated) {
                asn1Item.name = "";
                const Container = item.repeated === "set" ? asn1js.Set : asn1js.Sequence;
                asn1Item = new Container({
                    name: "",
                    value: [new asn1js.Repeated({ name, value: asn1Item })],
                });
            }
            if (item.context !== null && item.context !== undefined) {
                if (item.implicit) {
                    if (typeof item.type === "number" || (0, helper_1.isConvertible)(item.type)) {
                        const Container = item.repeated ? asn1js.Constructed : asn1js.Primitive;
                        asn1Value.push(new Container({ name, optional, idBlock: { tagClass: 3, tagNumber: item.context } }));
                    }
                    else {
                        this.cache(item.type);
                        const isRepeated = !!item.repeated;
                        let value = !isRepeated ? this.get(item.type, true).schema : asn1Item;
                        value =
                            "valueBlock" in value
                                ? value.valueBlock.value
                                :
                                    value.value;
                        asn1Value.push(new asn1js.Constructed({
                            name: !isRepeated ? name : "",
                            optional,
                            idBlock: { tagClass: 3, tagNumber: item.context },
                            value: value,
                        }));
                    }
                }
                else {
                    asn1Value.push(new asn1js.Constructed({
                        optional,
                        idBlock: { tagClass: 3, tagNumber: item.context },
                        value: [asn1Item],
                    }));
                }
            }
            else {
                asn1Item.optional = optional;
                asn1Value.push(asn1Item);
            }
        }
        switch (schema.type) {
            case enums_1.AsnTypeTypes.Sequence:
                return new asn1js.Sequence({ value: asn1Value, name: "" });
            case enums_1.AsnTypeTypes.Set:
                return new asn1js.Set({ value: asn1Value, name: "" });
            case enums_1.AsnTypeTypes.Choice:
                return new asn1js.Choice({ value: asn1Value, name: "" });
            default:
                throw new Error(`Unsupported ASN1 type in use`);
        }
    }
    set(target, schema) {
        this.items.set(target, schema);
        return this;
    }
    findParentSchema(target) {
        const parent = Object.getPrototypeOf(target);
        if (parent) {
            const schema = this.items.get(parent);
            return schema || this.findParentSchema(parent);
        }
        return null;
    }
}
exports.AsnSchemaStorage = AsnSchemaStorage;


/***/ }),

/***/ 9453:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsnSerializer = void 0;
const asn1js = __nccwpck_require__(4549);
const converters = __nccwpck_require__(9004);
const enums_1 = __nccwpck_require__(4635);
const helper_1 = __nccwpck_require__(6109);
const storage_1 = __nccwpck_require__(2816);
class AsnSerializer {
    static serialize(obj) {
        if (obj instanceof asn1js.BaseBlock) {
            return obj.toBER(false);
        }
        return this.toASN(obj).toBER(false);
    }
    static toASN(obj) {
        if (obj && typeof obj === "object" && (0, helper_1.isConvertible)(obj)) {
            return obj.toASN();
        }
        if (!(obj && typeof obj === "object")) {
            throw new TypeError("Parameter 1 should be type of Object.");
        }
        const target = obj.constructor;
        const schema = storage_1.schemaStorage.get(target);
        storage_1.schemaStorage.cache(target);
        let asn1Value = [];
        if (schema.itemType) {
            if (!Array.isArray(obj)) {
                throw new TypeError("Parameter 1 should be type of Array.");
            }
            if (typeof schema.itemType === "number") {
                const converter = converters.defaultConverter(schema.itemType);
                if (!converter) {
                    throw new Error(`Cannot get default converter for array item of ${target.name} ASN1 schema`);
                }
                asn1Value = obj.map((o) => converter.toASN(o));
            }
            else {
                asn1Value = obj.map((o) => this.toAsnItem({ type: schema.itemType }, "[]", target, o));
            }
        }
        else {
            for (const key in schema.items) {
                const schemaItem = schema.items[key];
                const objProp = obj[key];
                if (objProp === undefined ||
                    schemaItem.defaultValue === objProp ||
                    (typeof schemaItem.defaultValue === "object" &&
                        typeof objProp === "object" &&
                        (0, helper_1.isArrayEqual)(this.serialize(schemaItem.defaultValue), this.serialize(objProp)))) {
                    continue;
                }
                const asn1Item = AsnSerializer.toAsnItem(schemaItem, key, target, objProp);
                if (typeof schemaItem.context === "number") {
                    if (schemaItem.implicit) {
                        if (!schemaItem.repeated &&
                            (typeof schemaItem.type === "number" || (0, helper_1.isConvertible)(schemaItem.type))) {
                            const value = {};
                            value.valueHex =
                                asn1Item instanceof asn1js.Null
                                    ? asn1Item.valueBeforeDecodeView
                                    : asn1Item.valueBlock.toBER();
                            asn1Value.push(new asn1js.Primitive({
                                optional: schemaItem.optional,
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: schemaItem.context,
                                },
                                ...value,
                            }));
                        }
                        else {
                            asn1Value.push(new asn1js.Constructed({
                                optional: schemaItem.optional,
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: schemaItem.context,
                                },
                                value: asn1Item.valueBlock.value,
                            }));
                        }
                    }
                    else {
                        asn1Value.push(new asn1js.Constructed({
                            optional: schemaItem.optional,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: schemaItem.context,
                            },
                            value: [asn1Item],
                        }));
                    }
                }
                else if (schemaItem.repeated) {
                    asn1Value = asn1Value.concat(asn1Item);
                }
                else {
                    asn1Value.push(asn1Item);
                }
            }
        }
        let asnSchema;
        switch (schema.type) {
            case enums_1.AsnTypeTypes.Sequence:
                asnSchema = new asn1js.Sequence({ value: asn1Value });
                break;
            case enums_1.AsnTypeTypes.Set:
                asnSchema = new asn1js.Set({ value: asn1Value });
                break;
            case enums_1.AsnTypeTypes.Choice:
                if (!asn1Value[0]) {
                    throw new Error(`Schema '${target.name}' has wrong data. Choice cannot be empty.`);
                }
                asnSchema = asn1Value[0];
                break;
        }
        return asnSchema;
    }
    static toAsnItem(schemaItem, key, target, objProp) {
        let asn1Item;
        if (typeof schemaItem.type === "number") {
            const converter = schemaItem.converter;
            if (!converter) {
                throw new Error(`Property '${key}' doesn't have converter for type ${enums_1.AsnPropTypes[schemaItem.type]} in schema '${target.name}'`);
            }
            if (schemaItem.repeated) {
                if (!Array.isArray(objProp)) {
                    throw new TypeError("Parameter 'objProp' should be type of Array.");
                }
                const items = Array.from(objProp, (element) => converter.toASN(element));
                const Container = schemaItem.repeated === "sequence" ? asn1js.Sequence : asn1js.Set;
                asn1Item = new Container({
                    value: items,
                });
            }
            else {
                asn1Item = converter.toASN(objProp);
            }
        }
        else {
            if (schemaItem.repeated) {
                if (!Array.isArray(objProp)) {
                    throw new TypeError("Parameter 'objProp' should be type of Array.");
                }
                const items = Array.from(objProp, (element) => this.toASN(element));
                const Container = schemaItem.repeated === "sequence" ? asn1js.Sequence : asn1js.Set;
                asn1Item = new Container({
                    value: items,
                });
            }
            else {
                asn1Item = this.toASN(objProp);
            }
        }
        return asn1Item;
    }
}
exports.AsnSerializer = AsnSerializer;


/***/ }),

/***/ 2816:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.schemaStorage = void 0;
const schema_1 = __nccwpck_require__(5578);
exports.schemaStorage = new schema_1.AsnSchemaStorage();


/***/ }),

/***/ 6958:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitString = void 0;
const asn1js = __nccwpck_require__(4549);
const pvtsutils_1 = __nccwpck_require__(4583);
class BitString {
    constructor(params, unusedBits = 0) {
        this.unusedBits = 0;
        this.value = new ArrayBuffer(0);
        if (params) {
            if (typeof params === "number") {
                this.fromNumber(params);
            }
            else if (pvtsutils_1.BufferSourceConverter.isBufferSource(params)) {
                this.unusedBits = unusedBits;
                this.value = pvtsutils_1.BufferSourceConverter.toArrayBuffer(params);
            }
            else {
                throw TypeError("Unsupported type of 'params' argument for BitString");
            }
        }
    }
    fromASN(asn) {
        if (!(asn instanceof asn1js.BitString)) {
            throw new TypeError("Argument 'asn' is not instance of ASN.1 BitString");
        }
        this.unusedBits = asn.valueBlock.unusedBits;
        this.value = asn.valueBlock.valueHex;
        return this;
    }
    toASN() {
        return new asn1js.BitString({ unusedBits: this.unusedBits, valueHex: this.value });
    }
    toSchema(name) {
        return new asn1js.BitString({ name });
    }
    toNumber() {
        let res = "";
        const uintArray = new Uint8Array(this.value);
        for (const octet of uintArray) {
            res += octet.toString(2).padStart(8, "0");
        }
        res = res.split("").reverse().join("");
        if (this.unusedBits) {
            res = res.slice(this.unusedBits).padStart(this.unusedBits, "0");
        }
        return parseInt(res, 2);
    }
    fromNumber(value) {
        let bits = value.toString(2);
        const octetSize = (bits.length + 7) >> 3;
        this.unusedBits = (octetSize << 3) - bits.length;
        const octets = new Uint8Array(octetSize);
        bits = bits
            .padStart(octetSize << 3, "0")
            .split("")
            .reverse()
            .join("");
        let index = 0;
        while (index < octetSize) {
            octets[index] = parseInt(bits.slice(index << 3, (index << 3) + 8), 2);
            index++;
        }
        this.value = octets.buffer;
    }
}
exports.BitString = BitString;


/***/ }),

/***/ 1243:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(6958), exports);
tslib_1.__exportStar(__nccwpck_require__(1174), exports);


/***/ }),

/***/ 1174:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OctetString = void 0;
const asn1js = __nccwpck_require__(4549);
const pvtsutils_1 = __nccwpck_require__(4583);
class OctetString {
    get byteLength() {
        return this.buffer.byteLength;
    }
    get byteOffset() {
        return 0;
    }
    constructor(param) {
        if (typeof param === "number") {
            this.buffer = new ArrayBuffer(param);
        }
        else {
            if (pvtsutils_1.BufferSourceConverter.isBufferSource(param)) {
                this.buffer = pvtsutils_1.BufferSourceConverter.toArrayBuffer(param);
            }
            else if (Array.isArray(param)) {
                this.buffer = new Uint8Array(param);
            }
            else {
                this.buffer = new ArrayBuffer(0);
            }
        }
    }
    fromASN(asn) {
        if (!(asn instanceof asn1js.OctetString)) {
            throw new TypeError("Argument 'asn' is not instance of ASN.1 OctetString");
        }
        this.buffer = asn.valueBlock.valueHex;
        return this;
    }
    toASN() {
        return new asn1js.OctetString({ valueHex: this.buffer });
    }
    toSchema(name) {
        return new asn1js.OctetString({ name });
    }
}
exports.OctetString = OctetString;


/***/ }),

/***/ 4503:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ACClearAttrs = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
class ACClearAttrs {
    constructor(params = {}) {
        this.acIssuer = new asn1_x509_1.GeneralName();
        this.acSerial = 0;
        this.attrs = [];
        Object.assign(this, params);
    }
}
exports.ACClearAttrs = ACClearAttrs;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.GeneralName })
], ACClearAttrs.prototype, "acIssuer", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], ACClearAttrs.prototype, "acSerial", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.Attribute, repeated: "sequence" })
], ACClearAttrs.prototype, "attrs", void 0);


/***/ }),

/***/ 6239:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AAControls = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const attr_spec_1 = __nccwpck_require__(8221);
class AAControls {
    constructor(params = {}) {
        this.permitUnSpecified = true;
        Object.assign(this, params);
    }
}
exports.AAControls = AAControls;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, optional: true })
], AAControls.prototype, "pathLenConstraint", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: attr_spec_1.AttrSpec, implicit: true, context: 0, optional: true })
], AAControls.prototype, "permittedAttrs", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: attr_spec_1.AttrSpec, implicit: true, context: 1, optional: true })
], AAControls.prototype, "excludedAttrs", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Boolean, defaultValue: true })
], AAControls.prototype, "permitUnSpecified", void 0);


/***/ }),

/***/ 848:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttCertIssuer = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
const v2_form_1 = __nccwpck_require__(1473);
let AttCertIssuer = class AttCertIssuer {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.AttCertIssuer = AttCertIssuer;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.GeneralName, repeated: "sequence" })
], AttCertIssuer.prototype, "v1Form", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: v2_form_1.V2Form, context: 0, implicit: true })
], AttCertIssuer.prototype, "v2Form", void 0);
exports.AttCertIssuer = AttCertIssuer = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], AttCertIssuer);


/***/ }),

/***/ 169:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttCertValidityPeriod = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
class AttCertValidityPeriod {
    constructor(params = {}) {
        this.notBeforeTime = new Date();
        this.notAfterTime = new Date();
        Object.assign(this, params);
    }
}
exports.AttCertValidityPeriod = AttCertValidityPeriod;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.GeneralizedTime })
], AttCertValidityPeriod.prototype, "notBeforeTime", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.GeneralizedTime })
], AttCertValidityPeriod.prototype, "notAfterTime", void 0);


/***/ }),

/***/ 8221:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var AttrSpec_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttrSpec = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
let AttrSpec = AttrSpec_1 = class AttrSpec extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, AttrSpec_1.prototype);
    }
};
exports.AttrSpec = AttrSpec;
exports.AttrSpec = AttrSpec = AttrSpec_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], AttrSpec);


/***/ }),

/***/ 4230:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttributeCertificate = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
const attribute_certificate_info_1 = __nccwpck_require__(8929);
class AttributeCertificate {
    constructor(params = {}) {
        this.acinfo = new attribute_certificate_info_1.AttributeCertificateInfo();
        this.signatureAlgorithm = new asn1_x509_1.AlgorithmIdentifier();
        this.signatureValue = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.AttributeCertificate = AttributeCertificate;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: attribute_certificate_info_1.AttributeCertificateInfo })
], AttributeCertificate.prototype, "acinfo", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.AlgorithmIdentifier })
], AttributeCertificate.prototype, "signatureAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BitString })
], AttributeCertificate.prototype, "signatureValue", void 0);


/***/ }),

/***/ 8929:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttributeCertificateInfo = exports.AttCertVersion = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
const holder_1 = __nccwpck_require__(4046);
const attr_cert_issuer_1 = __nccwpck_require__(848);
const attr_cert_validity_period_1 = __nccwpck_require__(169);
var AttCertVersion;
(function (AttCertVersion) {
    AttCertVersion[AttCertVersion["v2"] = 1] = "v2";
})(AttCertVersion || (exports.AttCertVersion = AttCertVersion = {}));
class AttributeCertificateInfo {
    constructor(params = {}) {
        this.version = AttCertVersion.v2;
        this.holder = new holder_1.Holder();
        this.issuer = new attr_cert_issuer_1.AttCertIssuer();
        this.signature = new asn1_x509_1.AlgorithmIdentifier();
        this.serialNumber = new ArrayBuffer(0);
        this.attrCertValidityPeriod = new attr_cert_validity_period_1.AttCertValidityPeriod();
        this.attributes = [];
        Object.assign(this, params);
    }
}
exports.AttributeCertificateInfo = AttributeCertificateInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], AttributeCertificateInfo.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: holder_1.Holder })
], AttributeCertificateInfo.prototype, "holder", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: attr_cert_issuer_1.AttCertIssuer })
], AttributeCertificateInfo.prototype, "issuer", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.AlgorithmIdentifier })
], AttributeCertificateInfo.prototype, "signature", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], AttributeCertificateInfo.prototype, "serialNumber", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: attr_cert_validity_period_1.AttCertValidityPeriod })
], AttributeCertificateInfo.prototype, "attrCertValidityPeriod", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.Attribute, repeated: "sequence" })
], AttributeCertificateInfo.prototype, "attributes", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BitString, optional: true })
], AttributeCertificateInfo.prototype, "issuerUniqueID", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.Extensions, optional: true })
], AttributeCertificateInfo.prototype, "extensions", void 0);


/***/ }),

/***/ 3765:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassList = exports.ClassListFlags = void 0;
const asn1_schema_1 = __nccwpck_require__(7261);
var ClassListFlags;
(function (ClassListFlags) {
    ClassListFlags[ClassListFlags["unmarked"] = 1] = "unmarked";
    ClassListFlags[ClassListFlags["unclassified"] = 2] = "unclassified";
    ClassListFlags[ClassListFlags["restricted"] = 4] = "restricted";
    ClassListFlags[ClassListFlags["confidential"] = 8] = "confidential";
    ClassListFlags[ClassListFlags["secret"] = 16] = "secret";
    ClassListFlags[ClassListFlags["topSecret"] = 32] = "topSecret";
})(ClassListFlags || (exports.ClassListFlags = ClassListFlags = {}));
class ClassList extends asn1_schema_1.BitString {
}
exports.ClassList = ClassList;


/***/ }),

/***/ 2388:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Clearance = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const class_list_1 = __nccwpck_require__(3765);
const security_category_1 = __nccwpck_require__(7361);
class Clearance {
    constructor(params = {}) {
        this.policyId = "";
        this.classList = new class_list_1.ClassList(class_list_1.ClassListFlags.unclassified);
        Object.assign(this, params);
    }
}
exports.Clearance = Clearance;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], Clearance.prototype, "policyId", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: class_list_1.ClassList, defaultValue: new class_list_1.ClassList(class_list_1.ClassListFlags.unclassified) })
], Clearance.prototype, "classList", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: security_category_1.SecurityCategory, repeated: "set" })
], Clearance.prototype, "securityCategories", void 0);


/***/ }),

/***/ 4046:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Holder = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const issuer_serial_1 = __nccwpck_require__(1642);
const asn1_x509_1 = __nccwpck_require__(3594);
const object_digest_info_1 = __nccwpck_require__(1705);
class Holder {
    constructor(params = {}) {
        Object.assign(this, params);
    }
}
exports.Holder = Holder;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: issuer_serial_1.IssuerSerial, implicit: true, context: 0, optional: true })
], Holder.prototype, "baseCertificateID", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.GeneralNames, implicit: true, context: 1, optional: true })
], Holder.prototype, "entityName", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: object_digest_info_1.ObjectDigestInfo, implicit: true, context: 2, optional: true })
], Holder.prototype, "objectDigestInfo", void 0);


/***/ }),

/***/ 384:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IetfAttrSyntax = exports.IetfAttrSyntaxValueChoices = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
class IetfAttrSyntaxValueChoices {
    constructor(params = {}) {
        Object.assign(this, params);
    }
}
exports.IetfAttrSyntaxValueChoices = IetfAttrSyntaxValueChoices;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString })
], IetfAttrSyntaxValueChoices.prototype, "cotets", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], IetfAttrSyntaxValueChoices.prototype, "oid", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Utf8String })
], IetfAttrSyntaxValueChoices.prototype, "string", void 0);
class IetfAttrSyntax {
    constructor(params = {}) {
        this.values = [];
        Object.assign(this, params);
    }
}
exports.IetfAttrSyntax = IetfAttrSyntax;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.GeneralNames, implicit: true, context: 0, optional: true })
], IetfAttrSyntax.prototype, "policyAuthority", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: IetfAttrSyntaxValueChoices, repeated: "sequence" })
], IetfAttrSyntax.prototype, "values", void 0);


/***/ }),

/***/ 4938:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(4503), exports);
tslib_1.__exportStar(__nccwpck_require__(6239), exports);
tslib_1.__exportStar(__nccwpck_require__(848), exports);
tslib_1.__exportStar(__nccwpck_require__(169), exports);
tslib_1.__exportStar(__nccwpck_require__(8221), exports);
tslib_1.__exportStar(__nccwpck_require__(4230), exports);
tslib_1.__exportStar(__nccwpck_require__(8929), exports);
tslib_1.__exportStar(__nccwpck_require__(3765), exports);
tslib_1.__exportStar(__nccwpck_require__(2388), exports);
tslib_1.__exportStar(__nccwpck_require__(4046), exports);
tslib_1.__exportStar(__nccwpck_require__(384), exports);
tslib_1.__exportStar(__nccwpck_require__(1642), exports);
tslib_1.__exportStar(__nccwpck_require__(1705), exports);
tslib_1.__exportStar(__nccwpck_require__(8604), exports);
tslib_1.__exportStar(__nccwpck_require__(1313), exports);
tslib_1.__exportStar(__nccwpck_require__(5288), exports);
tslib_1.__exportStar(__nccwpck_require__(7361), exports);
tslib_1.__exportStar(__nccwpck_require__(8005), exports);
tslib_1.__exportStar(__nccwpck_require__(7849), exports);
tslib_1.__exportStar(__nccwpck_require__(1473), exports);


/***/ }),

/***/ 1642:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IssuerSerial = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
class IssuerSerial {
    constructor(params = {}) {
        this.issuer = new asn1_x509_1.GeneralNames();
        this.serial = new ArrayBuffer(0);
        this.issuerUID = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.IssuerSerial = IssuerSerial;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.GeneralNames })
], IssuerSerial.prototype, "issuer", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], IssuerSerial.prototype, "serial", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BitString, optional: true })
], IssuerSerial.prototype, "issuerUID", void 0);


/***/ }),

/***/ 1705:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectDigestInfo = exports.DigestedObjectType = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
var DigestedObjectType;
(function (DigestedObjectType) {
    DigestedObjectType[DigestedObjectType["publicKey"] = 0] = "publicKey";
    DigestedObjectType[DigestedObjectType["publicKeyCert"] = 1] = "publicKeyCert";
    DigestedObjectType[DigestedObjectType["otherObjectTypes"] = 2] = "otherObjectTypes";
})(DigestedObjectType || (exports.DigestedObjectType = DigestedObjectType = {}));
class ObjectDigestInfo {
    constructor(params = {}) {
        this.digestedObjectType = DigestedObjectType.publicKey;
        this.digestAlgorithm = new asn1_x509_1.AlgorithmIdentifier();
        this.objectDigest = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.ObjectDigestInfo = ObjectDigestInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Enumerated })
], ObjectDigestInfo.prototype, "digestedObjectType", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier, optional: true })
], ObjectDigestInfo.prototype, "otherObjectTypeID", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.AlgorithmIdentifier })
], ObjectDigestInfo.prototype, "digestAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BitString })
], ObjectDigestInfo.prototype, "objectDigest", void 0);


/***/ }),

/***/ 8604:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.id_at_clearance = exports.id_at_role = exports.id_at = exports.id_aca_encAttrs = exports.id_aca_group = exports.id_aca_chargingIdentity = exports.id_aca_accessIdentity = exports.id_aca_authenticationInfo = exports.id_aca = exports.id_ce_targetInformation = exports.id_pe_ac_proxying = exports.id_pe_aaControls = exports.id_pe_ac_auditIdentity = void 0;
const asn1_x509_1 = __nccwpck_require__(3594);
exports.id_pe_ac_auditIdentity = `${asn1_x509_1.id_pe}.4`;
exports.id_pe_aaControls = `${asn1_x509_1.id_pe}.6`;
exports.id_pe_ac_proxying = `${asn1_x509_1.id_pe}.10`;
exports.id_ce_targetInformation = `${asn1_x509_1.id_ce}.55`;
exports.id_aca = `${asn1_x509_1.id_pkix}.10`;
exports.id_aca_authenticationInfo = `${exports.id_aca}.1`;
exports.id_aca_accessIdentity = `${exports.id_aca}.2`;
exports.id_aca_chargingIdentity = `${exports.id_aca}.3`;
exports.id_aca_group = `${exports.id_aca}.4`;
exports.id_aca_encAttrs = `${exports.id_aca}.6`;
exports.id_at = "2.5.4";
exports.id_at_role = `${exports.id_at}.72`;
exports.id_at_clearance = "2.5.1.5.55";


/***/ }),

/***/ 1313:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var ProxyInfo_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProxyInfo = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const target_1 = __nccwpck_require__(7849);
let ProxyInfo = ProxyInfo_1 = class ProxyInfo extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, ProxyInfo_1.prototype);
    }
};
exports.ProxyInfo = ProxyInfo;
exports.ProxyInfo = ProxyInfo = ProxyInfo_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: target_1.Targets })
], ProxyInfo);


/***/ }),

/***/ 5288:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoleSyntax = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
class RoleSyntax {
    constructor(params = {}) {
        Object.assign(this, params);
    }
}
exports.RoleSyntax = RoleSyntax;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.GeneralNames, implicit: true, context: 0, optional: true })
], RoleSyntax.prototype, "roleAuthority", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.GeneralName, implicit: true, context: 1 })
], RoleSyntax.prototype, "roleName", void 0);


/***/ }),

/***/ 7361:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SecurityCategory = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
class SecurityCategory {
    constructor(params = {}) {
        this.type = "";
        this.value = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.SecurityCategory = SecurityCategory;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier, implicit: true, context: 0 })
], SecurityCategory.prototype, "type", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any, implicit: true, context: 1 })
], SecurityCategory.prototype, "value", void 0);


/***/ }),

/***/ 8005:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SvceAuthInfo = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
class SvceAuthInfo {
    constructor(params = {}) {
        this.service = new asn1_x509_1.GeneralName();
        this.ident = new asn1_x509_1.GeneralName();
        Object.assign(this, params);
    }
}
exports.SvceAuthInfo = SvceAuthInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.GeneralName })
], SvceAuthInfo.prototype, "service", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.GeneralName })
], SvceAuthInfo.prototype, "ident", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString, optional: true })
], SvceAuthInfo.prototype, "authInfo", void 0);


/***/ }),

/***/ 7849:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var Targets_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Targets = exports.Target = exports.TargetCert = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
const issuer_serial_1 = __nccwpck_require__(1642);
const object_digest_info_1 = __nccwpck_require__(1705);
class TargetCert {
    constructor(params = {}) {
        this.targetCertificate = new issuer_serial_1.IssuerSerial();
        Object.assign(this, params);
    }
}
exports.TargetCert = TargetCert;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: issuer_serial_1.IssuerSerial })
], TargetCert.prototype, "targetCertificate", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.GeneralName, optional: true })
], TargetCert.prototype, "targetName", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: object_digest_info_1.ObjectDigestInfo, optional: true })
], TargetCert.prototype, "certDigestInfo", void 0);
let Target = class Target {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.Target = Target;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.GeneralName, context: 0, implicit: true })
], Target.prototype, "targetName", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.GeneralName, context: 1, implicit: true })
], Target.prototype, "targetGroup", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: TargetCert, context: 2, implicit: true })
], Target.prototype, "targetCert", void 0);
exports.Target = Target = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], Target);
let Targets = Targets_1 = class Targets extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, Targets_1.prototype);
    }
};
exports.Targets = Targets;
exports.Targets = Targets = Targets_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: Target })
], Targets);


/***/ }),

/***/ 1473:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V2Form = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const asn1_x509_1 = __nccwpck_require__(3594);
const issuer_serial_1 = __nccwpck_require__(1642);
const object_digest_info_1 = __nccwpck_require__(1705);
class V2Form {
    constructor(params = {}) {
        Object.assign(this, params);
    }
}
exports.V2Form = V2Form;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_x509_1.GeneralNames, optional: true })
], V2Form.prototype, "issuerName", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: issuer_serial_1.IssuerSerial, context: 0, implicit: true, optional: true })
], V2Form.prototype, "baseCertificateID", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: object_digest_info_1.ObjectDigestInfo, context: 1, implicit: true, optional: true })
], V2Form.prototype, "objectDigestInfo", void 0);


/***/ }),

/***/ 4201:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlgorithmIdentifier = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const pvtsutils = __nccwpck_require__(4583);
class AlgorithmIdentifier {
    constructor(params = {}) {
        this.algorithm = "";
        Object.assign(this, params);
    }
    isEqual(data) {
        return (data instanceof AlgorithmIdentifier &&
            data.algorithm == this.algorithm &&
            ((data.parameters &&
                this.parameters &&
                pvtsutils.isEqual(data.parameters, this.parameters)) ||
                data.parameters === this.parameters));
    }
}
exports.AlgorithmIdentifier = AlgorithmIdentifier;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_1.AsnPropTypes.ObjectIdentifier,
    })
], AlgorithmIdentifier.prototype, "algorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_1.AsnPropTypes.Any,
        optional: true,
    })
], AlgorithmIdentifier.prototype, "parameters", void 0);


/***/ }),

/***/ 4122:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Attribute = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
class Attribute {
    constructor(params = {}) {
        this.type = "";
        this.values = [];
        Object.assign(this, params);
    }
}
exports.Attribute = Attribute;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], Attribute.prototype, "type", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any, repeated: "set" })
], Attribute.prototype, "values", void 0);


/***/ }),

/***/ 8490:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Certificate = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const algorithm_identifier_1 = __nccwpck_require__(4201);
const tbs_certificate_1 = __nccwpck_require__(6633);
class Certificate {
    constructor(params = {}) {
        this.tbsCertificate = new tbs_certificate_1.TBSCertificate();
        this.signatureAlgorithm = new algorithm_identifier_1.AlgorithmIdentifier();
        this.signatureValue = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.Certificate = Certificate;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: tbs_certificate_1.TBSCertificate, raw: true })
], Certificate.prototype, "tbsCertificate", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: algorithm_identifier_1.AlgorithmIdentifier })
], Certificate.prototype, "signatureAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BitString })
], Certificate.prototype, "signatureValue", void 0);


/***/ }),

/***/ 2740:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CertificateList = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const algorithm_identifier_1 = __nccwpck_require__(4201);
const tbs_cert_list_1 = __nccwpck_require__(9642);
class CertificateList {
    constructor(params = {}) {
        this.tbsCertList = new tbs_cert_list_1.TBSCertList();
        this.signatureAlgorithm = new algorithm_identifier_1.AlgorithmIdentifier();
        this.signature = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.CertificateList = CertificateList;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: tbs_cert_list_1.TBSCertList, raw: true })
], CertificateList.prototype, "tbsCertList", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: algorithm_identifier_1.AlgorithmIdentifier })
], CertificateList.prototype, "signatureAlgorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BitString })
], CertificateList.prototype, "signature", void 0);


/***/ }),

/***/ 7003:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var Extensions_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Extensions = exports.Extension = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
class Extension {
    constructor(params = {}) {
        this.extnID = "";
        this.critical = Extension.CRITICAL;
        this.extnValue = new asn1_schema_1.OctetString();
        Object.assign(this, params);
    }
}
exports.Extension = Extension;
Extension.CRITICAL = false;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], Extension.prototype, "extnID", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_1.AsnPropTypes.Boolean,
        defaultValue: Extension.CRITICAL,
    })
], Extension.prototype, "critical", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.OctetString })
], Extension.prototype, "extnValue", void 0);
let Extensions = Extensions_1 = class Extensions extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, Extensions_1.prototype);
    }
};
exports.Extensions = Extensions;
exports.Extensions = Extensions = Extensions_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: Extension })
], Extensions);


/***/ }),

/***/ 4378:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var AuthorityInfoAccessSyntax_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorityInfoAccessSyntax = exports.AccessDescription = exports.id_pe_authorityInfoAccess = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const general_name_1 = __nccwpck_require__(6322);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_pe_authorityInfoAccess = `${object_identifiers_1.id_pe}.1`;
class AccessDescription {
    constructor(params = {}) {
        this.accessMethod = "";
        this.accessLocation = new general_name_1.GeneralName();
        Object.assign(this, params);
    }
}
exports.AccessDescription = AccessDescription;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], AccessDescription.prototype, "accessMethod", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: general_name_1.GeneralName })
], AccessDescription.prototype, "accessLocation", void 0);
let AuthorityInfoAccessSyntax = AuthorityInfoAccessSyntax_1 = class AuthorityInfoAccessSyntax extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, AuthorityInfoAccessSyntax_1.prototype);
    }
};
exports.AuthorityInfoAccessSyntax = AuthorityInfoAccessSyntax;
exports.AuthorityInfoAccessSyntax = AuthorityInfoAccessSyntax = AuthorityInfoAccessSyntax_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: AccessDescription })
], AuthorityInfoAccessSyntax);


/***/ }),

/***/ 9528:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorityKeyIdentifier = exports.KeyIdentifier = exports.id_ce_authorityKeyIdentifier = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const general_name_1 = __nccwpck_require__(6322);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_authorityKeyIdentifier = `${object_identifiers_1.id_ce}.35`;
class KeyIdentifier extends asn1_schema_1.OctetString {
}
exports.KeyIdentifier = KeyIdentifier;
class AuthorityKeyIdentifier {
    constructor(params = {}) {
        if (params) {
            Object.assign(this, params);
        }
    }
}
exports.AuthorityKeyIdentifier = AuthorityKeyIdentifier;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: KeyIdentifier, context: 0, optional: true, implicit: true })
], AuthorityKeyIdentifier.prototype, "keyIdentifier", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: general_name_1.GeneralName, context: 1, optional: true, implicit: true, repeated: "sequence" })
], AuthorityKeyIdentifier.prototype, "authorityCertIssuer", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_1.AsnPropTypes.Integer,
        context: 2,
        optional: true,
        implicit: true,
        converter: asn1_schema_1.AsnIntegerArrayBufferConverter,
    })
], AuthorityKeyIdentifier.prototype, "authorityCertSerialNumber", void 0);


/***/ }),

/***/ 5196:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BasicConstraints = exports.id_ce_basicConstraints = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_basicConstraints = `${object_identifiers_1.id_ce}.19`;
class BasicConstraints {
    constructor(params = {}) {
        this.cA = false;
        Object.assign(this, params);
    }
}
exports.BasicConstraints = BasicConstraints;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Boolean, defaultValue: false })
], BasicConstraints.prototype, "cA", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, optional: true })
], BasicConstraints.prototype, "pathLenConstraint", void 0);


/***/ }),

/***/ 2330:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var CertificateIssuer_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CertificateIssuer = exports.id_ce_certificateIssuer = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const general_names_1 = __nccwpck_require__(3361);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_certificateIssuer = `${object_identifiers_1.id_ce}.29`;
let CertificateIssuer = CertificateIssuer_1 = class CertificateIssuer extends general_names_1.GeneralNames {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, CertificateIssuer_1.prototype);
    }
};
exports.CertificateIssuer = CertificateIssuer;
exports.CertificateIssuer = CertificateIssuer = CertificateIssuer_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], CertificateIssuer);


/***/ }),

/***/ 239:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var CertificatePolicies_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CertificatePolicies = exports.PolicyInformation = exports.PolicyQualifierInfo = exports.Qualifier = exports.UserNotice = exports.NoticeReference = exports.DisplayText = exports.id_ce_certificatePolicies_anyPolicy = exports.id_ce_certificatePolicies = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_certificatePolicies = `${object_identifiers_1.id_ce}.32`;
exports.id_ce_certificatePolicies_anyPolicy = `${exports.id_ce_certificatePolicies}.0`;
let DisplayText = class DisplayText {
    constructor(params = {}) {
        Object.assign(this, params);
    }
    toString() {
        return this.ia5String || this.visibleString || this.bmpString || this.utf8String || "";
    }
};
exports.DisplayText = DisplayText;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.IA5String })
], DisplayText.prototype, "ia5String", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.VisibleString })
], DisplayText.prototype, "visibleString", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BmpString })
], DisplayText.prototype, "bmpString", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Utf8String })
], DisplayText.prototype, "utf8String", void 0);
exports.DisplayText = DisplayText = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], DisplayText);
class NoticeReference {
    constructor(params = {}) {
        this.organization = new DisplayText();
        this.noticeNumbers = [];
        Object.assign(this, params);
    }
}
exports.NoticeReference = NoticeReference;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: DisplayText })
], NoticeReference.prototype, "organization", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, repeated: "sequence" })
], NoticeReference.prototype, "noticeNumbers", void 0);
class UserNotice {
    constructor(params = {}) {
        Object.assign(this, params);
    }
}
exports.UserNotice = UserNotice;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: NoticeReference, optional: true })
], UserNotice.prototype, "noticeRef", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: DisplayText, optional: true })
], UserNotice.prototype, "explicitText", void 0);
let Qualifier = class Qualifier {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.Qualifier = Qualifier;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.IA5String })
], Qualifier.prototype, "cPSuri", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: UserNotice })
], Qualifier.prototype, "userNotice", void 0);
exports.Qualifier = Qualifier = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], Qualifier);
class PolicyQualifierInfo {
    constructor(params = {}) {
        this.policyQualifierId = "";
        this.qualifier = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.PolicyQualifierInfo = PolicyQualifierInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], PolicyQualifierInfo.prototype, "policyQualifierId", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any })
], PolicyQualifierInfo.prototype, "qualifier", void 0);
class PolicyInformation {
    constructor(params = {}) {
        this.policyIdentifier = "";
        Object.assign(this, params);
    }
}
exports.PolicyInformation = PolicyInformation;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], PolicyInformation.prototype, "policyIdentifier", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: PolicyQualifierInfo, repeated: "sequence", optional: true })
], PolicyInformation.prototype, "policyQualifiers", void 0);
let CertificatePolicies = CertificatePolicies_1 = class CertificatePolicies extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, CertificatePolicies_1.prototype);
    }
};
exports.CertificatePolicies = CertificatePolicies;
exports.CertificatePolicies = CertificatePolicies = CertificatePolicies_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: PolicyInformation })
], CertificatePolicies);


/***/ }),

/***/ 3610:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseCRLNumber = exports.id_ce_deltaCRLIndicator = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const object_identifiers_1 = __nccwpck_require__(444);
const crl_number_1 = __nccwpck_require__(740);
exports.id_ce_deltaCRLIndicator = `${object_identifiers_1.id_ce}.27`;
let BaseCRLNumber = class BaseCRLNumber extends crl_number_1.CRLNumber {
};
exports.BaseCRLNumber = BaseCRLNumber;
exports.BaseCRLNumber = BaseCRLNumber = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], BaseCRLNumber);


/***/ }),

/***/ 4481:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var CRLDistributionPoints_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CRLDistributionPoints = exports.DistributionPoint = exports.DistributionPointName = exports.Reason = exports.ReasonFlags = exports.id_ce_cRLDistributionPoints = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const name_1 = __nccwpck_require__(3111);
const general_name_1 = __nccwpck_require__(6322);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_cRLDistributionPoints = `${object_identifiers_1.id_ce}.31`;
var ReasonFlags;
(function (ReasonFlags) {
    ReasonFlags[ReasonFlags["unused"] = 1] = "unused";
    ReasonFlags[ReasonFlags["keyCompromise"] = 2] = "keyCompromise";
    ReasonFlags[ReasonFlags["cACompromise"] = 4] = "cACompromise";
    ReasonFlags[ReasonFlags["affiliationChanged"] = 8] = "affiliationChanged";
    ReasonFlags[ReasonFlags["superseded"] = 16] = "superseded";
    ReasonFlags[ReasonFlags["cessationOfOperation"] = 32] = "cessationOfOperation";
    ReasonFlags[ReasonFlags["certificateHold"] = 64] = "certificateHold";
    ReasonFlags[ReasonFlags["privilegeWithdrawn"] = 128] = "privilegeWithdrawn";
    ReasonFlags[ReasonFlags["aACompromise"] = 256] = "aACompromise";
})(ReasonFlags || (exports.ReasonFlags = ReasonFlags = {}));
class Reason extends asn1_schema_1.BitString {
    toJSON() {
        const res = [];
        const flags = this.toNumber();
        if (flags & ReasonFlags.aACompromise) {
            res.push("aACompromise");
        }
        if (flags & ReasonFlags.affiliationChanged) {
            res.push("affiliationChanged");
        }
        if (flags & ReasonFlags.cACompromise) {
            res.push("cACompromise");
        }
        if (flags & ReasonFlags.certificateHold) {
            res.push("certificateHold");
        }
        if (flags & ReasonFlags.cessationOfOperation) {
            res.push("cessationOfOperation");
        }
        if (flags & ReasonFlags.keyCompromise) {
            res.push("keyCompromise");
        }
        if (flags & ReasonFlags.privilegeWithdrawn) {
            res.push("privilegeWithdrawn");
        }
        if (flags & ReasonFlags.superseded) {
            res.push("superseded");
        }
        if (flags & ReasonFlags.unused) {
            res.push("unused");
        }
        return res;
    }
    toString() {
        return `[${this.toJSON().join(", ")}]`;
    }
}
exports.Reason = Reason;
let DistributionPointName = class DistributionPointName {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.DistributionPointName = DistributionPointName;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: general_name_1.GeneralName, context: 0, repeated: "sequence", implicit: true })
], DistributionPointName.prototype, "fullName", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: name_1.RelativeDistinguishedName, context: 1, implicit: true })
], DistributionPointName.prototype, "nameRelativeToCRLIssuer", void 0);
exports.DistributionPointName = DistributionPointName = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], DistributionPointName);
class DistributionPoint {
    constructor(params = {}) {
        Object.assign(this, params);
    }
}
exports.DistributionPoint = DistributionPoint;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: DistributionPointName, context: 0, optional: true })
], DistributionPoint.prototype, "distributionPoint", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: Reason, context: 1, optional: true, implicit: true })
], DistributionPoint.prototype, "reasons", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: general_name_1.GeneralName, context: 2, optional: true, repeated: "sequence", implicit: true })
], DistributionPoint.prototype, "cRLIssuer", void 0);
let CRLDistributionPoints = CRLDistributionPoints_1 = class CRLDistributionPoints extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, CRLDistributionPoints_1.prototype);
    }
};
exports.CRLDistributionPoints = CRLDistributionPoints;
exports.CRLDistributionPoints = CRLDistributionPoints = CRLDistributionPoints_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: DistributionPoint })
], CRLDistributionPoints);


/***/ }),

/***/ 3489:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var FreshestCRL_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FreshestCRL = exports.id_ce_freshestCRL = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const object_identifiers_1 = __nccwpck_require__(444);
const crl_distribution_points_1 = __nccwpck_require__(4481);
exports.id_ce_freshestCRL = `${object_identifiers_1.id_ce}.46`;
let FreshestCRL = FreshestCRL_1 = class FreshestCRL extends crl_distribution_points_1.CRLDistributionPoints {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, FreshestCRL_1.prototype);
    }
};
exports.FreshestCRL = FreshestCRL;
exports.FreshestCRL = FreshestCRL = FreshestCRL_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: crl_distribution_points_1.DistributionPoint })
], FreshestCRL);


/***/ }),

/***/ 4203:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IssuingDistributionPoint = exports.id_ce_issuingDistributionPoint = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const crl_distribution_points_1 = __nccwpck_require__(4481);
const object_identifiers_1 = __nccwpck_require__(444);
const asn1_schema_2 = __nccwpck_require__(7261);
exports.id_ce_issuingDistributionPoint = `${object_identifiers_1.id_ce}.28`;
class IssuingDistributionPoint {
    constructor(params = {}) {
        this.onlyContainsUserCerts = IssuingDistributionPoint.ONLY;
        this.onlyContainsCACerts = IssuingDistributionPoint.ONLY;
        this.indirectCRL = IssuingDistributionPoint.ONLY;
        this.onlyContainsAttributeCerts = IssuingDistributionPoint.ONLY;
        Object.assign(this, params);
    }
}
exports.IssuingDistributionPoint = IssuingDistributionPoint;
IssuingDistributionPoint.ONLY = false;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: crl_distribution_points_1.DistributionPointName, context: 0, optional: true })
], IssuingDistributionPoint.prototype, "distributionPoint", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_2.AsnPropTypes.Boolean,
        context: 1,
        defaultValue: IssuingDistributionPoint.ONLY,
        implicit: true,
    })
], IssuingDistributionPoint.prototype, "onlyContainsUserCerts", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_2.AsnPropTypes.Boolean,
        context: 2,
        defaultValue: IssuingDistributionPoint.ONLY,
        implicit: true,
    })
], IssuingDistributionPoint.prototype, "onlyContainsCACerts", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: crl_distribution_points_1.Reason, context: 3, optional: true, implicit: true })
], IssuingDistributionPoint.prototype, "onlySomeReasons", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_2.AsnPropTypes.Boolean,
        context: 4,
        defaultValue: IssuingDistributionPoint.ONLY,
        implicit: true,
    })
], IssuingDistributionPoint.prototype, "indirectCRL", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_2.AsnPropTypes.Boolean,
        context: 5,
        defaultValue: IssuingDistributionPoint.ONLY,
        implicit: true,
    })
], IssuingDistributionPoint.prototype, "onlyContainsAttributeCerts", void 0);


/***/ }),

/***/ 740:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CRLNumber = exports.id_ce_cRLNumber = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_cRLNumber = `${object_identifiers_1.id_ce}.20`;
let CRLNumber = class CRLNumber {
    constructor(value = 0) {
        this.value = value;
    }
};
exports.CRLNumber = CRLNumber;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer })
], CRLNumber.prototype, "value", void 0);
exports.CRLNumber = CRLNumber = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], CRLNumber);


/***/ }),

/***/ 3825:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CRLReason = exports.CRLReasons = exports.id_ce_cRLReasons = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_cRLReasons = `${object_identifiers_1.id_ce}.21`;
var CRLReasons;
(function (CRLReasons) {
    CRLReasons[CRLReasons["unspecified"] = 0] = "unspecified";
    CRLReasons[CRLReasons["keyCompromise"] = 1] = "keyCompromise";
    CRLReasons[CRLReasons["cACompromise"] = 2] = "cACompromise";
    CRLReasons[CRLReasons["affiliationChanged"] = 3] = "affiliationChanged";
    CRLReasons[CRLReasons["superseded"] = 4] = "superseded";
    CRLReasons[CRLReasons["cessationOfOperation"] = 5] = "cessationOfOperation";
    CRLReasons[CRLReasons["certificateHold"] = 6] = "certificateHold";
    CRLReasons[CRLReasons["removeFromCRL"] = 8] = "removeFromCRL";
    CRLReasons[CRLReasons["privilegeWithdrawn"] = 9] = "privilegeWithdrawn";
    CRLReasons[CRLReasons["aACompromise"] = 10] = "aACompromise";
})(CRLReasons || (exports.CRLReasons = CRLReasons = {}));
let CRLReason = class CRLReason {
    constructor(reason = CRLReasons.unspecified) {
        this.reason = CRLReasons.unspecified;
        this.reason = reason;
    }
    toJSON() {
        return CRLReasons[this.reason];
    }
    toString() {
        return this.toJSON();
    }
};
exports.CRLReason = CRLReason;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Enumerated })
], CRLReason.prototype, "reason", void 0);
exports.CRLReason = CRLReason = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], CRLReason);


/***/ }),

/***/ 40:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntrustVersionInfo = exports.EntrustInfo = exports.EntrustInfoFlags = exports.id_entrust_entrustVersInfo = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
exports.id_entrust_entrustVersInfo = "1.2.840.113533.7.65.0";
var EntrustInfoFlags;
(function (EntrustInfoFlags) {
    EntrustInfoFlags[EntrustInfoFlags["keyUpdateAllowed"] = 1] = "keyUpdateAllowed";
    EntrustInfoFlags[EntrustInfoFlags["newExtensions"] = 2] = "newExtensions";
    EntrustInfoFlags[EntrustInfoFlags["pKIXCertificate"] = 4] = "pKIXCertificate";
})(EntrustInfoFlags || (exports.EntrustInfoFlags = EntrustInfoFlags = {}));
class EntrustInfo extends asn1_schema_1.BitString {
    toJSON() {
        const res = [];
        const flags = this.toNumber();
        if (flags & EntrustInfoFlags.pKIXCertificate) {
            res.push("pKIXCertificate");
        }
        if (flags & EntrustInfoFlags.newExtensions) {
            res.push("newExtensions");
        }
        if (flags & EntrustInfoFlags.keyUpdateAllowed) {
            res.push("keyUpdateAllowed");
        }
        return res;
    }
    toString() {
        return `[${this.toJSON().join(", ")}]`;
    }
}
exports.EntrustInfo = EntrustInfo;
class EntrustVersionInfo {
    constructor(params = {}) {
        this.entrustVers = "";
        this.entrustInfoFlags = new EntrustInfo();
        Object.assign(this, params);
    }
}
exports.EntrustVersionInfo = EntrustVersionInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.GeneralString })
], EntrustVersionInfo.prototype, "entrustVers", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: EntrustInfo })
], EntrustVersionInfo.prototype, "entrustInfoFlags", void 0);


/***/ }),

/***/ 3904:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var ExtendedKeyUsage_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.id_kp_OCSPSigning = exports.id_kp_timeStamping = exports.id_kp_emailProtection = exports.id_kp_codeSigning = exports.id_kp_clientAuth = exports.id_kp_serverAuth = exports.anyExtendedKeyUsage = exports.ExtendedKeyUsage = exports.id_ce_extKeyUsage = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_extKeyUsage = `${object_identifiers_1.id_ce}.37`;
let ExtendedKeyUsage = ExtendedKeyUsage_1 = class ExtendedKeyUsage extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, ExtendedKeyUsage_1.prototype);
    }
};
exports.ExtendedKeyUsage = ExtendedKeyUsage;
exports.ExtendedKeyUsage = ExtendedKeyUsage = ExtendedKeyUsage_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], ExtendedKeyUsage);
exports.anyExtendedKeyUsage = `${exports.id_ce_extKeyUsage}.0`;
exports.id_kp_serverAuth = `${object_identifiers_1.id_kp}.1`;
exports.id_kp_clientAuth = `${object_identifiers_1.id_kp}.2`;
exports.id_kp_codeSigning = `${object_identifiers_1.id_kp}.3`;
exports.id_kp_emailProtection = `${object_identifiers_1.id_kp}.4`;
exports.id_kp_timeStamping = `${object_identifiers_1.id_kp}.8`;
exports.id_kp_OCSPSigning = `${object_identifiers_1.id_kp}.9`;


/***/ }),

/***/ 4461:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(4378), exports);
tslib_1.__exportStar(__nccwpck_require__(9528), exports);
tslib_1.__exportStar(__nccwpck_require__(5196), exports);
tslib_1.__exportStar(__nccwpck_require__(2330), exports);
tslib_1.__exportStar(__nccwpck_require__(239), exports);
tslib_1.__exportStar(__nccwpck_require__(3610), exports);
tslib_1.__exportStar(__nccwpck_require__(4481), exports);
tslib_1.__exportStar(__nccwpck_require__(3489), exports);
tslib_1.__exportStar(__nccwpck_require__(4203), exports);
tslib_1.__exportStar(__nccwpck_require__(740), exports);
tslib_1.__exportStar(__nccwpck_require__(3825), exports);
tslib_1.__exportStar(__nccwpck_require__(3904), exports);
tslib_1.__exportStar(__nccwpck_require__(3480), exports);
tslib_1.__exportStar(__nccwpck_require__(7335), exports);
tslib_1.__exportStar(__nccwpck_require__(5306), exports);
tslib_1.__exportStar(__nccwpck_require__(5226), exports);
tslib_1.__exportStar(__nccwpck_require__(5293), exports);
tslib_1.__exportStar(__nccwpck_require__(8640), exports);
tslib_1.__exportStar(__nccwpck_require__(3741), exports);
tslib_1.__exportStar(__nccwpck_require__(3259), exports);
tslib_1.__exportStar(__nccwpck_require__(3297), exports);
tslib_1.__exportStar(__nccwpck_require__(5503), exports);
tslib_1.__exportStar(__nccwpck_require__(9872), exports);
tslib_1.__exportStar(__nccwpck_require__(40), exports);
tslib_1.__exportStar(__nccwpck_require__(7313), exports);


/***/ }),

/***/ 3480:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InhibitAnyPolicy = exports.id_ce_inhibitAnyPolicy = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_inhibitAnyPolicy = `${object_identifiers_1.id_ce}.54`;
let InhibitAnyPolicy = class InhibitAnyPolicy {
    constructor(value = new ArrayBuffer(0)) {
        this.value = value;
    }
};
exports.InhibitAnyPolicy = InhibitAnyPolicy;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], InhibitAnyPolicy.prototype, "value", void 0);
exports.InhibitAnyPolicy = InhibitAnyPolicy = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], InhibitAnyPolicy);


/***/ }),

/***/ 7335:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvalidityDate = exports.id_ce_invalidityDate = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_invalidityDate = `${object_identifiers_1.id_ce}.24`;
let InvalidityDate = class InvalidityDate {
    constructor(value) {
        this.value = new Date();
        if (value) {
            this.value = value;
        }
    }
};
exports.InvalidityDate = InvalidityDate;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.GeneralizedTime })
], InvalidityDate.prototype, "value", void 0);
exports.InvalidityDate = InvalidityDate = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], InvalidityDate);


/***/ }),

/***/ 5306:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var IssueAlternativeName_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IssueAlternativeName = exports.id_ce_issuerAltName = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const general_names_1 = __nccwpck_require__(3361);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_issuerAltName = `${object_identifiers_1.id_ce}.18`;
let IssueAlternativeName = IssueAlternativeName_1 = class IssueAlternativeName extends general_names_1.GeneralNames {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, IssueAlternativeName_1.prototype);
    }
};
exports.IssueAlternativeName = IssueAlternativeName;
exports.IssueAlternativeName = IssueAlternativeName = IssueAlternativeName_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], IssueAlternativeName);


/***/ }),

/***/ 5226:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyUsage = exports.KeyUsageFlags = exports.id_ce_keyUsage = void 0;
const asn1_schema_1 = __nccwpck_require__(7261);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_keyUsage = `${object_identifiers_1.id_ce}.15`;
var KeyUsageFlags;
(function (KeyUsageFlags) {
    KeyUsageFlags[KeyUsageFlags["digitalSignature"] = 1] = "digitalSignature";
    KeyUsageFlags[KeyUsageFlags["nonRepudiation"] = 2] = "nonRepudiation";
    KeyUsageFlags[KeyUsageFlags["keyEncipherment"] = 4] = "keyEncipherment";
    KeyUsageFlags[KeyUsageFlags["dataEncipherment"] = 8] = "dataEncipherment";
    KeyUsageFlags[KeyUsageFlags["keyAgreement"] = 16] = "keyAgreement";
    KeyUsageFlags[KeyUsageFlags["keyCertSign"] = 32] = "keyCertSign";
    KeyUsageFlags[KeyUsageFlags["cRLSign"] = 64] = "cRLSign";
    KeyUsageFlags[KeyUsageFlags["encipherOnly"] = 128] = "encipherOnly";
    KeyUsageFlags[KeyUsageFlags["decipherOnly"] = 256] = "decipherOnly";
})(KeyUsageFlags || (exports.KeyUsageFlags = KeyUsageFlags = {}));
class KeyUsage extends asn1_schema_1.BitString {
    toJSON() {
        const flag = this.toNumber();
        const res = [];
        if (flag & KeyUsageFlags.cRLSign) {
            res.push("crlSign");
        }
        if (flag & KeyUsageFlags.dataEncipherment) {
            res.push("dataEncipherment");
        }
        if (flag & KeyUsageFlags.decipherOnly) {
            res.push("decipherOnly");
        }
        if (flag & KeyUsageFlags.digitalSignature) {
            res.push("digitalSignature");
        }
        if (flag & KeyUsageFlags.encipherOnly) {
            res.push("encipherOnly");
        }
        if (flag & KeyUsageFlags.keyAgreement) {
            res.push("keyAgreement");
        }
        if (flag & KeyUsageFlags.keyCertSign) {
            res.push("keyCertSign");
        }
        if (flag & KeyUsageFlags.keyEncipherment) {
            res.push("keyEncipherment");
        }
        if (flag & KeyUsageFlags.nonRepudiation) {
            res.push("nonRepudiation");
        }
        return res;
    }
    toString() {
        return `[${this.toJSON().join(", ")}]`;
    }
}
exports.KeyUsage = KeyUsage;


/***/ }),

/***/ 5293:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var GeneralSubtrees_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NameConstraints = exports.GeneralSubtrees = exports.GeneralSubtree = exports.id_ce_nameConstraints = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const general_name_1 = __nccwpck_require__(6322);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_nameConstraints = `${object_identifiers_1.id_ce}.30`;
class GeneralSubtree {
    constructor(params = {}) {
        this.base = new general_name_1.GeneralName();
        this.minimum = 0;
        Object.assign(this, params);
    }
}
exports.GeneralSubtree = GeneralSubtree;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: general_name_1.GeneralName })
], GeneralSubtree.prototype, "base", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, context: 0, defaultValue: 0, implicit: true })
], GeneralSubtree.prototype, "minimum", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, context: 1, optional: true, implicit: true })
], GeneralSubtree.prototype, "maximum", void 0);
let GeneralSubtrees = GeneralSubtrees_1 = class GeneralSubtrees extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, GeneralSubtrees_1.prototype);
    }
};
exports.GeneralSubtrees = GeneralSubtrees;
exports.GeneralSubtrees = GeneralSubtrees = GeneralSubtrees_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: GeneralSubtree })
], GeneralSubtrees);
class NameConstraints {
    constructor(params = {}) {
        Object.assign(this, params);
    }
}
exports.NameConstraints = NameConstraints;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: GeneralSubtrees, context: 0, optional: true, implicit: true })
], NameConstraints.prototype, "permittedSubtrees", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: GeneralSubtrees, context: 1, optional: true, implicit: true })
], NameConstraints.prototype, "excludedSubtrees", void 0);


/***/ }),

/***/ 8640:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolicyConstraints = exports.id_ce_policyConstraints = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_policyConstraints = `${object_identifiers_1.id_ce}.36`;
class PolicyConstraints {
    constructor(params = {}) {
        Object.assign(this, params);
    }
}
exports.PolicyConstraints = PolicyConstraints;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_1.AsnPropTypes.Integer,
        context: 0,
        implicit: true,
        optional: true,
        converter: asn1_schema_1.AsnIntegerArrayBufferConverter,
    })
], PolicyConstraints.prototype, "requireExplicitPolicy", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_1.AsnPropTypes.Integer,
        context: 1,
        implicit: true,
        optional: true,
        converter: asn1_schema_1.AsnIntegerArrayBufferConverter,
    })
], PolicyConstraints.prototype, "inhibitPolicyMapping", void 0);


/***/ }),

/***/ 3741:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var PolicyMappings_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolicyMappings = exports.PolicyMapping = exports.id_ce_policyMappings = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_policyMappings = `${object_identifiers_1.id_ce}.33`;
class PolicyMapping {
    constructor(params = {}) {
        this.issuerDomainPolicy = "";
        this.subjectDomainPolicy = "";
        Object.assign(this, params);
    }
}
exports.PolicyMapping = PolicyMapping;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], PolicyMapping.prototype, "issuerDomainPolicy", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], PolicyMapping.prototype, "subjectDomainPolicy", void 0);
let PolicyMappings = PolicyMappings_1 = class PolicyMappings extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, PolicyMappings_1.prototype);
    }
};
exports.PolicyMappings = PolicyMappings;
exports.PolicyMappings = PolicyMappings = PolicyMappings_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: PolicyMapping })
], PolicyMappings);


/***/ }),

/***/ 9872:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrivateKeyUsagePeriod = exports.id_ce_privateKeyUsagePeriod = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_privateKeyUsagePeriod = `${object_identifiers_1.id_ce}.16`;
class PrivateKeyUsagePeriod {
    constructor(params = {}) {
        Object.assign(this, params);
    }
}
exports.PrivateKeyUsagePeriod = PrivateKeyUsagePeriod;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.GeneralizedTime, context: 0, implicit: true, optional: true })
], PrivateKeyUsagePeriod.prototype, "notBefore", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.GeneralizedTime, context: 1, implicit: true, optional: true })
], PrivateKeyUsagePeriod.prototype, "notAfter", void 0);


/***/ }),

/***/ 3259:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var SubjectAlternativeName_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubjectAlternativeName = exports.id_ce_subjectAltName = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const general_names_1 = __nccwpck_require__(3361);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_subjectAltName = `${object_identifiers_1.id_ce}.17`;
let SubjectAlternativeName = SubjectAlternativeName_1 = class SubjectAlternativeName extends general_names_1.GeneralNames {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, SubjectAlternativeName_1.prototype);
    }
};
exports.SubjectAlternativeName = SubjectAlternativeName;
exports.SubjectAlternativeName = SubjectAlternativeName = SubjectAlternativeName_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], SubjectAlternativeName);


/***/ }),

/***/ 3297:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var SubjectDirectoryAttributes_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubjectDirectoryAttributes = exports.id_ce_subjectDirectoryAttributes = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const attribute_1 = __nccwpck_require__(4122);
const object_identifiers_1 = __nccwpck_require__(444);
exports.id_ce_subjectDirectoryAttributes = `${object_identifiers_1.id_ce}.9`;
let SubjectDirectoryAttributes = SubjectDirectoryAttributes_1 = class SubjectDirectoryAttributes extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, SubjectDirectoryAttributes_1.prototype);
    }
};
exports.SubjectDirectoryAttributes = SubjectDirectoryAttributes;
exports.SubjectDirectoryAttributes = SubjectDirectoryAttributes = SubjectDirectoryAttributes_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: attribute_1.Attribute })
], SubjectDirectoryAttributes);


/***/ }),

/***/ 7313:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var SubjectInfoAccessSyntax_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubjectInfoAccessSyntax = exports.id_pe_subjectInfoAccess = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const object_identifiers_1 = __nccwpck_require__(444);
const authority_information_access_1 = __nccwpck_require__(4378);
exports.id_pe_subjectInfoAccess = `${object_identifiers_1.id_pe}.11`;
let SubjectInfoAccessSyntax = SubjectInfoAccessSyntax_1 = class SubjectInfoAccessSyntax extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, SubjectInfoAccessSyntax_1.prototype);
    }
};
exports.SubjectInfoAccessSyntax = SubjectInfoAccessSyntax;
exports.SubjectInfoAccessSyntax = SubjectInfoAccessSyntax = SubjectInfoAccessSyntax_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: authority_information_access_1.AccessDescription })
], SubjectInfoAccessSyntax);


/***/ }),

/***/ 5503:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubjectKeyIdentifier = exports.id_ce_subjectKeyIdentifier = void 0;
const object_identifiers_1 = __nccwpck_require__(444);
const authority_key_identifier_1 = __nccwpck_require__(9528);
exports.id_ce_subjectKeyIdentifier = `${object_identifiers_1.id_ce}.14`;
class SubjectKeyIdentifier extends authority_key_identifier_1.KeyIdentifier {
}
exports.SubjectKeyIdentifier = SubjectKeyIdentifier;


/***/ }),

/***/ 6322:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeneralName = exports.EDIPartyName = exports.OtherName = exports.AsnIpConverter = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const ip_converter_1 = __nccwpck_require__(8750);
const name_1 = __nccwpck_require__(3111);
exports.AsnIpConverter = {
    fromASN: (value) => ip_converter_1.IpConverter.toString(asn1_schema_1.AsnOctetStringConverter.fromASN(value)),
    toASN: (value) => asn1_schema_1.AsnOctetStringConverter.toASN(ip_converter_1.IpConverter.fromString(value)),
};
class OtherName {
    constructor(params = {}) {
        this.typeId = "";
        this.value = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.OtherName = OtherName;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], OtherName.prototype, "typeId", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any, context: 0 })
], OtherName.prototype, "value", void 0);
class EDIPartyName {
    constructor(params = {}) {
        this.partyName = new name_1.DirectoryString();
        Object.assign(this, params);
    }
}
exports.EDIPartyName = EDIPartyName;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: name_1.DirectoryString, optional: true, context: 0, implicit: true })
], EDIPartyName.prototype, "nameAssigner", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: name_1.DirectoryString, context: 1, implicit: true })
], EDIPartyName.prototype, "partyName", void 0);
let GeneralName = class GeneralName {
    constructor(params = {}) {
        Object.assign(this, params);
    }
};
exports.GeneralName = GeneralName;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: OtherName, context: 0, implicit: true })
], GeneralName.prototype, "otherName", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.IA5String, context: 1, implicit: true })
], GeneralName.prototype, "rfc822Name", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.IA5String, context: 2, implicit: true })
], GeneralName.prototype, "dNSName", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any, context: 3, implicit: true })
], GeneralName.prototype, "x400Address", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: name_1.Name, context: 4, implicit: false })
], GeneralName.prototype, "directoryName", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: EDIPartyName, context: 5 })
], GeneralName.prototype, "ediPartyName", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.IA5String, context: 6, implicit: true })
], GeneralName.prototype, "uniformResourceIdentifier", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_1.AsnPropTypes.OctetString,
        context: 7,
        implicit: true,
        converter: exports.AsnIpConverter,
    })
], GeneralName.prototype, "iPAddress", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier, context: 8, implicit: true })
], GeneralName.prototype, "registeredID", void 0);
exports.GeneralName = GeneralName = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], GeneralName);


/***/ }),

/***/ 3361:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var GeneralNames_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeneralNames = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const general_name_1 = __nccwpck_require__(6322);
const asn1_schema_2 = __nccwpck_require__(7261);
let GeneralNames = GeneralNames_1 = class GeneralNames extends asn1_schema_2.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, GeneralNames_1.prototype);
    }
};
exports.GeneralNames = GeneralNames;
exports.GeneralNames = GeneralNames = GeneralNames_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: general_name_1.GeneralName })
], GeneralNames);


/***/ }),

/***/ 3594:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(1860);
tslib_1.__exportStar(__nccwpck_require__(4461), exports);
tslib_1.__exportStar(__nccwpck_require__(4201), exports);
tslib_1.__exportStar(__nccwpck_require__(4122), exports);
tslib_1.__exportStar(__nccwpck_require__(8490), exports);
tslib_1.__exportStar(__nccwpck_require__(2740), exports);
tslib_1.__exportStar(__nccwpck_require__(7003), exports);
tslib_1.__exportStar(__nccwpck_require__(6322), exports);
tslib_1.__exportStar(__nccwpck_require__(3361), exports);
tslib_1.__exportStar(__nccwpck_require__(3111), exports);
tslib_1.__exportStar(__nccwpck_require__(444), exports);
tslib_1.__exportStar(__nccwpck_require__(6359), exports);
tslib_1.__exportStar(__nccwpck_require__(9642), exports);
tslib_1.__exportStar(__nccwpck_require__(6633), exports);
tslib_1.__exportStar(__nccwpck_require__(5277), exports);
tslib_1.__exportStar(__nccwpck_require__(2663), exports);
tslib_1.__exportStar(__nccwpck_require__(5714), exports);


/***/ }),

/***/ 8750:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IpConverter = void 0;
const pvtsutils_1 = __nccwpck_require__(4583);
class IpConverter {
    static isIPv4(ip) {
        return /^(\d{1,3}\.){3}\d{1,3}$/.test(ip);
    }
    static parseIPv4(ip) {
        const parts = ip.split(".");
        if (parts.length !== 4) {
            throw new Error("Invalid IPv4 address");
        }
        return parts.map((part) => {
            const num = parseInt(part, 10);
            if (isNaN(num) || num < 0 || num > 255) {
                throw new Error("Invalid IPv4 address part");
            }
            return num;
        });
    }
    static parseIPv6(ip) {
        const expandedIP = this.expandIPv6(ip);
        const parts = expandedIP.split(":");
        if (parts.length !== 8) {
            throw new Error("Invalid IPv6 address");
        }
        return parts.reduce((bytes, part) => {
            const num = parseInt(part, 16);
            if (isNaN(num) || num < 0 || num > 0xffff) {
                throw new Error("Invalid IPv6 address part");
            }
            bytes.push((num >> 8) & 0xff);
            bytes.push(num & 0xff);
            return bytes;
        }, []);
    }
    static expandIPv6(ip) {
        if (!ip.includes("::")) {
            return ip;
        }
        const parts = ip.split("::");
        if (parts.length > 2) {
            throw new Error("Invalid IPv6 address");
        }
        const left = parts[0] ? parts[0].split(":") : [];
        const right = parts[1] ? parts[1].split(":") : [];
        const missing = 8 - (left.length + right.length);
        if (missing < 0) {
            throw new Error("Invalid IPv6 address");
        }
        return [...left, ...Array(missing).fill("0"), ...right].join(":");
    }
    static formatIPv6(bytes) {
        const parts = [];
        for (let i = 0; i < 16; i += 2) {
            parts.push(((bytes[i] << 8) | bytes[i + 1]).toString(16));
        }
        return this.compressIPv6(parts.join(":"));
    }
    static compressIPv6(ip) {
        const parts = ip.split(":");
        let longestZeroStart = -1;
        let longestZeroLength = 0;
        let currentZeroStart = -1;
        let currentZeroLength = 0;
        for (let i = 0; i < parts.length; i++) {
            if (parts[i] === "0") {
                if (currentZeroStart === -1) {
                    currentZeroStart = i;
                }
                currentZeroLength++;
            }
            else {
                if (currentZeroLength > longestZeroLength) {
                    longestZeroStart = currentZeroStart;
                    longestZeroLength = currentZeroLength;
                }
                currentZeroStart = -1;
                currentZeroLength = 0;
            }
        }
        if (currentZeroLength > longestZeroLength) {
            longestZeroStart = currentZeroStart;
            longestZeroLength = currentZeroLength;
        }
        if (longestZeroLength > 1) {
            const before = parts.slice(0, longestZeroStart).join(":");
            const after = parts.slice(longestZeroStart + longestZeroLength).join(":");
            return `${before}::${after}`;
        }
        return ip;
    }
    static parseCIDR(text) {
        const [addr, prefixStr] = text.split("/");
        const prefix = parseInt(prefixStr, 10);
        if (this.isIPv4(addr)) {
            if (prefix < 0 || prefix > 32) {
                throw new Error("Invalid IPv4 prefix length");
            }
            return [this.parseIPv4(addr), prefix];
        }
        else {
            if (prefix < 0 || prefix > 128) {
                throw new Error("Invalid IPv6 prefix length");
            }
            return [this.parseIPv6(addr), prefix];
        }
    }
    static decodeIP(value) {
        if (value.length === 64 && parseInt(value, 16) === 0) {
            return "::/0";
        }
        if (value.length !== 16) {
            return value;
        }
        const mask = parseInt(value.slice(8), 16)
            .toString(2)
            .split("")
            .reduce((a, k) => a + +k, 0);
        let ip = value.slice(0, 8).replace(/(.{2})/g, (match) => `${parseInt(match, 16)}.`);
        ip = ip.slice(0, -1);
        return `${ip}/${mask}`;
    }
    static toString(buf) {
        const uint8 = new Uint8Array(buf);
        if (uint8.length === 4) {
            return Array.from(uint8).join(".");
        }
        if (uint8.length === 16) {
            return this.formatIPv6(uint8);
        }
        if (uint8.length === 8 || uint8.length === 32) {
            const half = uint8.length / 2;
            const addrBytes = uint8.slice(0, half);
            const maskBytes = uint8.slice(half);
            const isAllZeros = uint8.every((byte) => byte === 0);
            if (isAllZeros) {
                return uint8.length === 8 ? "0.0.0.0/0" : "::/0";
            }
            const prefixLen = maskBytes.reduce((a, b) => a + (b.toString(2).match(/1/g) || []).length, 0);
            if (uint8.length === 8) {
                const addrStr = Array.from(addrBytes).join(".");
                return `${addrStr}/${prefixLen}`;
            }
            else {
                const addrStr = this.formatIPv6(addrBytes);
                return `${addrStr}/${prefixLen}`;
            }
        }
        return this.decodeIP(pvtsutils_1.Convert.ToHex(buf));
    }
    static fromString(text) {
        if (text.includes("/")) {
            const [addr, prefix] = this.parseCIDR(text);
            const maskBytes = new Uint8Array(addr.length);
            let bitsLeft = prefix;
            for (let i = 0; i < maskBytes.length; i++) {
                if (bitsLeft >= 8) {
                    maskBytes[i] = 0xff;
                    bitsLeft -= 8;
                }
                else if (bitsLeft > 0) {
                    maskBytes[i] = 0xff << (8 - bitsLeft);
                    bitsLeft = 0;
                }
            }
            const out = new Uint8Array(addr.length * 2);
            out.set(addr, 0);
            out.set(maskBytes, addr.length);
            return out.buffer;
        }
        const bytes = this.isIPv4(text) ? this.parseIPv4(text) : this.parseIPv6(text);
        return new Uint8Array(bytes).buffer;
    }
}
exports.IpConverter = IpConverter;


/***/ }),

/***/ 3111:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

var RelativeDistinguishedName_1, RDNSequence_1, Name_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Name = exports.RDNSequence = exports.RelativeDistinguishedName = exports.AttributeTypeAndValue = exports.AttributeValue = exports.DirectoryString = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const pvtsutils_1 = __nccwpck_require__(4583);
let DirectoryString = class DirectoryString {
    constructor(params = {}) {
        Object.assign(this, params);
    }
    toString() {
        return (this.bmpString ||
            this.printableString ||
            this.teletexString ||
            this.universalString ||
            this.utf8String ||
            "");
    }
};
exports.DirectoryString = DirectoryString;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.TeletexString })
], DirectoryString.prototype, "teletexString", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.PrintableString })
], DirectoryString.prototype, "printableString", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.UniversalString })
], DirectoryString.prototype, "universalString", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Utf8String })
], DirectoryString.prototype, "utf8String", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BmpString })
], DirectoryString.prototype, "bmpString", void 0);
exports.DirectoryString = DirectoryString = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], DirectoryString);
let AttributeValue = class AttributeValue extends DirectoryString {
    constructor(params = {}) {
        super(params);
        Object.assign(this, params);
    }
    toString() {
        return this.ia5String || (this.anyValue ? pvtsutils_1.Convert.ToHex(this.anyValue) : super.toString());
    }
};
exports.AttributeValue = AttributeValue;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.IA5String })
], AttributeValue.prototype, "ia5String", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Any })
], AttributeValue.prototype, "anyValue", void 0);
exports.AttributeValue = AttributeValue = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], AttributeValue);
class AttributeTypeAndValue {
    constructor(params = {}) {
        this.type = "";
        this.value = new AttributeValue();
        Object.assign(this, params);
    }
}
exports.AttributeTypeAndValue = AttributeTypeAndValue;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.ObjectIdentifier })
], AttributeTypeAndValue.prototype, "type", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: AttributeValue })
], AttributeTypeAndValue.prototype, "value", void 0);
let RelativeDistinguishedName = RelativeDistinguishedName_1 = class RelativeDistinguishedName extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, RelativeDistinguishedName_1.prototype);
    }
};
exports.RelativeDistinguishedName = RelativeDistinguishedName;
exports.RelativeDistinguishedName = RelativeDistinguishedName = RelativeDistinguishedName_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Set, itemType: AttributeTypeAndValue })
], RelativeDistinguishedName);
let RDNSequence = RDNSequence_1 = class RDNSequence extends asn1_schema_1.AsnArray {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, RDNSequence_1.prototype);
    }
};
exports.RDNSequence = RDNSequence;
exports.RDNSequence = RDNSequence = RDNSequence_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence, itemType: RelativeDistinguishedName })
], RDNSequence);
let Name = Name_1 = class Name extends RDNSequence {
    constructor(items) {
        super(items);
        Object.setPrototypeOf(this, Name_1.prototype);
    }
};
exports.Name = Name;
exports.Name = Name = Name_1 = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Sequence })
], Name);


/***/ }),

/***/ 444:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.id_ce = exports.id_ad_caRepository = exports.id_ad_timeStamping = exports.id_ad_caIssuers = exports.id_ad_ocsp = exports.id_qt_unotice = exports.id_qt_csp = exports.id_ad = exports.id_kp = exports.id_qt = exports.id_pe = exports.id_pkix = void 0;
exports.id_pkix = "1.3.6.1.5.5.7";
exports.id_pe = `${exports.id_pkix}.1`;
exports.id_qt = `${exports.id_pkix}.2`;
exports.id_kp = `${exports.id_pkix}.3`;
exports.id_ad = `${exports.id_pkix}.48`;
exports.id_qt_csp = `${exports.id_qt}.1`;
exports.id_qt_unotice = `${exports.id_qt}.2`;
exports.id_ad_ocsp = `${exports.id_ad}.1`;
exports.id_ad_caIssuers = `${exports.id_ad}.2`;
exports.id_ad_timeStamping = `${exports.id_ad}.3`;
exports.id_ad_caRepository = `${exports.id_ad}.5`;
exports.id_ce = "2.5.29";


/***/ }),

/***/ 6359:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubjectPublicKeyInfo = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const algorithm_identifier_1 = __nccwpck_require__(4201);
class SubjectPublicKeyInfo {
    constructor(params = {}) {
        this.algorithm = new algorithm_identifier_1.AlgorithmIdentifier();
        this.subjectPublicKey = new ArrayBuffer(0);
        Object.assign(this, params);
    }
}
exports.SubjectPublicKeyInfo = SubjectPublicKeyInfo;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: algorithm_identifier_1.AlgorithmIdentifier })
], SubjectPublicKeyInfo.prototype, "algorithm", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BitString })
], SubjectPublicKeyInfo.prototype, "subjectPublicKey", void 0);


/***/ }),

/***/ 9642:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TBSCertList = exports.RevokedCertificate = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const algorithm_identifier_1 = __nccwpck_require__(4201);
const name_1 = __nccwpck_require__(3111);
const time_1 = __nccwpck_require__(5277);
const extension_1 = __nccwpck_require__(7003);
class RevokedCertificate {
    constructor(params = {}) {
        this.userCertificate = new ArrayBuffer(0);
        this.revocationDate = new time_1.Time();
        Object.assign(this, params);
    }
}
exports.RevokedCertificate = RevokedCertificate;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, converter: asn1_schema_1.AsnIntegerArrayBufferConverter })
], RevokedCertificate.prototype, "userCertificate", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: time_1.Time })
], RevokedCertificate.prototype, "revocationDate", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: extension_1.Extension, optional: true, repeated: "sequence" })
], RevokedCertificate.prototype, "crlEntryExtensions", void 0);
class TBSCertList {
    constructor(params = {}) {
        this.signature = new algorithm_identifier_1.AlgorithmIdentifier();
        this.issuer = new name_1.Name();
        this.thisUpdate = new time_1.Time();
        Object.assign(this, params);
    }
}
exports.TBSCertList = TBSCertList;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.Integer, optional: true })
], TBSCertList.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: algorithm_identifier_1.AlgorithmIdentifier })
], TBSCertList.prototype, "signature", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: name_1.Name })
], TBSCertList.prototype, "issuer", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: time_1.Time })
], TBSCertList.prototype, "thisUpdate", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: time_1.Time, optional: true })
], TBSCertList.prototype, "nextUpdate", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: RevokedCertificate, repeated: "sequence", optional: true })
], TBSCertList.prototype, "revokedCertificates", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: extension_1.Extension, optional: true, context: 0, repeated: "sequence" })
], TBSCertList.prototype, "crlExtensions", void 0);


/***/ }),

/***/ 6633:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TBSCertificate = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const algorithm_identifier_1 = __nccwpck_require__(4201);
const name_1 = __nccwpck_require__(3111);
const subject_public_key_info_1 = __nccwpck_require__(6359);
const validity_1 = __nccwpck_require__(5714);
const extension_1 = __nccwpck_require__(7003);
const types_1 = __nccwpck_require__(2663);
class TBSCertificate {
    constructor(params = {}) {
        this.version = types_1.Version.v1;
        this.serialNumber = new ArrayBuffer(0);
        this.signature = new algorithm_identifier_1.AlgorithmIdentifier();
        this.issuer = new name_1.Name();
        this.validity = new validity_1.Validity();
        this.subject = new name_1.Name();
        this.subjectPublicKeyInfo = new subject_public_key_info_1.SubjectPublicKeyInfo();
        Object.assign(this, params);
    }
}
exports.TBSCertificate = TBSCertificate;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_1.AsnPropTypes.Integer,
        context: 0,
        defaultValue: types_1.Version.v1,
    })
], TBSCertificate.prototype, "version", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_1.AsnPropTypes.Integer,
        converter: asn1_schema_1.AsnIntegerArrayBufferConverter,
    })
], TBSCertificate.prototype, "serialNumber", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: algorithm_identifier_1.AlgorithmIdentifier })
], TBSCertificate.prototype, "signature", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: name_1.Name })
], TBSCertificate.prototype, "issuer", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: validity_1.Validity })
], TBSCertificate.prototype, "validity", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: name_1.Name })
], TBSCertificate.prototype, "subject", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: subject_public_key_info_1.SubjectPublicKeyInfo })
], TBSCertificate.prototype, "subjectPublicKeyInfo", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_1.AsnPropTypes.BitString,
        context: 1,
        implicit: true,
        optional: true,
    })
], TBSCertificate.prototype, "issuerUniqueID", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: asn1_schema_1.AsnPropTypes.BitString, context: 2, implicit: true, optional: true })
], TBSCertificate.prototype, "subjectUniqueID", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: extension_1.Extensions, context: 3, optional: true })
], TBSCertificate.prototype, "extensions", void 0);


/***/ }),

/***/ 5277:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Time = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
let Time = class Time {
    constructor(time) {
        if (time) {
            if (typeof time === "string" || typeof time === "number" || time instanceof Date) {
                const date = new Date(time);
                date.setMilliseconds(0);
                if (date.getUTCFullYear() > 2049) {
                    this.generalTime = date;
                }
                else {
                    this.utcTime = date;
                }
            }
            else {
                Object.assign(this, time);
            }
        }
    }
    getTime() {
        const time = this.utcTime || this.generalTime;
        if (!time) {
            throw new Error("Cannot get time from CHOICE object");
        }
        return time;
    }
};
exports.Time = Time;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_1.AsnPropTypes.UTCTime,
    })
], Time.prototype, "utcTime", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({
        type: asn1_schema_1.AsnPropTypes.GeneralizedTime,
    })
], Time.prototype, "generalTime", void 0);
exports.Time = Time = tslib_1.__decorate([
    (0, asn1_schema_1.AsnType)({ type: asn1_schema_1.AsnTypeTypes.Choice })
], Time);


/***/ }),

/***/ 2663:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Version = void 0;
var Version;
(function (Version) {
    Version[Version["v1"] = 0] = "v1";
    Version[Version["v2"] = 1] = "v2";
    Version[Version["v3"] = 2] = "v3";
})(Version || (exports.Version = Version = {}));


/***/ }),

/***/ 5714:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Validity = void 0;
const tslib_1 = __nccwpck_require__(1860);
const asn1_schema_1 = __nccwpck_require__(7261);
const time_1 = __nccwpck_require__(5277);
class Validity {
    constructor(params) {
        this.notBefore = new time_1.Time(new Date());
        this.notAfter = new time_1.Time(new Date());
        if (params) {
            this.notBefore = new time_1.Time(params.notBefore);
            this.notAfter = new time_1.Time(params.notAfter);
        }
    }
}
exports.Validity = Validity;
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: time_1.Time })
], Validity.prototype, "notBefore", void 0);
tslib_1.__decorate([
    (0, asn1_schema_1.AsnProp)({ type: time_1.Time })
], Validity.prototype, "notAfter", void 0);


/***/ }),

/***/ 8927:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
/*!
 * MIT License
 * 
 * Copyright (c) Peculiar Ventures. All rights reserved.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */


__nccwpck_require__(477);
var asn1Schema = __nccwpck_require__(7261);
var asn1X509 = __nccwpck_require__(3594);
var pvtsutils = __nccwpck_require__(4583);
var tslib = __nccwpck_require__(1860);
var asn1Cms = __nccwpck_require__(1467);
var asn1Ecc = __nccwpck_require__(3683);
var asn1Rsa = __nccwpck_require__(7300);
var tsyringe = __nccwpck_require__(5279);
var asnPkcs9 = __nccwpck_require__(3772);
var asn1Csr = __nccwpck_require__(6474);

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var asn1X509__namespace = /*#__PURE__*/_interopNamespaceDefault(asn1X509);
var asn1Cms__namespace = /*#__PURE__*/_interopNamespaceDefault(asn1Cms);
var asn1Ecc__namespace = /*#__PURE__*/_interopNamespaceDefault(asn1Ecc);
var asn1Rsa__namespace = /*#__PURE__*/_interopNamespaceDefault(asn1Rsa);
var asnPkcs9__namespace = /*#__PURE__*/_interopNamespaceDefault(asnPkcs9);

const diAlgorithm = "crypto.algorithm";
class AlgorithmProvider {
    getAlgorithms() {
        return tsyringe.container.resolveAll(diAlgorithm);
    }
    toAsnAlgorithm(alg) {
        ({ ...alg });
        for (const algorithm of this.getAlgorithms()) {
            const res = algorithm.toAsnAlgorithm(alg);
            if (res) {
                return res;
            }
        }
        if (/^[0-9.]+$/.test(alg.name)) {
            const res = new asn1X509.AlgorithmIdentifier({ algorithm: alg.name });
            if ("parameters" in alg) {
                const unknown = alg;
                res.parameters = unknown.parameters;
            }
            return res;
        }
        throw new Error("Cannot convert WebCrypto algorithm to ASN.1 algorithm");
    }
    toWebAlgorithm(alg) {
        for (const algorithm of this.getAlgorithms()) {
            const res = algorithm.toWebAlgorithm(alg);
            if (res) {
                return res;
            }
        }
        const unknown = {
            name: alg.algorithm,
            parameters: alg.parameters,
        };
        return unknown;
    }
}
const diAlgorithmProvider = "crypto.algorithmProvider";
tsyringe.container.registerSingleton(diAlgorithmProvider, AlgorithmProvider);

var EcAlgorithm_1;
const idVersionOne = "1.3.36.3.3.2.8.1.1";
const idBrainpoolP160r1 = `${idVersionOne}.1`;
const idBrainpoolP160t1 = `${idVersionOne}.2`;
const idBrainpoolP192r1 = `${idVersionOne}.3`;
const idBrainpoolP192t1 = `${idVersionOne}.4`;
const idBrainpoolP224r1 = `${idVersionOne}.5`;
const idBrainpoolP224t1 = `${idVersionOne}.6`;
const idBrainpoolP256r1 = `${idVersionOne}.7`;
const idBrainpoolP256t1 = `${idVersionOne}.8`;
const idBrainpoolP320r1 = `${idVersionOne}.9`;
const idBrainpoolP320t1 = `${idVersionOne}.10`;
const idBrainpoolP384r1 = `${idVersionOne}.11`;
const idBrainpoolP384t1 = `${idVersionOne}.12`;
const idBrainpoolP512r1 = `${idVersionOne}.13`;
const idBrainpoolP512t1 = `${idVersionOne}.14`;
const brainpoolP160r1 = "brainpoolP160r1";
const brainpoolP160t1 = "brainpoolP160t1";
const brainpoolP192r1 = "brainpoolP192r1";
const brainpoolP192t1 = "brainpoolP192t1";
const brainpoolP224r1 = "brainpoolP224r1";
const brainpoolP224t1 = "brainpoolP224t1";
const brainpoolP256r1 = "brainpoolP256r1";
const brainpoolP256t1 = "brainpoolP256t1";
const brainpoolP320r1 = "brainpoolP320r1";
const brainpoolP320t1 = "brainpoolP320t1";
const brainpoolP384r1 = "brainpoolP384r1";
const brainpoolP384t1 = "brainpoolP384t1";
const brainpoolP512r1 = "brainpoolP512r1";
const brainpoolP512t1 = "brainpoolP512t1";
const ECDSA = "ECDSA";
exports.EcAlgorithm = EcAlgorithm_1 = class EcAlgorithm {
    toAsnAlgorithm(alg) {
        switch (alg.name.toLowerCase()) {
            case ECDSA.toLowerCase():
                if ("hash" in alg) {
                    const hash = typeof alg.hash === "string" ? alg.hash : alg.hash.name;
                    switch (hash.toLowerCase()) {
                        case "sha-1":
                            return asn1Ecc__namespace.ecdsaWithSHA1;
                        case "sha-256":
                            return asn1Ecc__namespace.ecdsaWithSHA256;
                        case "sha-384":
                            return asn1Ecc__namespace.ecdsaWithSHA384;
                        case "sha-512":
                            return asn1Ecc__namespace.ecdsaWithSHA512;
                    }
                }
                else if ("namedCurve" in alg) {
                    let parameters = "";
                    switch (alg.namedCurve) {
                        case "P-256":
                            parameters = asn1Ecc__namespace.id_secp256r1;
                            break;
                        case "K-256":
                            parameters = EcAlgorithm_1.SECP256K1;
                            break;
                        case "P-384":
                            parameters = asn1Ecc__namespace.id_secp384r1;
                            break;
                        case "P-521":
                            parameters = asn1Ecc__namespace.id_secp521r1;
                            break;
                        case brainpoolP160r1:
                            parameters = idBrainpoolP160r1;
                            break;
                        case brainpoolP160t1:
                            parameters = idBrainpoolP160t1;
                            break;
                        case brainpoolP192r1:
                            parameters = idBrainpoolP192r1;
                            break;
                        case brainpoolP192t1:
                            parameters = idBrainpoolP192t1;
                            break;
                        case brainpoolP224r1:
                            parameters = idBrainpoolP224r1;
                            break;
                        case brainpoolP224t1:
                            parameters = idBrainpoolP224t1;
                            break;
                        case brainpoolP256r1:
                            parameters = idBrainpoolP256r1;
                            break;
                        case brainpoolP256t1:
                            parameters = idBrainpoolP256t1;
                            break;
                        case brainpoolP320r1:
                            parameters = idBrainpoolP320r1;
                            break;
                        case brainpoolP320t1:
                            parameters = idBrainpoolP320t1;
                            break;
                        case brainpoolP384r1:
                            parameters = idBrainpoolP384r1;
                            break;
                        case brainpoolP384t1:
                            parameters = idBrainpoolP384t1;
                            break;
                        case brainpoolP512r1:
                            parameters = idBrainpoolP512r1;
                            break;
                        case brainpoolP512t1:
                            parameters = idBrainpoolP512t1;
                            break;
                    }
                    if (parameters) {
                        return new asn1X509.AlgorithmIdentifier({
                            algorithm: asn1Ecc__namespace.id_ecPublicKey,
                            parameters: asn1Schema.AsnConvert.serialize(new asn1Ecc__namespace.ECParameters({ namedCurve: parameters })),
                        });
                    }
                }
        }
        return null;
    }
    toWebAlgorithm(alg) {
        switch (alg.algorithm) {
            case asn1Ecc__namespace.id_ecdsaWithSHA1:
                return {
                    name: ECDSA, hash: { name: "SHA-1" },
                };
            case asn1Ecc__namespace.id_ecdsaWithSHA256:
                return {
                    name: ECDSA, hash: { name: "SHA-256" },
                };
            case asn1Ecc__namespace.id_ecdsaWithSHA384:
                return {
                    name: ECDSA, hash: { name: "SHA-384" },
                };
            case asn1Ecc__namespace.id_ecdsaWithSHA512:
                return {
                    name: ECDSA, hash: { name: "SHA-512" },
                };
            case asn1Ecc__namespace.id_ecPublicKey: {
                if (!alg.parameters) {
                    throw new TypeError("Cannot get required parameters from EC algorithm");
                }
                const parameters = asn1Schema.AsnConvert.parse(alg.parameters, asn1Ecc__namespace.ECParameters);
                switch (parameters.namedCurve) {
                    case asn1Ecc__namespace.id_secp256r1:
                        return {
                            name: ECDSA, namedCurve: "P-256",
                        };
                    case EcAlgorithm_1.SECP256K1:
                        return {
                            name: ECDSA, namedCurve: "K-256",
                        };
                    case asn1Ecc__namespace.id_secp384r1:
                        return {
                            name: ECDSA, namedCurve: "P-384",
                        };
                    case asn1Ecc__namespace.id_secp521r1:
                        return {
                            name: ECDSA, namedCurve: "P-521",
                        };
                    case idBrainpoolP160r1:
                        return {
                            name: ECDSA, namedCurve: brainpoolP160r1,
                        };
                    case idBrainpoolP160t1:
                        return {
                            name: ECDSA, namedCurve: brainpoolP160t1,
                        };
                    case idBrainpoolP192r1:
                        return {
                            name: ECDSA, namedCurve: brainpoolP192r1,
                        };
                    case idBrainpoolP192t1:
                        return {
                            name: ECDSA, namedCurve: brainpoolP192t1,
                        };
                    case idBrainpoolP224r1:
                        return {
                            name: ECDSA, namedCurve: brainpoolP224r1,
                        };
                    case idBrainpoolP224t1:
                        return {
                            name: ECDSA, namedCurve: brainpoolP224t1,
                        };
                    case idBrainpoolP256r1:
                        return {
                            name: ECDSA, namedCurve: brainpoolP256r1,
                        };
                    case idBrainpoolP256t1:
                        return {
                            name: ECDSA, namedCurve: brainpoolP256t1,
                        };
                    case idBrainpoolP320r1:
                        return {
                            name: ECDSA, namedCurve: brainpoolP320r1,
                        };
                    case idBrainpoolP320t1:
                        return {
                            name: ECDSA, namedCurve: brainpoolP320t1,
                        };
                    case idBrainpoolP384r1:
                        return {
                            name: ECDSA, namedCurve: brainpoolP384r1,
                        };
                    case idBrainpoolP384t1:
                        return {
                            name: ECDSA, namedCurve: brainpoolP384t1,
                        };
                    case idBrainpoolP512r1:
                        return {
                            name: ECDSA, namedCurve: brainpoolP512r1,
                        };
                    case idBrainpoolP512t1:
                        return {
                            name: ECDSA, namedCurve: brainpoolP512t1,
                        };
                }
            }
        }
        return null;
    }
};
exports.EcAlgorithm.SECP256K1 = "1.3.132.0.10";
exports.EcAlgorithm = EcAlgorithm_1 = tslib.__decorate([
    tsyringe.injectable()
], exports.EcAlgorithm);
tsyringe.container.registerSingleton(diAlgorithm, exports.EcAlgorithm);

const NAME = Symbol("name");
const VALUE = Symbol("value");
class TextObject {
    constructor(name, items = {}, value = "") {
        this[NAME] = name;
        this[VALUE] = value;
        for (const key in items) {
            this[key] = items[key];
        }
    }
}
TextObject.NAME = NAME;
TextObject.VALUE = VALUE;
class DefaultAlgorithmSerializer {
    static toTextObject(alg) {
        const obj = new TextObject("Algorithm Identifier", {}, OidSerializer.toString(alg.algorithm));
        if (alg.parameters) {
            switch (alg.algorithm) {
                case asn1Ecc__namespace.id_ecPublicKey: {
                    const ecAlg = new exports.EcAlgorithm().toWebAlgorithm(alg);
                    if (ecAlg && "namedCurve" in ecAlg) {
                        obj["Named Curve"] = ecAlg.namedCurve;
                    }
                    else {
                        obj["Parameters"] = alg.parameters;
                    }
                    break;
                }
                default:
                    obj["Parameters"] = alg.parameters;
            }
        }
        return obj;
    }
}
class OidSerializer {
    static toString(oid) {
        const name = this.items[oid];
        if (name) {
            return name;
        }
        return oid;
    }
}
OidSerializer.items = {
    [asn1Rsa__namespace.id_sha1]: "sha1",
    [asn1Rsa__namespace.id_sha224]: "sha224",
    [asn1Rsa__namespace.id_sha256]: "sha256",
    [asn1Rsa__namespace.id_sha384]: "sha384",
    [asn1Rsa__namespace.id_sha512]: "sha512",
    [asn1Rsa__namespace.id_rsaEncryption]: "rsaEncryption",
    [asn1Rsa__namespace.id_sha1WithRSAEncryption]: "sha1WithRSAEncryption",
    [asn1Rsa__namespace.id_sha224WithRSAEncryption]: "sha224WithRSAEncryption",
    [asn1Rsa__namespace.id_sha256WithRSAEncryption]: "sha256WithRSAEncryption",
    [asn1Rsa__namespace.id_sha384WithRSAEncryption]: "sha384WithRSAEncryption",
    [asn1Rsa__namespace.id_sha512WithRSAEncryption]: "sha512WithRSAEncryption",
    [asn1Ecc__namespace.id_ecPublicKey]: "ecPublicKey",
    [asn1Ecc__namespace.id_ecdsaWithSHA1]: "ecdsaWithSHA1",
    [asn1Ecc__namespace.id_ecdsaWithSHA224]: "ecdsaWithSHA224",
    [asn1Ecc__namespace.id_ecdsaWithSHA256]: "ecdsaWithSHA256",
    [asn1Ecc__namespace.id_ecdsaWithSHA384]: "ecdsaWithSHA384",
    [asn1Ecc__namespace.id_ecdsaWithSHA512]: "ecdsaWithSHA512",
    [asn1X509__namespace.id_kp_serverAuth]: "TLS WWW server authentication",
    [asn1X509__namespace.id_kp_clientAuth]: "TLS WWW client authentication",
    [asn1X509__namespace.id_kp_codeSigning]: "Code Signing",
    [asn1X509__namespace.id_kp_emailProtection]: "E-mail Protection",
    [asn1X509__namespace.id_kp_timeStamping]: "Time Stamping",
    [asn1X509__namespace.id_kp_OCSPSigning]: "OCSP Signing",
    [asn1Cms__namespace.id_signedData]: "Signed Data",
};
class TextConverter {
    static serialize(obj) {
        return this.serializeObj(obj).join("\n");
    }
    static pad(deep = 0) {
        return "".padStart(2 * deep, " ");
    }
    static serializeObj(obj, deep = 0) {
        const res = [];
        let pad = this.pad(deep++);
        let value = "";
        const objValue = obj[TextObject.VALUE];
        if (objValue) {
            value = ` ${objValue}`;
        }
        res.push(`${pad}${obj[TextObject.NAME]}:${value}`);
        pad = this.pad(deep);
        for (const key in obj) {
            if (typeof key === "symbol") {
                continue;
            }
            const value = obj[key];
            const keyValue = key ? `${key}: ` : "";
            if (typeof value === "string"
                || typeof value === "number"
                || typeof value === "boolean") {
                res.push(`${pad}${keyValue}${value}`);
            }
            else if (value instanceof Date) {
                res.push(`${pad}${keyValue}${value.toUTCString()}`);
            }
            else if (Array.isArray(value)) {
                for (const obj of value) {
                    obj[TextObject.NAME] = key;
                    res.push(...this.serializeObj(obj, deep));
                }
            }
            else if (value instanceof TextObject) {
                value[TextObject.NAME] = key;
                res.push(...this.serializeObj(value, deep));
            }
            else if (pvtsutils.BufferSourceConverter.isBufferSource(value)) {
                if (key) {
                    res.push(`${pad}${keyValue}`);
                    res.push(...this.serializeBufferSource(value, deep + 1));
                }
                else {
                    res.push(...this.serializeBufferSource(value, deep));
                }
            }
            else if ("toTextObject" in value) {
                const obj = value.toTextObject();
                obj[TextObject.NAME] = key;
                res.push(...this.serializeObj(obj, deep));
            }
            else {
                throw new TypeError("Cannot serialize data in text format. Unsupported type.");
            }
        }
        return res;
    }
    static serializeBufferSource(buffer, deep = 0) {
        const pad = this.pad(deep);
        const view = pvtsutils.BufferSourceConverter.toUint8Array(buffer);
        const res = [];
        for (let i = 0; i < view.length;) {
            const row = [];
            for (let j = 0; j < 16 && i < view.length; j++) {
                if (j === 8) {
                    row.push("");
                }
                const hex = view[i++].toString(16).padStart(2, "0");
                row.push(hex);
            }
            res.push(`${pad}${row.join(" ")}`);
        }
        return res;
    }
    static serializeAlgorithm(alg) {
        return this.algorithmSerializer.toTextObject(alg);
    }
}
TextConverter.oidSerializer = OidSerializer;
TextConverter.algorithmSerializer = DefaultAlgorithmSerializer;

var _AsnData_rawData;
class AsnData {
    get rawData() {
        if (!tslib.__classPrivateFieldGet(this, _AsnData_rawData, "f")) {
            tslib.__classPrivateFieldSet(this, _AsnData_rawData, asn1Schema.AsnConvert.serialize(this.asn), "f");
        }
        return tslib.__classPrivateFieldGet(this, _AsnData_rawData, "f");
    }
    constructor(...args) {
        _AsnData_rawData.set(this, void 0);
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            this.asn = asn1Schema.AsnConvert.parse(args[0], args[1]);
            tslib.__classPrivateFieldSet(this, _AsnData_rawData, pvtsutils.BufferSourceConverter.toArrayBuffer(args[0]), "f");
            this.onInit(this.asn);
        }
        else {
            this.asn = args[0];
            this.onInit(this.asn);
        }
    }
    equal(data) {
        if (data instanceof AsnData) {
            return pvtsutils.isEqual(data.rawData, this.rawData);
        }
        return false;
    }
    toString(format = "text") {
        switch (format) {
            case "asn":
                return asn1Schema.AsnConvert.toString(this.rawData);
            case "text":
                return TextConverter.serialize(this.toTextObject());
            case "hex":
                return pvtsutils.Convert.ToHex(this.rawData);
            case "base64":
                return pvtsutils.Convert.ToBase64(this.rawData);
            case "base64url":
                return pvtsutils.Convert.ToBase64Url(this.rawData);
            default:
                throw TypeError("Argument 'format' is unsupported value");
        }
    }
    getTextName() {
        const constructor = this.constructor;
        return constructor.NAME;
    }
    toTextObject() {
        const obj = this.toTextObjectEmpty();
        obj[""] = this.rawData;
        return obj;
    }
    toTextObjectEmpty(value) {
        return new TextObject(this.getTextName(), {}, value);
    }
}
_AsnData_rawData = new WeakMap();
AsnData.NAME = "ASN";

class Extension extends AsnData {
    constructor(...args) {
        let raw;
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            raw = pvtsutils.BufferSourceConverter.toArrayBuffer(args[0]);
        }
        else {
            raw = asn1Schema.AsnConvert.serialize(new asn1X509.Extension({
                extnID: args[0],
                critical: args[1],
                extnValue: new asn1Schema.OctetString(pvtsutils.BufferSourceConverter.toArrayBuffer(args[2])),
            }));
        }
        super(raw, asn1X509.Extension);
    }
    onInit(asn) {
        this.type = asn.extnID;
        this.critical = asn.critical;
        this.value = asn.extnValue.buffer;
    }
    toTextObject() {
        const obj = this.toTextObjectWithoutValue();
        obj[""] = this.value;
        return obj;
    }
    toTextObjectWithoutValue() {
        const obj = this.toTextObjectEmpty(this.critical ? "critical" : undefined);
        if (obj[TextObject.NAME] === Extension.NAME) {
            obj[TextObject.NAME] = OidSerializer.toString(this.type);
        }
        return obj;
    }
}

var _a;
class CryptoProvider {
    static isCryptoKeyPair(data) {
        return data && data.privateKey && data.publicKey;
    }
    static isCryptoKey(data) {
        return data && data.usages && data.type && data.algorithm && data.extractable !== undefined;
    }
    constructor() {
        this.items = new Map();
        this[_a] = "CryptoProvider";
        if (typeof self !== "undefined" && typeof crypto !== "undefined") {
            this.set(CryptoProvider.DEFAULT, crypto);
        }
        else if (typeof global !== "undefined" && global.crypto && global.crypto.subtle) {
            this.set(CryptoProvider.DEFAULT, global.crypto);
        }
    }
    clear() {
        this.items.clear();
    }
    delete(key) {
        return this.items.delete(key);
    }
    forEach(callbackfn, thisArg) {
        return this.items.forEach(callbackfn, thisArg);
    }
    has(key) {
        return this.items.has(key);
    }
    get size() {
        return this.items.size;
    }
    entries() {
        return this.items.entries();
    }
    keys() {
        return this.items.keys();
    }
    values() {
        return this.items.values();
    }
    [Symbol.iterator]() {
        return this.items[Symbol.iterator]();
    }
    get(key = CryptoProvider.DEFAULT) {
        const crypto = this.items.get(key.toLowerCase());
        if (!crypto) {
            throw new Error(`Cannot get Crypto by name '${key}'`);
        }
        return crypto;
    }
    set(key, value) {
        if (typeof key === "string") {
            if (!value) {
                throw new TypeError("Argument 'value' is required");
            }
            this.items.set(key.toLowerCase(), value);
        }
        else {
            this.items.set(CryptoProvider.DEFAULT, key);
        }
        return this;
    }
}
_a = Symbol.toStringTag;
CryptoProvider.DEFAULT = "default";
const cryptoProvider = new CryptoProvider();

const OID_REGEX = /^[0-2](?:\.[1-9][0-9]*)+$/;
function isOID(id) {
    return new RegExp(OID_REGEX).test(id);
}
class NameIdentifier {
    constructor(names = {}) {
        this.items = {};
        for (const id in names) {
            this.register(id, names[id]);
        }
    }
    get(idOrName) {
        return this.items[idOrName] || null;
    }
    findId(idOrName) {
        if (!isOID(idOrName)) {
            return this.get(idOrName);
        }
        return idOrName;
    }
    register(id, name) {
        this.items[id] = name;
        this.items[name] = id;
    }
}
const names = new NameIdentifier();
names.register("CN", "2.5.4.3");
names.register("L", "2.5.4.7");
names.register("ST", "2.5.4.8");
names.register("O", "2.5.4.10");
names.register("OU", "2.5.4.11");
names.register("C", "2.5.4.6");
names.register("DC", "0.9.2342.19200300.100.1.25");
names.register("E", "1.2.840.113549.1.9.1");
names.register("G", "2.5.4.42");
names.register("I", "2.5.4.43");
names.register("SN", "2.5.4.4");
names.register("T", "2.5.4.12");
function replaceUnknownCharacter(text, char) {
    return `\\${pvtsutils.Convert.ToHex(pvtsutils.Convert.FromUtf8String(char)).toUpperCase()}`;
}
function escape(data) {
    return data
        .replace(/([,+"\\<>;])/g, "\\$1")
        .replace(/^([ #])/, "\\$1")
        .replace(/([ ]$)/, "\\$1")
        .replace(/([\r\n\t])/, replaceUnknownCharacter);
}
class Name {
    static isASCII(text) {
        for (let i = 0; i < text.length; i++) {
            const code = text.charCodeAt(i);
            if (code > 0xFF) {
                return false;
            }
        }
        return true;
    }
    static isPrintableString(text) {
        return /^[A-Za-z0-9 '()+,-./:=?]*$/g.test(text);
    }
    constructor(data, extraNames = {}) {
        this.extraNames = new NameIdentifier();
        this.asn = new asn1X509.Name();
        for (const key in extraNames) {
            if (Object.prototype.hasOwnProperty.call(extraNames, key)) {
                const value = extraNames[key];
                this.extraNames.register(key, value);
            }
        }
        if (typeof data === "string") {
            this.asn = this.fromString(data);
        }
        else if (data instanceof asn1X509.Name) {
            this.asn = data;
        }
        else if (pvtsutils.BufferSourceConverter.isBufferSource(data)) {
            this.asn = asn1Schema.AsnConvert.parse(data, asn1X509.Name);
        }
        else {
            this.asn = this.fromJSON(data);
        }
    }
    getField(idOrName) {
        const id = this.extraNames.findId(idOrName) || names.findId(idOrName);
        const res = [];
        for (const name of this.asn) {
            for (const rdn of name) {
                if (rdn.type === id) {
                    res.push(rdn.value.toString());
                }
            }
        }
        return res;
    }
    getName(idOrName) {
        return this.extraNames.get(idOrName) || names.get(idOrName);
    }
    toString() {
        return this.asn.map((rdn) => rdn.map((o) => {
            const type = this.getName(o.type) || o.type;
            const value = o.value.anyValue
                ? `#${pvtsutils.Convert.ToHex(o.value.anyValue)}`
                : escape(o.value.toString());
            return `${type}=${value}`;
        })
            .join("+"))
            .join(", ");
    }
    toJSON() {
        var _a;
        const json = [];
        for (const rdn of this.asn) {
            const jsonItem = {};
            for (const attr of rdn) {
                const type = this.getName(attr.type) || attr.type;
                (_a = jsonItem[type]) !== null && _a !== void 0 ? _a : (jsonItem[type] = []);
                jsonItem[type].push(attr.value.anyValue ? `#${pvtsutils.Convert.ToHex(attr.value.anyValue)}` : attr.value.toString());
            }
            json.push(jsonItem);
        }
        return json;
    }
    fromString(data) {
        const asn = new asn1X509.Name();
        const regex = /(\d\.[\d.]*\d|[A-Za-z]+)=((?:"")|(?:".*?[^\\]")|(?:[^,+"\\](?=[,+]|$))|(?:[^,+].*?(?:[^\\][,+]))|(?:))([,+])?/g;
        let matches = null;
        let level = ",";
        while (matches = regex.exec(`${data},`)) {
            let [, type, value] = matches;
            const lastChar = value[value.length - 1];
            if (lastChar === "," || lastChar === "+") {
                value = value.slice(0, value.length - 1);
                matches[3] = lastChar;
            }
            const next = matches[3];
            type = this.getTypeOid(type);
            const attr = this.createAttribute(type, value);
            if (level === "+") {
                asn[asn.length - 1].push(attr);
            }
            else {
                asn.push(new asn1X509.RelativeDistinguishedName([attr]));
            }
            level = next;
        }
        return asn;
    }
    fromJSON(data) {
        const asn = new asn1X509.Name();
        for (const item of data) {
            const asnRdn = new asn1X509.RelativeDistinguishedName();
            for (const type in item) {
                const typeId = this.getTypeOid(type);
                const values = item[type];
                for (const value of values) {
                    const asnAttr = this.createAttribute(typeId, value);
                    asnRdn.push(asnAttr);
                }
            }
            asn.push(asnRdn);
        }
        return asn;
    }
    getTypeOid(type) {
        if (!/[\d.]+/.test(type)) {
            type = this.getName(type) || "";
        }
        if (!type) {
            throw new Error(`Cannot get OID for name type '${type}'`);
        }
        return type;
    }
    createAttribute(type, value) {
        const attr = new asn1X509.AttributeTypeAndValue({ type });
        if (typeof value === "object") {
            for (const key in value) {
                switch (key) {
                    case "ia5String":
                        attr.value.ia5String = value[key];
                        break;
                    case "utf8String":
                        attr.value.utf8String = value[key];
                        break;
                    case "universalString":
                        attr.value.universalString = value[key];
                        break;
                    case "bmpString":
                        attr.value.bmpString = value[key];
                        break;
                    case "printableString":
                        attr.value.printableString = value[key];
                        break;
                }
            }
        }
        else if (value[0] === "#") {
            attr.value.anyValue = pvtsutils.Convert.FromHex(value.slice(1));
        }
        else {
            const processedValue = this.processStringValue(value);
            if (type === this.getName("E") || type === this.getName("DC")) {
                attr.value.ia5String = processedValue;
            }
            else {
                if (Name.isPrintableString(processedValue)) {
                    attr.value.printableString = processedValue;
                }
                else {
                    attr.value.utf8String = processedValue;
                }
            }
        }
        return attr;
    }
    processStringValue(value) {
        const quotedMatches = /"(.*?[^\\])?"/.exec(value);
        if (quotedMatches) {
            value = quotedMatches[1];
        }
        return value
            .replace(/\\0a/ig, "\n")
            .replace(/\\0d/ig, "\r")
            .replace(/\\0g/ig, "\t")
            .replace(/\\(.)/g, "$1");
    }
    toArrayBuffer() {
        return asn1Schema.AsnConvert.serialize(this.asn);
    }
    async getThumbprint(...args) {
        var _a;
        let crypto;
        let algorithm = "SHA-1";
        if (args.length >= 1 && !((_a = args[0]) === null || _a === void 0 ? void 0 : _a.subtle)) {
            algorithm = args[0] || algorithm;
            crypto = args[1] || cryptoProvider.get();
        }
        else {
            crypto = args[0] || cryptoProvider.get();
        }
        return await crypto.subtle.digest(algorithm, this.toArrayBuffer());
    }
}

const ERR_GN_CONSTRUCTOR = "Cannot initialize GeneralName from ASN.1 data.";
const ERR_GN_STRING_FORMAT = `${ERR_GN_CONSTRUCTOR} Unsupported string format in use.`;
const ERR_GUID = `${ERR_GN_CONSTRUCTOR} Value doesn't match to GUID regular expression.`;
const GUID_REGEX = /^([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})$/i;
const id_GUID = "1.3.6.1.4.1.311.25.1";
const id_UPN = "1.3.6.1.4.1.311.20.2.3";
const DNS = "dns";
const DN = "dn";
const EMAIL = "email";
const IP = "ip";
const URL = "url";
const GUID = "guid";
const UPN = "upn";
const REGISTERED_ID = "id";
class GeneralName extends AsnData {
    constructor(...args) {
        let name;
        if (args.length === 2) {
            switch (args[0]) {
                case DN: {
                    const derName = new Name(args[1]).toArrayBuffer();
                    const asnName = asn1Schema.AsnConvert.parse(derName, asn1X509__namespace.Name);
                    name = new asn1X509__namespace.GeneralName({ directoryName: asnName });
                    break;
                }
                case DNS:
                    name = new asn1X509__namespace.GeneralName({ dNSName: args[1] });
                    break;
                case EMAIL:
                    name = new asn1X509__namespace.GeneralName({ rfc822Name: args[1] });
                    break;
                case GUID: {
                    const matches = new RegExp(GUID_REGEX, "i").exec(args[1]);
                    if (!matches) {
                        throw new Error("Cannot parse GUID value. Value doesn't match to regular expression");
                    }
                    const hex = matches
                        .slice(1)
                        .map((o, i) => {
                        if (i < 3) {
                            return pvtsutils.Convert.ToHex(new Uint8Array(pvtsutils.Convert.FromHex(o)).reverse());
                        }
                        return o;
                    })
                        .join("");
                    name = new asn1X509__namespace.GeneralName({
                        otherName: new asn1X509__namespace.OtherName({
                            typeId: id_GUID,
                            value: asn1Schema.AsnConvert.serialize(new asn1Schema.OctetString(pvtsutils.Convert.FromHex(hex))),
                        }),
                    });
                    break;
                }
                case IP:
                    name = new asn1X509__namespace.GeneralName({ iPAddress: args[1] });
                    break;
                case REGISTERED_ID:
                    name = new asn1X509__namespace.GeneralName({ registeredID: args[1] });
                    break;
                case UPN: {
                    name = new asn1X509__namespace.GeneralName({
                        otherName: new asn1X509__namespace.OtherName({
                            typeId: id_UPN,
                            value: asn1Schema.AsnConvert.serialize(asn1Schema.AsnUtf8StringConverter.toASN(args[1])),
                        }),
                    });
                    break;
                }
                case URL:
                    name = new asn1X509__namespace.GeneralName({ uniformResourceIdentifier: args[1] });
                    break;
                default:
                    throw new Error("Cannot create GeneralName. Unsupported type of the name");
            }
        }
        else if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            name = asn1Schema.AsnConvert.parse(args[0], asn1X509__namespace.GeneralName);
        }
        else {
            name = args[0];
        }
        super(name);
    }
    onInit(asn) {
        if (asn.dNSName != undefined) {
            this.type = DNS;
            this.value = asn.dNSName;
        }
        else if (asn.rfc822Name != undefined) {
            this.type = EMAIL;
            this.value = asn.rfc822Name;
        }
        else if (asn.iPAddress != undefined) {
            this.type = IP;
            this.value = asn.iPAddress;
        }
        else if (asn.uniformResourceIdentifier != undefined) {
            this.type = URL;
            this.value = asn.uniformResourceIdentifier;
        }
        else if (asn.registeredID != undefined) {
            this.type = REGISTERED_ID;
            this.value = asn.registeredID;
        }
        else if (asn.directoryName != undefined) {
            this.type = DN;
            this.value = new Name(asn.directoryName).toString();
        }
        else if (asn.otherName != undefined) {
            if (asn.otherName.typeId === id_GUID) {
                this.type = GUID;
                const guid = asn1Schema.AsnConvert.parse(asn.otherName.value, asn1Schema.OctetString);
                const matches = new RegExp(GUID_REGEX, "i").exec(pvtsutils.Convert.ToHex(guid));
                if (!matches) {
                    throw new Error(ERR_GUID);
                }
                this.value = matches
                    .slice(1)
                    .map((o, i) => {
                    if (i < 3) {
                        return pvtsutils.Convert.ToHex(new Uint8Array(pvtsutils.Convert.FromHex(o)).reverse());
                    }
                    return o;
                })
                    .join("-");
            }
            else if (asn.otherName.typeId === id_UPN) {
                this.type = UPN;
                this.value = asn1Schema.AsnConvert.parse(asn.otherName.value, asn1X509__namespace.DirectoryString).toString();
            }
            else {
                throw new Error(ERR_GN_STRING_FORMAT);
            }
        }
        else {
            throw new Error(ERR_GN_STRING_FORMAT);
        }
    }
    toJSON() {
        return {
            type: this.type,
            value: this.value,
        };
    }
    toTextObject() {
        let type;
        switch (this.type) {
            case DN:
            case DNS:
            case GUID:
            case IP:
            case REGISTERED_ID:
            case UPN:
            case URL:
                type = this.type.toUpperCase();
                break;
            case EMAIL:
                type = "Email";
                break;
            default:
                throw new Error("Unsupported GeneralName type");
        }
        let value = this.value;
        if (this.type === REGISTERED_ID) {
            value = OidSerializer.toString(value);
        }
        return new TextObject(type, undefined, value);
    }
}
class GeneralNames extends AsnData {
    constructor(params) {
        let names;
        if (params instanceof asn1X509__namespace.GeneralNames) {
            names = params;
        }
        else if (Array.isArray(params)) {
            const items = [];
            for (const name of params) {
                if (name instanceof asn1X509__namespace.GeneralName) {
                    items.push(name);
                }
                else {
                    const asnName = asn1Schema.AsnConvert.parse(new GeneralName(name.type, name.value).rawData, asn1X509__namespace.GeneralName);
                    items.push(asnName);
                }
            }
            names = new asn1X509__namespace.GeneralNames(items);
        }
        else if (pvtsutils.BufferSourceConverter.isBufferSource(params)) {
            names = asn1Schema.AsnConvert.parse(params, asn1X509__namespace.GeneralNames);
        }
        else {
            throw new Error("Cannot initialize GeneralNames. Incorrect incoming arguments");
        }
        super(names);
    }
    onInit(asn) {
        const items = [];
        for (const asnName of asn) {
            let name = null;
            try {
                name = new GeneralName(asnName);
            }
            catch {
                continue;
            }
            items.push(name);
        }
        this.items = items;
    }
    toJSON() {
        return this.items.map((o) => o.toJSON());
    }
    toTextObject() {
        const res = super.toTextObjectEmpty();
        for (const name of this.items) {
            const nameObj = name.toTextObject();
            let field = res[nameObj[TextObject.NAME]];
            if (!Array.isArray(field)) {
                field = [];
                res[nameObj[TextObject.NAME]] = field;
            }
            field.push(nameObj);
        }
        return res;
    }
}
GeneralNames.NAME = "GeneralNames";

const rPaddingTag = "-{5}";
const rEolChars = "\\n";
const rNameTag = `[^${rEolChars}]+`;
const rBeginTag = `${rPaddingTag}BEGIN (${rNameTag}(?=${rPaddingTag}))${rPaddingTag}`;
const rEndTag = `${rPaddingTag}END \\1${rPaddingTag}`;
const rEolGroup = "\\n";
const rHeaderKey = `[^:${rEolChars}]+`;
const rHeaderValue = `(?:[^${rEolChars}]+${rEolGroup}(?: +[^${rEolChars}]+${rEolGroup})*)`;
const rBase64Chars = "[a-zA-Z0-9=+/]+";
const rBase64 = `(?:${rBase64Chars}${rEolGroup})+`;
const rPem = `${rBeginTag}${rEolGroup}(?:((?:${rHeaderKey}: ${rHeaderValue})+))?${rEolGroup}?(${rBase64})${rEndTag}`;
class PemConverter {
    static isPem(data) {
        return typeof data === "string"
            && new RegExp(rPem, "g").test(data.replace(/\r/g, ""));
    }
    static decodeWithHeaders(pem) {
        pem = pem.replace(/\r/g, "");
        const pattern = new RegExp(rPem, "g");
        const res = [];
        let matches = null;
        while (matches = pattern.exec(pem)) {
            const base64 = matches[3]
                .replace(new RegExp(`[${rEolChars}]+`, "g"), "");
            const pemStruct = {
                type: matches[1],
                headers: [],
                rawData: pvtsutils.Convert.FromBase64(base64),
            };
            const headersString = matches[2];
            if (headersString) {
                const headers = headersString.split(new RegExp(rEolGroup, "g"));
                let lastHeader = null;
                for (const header of headers) {
                    const [key, value] = header.split(/:(.*)/);
                    if (value === undefined) {
                        if (!lastHeader) {
                            throw new Error("Cannot parse PEM string. Incorrect header value");
                        }
                        lastHeader.value += key.trim();
                    }
                    else {
                        if (lastHeader) {
                            pemStruct.headers.push(lastHeader);
                        }
                        lastHeader = {
                            key, value: value.trim(),
                        };
                    }
                }
                if (lastHeader) {
                    pemStruct.headers.push(lastHeader);
                }
            }
            res.push(pemStruct);
        }
        return res;
    }
    static decode(pem) {
        const blocks = this.decodeWithHeaders(pem);
        return blocks.map((o) => o.rawData);
    }
    static decodeFirst(pem) {
        const items = this.decode(pem);
        if (!items.length) {
            throw new RangeError("PEM string doesn't contain any objects");
        }
        return items[0];
    }
    static encode(rawData, tag) {
        if (Array.isArray(rawData)) {
            const raws = new Array();
            if (tag) {
                rawData.forEach((element) => {
                    if (!pvtsutils.BufferSourceConverter.isBufferSource(element)) {
                        throw new TypeError("Cannot encode array of BufferSource in PEM format. Not all items of the array are BufferSource");
                    }
                    raws.push(this.encodeStruct({
                        type: tag,
                        rawData: pvtsutils.BufferSourceConverter.toArrayBuffer(element),
                    }));
                });
            }
            else {
                rawData.forEach((element) => {
                    if (!("type" in element)) {
                        throw new TypeError("Cannot encode array of PemStruct in PEM format. Not all items of the array are PemStrut");
                    }
                    raws.push(this.encodeStruct(element));
                });
            }
            return raws.join("\n");
        }
        else {
            if (!tag) {
                throw new Error("Required argument 'tag' is missed");
            }
            return this.encodeStruct({
                type: tag,
                rawData: pvtsutils.BufferSourceConverter.toArrayBuffer(rawData),
            });
        }
    }
    static encodeStruct(pem) {
        var _a;
        const upperCaseType = pem.type.toLocaleUpperCase();
        const res = [];
        res.push(`-----BEGIN ${upperCaseType}-----`);
        if ((_a = pem.headers) === null || _a === void 0 ? void 0 : _a.length) {
            for (const header of pem.headers) {
                res.push(`${header.key}: ${header.value}`);
            }
            res.push("");
        }
        const base64 = pvtsutils.Convert.ToBase64(pem.rawData);
        let sliced;
        let offset = 0;
        const rows = Array();
        while (offset < base64.length) {
            if (base64.length - offset < 64) {
                sliced = base64.substring(offset);
            }
            else {
                sliced = base64.substring(offset, offset + 64);
                offset += 64;
            }
            if (sliced.length !== 0) {
                rows.push(sliced);
                if (sliced.length < 64) {
                    break;
                }
            }
            else {
                break;
            }
        }
        res.push(...rows);
        res.push(`-----END ${upperCaseType}-----`);
        return res.join("\n");
    }
}
PemConverter.CertificateTag = "CERTIFICATE";
PemConverter.CrlTag = "CRL";
PemConverter.CertificateRequestTag = "CERTIFICATE REQUEST";
PemConverter.PublicKeyTag = "PUBLIC KEY";
PemConverter.PrivateKeyTag = "PRIVATE KEY";

class PemData extends AsnData {
    static isAsnEncoded(data) {
        return pvtsutils.BufferSourceConverter.isBufferSource(data) || typeof data === "string";
    }
    static toArrayBuffer(raw) {
        if (typeof raw === "string") {
            if (PemConverter.isPem(raw)) {
                return PemConverter.decode(raw)[0];
            }
            else if (pvtsutils.Convert.isHex(raw)) {
                return pvtsutils.Convert.FromHex(raw);
            }
            else if (pvtsutils.Convert.isBase64(raw)) {
                return pvtsutils.Convert.FromBase64(raw);
            }
            else if (pvtsutils.Convert.isBase64Url(raw)) {
                return pvtsutils.Convert.FromBase64Url(raw);
            }
            else {
                throw new TypeError("Unsupported format of 'raw' argument. Must be one of DER, PEM, HEX, Base64, or Base4Url");
            }
        }
        else {
            const buffer = pvtsutils.BufferSourceConverter.toUint8Array(raw);
            if (buffer.length > 0 && buffer[0] === 0x30) {
                return pvtsutils.BufferSourceConverter.toArrayBuffer(raw);
            }
            const stringRaw = pvtsutils.Convert.ToBinary(raw);
            if (PemConverter.isPem(stringRaw)) {
                return PemConverter.decode(stringRaw)[0];
            }
            else if (pvtsutils.Convert.isHex(stringRaw)) {
                return pvtsutils.Convert.FromHex(stringRaw);
            }
            else if (pvtsutils.Convert.isBase64(stringRaw)) {
                return pvtsutils.Convert.FromBase64(stringRaw);
            }
            else if (pvtsutils.Convert.isBase64Url(stringRaw)) {
                return pvtsutils.Convert.FromBase64Url(stringRaw);
            }
            throw new TypeError("Unsupported format of 'raw' argument. Must be one of DER, PEM, HEX, Base64, or Base4Url");
        }
    }
    constructor(...args) {
        if (PemData.isAsnEncoded(args[0])) {
            super(PemData.toArrayBuffer(args[0]), args[1]);
        }
        else {
            super(args[0]);
        }
    }
    toString(format = "pem") {
        switch (format) {
            case "pem":
                return PemConverter.encode(this.rawData, this.tag);
            default:
                return super.toString(format);
        }
    }
}

class PublicKey extends PemData {
    static async create(data, crypto = cryptoProvider.get()) {
        if (data instanceof PublicKey) {
            return data;
        }
        else if (CryptoProvider.isCryptoKey(data)) {
            if (data.type !== "public") {
                throw new TypeError("Public key is required");
            }
            const spki = await crypto.subtle.exportKey("spki", data);
            return new PublicKey(spki);
        }
        else if (data.publicKey) {
            return data.publicKey;
        }
        else if (pvtsutils.BufferSourceConverter.isBufferSource(data)) {
            return new PublicKey(data);
        }
        else {
            throw new TypeError("Unsupported PublicKeyType");
        }
    }
    constructor(param) {
        if (PemData.isAsnEncoded(param)) {
            super(param, asn1X509.SubjectPublicKeyInfo);
        }
        else {
            super(param);
        }
        this.tag = PemConverter.PublicKeyTag;
    }
    async export(...args) {
        let crypto;
        let keyUsages = ["verify"];
        let algorithm = {
            hash: "SHA-256", ...this.algorithm,
        };
        if (args.length > 1) {
            algorithm = args[0] || algorithm;
            keyUsages = args[1] || keyUsages;
            crypto = args[2] || cryptoProvider.get();
        }
        else {
            crypto = args[0] || cryptoProvider.get();
        }
        let raw = this.rawData;
        const asnSpki = asn1Schema.AsnConvert.parse(this.rawData, asn1X509.SubjectPublicKeyInfo);
        if (asnSpki.algorithm.algorithm === asn1Rsa.id_RSASSA_PSS) {
            raw = convertSpkiToRsaPkcs1(asnSpki, raw);
        }
        return crypto.subtle.importKey("spki", raw, algorithm, true, keyUsages);
    }
    onInit(asn) {
        const algProv = tsyringe.container.resolve(diAlgorithmProvider);
        const algorithm = this.algorithm = algProv.toWebAlgorithm(asn.algorithm);
        switch (asn.algorithm.algorithm) {
            case asn1Rsa.id_rsaEncryption:
                {
                    const rsaPublicKey = asn1Schema.AsnConvert.parse(asn.subjectPublicKey, asn1Rsa.RSAPublicKey);
                    const modulus = pvtsutils.BufferSourceConverter.toUint8Array(rsaPublicKey.modulus);
                    algorithm.publicExponent = pvtsutils.BufferSourceConverter.toUint8Array(rsaPublicKey.publicExponent);
                    algorithm.modulusLength = (!modulus[0] ? modulus.slice(1) : modulus).byteLength << 3;
                    break;
                }
        }
    }
    async getThumbprint(...args) {
        var _a;
        let crypto;
        let algorithm = "SHA-1";
        if (args.length >= 1 && !((_a = args[0]) === null || _a === void 0 ? void 0 : _a.subtle)) {
            algorithm = args[0] || algorithm;
            crypto = args[1] || cryptoProvider.get();
        }
        else {
            crypto = args[0] || cryptoProvider.get();
        }
        return await crypto.subtle.digest(algorithm, this.rawData);
    }
    async getKeyIdentifier(...args) {
        let crypto;
        let algorithm = "SHA-1";
        if (args.length === 1) {
            if (typeof args[0] === "string") {
                algorithm = args[0];
                crypto = cryptoProvider.get();
            }
            else {
                crypto = args[0];
            }
        }
        else if (args.length === 2) {
            algorithm = args[0];
            crypto = args[1];
        }
        else {
            crypto = cryptoProvider.get();
        }
        const asn = asn1Schema.AsnConvert.parse(this.rawData, asn1X509.SubjectPublicKeyInfo);
        return await crypto.subtle.digest(algorithm, asn.subjectPublicKey);
    }
    toTextObject() {
        const obj = this.toTextObjectEmpty();
        const asn = asn1Schema.AsnConvert.parse(this.rawData, asn1X509.SubjectPublicKeyInfo);
        obj["Algorithm"] = TextConverter.serializeAlgorithm(asn.algorithm);
        switch (asn.algorithm.algorithm) {
            case asn1Ecc.id_ecPublicKey:
                obj["EC Point"] = asn.subjectPublicKey;
                break;
            case asn1Rsa.id_rsaEncryption:
            default:
                obj["Raw Data"] = asn.subjectPublicKey;
        }
        return obj;
    }
}
function convertSpkiToRsaPkcs1(asnSpki, raw) {
    asnSpki.algorithm = new asn1X509.AlgorithmIdentifier({
        algorithm: asn1Rsa.id_rsaEncryption,
        parameters: null,
    });
    raw = asn1Schema.AsnConvert.serialize(asnSpki);
    return raw;
}

class AuthorityKeyIdentifierExtension extends Extension {
    static async create(param, critical = false, crypto = cryptoProvider.get()) {
        if ("name" in param && "serialNumber" in param) {
            return new AuthorityKeyIdentifierExtension(param, critical);
        }
        const key = await PublicKey.create(param, crypto);
        const id = await key.getKeyIdentifier(crypto);
        return new AuthorityKeyIdentifierExtension(pvtsutils.Convert.ToHex(id), critical);
    }
    constructor(...args) {
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            super(args[0]);
        }
        else if (typeof args[0] === "string") {
            const value = new asn1X509__namespace.AuthorityKeyIdentifier({ keyIdentifier: new asn1X509__namespace.KeyIdentifier(pvtsutils.Convert.FromHex(args[0])) });
            super(asn1X509__namespace.id_ce_authorityKeyIdentifier, args[1], asn1Schema.AsnConvert.serialize(value));
        }
        else {
            const certId = args[0];
            const certIdName = certId.name instanceof GeneralNames
                ? asn1Schema.AsnConvert.parse(certId.name.rawData, asn1X509__namespace.GeneralNames)
                : certId.name;
            const value = new asn1X509__namespace.AuthorityKeyIdentifier({
                authorityCertIssuer: certIdName,
                authorityCertSerialNumber: pvtsutils.Convert.FromHex(certId.serialNumber),
            });
            super(asn1X509__namespace.id_ce_authorityKeyIdentifier, args[1], asn1Schema.AsnConvert.serialize(value));
        }
    }
    onInit(asn) {
        super.onInit(asn);
        const aki = asn1Schema.AsnConvert.parse(asn.extnValue, asn1X509__namespace.AuthorityKeyIdentifier);
        if (aki.keyIdentifier) {
            this.keyId = pvtsutils.Convert.ToHex(aki.keyIdentifier);
        }
        if (aki.authorityCertIssuer || aki.authorityCertSerialNumber) {
            this.certId = {
                name: aki.authorityCertIssuer || [],
                serialNumber: aki.authorityCertSerialNumber ? pvtsutils.Convert.ToHex(aki.authorityCertSerialNumber) : "",
            };
        }
    }
    toTextObject() {
        const obj = this.toTextObjectWithoutValue();
        const asn = asn1Schema.AsnConvert.parse(this.value, asn1X509__namespace.AuthorityKeyIdentifier);
        if (asn.authorityCertIssuer) {
            obj["Authority Issuer"] = new GeneralNames(asn.authorityCertIssuer).toTextObject();
        }
        if (asn.authorityCertSerialNumber) {
            obj["Authority Serial Number"] = asn.authorityCertSerialNumber;
        }
        if (asn.keyIdentifier) {
            obj[""] = asn.keyIdentifier;
        }
        return obj;
    }
}
AuthorityKeyIdentifierExtension.NAME = "Authority Key Identifier";

class BasicConstraintsExtension extends Extension {
    constructor(...args) {
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            super(args[0]);
            const value = asn1Schema.AsnConvert.parse(this.value, asn1X509.BasicConstraints);
            this.ca = value.cA;
            this.pathLength = value.pathLenConstraint;
        }
        else {
            const value = new asn1X509.BasicConstraints({
                cA: args[0],
                pathLenConstraint: args[1],
            });
            super(asn1X509.id_ce_basicConstraints, args[2], asn1Schema.AsnConvert.serialize(value));
            this.ca = args[0];
            this.pathLength = args[1];
        }
    }
    toTextObject() {
        const obj = this.toTextObjectWithoutValue();
        if (this.ca) {
            obj["CA"] = this.ca;
        }
        if (this.pathLength !== undefined) {
            obj["Path Length"] = this.pathLength;
        }
        return obj;
    }
}
BasicConstraintsExtension.NAME = "Basic Constraints";

exports.ExtendedKeyUsage = void 0;
(function (ExtendedKeyUsage) {
    ExtendedKeyUsage["serverAuth"] = "1.3.6.1.5.5.7.3.1";
    ExtendedKeyUsage["clientAuth"] = "1.3.6.1.5.5.7.3.2";
    ExtendedKeyUsage["codeSigning"] = "1.3.6.1.5.5.7.3.3";
    ExtendedKeyUsage["emailProtection"] = "1.3.6.1.5.5.7.3.4";
    ExtendedKeyUsage["timeStamping"] = "1.3.6.1.5.5.7.3.8";
    ExtendedKeyUsage["ocspSigning"] = "1.3.6.1.5.5.7.3.9";
})(exports.ExtendedKeyUsage || (exports.ExtendedKeyUsage = {}));
class ExtendedKeyUsageExtension extends Extension {
    constructor(...args) {
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            super(args[0]);
            const value = asn1Schema.AsnConvert.parse(this.value, asn1X509__namespace.ExtendedKeyUsage);
            this.usages = value.map((o) => o);
        }
        else {
            const value = new asn1X509__namespace.ExtendedKeyUsage(args[0]);
            super(asn1X509__namespace.id_ce_extKeyUsage, args[1], asn1Schema.AsnConvert.serialize(value));
            this.usages = args[0];
        }
    }
    toTextObject() {
        const obj = this.toTextObjectWithoutValue();
        obj[""] = this.usages.map((o) => OidSerializer.toString(o)).join(", ");
        return obj;
    }
}
ExtendedKeyUsageExtension.NAME = "Extended Key Usages";

exports.KeyUsageFlags = void 0;
(function (KeyUsageFlags) {
    KeyUsageFlags[KeyUsageFlags["digitalSignature"] = 1] = "digitalSignature";
    KeyUsageFlags[KeyUsageFlags["nonRepudiation"] = 2] = "nonRepudiation";
    KeyUsageFlags[KeyUsageFlags["keyEncipherment"] = 4] = "keyEncipherment";
    KeyUsageFlags[KeyUsageFlags["dataEncipherment"] = 8] = "dataEncipherment";
    KeyUsageFlags[KeyUsageFlags["keyAgreement"] = 16] = "keyAgreement";
    KeyUsageFlags[KeyUsageFlags["keyCertSign"] = 32] = "keyCertSign";
    KeyUsageFlags[KeyUsageFlags["cRLSign"] = 64] = "cRLSign";
    KeyUsageFlags[KeyUsageFlags["encipherOnly"] = 128] = "encipherOnly";
    KeyUsageFlags[KeyUsageFlags["decipherOnly"] = 256] = "decipherOnly";
})(exports.KeyUsageFlags || (exports.KeyUsageFlags = {}));
class KeyUsagesExtension extends Extension {
    constructor(...args) {
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            super(args[0]);
            const value = asn1Schema.AsnConvert.parse(this.value, asn1X509.KeyUsage);
            this.usages = value.toNumber();
        }
        else {
            const value = new asn1X509.KeyUsage(args[0]);
            super(asn1X509.id_ce_keyUsage, args[1], asn1Schema.AsnConvert.serialize(value));
            this.usages = args[0];
        }
    }
    toTextObject() {
        const obj = this.toTextObjectWithoutValue();
        const asn = asn1Schema.AsnConvert.parse(this.value, asn1X509.KeyUsage);
        obj[""] = asn.toJSON().join(", ");
        return obj;
    }
}
KeyUsagesExtension.NAME = "Key Usages";

class SubjectKeyIdentifierExtension extends Extension {
    static async create(publicKey, critical = false, crypto = cryptoProvider.get()) {
        const key = await PublicKey.create(publicKey, crypto);
        const id = await key.getKeyIdentifier(crypto);
        return new SubjectKeyIdentifierExtension(pvtsutils.Convert.ToHex(id), critical);
    }
    constructor(...args) {
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            super(args[0]);
            const value = asn1Schema.AsnConvert.parse(this.value, asn1X509__namespace.SubjectKeyIdentifier);
            this.keyId = pvtsutils.Convert.ToHex(value);
        }
        else {
            const identifier = typeof args[0] === "string"
                ? pvtsutils.Convert.FromHex(args[0])
                : args[0];
            const value = new asn1X509__namespace.SubjectKeyIdentifier(identifier);
            super(asn1X509__namespace.id_ce_subjectKeyIdentifier, args[1], asn1Schema.AsnConvert.serialize(value));
            this.keyId = pvtsutils.Convert.ToHex(identifier);
        }
    }
    toTextObject() {
        const obj = this.toTextObjectWithoutValue();
        const asn = asn1Schema.AsnConvert.parse(this.value, asn1X509__namespace.SubjectKeyIdentifier);
        obj[""] = asn;
        return obj;
    }
}
SubjectKeyIdentifierExtension.NAME = "Subject Key Identifier";

class SubjectAlternativeNameExtension extends Extension {
    constructor(...args) {
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            super(args[0]);
        }
        else {
            super(asn1X509__namespace.id_ce_subjectAltName, args[1], new GeneralNames(args[0] || []).rawData);
        }
    }
    onInit(asn) {
        super.onInit(asn);
        const value = asn1Schema.AsnConvert.parse(asn.extnValue, asn1X509__namespace.SubjectAlternativeName);
        this.names = new GeneralNames(value);
    }
    toTextObject() {
        const obj = this.toTextObjectWithoutValue();
        const namesObj = this.names.toTextObject();
        for (const key in namesObj) {
            obj[key] = namesObj[key];
        }
        return obj;
    }
}
SubjectAlternativeNameExtension.NAME = "Subject Alternative Name";

class ExtensionFactory {
    static register(id, type) {
        this.items.set(id, type);
    }
    static create(data) {
        const extension = new Extension(data);
        const Type = this.items.get(extension.type);
        if (Type) {
            return new Type(data);
        }
        return extension;
    }
}
ExtensionFactory.items = new Map();

class CertificatePolicyExtension extends Extension {
    constructor(...args) {
        var _a;
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            super(args[0]);
            const asnPolicies = asn1Schema.AsnConvert.parse(this.value, asn1X509__namespace.CertificatePolicies);
            this.policies = asnPolicies.map((o) => o.policyIdentifier);
        }
        else {
            const policies = args[0];
            const critical = (_a = args[1]) !== null && _a !== void 0 ? _a : false;
            const value = new asn1X509__namespace.CertificatePolicies(policies.map((o) => (new asn1X509__namespace.PolicyInformation({ policyIdentifier: o }))));
            super(asn1X509__namespace.id_ce_certificatePolicies, critical, asn1Schema.AsnConvert.serialize(value));
            this.policies = policies;
        }
    }
    toTextObject() {
        const obj = this.toTextObjectWithoutValue();
        obj["Policy"] = this.policies.map((o) => new TextObject("", {}, OidSerializer.toString(o)));
        return obj;
    }
}
CertificatePolicyExtension.NAME = "Certificate Policies";
ExtensionFactory.register(asn1X509__namespace.id_ce_certificatePolicies, CertificatePolicyExtension);

class CRLDistributionPointsExtension extends Extension {
    constructor(...args) {
        var _a;
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            super(args[0]);
        }
        else if (Array.isArray(args[0]) && typeof args[0][0] === "string") {
            const urls = args[0];
            const dps = urls.map((url) => {
                return new asn1X509__namespace.DistributionPoint({
                    distributionPoint: new asn1X509__namespace.DistributionPointName({ fullName: [new asn1X509__namespace.GeneralName({ uniformResourceIdentifier: url })] }),
                });
            });
            const value = new asn1X509__namespace.CRLDistributionPoints(dps);
            super(asn1X509__namespace.id_ce_cRLDistributionPoints, args[1], asn1Schema.AsnConvert.serialize(value));
        }
        else {
            const value = new asn1X509__namespace.CRLDistributionPoints(args[0]);
            super(asn1X509__namespace.id_ce_cRLDistributionPoints, args[1], asn1Schema.AsnConvert.serialize(value));
        }
        (_a = this.distributionPoints) !== null && _a !== void 0 ? _a : (this.distributionPoints = []);
    }
    onInit(asn) {
        super.onInit(asn);
        const crlExt = asn1Schema.AsnConvert.parse(asn.extnValue, asn1X509__namespace.CRLDistributionPoints);
        this.distributionPoints = crlExt;
    }
    toTextObject() {
        const obj = this.toTextObjectWithoutValue();
        obj["Distribution Point"] = this.distributionPoints.map((dp) => {
            var _a;
            const dpObj = {};
            if (dp.distributionPoint) {
                dpObj[""] = (_a = dp.distributionPoint.fullName) === null || _a === void 0 ? void 0 : _a.map((name) => new GeneralName(name).toString()).join(", ");
            }
            if (dp.reasons) {
                dpObj["Reasons"] = dp.reasons.toString();
            }
            if (dp.cRLIssuer) {
                dpObj["CRL Issuer"] = dp.cRLIssuer.map((issuer) => issuer.toString()).join(", ");
            }
            return dpObj;
        });
        return obj;
    }
}
CRLDistributionPointsExtension.NAME = "CRL Distribution Points";

class AuthorityInfoAccessExtension extends Extension {
    constructor(...args) {
        var _a, _b, _c, _d;
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            super(args[0]);
        }
        else if (args[0] instanceof asn1X509__namespace.AuthorityInfoAccessSyntax) {
            const value = new asn1X509__namespace.AuthorityInfoAccessSyntax(args[0]);
            super(asn1X509__namespace.id_pe_authorityInfoAccess, args[1], asn1Schema.AsnConvert.serialize(value));
        }
        else {
            const params = args[0];
            const value = new asn1X509__namespace.AuthorityInfoAccessSyntax();
            addAccessDescriptions(value, params, asn1X509__namespace.id_ad_ocsp, "ocsp");
            addAccessDescriptions(value, params, asn1X509__namespace.id_ad_caIssuers, "caIssuers");
            addAccessDescriptions(value, params, asn1X509__namespace.id_ad_timeStamping, "timeStamping");
            addAccessDescriptions(value, params, asn1X509__namespace.id_ad_caRepository, "caRepository");
            super(asn1X509__namespace.id_pe_authorityInfoAccess, args[1], asn1Schema.AsnConvert.serialize(value));
        }
        (_a = this.ocsp) !== null && _a !== void 0 ? _a : (this.ocsp = []);
        (_b = this.caIssuers) !== null && _b !== void 0 ? _b : (this.caIssuers = []);
        (_c = this.timeStamping) !== null && _c !== void 0 ? _c : (this.timeStamping = []);
        (_d = this.caRepository) !== null && _d !== void 0 ? _d : (this.caRepository = []);
    }
    onInit(asn) {
        super.onInit(asn);
        this.ocsp = [];
        this.caIssuers = [];
        this.timeStamping = [];
        this.caRepository = [];
        const aia = asn1Schema.AsnConvert.parse(asn.extnValue, asn1X509__namespace.AuthorityInfoAccessSyntax);
        aia.forEach((accessDescription) => {
            switch (accessDescription.accessMethod) {
                case asn1X509__namespace.id_ad_ocsp:
                    this.ocsp.push(new GeneralName(accessDescription.accessLocation));
                    break;
                case asn1X509__namespace.id_ad_caIssuers:
                    this.caIssuers.push(new GeneralName(accessDescription.accessLocation));
                    break;
                case asn1X509__namespace.id_ad_timeStamping:
                    this.timeStamping.push(new GeneralName(accessDescription.accessLocation));
                    break;
                case asn1X509__namespace.id_ad_caRepository:
                    this.caRepository.push(new GeneralName(accessDescription.accessLocation));
                    break;
            }
        });
    }
    toTextObject() {
        const obj = this.toTextObjectWithoutValue();
        if (this.ocsp.length) {
            addUrlsToObject(obj, "OCSP", this.ocsp);
        }
        if (this.caIssuers.length) {
            addUrlsToObject(obj, "CA Issuers", this.caIssuers);
        }
        if (this.timeStamping.length) {
            addUrlsToObject(obj, "Time Stamping", this.timeStamping);
        }
        if (this.caRepository.length) {
            addUrlsToObject(obj, "CA Repository", this.caRepository);
        }
        return obj;
    }
}
AuthorityInfoAccessExtension.NAME = "Authority Info Access";
function addUrlsToObject(obj, key, urls) {
    if (urls.length === 1) {
        obj[key] = urls[0].toTextObject();
    }
    else {
        const names = new TextObject("");
        urls.forEach((name, index) => {
            const nameObj = name.toTextObject();
            const indexedKey = `${nameObj[TextObject.NAME]} ${index + 1}`;
            let field = names[indexedKey];
            if (!Array.isArray(field)) {
                field = [];
                names[indexedKey] = field;
            }
            field.push(nameObj);
        });
        obj[key] = names;
    }
}
function addAccessDescriptions(value, params, method, key) {
    const items = params[key];
    if (items) {
        const array = Array.isArray(items) ? items : [items];
        array.forEach((url) => {
            if (typeof url === "string") {
                url = new GeneralName("url", url);
            }
            value.push(new asn1X509__namespace.AccessDescription({
                accessMethod: method,
                accessLocation: asn1Schema.AsnConvert.parse(url.rawData, asn1X509__namespace.GeneralName),
            }));
        });
    }
}

class IssuerAlternativeNameExtension extends Extension {
    constructor(...args) {
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            super(args[0]);
        }
        else {
            super(asn1X509__namespace.id_ce_issuerAltName, args[1], new GeneralNames(args[0] || []).rawData);
        }
    }
    onInit(asn) {
        super.onInit(asn);
        const value = asn1Schema.AsnConvert.parse(asn.extnValue, asn1X509__namespace.GeneralNames);
        this.names = new GeneralNames(value);
    }
    toTextObject() {
        const obj = this.toTextObjectWithoutValue();
        const namesObj = this.names.toTextObject();
        for (const key in namesObj) {
            obj[key] = namesObj[key];
        }
        return obj;
    }
}
IssuerAlternativeNameExtension.NAME = "Issuer Alternative Name";

class Attribute extends AsnData {
    constructor(...args) {
        let raw;
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            raw = pvtsutils.BufferSourceConverter.toArrayBuffer(args[0]);
        }
        else {
            const type = args[0];
            const values = Array.isArray(args[1])
                ? args[1].map((o) => pvtsutils.BufferSourceConverter.toArrayBuffer(o))
                : [];
            raw = asn1Schema.AsnConvert.serialize(new asn1X509.Attribute({
                type, values,
            }));
        }
        super(raw, asn1X509.Attribute);
    }
    onInit(asn) {
        this.type = asn.type;
        this.values = asn.values;
    }
    toTextObject() {
        const obj = this.toTextObjectWithoutValue();
        obj["Value"] = this.values.map((o) => new TextObject("", { "": o }));
        return obj;
    }
    toTextObjectWithoutValue() {
        const obj = this.toTextObjectEmpty();
        if (obj[TextObject.NAME] === Attribute.NAME) {
            obj[TextObject.NAME] = OidSerializer.toString(this.type);
        }
        return obj;
    }
}
Attribute.NAME = "Attribute";

class ChallengePasswordAttribute extends Attribute {
    constructor(...args) {
        var _a;
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            super(args[0]);
        }
        else {
            const value = new asnPkcs9__namespace.ChallengePassword({ printableString: args[0] });
            super(asnPkcs9__namespace.id_pkcs9_at_challengePassword, [asn1Schema.AsnConvert.serialize(value)]);
        }
        (_a = this.password) !== null && _a !== void 0 ? _a : (this.password = "");
    }
    onInit(asn) {
        super.onInit(asn);
        if (this.values[0]) {
            const value = asn1Schema.AsnConvert.parse(this.values[0], asnPkcs9__namespace.ChallengePassword);
            this.password = value.toString();
        }
    }
    toTextObject() {
        const obj = this.toTextObjectWithoutValue();
        obj[TextObject.VALUE] = this.password;
        return obj;
    }
}
ChallengePasswordAttribute.NAME = "Challenge Password";

class ExtensionsAttribute extends Attribute {
    constructor(...args) {
        var _a;
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            super(args[0]);
        }
        else {
            const extensions = args[0];
            const value = new asn1X509__namespace.Extensions();
            for (const extension of extensions) {
                value.push(asn1Schema.AsnConvert.parse(extension.rawData, asn1X509__namespace.Extension));
            }
            super(asnPkcs9__namespace.id_pkcs9_at_extensionRequest, [asn1Schema.AsnConvert.serialize(value)]);
        }
        (_a = this.items) !== null && _a !== void 0 ? _a : (this.items = []);
    }
    onInit(asn) {
        super.onInit(asn);
        if (this.values[0]) {
            const value = asn1Schema.AsnConvert.parse(this.values[0], asn1X509__namespace.Extensions);
            this.items = value.map((o) => ExtensionFactory.create(asn1Schema.AsnConvert.serialize(o)));
        }
    }
    toTextObject() {
        const obj = this.toTextObjectWithoutValue();
        const extensions = this.items.map((o) => o.toTextObject());
        for (const extension of extensions) {
            obj[extension[TextObject.NAME]] = extension;
        }
        return obj;
    }
}
ExtensionsAttribute.NAME = "Extensions";

class AttributeFactory {
    static register(id, type) {
        this.items.set(id, type);
    }
    static create(data) {
        const attribute = new Attribute(data);
        const Type = this.items.get(attribute.type);
        if (Type) {
            return new Type(data);
        }
        return attribute;
    }
}
AttributeFactory.items = new Map();

const diAsnSignatureFormatter = "crypto.signatureFormatter";
class AsnDefaultSignatureFormatter {
    toAsnSignature(algorithm, signature) {
        return pvtsutils.BufferSourceConverter.toArrayBuffer(signature);
    }
    toWebSignature(algorithm, signature) {
        return pvtsutils.BufferSourceConverter.toArrayBuffer(signature);
    }
}

var RsaAlgorithm_1;
exports.RsaAlgorithm = RsaAlgorithm_1 = class RsaAlgorithm {
    static createPssParams(hash, saltLength) {
        const hashAlgorithm = RsaAlgorithm_1.getHashAlgorithm(hash);
        if (!hashAlgorithm) {
            return null;
        }
        return new asn1Rsa__namespace.RsaSaPssParams({
            hashAlgorithm,
            maskGenAlgorithm: new asn1X509.AlgorithmIdentifier({
                algorithm: asn1Rsa__namespace.id_mgf1,
                parameters: asn1Schema.AsnConvert.serialize(hashAlgorithm),
            }),
            saltLength,
        });
    }
    static getHashAlgorithm(alg) {
        const algProv = tsyringe.container.resolve(diAlgorithmProvider);
        if (typeof alg === "string") {
            return algProv.toAsnAlgorithm({ name: alg });
        }
        if (typeof alg === "object" && alg && "name" in alg) {
            return algProv.toAsnAlgorithm(alg);
        }
        return null;
    }
    toAsnAlgorithm(alg) {
        switch (alg.name.toLowerCase()) {
            case "rsassa-pkcs1-v1_5":
                if ("hash" in alg) {
                    let hash;
                    if (typeof alg.hash === "string") {
                        hash = alg.hash;
                    }
                    else if (alg.hash && typeof alg.hash === "object"
                        && "name" in alg.hash && typeof alg.hash.name === "string") {
                        hash = alg.hash.name.toUpperCase();
                    }
                    else {
                        throw new Error("Cannot get hash algorithm name");
                    }
                    switch (hash.toLowerCase()) {
                        case "sha-1":
                            return new asn1X509.AlgorithmIdentifier({
                                algorithm: asn1Rsa__namespace.id_sha1WithRSAEncryption, parameters: null,
                            });
                        case "sha-256":
                            return new asn1X509.AlgorithmIdentifier({
                                algorithm: asn1Rsa__namespace.id_sha256WithRSAEncryption, parameters: null,
                            });
                        case "sha-384":
                            return new asn1X509.AlgorithmIdentifier({
                                algorithm: asn1Rsa__namespace.id_sha384WithRSAEncryption, parameters: null,
                            });
                        case "sha-512":
                            return new asn1X509.AlgorithmIdentifier({
                                algorithm: asn1Rsa__namespace.id_sha512WithRSAEncryption, parameters: null,
                            });
                    }
                }
                else {
                    return new asn1X509.AlgorithmIdentifier({
                        algorithm: asn1Rsa__namespace.id_rsaEncryption, parameters: null,
                    });
                }
                break;
            case "rsa-pss":
                if ("hash" in alg) {
                    if (!("saltLength" in alg && typeof alg.saltLength === "number")) {
                        throw new Error("Cannot get 'saltLength' from 'alg' argument");
                    }
                    const pssParams = RsaAlgorithm_1.createPssParams(alg.hash, alg.saltLength);
                    if (!pssParams) {
                        throw new Error("Cannot create PSS parameters");
                    }
                    return new asn1X509.AlgorithmIdentifier({
                        algorithm: asn1Rsa__namespace.id_RSASSA_PSS, parameters: asn1Schema.AsnConvert.serialize(pssParams),
                    });
                }
                else {
                    return new asn1X509.AlgorithmIdentifier({
                        algorithm: asn1Rsa__namespace.id_RSASSA_PSS, parameters: null,
                    });
                }
        }
        return null;
    }
    toWebAlgorithm(alg) {
        switch (alg.algorithm) {
            case asn1Rsa__namespace.id_rsaEncryption:
                return { name: "RSASSA-PKCS1-v1_5" };
            case asn1Rsa__namespace.id_sha1WithRSAEncryption:
                return {
                    name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-1" },
                };
            case asn1Rsa__namespace.id_sha256WithRSAEncryption:
                return {
                    name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" },
                };
            case asn1Rsa__namespace.id_sha384WithRSAEncryption:
                return {
                    name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-384" },
                };
            case asn1Rsa__namespace.id_sha512WithRSAEncryption:
                return {
                    name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-512" },
                };
            case asn1Rsa__namespace.id_RSASSA_PSS:
                if (alg.parameters) {
                    const pssParams = asn1Schema.AsnConvert.parse(alg.parameters, asn1Rsa__namespace.RsaSaPssParams);
                    const algProv = tsyringe.container.resolve(diAlgorithmProvider);
                    const hashAlg = algProv.toWebAlgorithm(pssParams.hashAlgorithm);
                    return {
                        name: "RSA-PSS",
                        hash: hashAlg,
                        saltLength: pssParams.saltLength,
                    };
                }
                else {
                    return { name: "RSA-PSS" };
                }
        }
        return null;
    }
};
exports.RsaAlgorithm = RsaAlgorithm_1 = tslib.__decorate([
    tsyringe.injectable()
], exports.RsaAlgorithm);
tsyringe.container.registerSingleton(diAlgorithm, exports.RsaAlgorithm);

exports.ShaAlgorithm = class ShaAlgorithm {
    toAsnAlgorithm(alg) {
        switch (alg.name.toLowerCase()) {
            case "sha-1":
                return new asn1X509.AlgorithmIdentifier({ algorithm: asn1Rsa.id_sha1 });
            case "sha-256":
                return new asn1X509.AlgorithmIdentifier({ algorithm: asn1Rsa.id_sha256 });
            case "sha-384":
                return new asn1X509.AlgorithmIdentifier({ algorithm: asn1Rsa.id_sha384 });
            case "sha-512":
                return new asn1X509.AlgorithmIdentifier({ algorithm: asn1Rsa.id_sha512 });
        }
        return null;
    }
    toWebAlgorithm(alg) {
        switch (alg.algorithm) {
            case asn1Rsa.id_sha1:
                return { name: "SHA-1" };
            case asn1Rsa.id_sha256:
                return { name: "SHA-256" };
            case asn1Rsa.id_sha384:
                return { name: "SHA-384" };
            case asn1Rsa.id_sha512:
                return { name: "SHA-512" };
        }
        return null;
    }
};
exports.ShaAlgorithm = tslib.__decorate([
    tsyringe.injectable()
], exports.ShaAlgorithm);
tsyringe.container.registerSingleton(diAlgorithm, exports.ShaAlgorithm);

class AsnEcSignatureFormatter {
    addPadding(pointSize, data) {
        const bytes = pvtsutils.BufferSourceConverter.toUint8Array(data);
        const res = new Uint8Array(pointSize);
        res.set(bytes, pointSize - bytes.length);
        return res.buffer;
    }
    removePadding(data, positive = false) {
        let bytes = pvtsutils.BufferSourceConverter.toUint8Array(data);
        for (let i = 0; i < bytes.length; i++) {
            if (!bytes[i]) {
                continue;
            }
            bytes = bytes.slice(i);
            break;
        }
        if (positive && bytes[0] > 127) {
            const result = new Uint8Array(bytes.length + 1);
            result.set(bytes, 1);
            return result.buffer;
        }
        return bytes.buffer;
    }
    toAsnSignature(algorithm, signature) {
        if (algorithm.name === "ECDSA") {
            const namedCurve = algorithm.namedCurve;
            const pointSize = AsnEcSignatureFormatter.namedCurveSize.get(namedCurve)
                || AsnEcSignatureFormatter.defaultNamedCurveSize;
            const ecSignature = new asn1Ecc.ECDSASigValue();
            const uint8Signature = pvtsutils.BufferSourceConverter.toUint8Array(signature);
            ecSignature.r = this.removePadding(uint8Signature.slice(0, pointSize), true);
            ecSignature.s = this.removePadding(uint8Signature.slice(pointSize, pointSize + pointSize), true);
            return asn1Schema.AsnConvert.serialize(ecSignature);
        }
        return null;
    }
    toWebSignature(algorithm, signature) {
        if (algorithm.name === "ECDSA") {
            const ecSigValue = asn1Schema.AsnConvert.parse(signature, asn1Ecc.ECDSASigValue);
            const namedCurve = algorithm.namedCurve;
            const pointSize = AsnEcSignatureFormatter.namedCurveSize.get(namedCurve)
                || AsnEcSignatureFormatter.defaultNamedCurveSize;
            const r = this.addPadding(pointSize, this.removePadding(ecSigValue.r));
            const s = this.addPadding(pointSize, this.removePadding(ecSigValue.s));
            return pvtsutils.combine(r, s);
        }
        return null;
    }
}
AsnEcSignatureFormatter.namedCurveSize = new Map();
AsnEcSignatureFormatter.defaultNamedCurveSize = 32;

const idX25519 = "1.3.101.110";
const idX448 = "1.3.101.111";
const idEd25519 = "1.3.101.112";
const idEd448 = "1.3.101.113";
exports.EdAlgorithm = class EdAlgorithm {
    toAsnAlgorithm(alg) {
        let algorithm = null;
        switch (alg.name.toLowerCase()) {
            case "ed25519":
                algorithm = idEd25519;
                break;
            case "x25519":
                algorithm = idX25519;
                break;
            case "eddsa":
                switch (alg.namedCurve.toLowerCase()) {
                    case "ed25519":
                        algorithm = idEd25519;
                        break;
                    case "ed448":
                        algorithm = idEd448;
                        break;
                }
                break;
            case "ecdh-es":
                switch (alg.namedCurve.toLowerCase()) {
                    case "x25519":
                        algorithm = idX25519;
                        break;
                    case "x448":
                        algorithm = idX448;
                        break;
                }
        }
        if (algorithm) {
            return new asn1X509.AlgorithmIdentifier({ algorithm });
        }
        return null;
    }
    toWebAlgorithm(alg) {
        switch (alg.algorithm) {
            case idEd25519:
                return { name: "Ed25519" };
            case idEd448:
                return {
                    name: "EdDSA", namedCurve: "Ed448",
                };
            case idX25519:
                return { name: "X25519" };
            case idX448:
                return {
                    name: "ECDH-ES", namedCurve: "X448",
                };
        }
        return null;
    }
};
exports.EdAlgorithm = tslib.__decorate([
    tsyringe.injectable()
], exports.EdAlgorithm);
tsyringe.container.registerSingleton(diAlgorithm, exports.EdAlgorithm);

var _Pkcs10CertificateRequest_tbs, _Pkcs10CertificateRequest_subjectName, _Pkcs10CertificateRequest_subject, _Pkcs10CertificateRequest_signatureAlgorithm, _Pkcs10CertificateRequest_signature, _Pkcs10CertificateRequest_publicKey, _Pkcs10CertificateRequest_attributes, _Pkcs10CertificateRequest_extensions;
class Pkcs10CertificateRequest extends PemData {
    get subjectName() {
        if (!tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_subjectName, "f")) {
            tslib.__classPrivateFieldSet(this, _Pkcs10CertificateRequest_subjectName, new Name(this.asn.certificationRequestInfo.subject), "f");
        }
        return tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_subjectName, "f");
    }
    get subject() {
        if (!tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_subject, "f")) {
            tslib.__classPrivateFieldSet(this, _Pkcs10CertificateRequest_subject, this.subjectName.toString(), "f");
        }
        return tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_subject, "f");
    }
    get signatureAlgorithm() {
        if (!tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_signatureAlgorithm, "f")) {
            const algProv = tsyringe.container.resolve(diAlgorithmProvider);
            tslib.__classPrivateFieldSet(this, _Pkcs10CertificateRequest_signatureAlgorithm, algProv.toWebAlgorithm(this.asn.signatureAlgorithm), "f");
        }
        return tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_signatureAlgorithm, "f");
    }
    get signature() {
        if (!tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_signature, "f")) {
            tslib.__classPrivateFieldSet(this, _Pkcs10CertificateRequest_signature, this.asn.signature, "f");
        }
        return tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_signature, "f");
    }
    get publicKey() {
        if (!tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_publicKey, "f")) {
            tslib.__classPrivateFieldSet(this, _Pkcs10CertificateRequest_publicKey, new PublicKey(this.asn.certificationRequestInfo.subjectPKInfo), "f");
        }
        return tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_publicKey, "f");
    }
    get attributes() {
        if (!tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_attributes, "f")) {
            tslib.__classPrivateFieldSet(this, _Pkcs10CertificateRequest_attributes, this.asn.certificationRequestInfo.attributes
                .map((o) => AttributeFactory.create(asn1Schema.AsnConvert.serialize(o))), "f");
        }
        return tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_attributes, "f");
    }
    get extensions() {
        if (!tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_extensions, "f")) {
            tslib.__classPrivateFieldSet(this, _Pkcs10CertificateRequest_extensions, [], "f");
            const extensions = this.getAttribute(asnPkcs9.id_pkcs9_at_extensionRequest);
            if (extensions instanceof ExtensionsAttribute) {
                tslib.__classPrivateFieldSet(this, _Pkcs10CertificateRequest_extensions, extensions.items, "f");
            }
        }
        return tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_extensions, "f");
    }
    get tbs() {
        if (!tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_tbs, "f")) {
            tslib.__classPrivateFieldSet(this, _Pkcs10CertificateRequest_tbs, this.asn.certificationRequestInfoRaw
                || asn1Schema.AsnConvert.serialize(this.asn.certificationRequestInfo), "f");
        }
        return tslib.__classPrivateFieldGet(this, _Pkcs10CertificateRequest_tbs, "f");
    }
    constructor(param) {
        const args = PemData.isAsnEncoded(param) ? [param, asn1Csr.CertificationRequest] : [param];
        super(args[0], args[1]);
        _Pkcs10CertificateRequest_tbs.set(this, void 0);
        _Pkcs10CertificateRequest_subjectName.set(this, void 0);
        _Pkcs10CertificateRequest_subject.set(this, void 0);
        _Pkcs10CertificateRequest_signatureAlgorithm.set(this, void 0);
        _Pkcs10CertificateRequest_signature.set(this, void 0);
        _Pkcs10CertificateRequest_publicKey.set(this, void 0);
        _Pkcs10CertificateRequest_attributes.set(this, void 0);
        _Pkcs10CertificateRequest_extensions.set(this, void 0);
        this.tag = PemConverter.CertificateRequestTag;
    }
    onInit(_asn) {
    }
    getAttribute(type) {
        for (const attr of this.attributes) {
            if (attr.type === type) {
                return attr;
            }
        }
        return null;
    }
    getAttributes(type) {
        return this.attributes.filter((o) => o.type === type);
    }
    getExtension(type) {
        for (const ext of this.extensions) {
            if (ext.type === type) {
                return ext;
            }
        }
        return null;
    }
    getExtensions(type) {
        return this.extensions.filter((o) => o.type === type);
    }
    async verify(crypto = cryptoProvider.get()) {
        const algorithm = {
            ...this.publicKey.algorithm, ...this.signatureAlgorithm,
        };
        const publicKey = await this.publicKey.export(algorithm, ["verify"], crypto);
        const signatureFormatters = tsyringe.container
            .resolveAll(diAsnSignatureFormatter)
            .reverse();
        let signature = null;
        for (const signatureFormatter of signatureFormatters) {
            signature = signatureFormatter.toWebSignature(algorithm, this.signature);
            if (signature) {
                break;
            }
        }
        if (!signature) {
            throw Error("Cannot convert WebCrypto signature value to ASN.1 format");
        }
        const ok = await crypto.subtle.verify(this.signatureAlgorithm, publicKey, signature, this.tbs);
        return ok;
    }
    toTextObject() {
        const obj = this.toTextObjectEmpty();
        const req = asn1Schema.AsnConvert.parse(this.rawData, asn1Csr.CertificationRequest);
        const tbs = req.certificationRequestInfo;
        const data = new TextObject("", {
            Version: `${asn1X509.Version[tbs.version]} (${tbs.version})`,
            Subject: this.subject,
            "Subject Public Key Info": this.publicKey,
        });
        if (this.attributes.length) {
            const attrs = new TextObject("");
            for (const ext of this.attributes) {
                const attrObj = ext.toTextObject();
                attrs[attrObj[TextObject.NAME]] = attrObj;
            }
            data["Attributes"] = attrs;
        }
        obj["Data"] = data;
        obj["Signature"] = new TextObject("", {
            Algorithm: TextConverter.serializeAlgorithm(req.signatureAlgorithm),
            "": req.signature,
        });
        return obj;
    }
}
_Pkcs10CertificateRequest_tbs = new WeakMap(), _Pkcs10CertificateRequest_subjectName = new WeakMap(), _Pkcs10CertificateRequest_subject = new WeakMap(), _Pkcs10CertificateRequest_signatureAlgorithm = new WeakMap(), _Pkcs10CertificateRequest_signature = new WeakMap(), _Pkcs10CertificateRequest_publicKey = new WeakMap(), _Pkcs10CertificateRequest_attributes = new WeakMap(), _Pkcs10CertificateRequest_extensions = new WeakMap();
Pkcs10CertificateRequest.NAME = "PKCS#10 Certificate Request";

class Pkcs10CertificateRequestGenerator {
    static async create(params, crypto = cryptoProvider.get()) {
        if (!params.keys.privateKey) {
            throw new Error("Bad field 'keys' in 'params' argument. 'privateKey' is empty");
        }
        if (!params.keys.publicKey) {
            throw new Error("Bad field 'keys' in 'params' argument. 'publicKey' is empty");
        }
        const spki = await crypto.subtle.exportKey("spki", params.keys.publicKey);
        const asnReq = new asn1Csr.CertificationRequest({
            certificationRequestInfo: new asn1Csr.CertificationRequestInfo({ subjectPKInfo: asn1Schema.AsnConvert.parse(spki, asn1X509.SubjectPublicKeyInfo) }),
        });
        if (params.name) {
            const name = params.name instanceof Name
                ? params.name
                : new Name(params.name);
            asnReq.certificationRequestInfo.subject = asn1Schema.AsnConvert.parse(name.toArrayBuffer(), asn1X509.Name);
        }
        if (params.attributes) {
            for (const o of params.attributes) {
                asnReq.certificationRequestInfo.attributes.push(asn1Schema.AsnConvert.parse(o.rawData, asn1X509.Attribute));
            }
        }
        if (params.extensions && params.extensions.length) {
            const attr = new asn1X509.Attribute({ type: asnPkcs9.id_pkcs9_at_extensionRequest });
            const extensions = new asn1X509.Extensions();
            for (const o of params.extensions) {
                extensions.push(asn1Schema.AsnConvert.parse(o.rawData, asn1X509.Extension));
            }
            attr.values.push(asn1Schema.AsnConvert.serialize(extensions));
            asnReq.certificationRequestInfo.attributes.push(attr);
        }
        const signingAlgorithm = {
            ...params.signingAlgorithm, ...params.keys.privateKey.algorithm,
        };
        const algProv = tsyringe.container.resolve(diAlgorithmProvider);
        asnReq.signatureAlgorithm = algProv.toAsnAlgorithm(signingAlgorithm);
        const tbs = asn1Schema.AsnConvert.serialize(asnReq.certificationRequestInfo);
        const signature = await crypto.subtle.sign(signingAlgorithm, params.keys.privateKey, tbs);
        const signatureFormatters = tsyringe.container
            .resolveAll(diAsnSignatureFormatter)
            .reverse();
        let asnSignature = null;
        for (const signatureFormatter of signatureFormatters) {
            asnSignature = signatureFormatter.toAsnSignature(signingAlgorithm, signature);
            if (asnSignature) {
                break;
            }
        }
        if (!asnSignature) {
            throw Error("Cannot convert WebCrypto signature value to ASN.1 format");
        }
        asnReq.signature = asnSignature;
        return new Pkcs10CertificateRequest(asn1Schema.AsnConvert.serialize(asnReq));
    }
}

var _X509Certificate_tbs, _X509Certificate_serialNumber, _X509Certificate_subjectName, _X509Certificate_subject, _X509Certificate_issuerName, _X509Certificate_issuer, _X509Certificate_notBefore, _X509Certificate_notAfter, _X509Certificate_signatureAlgorithm, _X509Certificate_signature, _X509Certificate_extensions, _X509Certificate_publicKey;
class X509Certificate extends PemData {
    get publicKey() {
        if (!tslib.__classPrivateFieldGet(this, _X509Certificate_publicKey, "f")) {
            tslib.__classPrivateFieldSet(this, _X509Certificate_publicKey, new PublicKey(this.asn.tbsCertificate.subjectPublicKeyInfo), "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Certificate_publicKey, "f");
    }
    get serialNumber() {
        if (!tslib.__classPrivateFieldGet(this, _X509Certificate_serialNumber, "f")) {
            const tbs = this.asn.tbsCertificate;
            let serialNumberBytes = new Uint8Array(tbs.serialNumber);
            if (serialNumberBytes.length > 1
                && serialNumberBytes[0] === 0x00
                && serialNumberBytes[1] > 0x7F) {
                serialNumberBytes = serialNumberBytes.slice(1);
            }
            tslib.__classPrivateFieldSet(this, _X509Certificate_serialNumber, pvtsutils.Convert.ToHex(serialNumberBytes), "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Certificate_serialNumber, "f");
    }
    get subjectName() {
        if (!tslib.__classPrivateFieldGet(this, _X509Certificate_subjectName, "f")) {
            tslib.__classPrivateFieldSet(this, _X509Certificate_subjectName, new Name(this.asn.tbsCertificate.subject), "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Certificate_subjectName, "f");
    }
    get subject() {
        if (!tslib.__classPrivateFieldGet(this, _X509Certificate_subject, "f")) {
            tslib.__classPrivateFieldSet(this, _X509Certificate_subject, this.subjectName.toString(), "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Certificate_subject, "f");
    }
    get issuerName() {
        if (!tslib.__classPrivateFieldGet(this, _X509Certificate_issuerName, "f")) {
            tslib.__classPrivateFieldSet(this, _X509Certificate_issuerName, new Name(this.asn.tbsCertificate.issuer), "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Certificate_issuerName, "f");
    }
    get issuer() {
        if (!tslib.__classPrivateFieldGet(this, _X509Certificate_issuer, "f")) {
            tslib.__classPrivateFieldSet(this, _X509Certificate_issuer, this.issuerName.toString(), "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Certificate_issuer, "f");
    }
    get notBefore() {
        if (!tslib.__classPrivateFieldGet(this, _X509Certificate_notBefore, "f")) {
            const notBefore = this.asn.tbsCertificate.validity.notBefore.utcTime
                || this.asn.tbsCertificate.validity.notBefore.generalTime;
            if (!notBefore) {
                throw new Error("Cannot get 'notBefore' value");
            }
            tslib.__classPrivateFieldSet(this, _X509Certificate_notBefore, notBefore, "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Certificate_notBefore, "f");
    }
    get notAfter() {
        if (!tslib.__classPrivateFieldGet(this, _X509Certificate_notAfter, "f")) {
            const notAfter = this.asn.tbsCertificate.validity.notAfter.utcTime
                || this.asn.tbsCertificate.validity.notAfter.generalTime;
            if (!notAfter) {
                throw new Error("Cannot get 'notAfter' value");
            }
            tslib.__classPrivateFieldSet(this, _X509Certificate_notAfter, notAfter, "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Certificate_notAfter, "f");
    }
    get signatureAlgorithm() {
        if (!tslib.__classPrivateFieldGet(this, _X509Certificate_signatureAlgorithm, "f")) {
            const algProv = tsyringe.container.resolve(diAlgorithmProvider);
            tslib.__classPrivateFieldSet(this, _X509Certificate_signatureAlgorithm, algProv
                .toWebAlgorithm(this.asn.signatureAlgorithm), "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Certificate_signatureAlgorithm, "f");
    }
    get signature() {
        if (!tslib.__classPrivateFieldGet(this, _X509Certificate_signature, "f")) {
            tslib.__classPrivateFieldSet(this, _X509Certificate_signature, this.asn.signatureValue, "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Certificate_signature, "f");
    }
    get extensions() {
        if (!tslib.__classPrivateFieldGet(this, _X509Certificate_extensions, "f")) {
            tslib.__classPrivateFieldSet(this, _X509Certificate_extensions, [], "f");
            if (this.asn.tbsCertificate.extensions) {
                tslib.__classPrivateFieldSet(this, _X509Certificate_extensions, this.asn.tbsCertificate.extensions.map((o) => (ExtensionFactory.create(asn1Schema.AsnConvert.serialize(o)))), "f");
            }
        }
        return tslib.__classPrivateFieldGet(this, _X509Certificate_extensions, "f");
    }
    get tbs() {
        if (!tslib.__classPrivateFieldGet(this, _X509Certificate_tbs, "f")) {
            tslib.__classPrivateFieldSet(this, _X509Certificate_tbs, this.asn.tbsCertificateRaw || asn1Schema.AsnConvert.serialize(this.asn.tbsCertificate), "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Certificate_tbs, "f");
    }
    constructor(param) {
        const args = PemData.isAsnEncoded(param) ? [param, asn1X509.Certificate] : [param];
        super(args[0], args[1]);
        _X509Certificate_tbs.set(this, void 0);
        _X509Certificate_serialNumber.set(this, void 0);
        _X509Certificate_subjectName.set(this, void 0);
        _X509Certificate_subject.set(this, void 0);
        _X509Certificate_issuerName.set(this, void 0);
        _X509Certificate_issuer.set(this, void 0);
        _X509Certificate_notBefore.set(this, void 0);
        _X509Certificate_notAfter.set(this, void 0);
        _X509Certificate_signatureAlgorithm.set(this, void 0);
        _X509Certificate_signature.set(this, void 0);
        _X509Certificate_extensions.set(this, void 0);
        _X509Certificate_publicKey.set(this, void 0);
        this.tag = PemConverter.CertificateTag;
    }
    onInit(_asn) {
    }
    getExtension(type) {
        for (const ext of this.extensions) {
            if (typeof type === "string") {
                if (ext.type === type) {
                    return ext;
                }
            }
            else {
                if (ext instanceof type) {
                    return ext;
                }
            }
        }
        return null;
    }
    getExtensions(type) {
        return this.extensions.filter((o) => {
            if (typeof type === "string") {
                return o.type === type;
            }
            else {
                return o instanceof type;
            }
        });
    }
    async verify(params = {}, crypto = cryptoProvider.get()) {
        let keyAlgorithm;
        let publicKey;
        const paramsKey = params.publicKey;
        try {
            if (!paramsKey) {
                keyAlgorithm = {
                    ...this.publicKey.algorithm, ...this.signatureAlgorithm,
                };
                publicKey = await this.publicKey.export(keyAlgorithm, ["verify"], crypto);
            }
            else if ("publicKey" in paramsKey) {
                keyAlgorithm = {
                    ...paramsKey.publicKey.algorithm, ...this.signatureAlgorithm,
                };
                publicKey = await paramsKey.publicKey.export(keyAlgorithm, ["verify"], crypto);
            }
            else if (paramsKey instanceof PublicKey) {
                keyAlgorithm = {
                    ...paramsKey.algorithm, ...this.signatureAlgorithm,
                };
                publicKey = await paramsKey.export(keyAlgorithm, ["verify"], crypto);
            }
            else if (pvtsutils.BufferSourceConverter.isBufferSource(paramsKey)) {
                const key = new PublicKey(paramsKey);
                keyAlgorithm = {
                    ...key.algorithm, ...this.signatureAlgorithm,
                };
                publicKey = await key.export(keyAlgorithm, ["verify"], crypto);
            }
            else {
                keyAlgorithm = {
                    ...paramsKey.algorithm, ...this.signatureAlgorithm,
                };
                publicKey = paramsKey;
            }
        }
        catch {
            return false;
        }
        const signatureFormatters = tsyringe.container
            .resolveAll(diAsnSignatureFormatter)
            .reverse();
        let signature = null;
        for (const signatureFormatter of signatureFormatters) {
            signature = signatureFormatter.toWebSignature(keyAlgorithm, this.signature);
            if (signature) {
                break;
            }
        }
        if (!signature) {
            throw Error("Cannot convert ASN.1 signature value to WebCrypto format");
        }
        const ok = await crypto.subtle.verify(this.signatureAlgorithm, publicKey, signature, this.tbs);
        if (params.signatureOnly) {
            return ok;
        }
        else {
            const date = params.date || new Date();
            const time = date.getTime();
            return ok && this.notBefore.getTime() < time && time < this.notAfter.getTime();
        }
    }
    async getThumbprint(...args) {
        let crypto;
        let algorithm = "SHA-1";
        if (args[0]) {
            if (!args[0].subtle) {
                algorithm = args[0] || algorithm;
                crypto = args[1];
            }
            else {
                crypto = args[0];
            }
        }
        crypto !== null && crypto !== void 0 ? crypto : (crypto = cryptoProvider.get());
        return await crypto.subtle.digest(algorithm, this.rawData);
    }
    async isSelfSigned(crypto = cryptoProvider.get()) {
        return this.subject === this.issuer && await this.verify({ signatureOnly: true }, crypto);
    }
    toTextObject() {
        const obj = this.toTextObjectEmpty();
        const cert = asn1Schema.AsnConvert.parse(this.rawData, asn1X509.Certificate);
        const tbs = cert.tbsCertificate;
        const data = new TextObject("", {
            Version: `${asn1X509.Version[tbs.version]} (${tbs.version})`,
            "Serial Number": tbs.serialNumber,
            "Signature Algorithm": TextConverter.serializeAlgorithm(tbs.signature),
            Issuer: this.issuer,
            Validity: new TextObject("", {
                "Not Before": tbs.validity.notBefore.getTime(),
                "Not After": tbs.validity.notAfter.getTime(),
            }),
            Subject: this.subject,
            "Subject Public Key Info": this.publicKey,
        });
        if (tbs.issuerUniqueID) {
            data["Issuer Unique ID"] = tbs.issuerUniqueID;
        }
        if (tbs.subjectUniqueID) {
            data["Subject Unique ID"] = tbs.subjectUniqueID;
        }
        if (this.extensions.length) {
            const extensions = new TextObject("");
            for (const ext of this.extensions) {
                const extObj = ext.toTextObject();
                extensions[extObj[TextObject.NAME]] = extObj;
            }
            data["Extensions"] = extensions;
        }
        obj["Data"] = data;
        obj["Signature"] = new TextObject("", {
            Algorithm: TextConverter.serializeAlgorithm(cert.signatureAlgorithm),
            "": cert.signatureValue,
        });
        return obj;
    }
}
_X509Certificate_tbs = new WeakMap(), _X509Certificate_serialNumber = new WeakMap(), _X509Certificate_subjectName = new WeakMap(), _X509Certificate_subject = new WeakMap(), _X509Certificate_issuerName = new WeakMap(), _X509Certificate_issuer = new WeakMap(), _X509Certificate_notBefore = new WeakMap(), _X509Certificate_notAfter = new WeakMap(), _X509Certificate_signatureAlgorithm = new WeakMap(), _X509Certificate_signature = new WeakMap(), _X509Certificate_extensions = new WeakMap(), _X509Certificate_publicKey = new WeakMap();
X509Certificate.NAME = "Certificate";

class X509Certificates extends Array {
    constructor(param) {
        super();
        if (PemData.isAsnEncoded(param)) {
            this.import(param);
        }
        else if (param instanceof X509Certificate) {
            this.push(param);
        }
        else if (Array.isArray(param)) {
            for (const item of param) {
                this.push(item);
            }
        }
    }
    export(format) {
        const signedData = new asn1Cms__namespace.SignedData();
        signedData.version = 1;
        signedData.encapContentInfo.eContentType = asn1Cms__namespace.id_data;
        signedData.encapContentInfo.eContent = new asn1Cms__namespace.EncapsulatedContent({ single: new asn1Schema.OctetString() });
        signedData.certificates = new asn1Cms__namespace.CertificateSet(this.map((o) => new asn1Cms__namespace.CertificateChoices({ certificate: asn1Schema.AsnConvert.parse(o.rawData, asn1X509.Certificate) })));
        const cms = new asn1Cms__namespace.ContentInfo({
            contentType: asn1Cms__namespace.id_signedData,
            content: asn1Schema.AsnConvert.serialize(signedData),
        });
        const raw = asn1Schema.AsnConvert.serialize(cms);
        if (format === "raw") {
            return raw;
        }
        return this.toString(format);
    }
    import(data) {
        const raw = PemData.toArrayBuffer(data);
        const cms = asn1Schema.AsnConvert.parse(raw, asn1Cms__namespace.ContentInfo);
        if (cms.contentType !== asn1Cms__namespace.id_signedData) {
            throw new TypeError("Cannot parse CMS package. Incoming data is not a SignedData object.");
        }
        const signedData = asn1Schema.AsnConvert.parse(cms.content, asn1Cms__namespace.SignedData);
        this.clear();
        for (const item of signedData.certificates || []) {
            if (item.certificate) {
                this.push(new X509Certificate(item.certificate));
            }
        }
    }
    clear() {
        while (this.pop()) {
        }
    }
    toString(format = "pem") {
        const raw = this.export("raw");
        switch (format) {
            case "pem":
                return PemConverter.encode(raw, "CMS");
            case "pem-chain":
                return this
                    .map((o) => o.toString("pem"))
                    .join("\n");
            case "asn":
                return asn1Schema.AsnConvert.toString(raw);
            case "hex":
                return pvtsutils.Convert.ToHex(raw);
            case "base64":
                return pvtsutils.Convert.ToBase64(raw);
            case "base64url":
                return pvtsutils.Convert.ToBase64Url(raw);
            case "text":
                return TextConverter.serialize(this.toTextObject());
            default:
                throw TypeError("Argument 'format' is unsupported value");
        }
    }
    toTextObject() {
        const contentInfo = asn1Schema.AsnConvert.parse(this.export("raw"), asn1Cms__namespace.ContentInfo);
        const signedData = asn1Schema.AsnConvert.parse(contentInfo.content, asn1Cms__namespace.SignedData);
        const obj = new TextObject("X509Certificates", {
            "Content Type": OidSerializer.toString(contentInfo.contentType),
            Content: new TextObject("", {
                Version: `${asn1Cms__namespace.CMSVersion[signedData.version]} (${signedData.version})`,
                Certificates: new TextObject("", { Certificate: this.map((o) => o.toTextObject()) }),
            }),
        });
        return obj;
    }
}

class X509ChainBuilder {
    constructor(params = {}) {
        this.certificates = [];
        if (params.certificates) {
            this.certificates = params.certificates;
        }
    }
    async build(cert, crypto = cryptoProvider.get()) {
        const chain = new X509Certificates(cert);
        let current = cert;
        while (current = await this.findIssuer(current, crypto)) {
            const thumbprint = await current.getThumbprint(crypto);
            for (const item of chain) {
                const thumbprint2 = await item.getThumbprint(crypto);
                if (pvtsutils.isEqual(thumbprint, thumbprint2)) {
                    throw new Error("Cannot build a certificate chain. Circular dependency.");
                }
            }
            chain.push(current);
        }
        return chain;
    }
    async findIssuer(cert, crypto = cryptoProvider.get()) {
        if (!await cert.isSelfSigned(crypto)) {
            const akiExt = cert.getExtension(asn1X509__namespace.id_ce_authorityKeyIdentifier);
            for (const item of this.certificates) {
                if (item.subject !== cert.issuer) {
                    continue;
                }
                if (akiExt) {
                    if (akiExt.keyId) {
                        const skiExt = item.getExtension(asn1X509__namespace.id_ce_subjectKeyIdentifier);
                        if (skiExt && skiExt.keyId !== akiExt.keyId) {
                            continue;
                        }
                    }
                    else if (akiExt.certId) {
                        const sanExt = item.getExtension(asn1X509__namespace.id_ce_subjectAltName);
                        if (sanExt
                            && !(akiExt.certId.serialNumber === item.serialNumber && pvtsutils.isEqual(asn1Schema.AsnConvert.serialize(akiExt.certId.name), asn1Schema.AsnConvert.serialize(sanExt)))) {
                            continue;
                        }
                    }
                }
                try {
                    const algorithm = {
                        ...item.publicKey.algorithm, ...cert.signatureAlgorithm,
                    };
                    const publicKey = await item.publicKey.export(algorithm, ["verify"], crypto);
                    const ok = await cert.verify({
                        publicKey, signatureOnly: true,
                    }, crypto);
                    if (!ok) {
                        continue;
                    }
                }
                catch {
                    continue;
                }
                return item;
            }
        }
        return null;
    }
}

function generateCertificateSerialNumber(input, crypto = cryptoProvider.get()) {
    const inputView = pvtsutils.BufferSourceConverter.toUint8Array(pvtsutils.Convert.FromHex(input || ""));
    let serialNumber = inputView && inputView.length && inputView.some((o) => o > 0)
        ? new Uint8Array(inputView)
        : undefined;
    if (!serialNumber) {
        serialNumber = crypto.getRandomValues(new Uint8Array(16));
    }
    let firstNonZero = 0;
    while (firstNonZero < serialNumber.length - 1 && serialNumber[firstNonZero] === 0) {
        firstNonZero++;
    }
    serialNumber = serialNumber.slice(firstNonZero);
    if (serialNumber[0] > 0x7F) {
        const newSerialNumber = new Uint8Array(serialNumber.length + 1);
        newSerialNumber[0] = 0x00;
        newSerialNumber.set(serialNumber, 1);
        serialNumber = newSerialNumber;
    }
    return serialNumber.buffer;
}

class X509CertificateGenerator {
    static async createSelfSigned(params, crypto = cryptoProvider.get()) {
        if (!params.keys.privateKey) {
            throw new Error("Bad field 'keys' in 'params' argument. 'privateKey' is empty");
        }
        if (!params.keys.publicKey) {
            throw new Error("Bad field 'keys' in 'params' argument. 'publicKey' is empty");
        }
        return this.create({
            serialNumber: params.serialNumber,
            subject: params.name,
            issuer: params.name,
            notBefore: params.notBefore,
            notAfter: params.notAfter,
            publicKey: params.keys.publicKey,
            signingKey: params.keys.privateKey,
            signingAlgorithm: params.signingAlgorithm,
            extensions: params.extensions,
        }, crypto);
    }
    static async create(params, crypto = cryptoProvider.get()) {
        var _a;
        let spki;
        if (params.publicKey instanceof PublicKey) {
            spki = params.publicKey.rawData;
        }
        else if ("publicKey" in params.publicKey) {
            spki = params.publicKey.publicKey.rawData;
        }
        else if (pvtsutils.BufferSourceConverter.isBufferSource(params.publicKey)) {
            spki = params.publicKey;
        }
        else {
            spki = await crypto.subtle.exportKey("spki", params.publicKey);
        }
        const serialNumber = generateCertificateSerialNumber(params.serialNumber, crypto);
        const notBefore = params.notBefore || new Date();
        const notAfter = params.notAfter || new Date(notBefore.getTime() + 31536000000);
        const asnX509 = new asn1X509__namespace.Certificate({
            tbsCertificate: new asn1X509__namespace.TBSCertificate({
                version: asn1X509__namespace.Version.v3,
                serialNumber,
                validity: new asn1X509__namespace.Validity({
                    notBefore,
                    notAfter,
                }),
                extensions: new asn1X509__namespace.Extensions(((_a = params.extensions) === null || _a === void 0 ? void 0 : _a.map((o) => asn1Schema.AsnConvert.parse(o.rawData, asn1X509__namespace.Extension))) || []),
                subjectPublicKeyInfo: asn1Schema.AsnConvert.parse(spki, asn1X509__namespace.SubjectPublicKeyInfo),
            }),
        });
        if (params.subject) {
            const name = params.subject instanceof Name
                ? params.subject
                : new Name(params.subject);
            asnX509.tbsCertificate.subject = asn1Schema.AsnConvert.parse(name.toArrayBuffer(), asn1X509__namespace.Name);
        }
        if (params.issuer) {
            const name = params.issuer instanceof Name
                ? params.issuer
                : new Name(params.issuer);
            asnX509.tbsCertificate.issuer = asn1Schema.AsnConvert.parse(name.toArrayBuffer(), asn1X509__namespace.Name);
        }
        const defaultSigningAlgorithm = { hash: "SHA-256" };
        const signatureAlgorithm = ("signingKey" in params)
            ? {
                ...defaultSigningAlgorithm, ...params.signingAlgorithm, ...params.signingKey.algorithm,
            }
            : {
                ...defaultSigningAlgorithm, ...params.signingAlgorithm,
            };
        const algProv = tsyringe.container.resolve(diAlgorithmProvider);
        asnX509.tbsCertificate.signature = asnX509.signatureAlgorithm = algProv
            .toAsnAlgorithm(signatureAlgorithm);
        const tbs = asn1Schema.AsnConvert.serialize(asnX509.tbsCertificate);
        const signatureValue = ("signingKey" in params)
            ? await crypto.subtle.sign(signatureAlgorithm, params.signingKey, tbs)
            : params.signature;
        const signatureFormatters = tsyringe.container
            .resolveAll(diAsnSignatureFormatter)
            .reverse();
        let asnSignature = null;
        for (const signatureFormatter of signatureFormatters) {
            asnSignature = signatureFormatter.toAsnSignature(signatureAlgorithm, signatureValue);
            if (asnSignature) {
                break;
            }
        }
        if (!asnSignature) {
            throw Error("Cannot convert ASN.1 signature value to WebCrypto format");
        }
        asnX509.signatureValue = asnSignature;
        return new X509Certificate(asn1Schema.AsnConvert.serialize(asnX509));
    }
}

var _X509CrlEntry_serialNumber, _X509CrlEntry_revocationDate, _X509CrlEntry_reason, _X509CrlEntry_invalidity, _X509CrlEntry_extensions;
exports.X509CrlReason = void 0;
(function (X509CrlReason) {
    X509CrlReason[X509CrlReason["unspecified"] = 0] = "unspecified";
    X509CrlReason[X509CrlReason["keyCompromise"] = 1] = "keyCompromise";
    X509CrlReason[X509CrlReason["cACompromise"] = 2] = "cACompromise";
    X509CrlReason[X509CrlReason["affiliationChanged"] = 3] = "affiliationChanged";
    X509CrlReason[X509CrlReason["superseded"] = 4] = "superseded";
    X509CrlReason[X509CrlReason["cessationOfOperation"] = 5] = "cessationOfOperation";
    X509CrlReason[X509CrlReason["certificateHold"] = 6] = "certificateHold";
    X509CrlReason[X509CrlReason["removeFromCRL"] = 8] = "removeFromCRL";
    X509CrlReason[X509CrlReason["privilegeWithdrawn"] = 9] = "privilegeWithdrawn";
    X509CrlReason[X509CrlReason["aACompromise"] = 10] = "aACompromise";
})(exports.X509CrlReason || (exports.X509CrlReason = {}));
class X509CrlEntry extends AsnData {
    get serialNumber() {
        if (!tslib.__classPrivateFieldGet(this, _X509CrlEntry_serialNumber, "f")) {
            tslib.__classPrivateFieldSet(this, _X509CrlEntry_serialNumber, pvtsutils.Convert.ToHex(this.asn.userCertificate), "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509CrlEntry_serialNumber, "f");
    }
    get revocationDate() {
        if (!tslib.__classPrivateFieldGet(this, _X509CrlEntry_revocationDate, "f")) {
            tslib.__classPrivateFieldSet(this, _X509CrlEntry_revocationDate, this.asn.revocationDate.getTime(), "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509CrlEntry_revocationDate, "f");
    }
    get reason() {
        if (tslib.__classPrivateFieldGet(this, _X509CrlEntry_reason, "f") === undefined) {
            void this.extensions;
        }
        return tslib.__classPrivateFieldGet(this, _X509CrlEntry_reason, "f");
    }
    get invalidity() {
        if (tslib.__classPrivateFieldGet(this, _X509CrlEntry_invalidity, "f") === undefined) {
            void this.extensions;
        }
        return tslib.__classPrivateFieldGet(this, _X509CrlEntry_invalidity, "f");
    }
    get extensions() {
        if (!tslib.__classPrivateFieldGet(this, _X509CrlEntry_extensions, "f")) {
            tslib.__classPrivateFieldSet(this, _X509CrlEntry_extensions, [], "f");
            if (this.asn.crlEntryExtensions) {
                tslib.__classPrivateFieldSet(this, _X509CrlEntry_extensions, this.asn.crlEntryExtensions.map((o) => {
                    const extension = ExtensionFactory.create(asn1Schema.AsnConvert.serialize(o));
                    switch (extension.type) {
                        case asn1X509.id_ce_cRLReasons:
                            if (tslib.__classPrivateFieldGet(this, _X509CrlEntry_reason, "f") === undefined) {
                                tslib.__classPrivateFieldSet(this, _X509CrlEntry_reason, asn1Schema.AsnConvert
                                    .parse(extension.value, asn1X509.CRLReason).reason, "f");
                            }
                            break;
                        case asn1X509.id_ce_invalidityDate:
                            if (tslib.__classPrivateFieldGet(this, _X509CrlEntry_invalidity, "f") === undefined) {
                                tslib.__classPrivateFieldSet(this, _X509CrlEntry_invalidity, asn1Schema.AsnConvert.parse(extension.value, asn1X509.InvalidityDate).value, "f");
                            }
                            break;
                    }
                    return extension;
                }), "f");
            }
        }
        return tslib.__classPrivateFieldGet(this, _X509CrlEntry_extensions, "f");
    }
    constructor(...args) {
        let raw;
        if (pvtsutils.BufferSourceConverter.isBufferSource(args[0])) {
            raw = pvtsutils.BufferSourceConverter.toArrayBuffer(args[0]);
        }
        else if (typeof args[0] === "string") {
            raw = asn1Schema.AsnConvert.serialize(new asn1X509.RevokedCertificate({
                userCertificate: generateCertificateSerialNumber(args[0]),
                revocationDate: new asn1X509.Time(args[1]),
                crlEntryExtensions: args[2],
            }));
        }
        else if (args[0] instanceof asn1X509.RevokedCertificate) {
            raw = args[0];
        }
        if (!raw) {
            throw new TypeError("Cannot create X509CrlEntry instance. Wrong constructor arguments.");
        }
        super(raw, asn1X509.RevokedCertificate);
        _X509CrlEntry_serialNumber.set(this, void 0);
        _X509CrlEntry_revocationDate.set(this, void 0);
        _X509CrlEntry_reason.set(this, void 0);
        _X509CrlEntry_invalidity.set(this, void 0);
        _X509CrlEntry_extensions.set(this, void 0);
    }
    onInit(_asn) {
    }
}
_X509CrlEntry_serialNumber = new WeakMap(), _X509CrlEntry_revocationDate = new WeakMap(), _X509CrlEntry_reason = new WeakMap(), _X509CrlEntry_invalidity = new WeakMap(), _X509CrlEntry_extensions = new WeakMap();

var _X509Crl_tbs, _X509Crl_signatureAlgorithm, _X509Crl_issuerName, _X509Crl_thisUpdate, _X509Crl_nextUpdate, _X509Crl_entries, _X509Crl_extensions;
class X509Crl extends PemData {
    get version() {
        return this.asn.tbsCertList.version;
    }
    get signatureAlgorithm() {
        if (!tslib.__classPrivateFieldGet(this, _X509Crl_signatureAlgorithm, "f")) {
            const algProv = tsyringe.container.resolve(diAlgorithmProvider);
            tslib.__classPrivateFieldSet(this, _X509Crl_signatureAlgorithm, algProv
                .toWebAlgorithm(this.asn.signatureAlgorithm), "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Crl_signatureAlgorithm, "f");
    }
    get signature() {
        return this.asn.signature;
    }
    get issuer() {
        return this.issuerName.toString();
    }
    get issuerName() {
        if (!tslib.__classPrivateFieldGet(this, _X509Crl_issuerName, "f")) {
            tslib.__classPrivateFieldSet(this, _X509Crl_issuerName, new Name(this.asn.tbsCertList.issuer), "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Crl_issuerName, "f");
    }
    get thisUpdate() {
        if (!tslib.__classPrivateFieldGet(this, _X509Crl_thisUpdate, "f")) {
            const thisUpdate = this.asn.tbsCertList.thisUpdate.getTime();
            if (!thisUpdate) {
                throw new Error("Cannot get 'thisUpdate' value");
            }
            tslib.__classPrivateFieldSet(this, _X509Crl_thisUpdate, thisUpdate, "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Crl_thisUpdate, "f");
    }
    get nextUpdate() {
        var _a;
        if (tslib.__classPrivateFieldGet(this, _X509Crl_nextUpdate, "f") === undefined) {
            tslib.__classPrivateFieldSet(this, _X509Crl_nextUpdate, ((_a = this.asn.tbsCertList.nextUpdate) === null || _a === void 0 ? void 0 : _a.getTime()) || undefined, "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Crl_nextUpdate, "f");
    }
    get entries() {
        var _a;
        if (!tslib.__classPrivateFieldGet(this, _X509Crl_entries, "f")) {
            tslib.__classPrivateFieldSet(this, _X509Crl_entries, ((_a = this.asn.tbsCertList
                .revokedCertificates) === null || _a === void 0 ? void 0 : _a.map((o) => new X509CrlEntry(o))) || [], "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Crl_entries, "f");
    }
    get extensions() {
        if (!tslib.__classPrivateFieldGet(this, _X509Crl_extensions, "f")) {
            tslib.__classPrivateFieldSet(this, _X509Crl_extensions, [], "f");
            if (this.asn.tbsCertList.crlExtensions) {
                tslib.__classPrivateFieldSet(this, _X509Crl_extensions, this.asn.tbsCertList.crlExtensions.map((o) => ExtensionFactory.create(asn1Schema.AsnConvert.serialize(o))), "f");
            }
        }
        return tslib.__classPrivateFieldGet(this, _X509Crl_extensions, "f");
    }
    get tbs() {
        if (!tslib.__classPrivateFieldGet(this, _X509Crl_tbs, "f")) {
            tslib.__classPrivateFieldSet(this, _X509Crl_tbs, this.asn.tbsCertListRaw || asn1Schema.AsnConvert.serialize(this.asn.tbsCertList), "f");
        }
        return tslib.__classPrivateFieldGet(this, _X509Crl_tbs, "f");
    }
    get tbsCertListSignatureAlgorithm() {
        return this.asn.tbsCertList.signature;
    }
    get certListSignatureAlgorithm() {
        return this.asn.signatureAlgorithm;
    }
    constructor(param) {
        super(param, PemData.isAsnEncoded(param) ? asn1X509.CertificateList : undefined);
        this.tag = PemConverter.CrlTag;
        _X509Crl_tbs.set(this, void 0);
        _X509Crl_signatureAlgorithm.set(this, void 0);
        _X509Crl_issuerName.set(this, void 0);
        _X509Crl_thisUpdate.set(this, void 0);
        _X509Crl_nextUpdate.set(this, void 0);
        _X509Crl_entries.set(this, void 0);
        _X509Crl_extensions.set(this, void 0);
    }
    onInit(_asn) {
    }
    getExtension(type) {
        for (const ext of this.extensions) {
            if (typeof type === "string") {
                if (ext.type === type) {
                    return ext;
                }
            }
            else {
                if (ext instanceof type) {
                    return ext;
                }
            }
        }
        return null;
    }
    getExtensions(type) {
        return this.extensions.filter((o) => {
            if (typeof type === "string") {
                return o.type === type;
            }
            else {
                return o instanceof type;
            }
        });
    }
    async verify(params, crypto = cryptoProvider.get()) {
        if (!this.certListSignatureAlgorithm.isEqual(this.tbsCertListSignatureAlgorithm)) {
            throw new Error("algorithm identifier in the sequence tbsCertList and CertificateList mismatch");
        }
        let keyAlgorithm;
        let publicKey;
        const paramsKey = params.publicKey;
        try {
            if (paramsKey instanceof X509Certificate) {
                keyAlgorithm = {
                    ...paramsKey.publicKey.algorithm,
                    ...paramsKey.signatureAlgorithm,
                };
                publicKey = await paramsKey.publicKey.export(keyAlgorithm, ["verify"]);
            }
            else if (paramsKey instanceof PublicKey) {
                keyAlgorithm = {
                    ...paramsKey.algorithm, ...this.signatureAlgorithm,
                };
                publicKey = await paramsKey.export(keyAlgorithm, ["verify"]);
            }
            else {
                keyAlgorithm = {
                    ...paramsKey.algorithm, ...this.signatureAlgorithm,
                };
                publicKey = paramsKey;
            }
        }
        catch {
            return false;
        }
        const signatureFormatters = tsyringe.container
            .resolveAll(diAsnSignatureFormatter)
            .reverse();
        let signature = null;
        for (const signatureFormatter of signatureFormatters) {
            signature = signatureFormatter.toWebSignature(keyAlgorithm, this.signature);
            if (signature) {
                break;
            }
        }
        if (!signature) {
            throw Error("Cannot convert ASN.1 signature value to WebCrypto format");
        }
        return await crypto.subtle.verify(this.signatureAlgorithm, publicKey, signature, this.tbs);
    }
    async getThumbprint(...args) {
        let crypto;
        let algorithm = "SHA-1";
        if (args[0]) {
            if (!args[0].subtle) {
                algorithm = args[0] || algorithm;
                crypto = args[1];
            }
            else {
                crypto = args[0];
            }
        }
        crypto !== null && crypto !== void 0 ? crypto : (crypto = cryptoProvider.get());
        return await crypto.subtle.digest(algorithm, this.rawData);
    }
    findRevoked(certOrSerialNumber) {
        const serialNumber = typeof certOrSerialNumber === "string" ? certOrSerialNumber : certOrSerialNumber.serialNumber;
        const serialBuffer = generateCertificateSerialNumber(serialNumber);
        for (const revoked of this.asn.tbsCertList.revokedCertificates || []) {
            if (pvtsutils.BufferSourceConverter.isEqual(revoked.userCertificate, serialBuffer)) {
                return new X509CrlEntry(asn1Schema.AsnConvert.serialize(revoked));
            }
        }
        return null;
    }
}
_X509Crl_tbs = new WeakMap(), _X509Crl_signatureAlgorithm = new WeakMap(), _X509Crl_issuerName = new WeakMap(), _X509Crl_thisUpdate = new WeakMap(), _X509Crl_nextUpdate = new WeakMap(), _X509Crl_entries = new WeakMap(), _X509Crl_extensions = new WeakMap();

class X509CrlGenerator {
    static async create(params, crypto = cryptoProvider.get()) {
        var _a;
        const name = params.issuer instanceof Name
            ? params.issuer
            : new Name(params.issuer);
        const asnX509Crl = new asn1X509__namespace.CertificateList({
            tbsCertList: new asn1X509__namespace.TBSCertList({
                version: asn1X509__namespace.Version.v2,
                issuer: asn1Schema.AsnConvert.parse(name.toArrayBuffer(), asn1X509__namespace.Name),
                thisUpdate: new asn1X509.Time(params.thisUpdate || new Date()),
            }),
        });
        if (params.nextUpdate) {
            asnX509Crl.tbsCertList.nextUpdate = new asn1X509.Time(params.nextUpdate);
        }
        if (params.extensions && params.extensions.length) {
            asnX509Crl.tbsCertList.crlExtensions = new asn1X509__namespace.Extensions(params.extensions.map((o) => asn1Schema.AsnConvert.parse(o.rawData, asn1X509__namespace.Extension)) || []);
        }
        if (params.entries && params.entries.length) {
            asnX509Crl.tbsCertList.revokedCertificates = [];
            for (const entry of params.entries) {
                const userCertificate = PemData.toArrayBuffer(entry.serialNumber);
                const index = asnX509Crl.tbsCertList.revokedCertificates
                    .findIndex((cert) => pvtsutils.isEqual(cert.userCertificate, userCertificate));
                if (index > -1) {
                    throw new Error(`Certificate serial number ${entry.serialNumber} already exists in tbsCertList`);
                }
                const revokedCert = new asn1X509.RevokedCertificate({
                    userCertificate: userCertificate,
                    revocationDate: new asn1X509.Time(entry.revocationDate || new Date()),
                });
                if ("extensions" in entry && ((_a = entry.extensions) === null || _a === void 0 ? void 0 : _a.length)) {
                    revokedCert.crlEntryExtensions = entry.extensions.map((o) => (asn1Schema.AsnConvert.parse(o.rawData, asn1X509__namespace.Extension)));
                }
                else {
                    revokedCert.crlEntryExtensions = [];
                }
                if (!(entry instanceof X509CrlEntry)) {
                    if (entry.reason) {
                        revokedCert.crlEntryExtensions.push(new asn1X509__namespace.Extension({
                            extnID: asn1X509__namespace.id_ce_cRLReasons,
                            critical: false,
                            extnValue: new asn1Schema.OctetString(asn1Schema.AsnConvert.serialize(new asn1X509__namespace.CRLReason(entry.reason))),
                        }));
                    }
                    if (entry.invalidity) {
                        revokedCert.crlEntryExtensions.push(new asn1X509__namespace.Extension({
                            extnID: asn1X509__namespace.id_ce_invalidityDate,
                            critical: false,
                            extnValue: new asn1Schema.OctetString(asn1Schema.AsnConvert.serialize(new asn1X509__namespace.InvalidityDate(entry.invalidity))),
                        }));
                    }
                    if (entry.issuer) {
                        const name = params.issuer instanceof Name
                            ? params.issuer
                            : new Name(params.issuer);
                        revokedCert.crlEntryExtensions.push(new asn1X509__namespace.Extension({
                            extnID: asn1X509__namespace.id_ce_certificateIssuer,
                            critical: false,
                            extnValue: new asn1Schema.OctetString(asn1Schema.AsnConvert.serialize(asn1Schema.AsnConvert.parse(name.toArrayBuffer(), asn1X509__namespace.Name))),
                        }));
                    }
                }
                asnX509Crl.tbsCertList.revokedCertificates.push(revokedCert);
            }
        }
        const signingAlgorithm = {
            ...params.signingAlgorithm, ...params.signingKey.algorithm,
        };
        const algProv = tsyringe.container.resolve(diAlgorithmProvider);
        asnX509Crl.tbsCertList.signature = asnX509Crl.signatureAlgorithm = algProv
            .toAsnAlgorithm(signingAlgorithm);
        const tbs = asn1Schema.AsnConvert.serialize(asnX509Crl.tbsCertList);
        const signature = await crypto.subtle.sign(signingAlgorithm, params.signingKey, tbs);
        const signatureFormatters = tsyringe.container
            .resolveAll(diAsnSignatureFormatter)
            .reverse();
        let asnSignature = null;
        for (const signatureFormatter of signatureFormatters) {
            asnSignature = signatureFormatter.toAsnSignature(signingAlgorithm, signature);
            if (asnSignature) {
                break;
            }
        }
        if (!asnSignature) {
            throw Error("Cannot convert ASN.1 signature value to WebCrypto format");
        }
        asnX509Crl.signature = asnSignature;
        return new X509Crl(asn1Schema.AsnConvert.serialize(asnX509Crl));
    }
}

ExtensionFactory.register(asn1X509__namespace.id_ce_basicConstraints, BasicConstraintsExtension);
ExtensionFactory.register(asn1X509__namespace.id_ce_extKeyUsage, ExtendedKeyUsageExtension);
ExtensionFactory.register(asn1X509__namespace.id_ce_keyUsage, KeyUsagesExtension);
ExtensionFactory.register(asn1X509__namespace.id_ce_subjectKeyIdentifier, SubjectKeyIdentifierExtension);
ExtensionFactory.register(asn1X509__namespace.id_ce_authorityKeyIdentifier, AuthorityKeyIdentifierExtension);
ExtensionFactory.register(asn1X509__namespace.id_ce_subjectAltName, SubjectAlternativeNameExtension);
ExtensionFactory.register(asn1X509__namespace.id_ce_cRLDistributionPoints, CRLDistributionPointsExtension);
ExtensionFactory.register(asn1X509__namespace.id_pe_authorityInfoAccess, AuthorityInfoAccessExtension);
ExtensionFactory.register(asn1X509__namespace.id_ce_issuerAltName, IssuerAlternativeNameExtension);
AttributeFactory.register(asnPkcs9__namespace.id_pkcs9_at_challengePassword, ChallengePasswordAttribute);
AttributeFactory.register(asnPkcs9__namespace.id_pkcs9_at_extensionRequest, ExtensionsAttribute);
tsyringe.container.registerSingleton(diAsnSignatureFormatter, AsnDefaultSignatureFormatter);
tsyringe.container.registerSingleton(diAsnSignatureFormatter, AsnEcSignatureFormatter);
AsnEcSignatureFormatter.namedCurveSize.set("P-256", 32);
AsnEcSignatureFormatter.namedCurveSize.set("K-256", 32);
AsnEcSignatureFormatter.namedCurveSize.set("P-384", 48);
AsnEcSignatureFormatter.namedCurveSize.set("P-521", 66);

exports.AlgorithmProvider = AlgorithmProvider;
exports.AsnData = AsnData;
exports.AsnDefaultSignatureFormatter = AsnDefaultSignatureFormatter;
exports.AsnEcSignatureFormatter = AsnEcSignatureFormatter;
exports.Attribute = Attribute;
exports.AttributeFactory = AttributeFactory;
exports.AuthorityInfoAccessExtension = AuthorityInfoAccessExtension;
exports.AuthorityKeyIdentifierExtension = AuthorityKeyIdentifierExtension;
exports.BasicConstraintsExtension = BasicConstraintsExtension;
exports.CRLDistributionPointsExtension = CRLDistributionPointsExtension;
exports.CertificatePolicyExtension = CertificatePolicyExtension;
exports.ChallengePasswordAttribute = ChallengePasswordAttribute;
exports.CryptoProvider = CryptoProvider;
exports.DN = DN;
exports.DNS = DNS;
exports.DefaultAlgorithmSerializer = DefaultAlgorithmSerializer;
exports.EMAIL = EMAIL;
exports.ExtendedKeyUsageExtension = ExtendedKeyUsageExtension;
exports.Extension = Extension;
exports.ExtensionFactory = ExtensionFactory;
exports.ExtensionsAttribute = ExtensionsAttribute;
exports.GUID = GUID;
exports.GeneralName = GeneralName;
exports.GeneralNames = GeneralNames;
exports.IP = IP;
exports.IssuerAlternativeNameExtension = IssuerAlternativeNameExtension;
exports.KeyUsagesExtension = KeyUsagesExtension;
exports.Name = Name;
exports.NameIdentifier = NameIdentifier;
exports.OidSerializer = OidSerializer;
exports.PemConverter = PemConverter;
exports.PemData = PemData;
exports.Pkcs10CertificateRequest = Pkcs10CertificateRequest;
exports.Pkcs10CertificateRequestGenerator = Pkcs10CertificateRequestGenerator;
exports.PublicKey = PublicKey;
exports.REGISTERED_ID = REGISTERED_ID;
exports.SubjectAlternativeNameExtension = SubjectAlternativeNameExtension;
exports.SubjectKeyIdentifierExtension = SubjectKeyIdentifierExtension;
exports.TextConverter = TextConverter;
exports.TextObject = TextObject;
exports.UPN = UPN;
exports.URL = URL;
exports.X509Certificate = X509Certificate;
exports.X509CertificateGenerator = X509CertificateGenerator;
exports.X509Certificates = X509Certificates;
exports.X509ChainBuilder = X509ChainBuilder;
exports.X509Crl = X509Crl;
exports.X509CrlEntry = X509CrlEntry;
exports.X509CrlGenerator = X509CrlGenerator;
exports.cryptoProvider = cryptoProvider;
exports.diAlgorithm = diAlgorithm;
exports.diAlgorithmProvider = diAlgorithmProvider;
exports.diAsnSignatureFormatter = diAsnSignatureFormatter;
exports.idEd25519 = idEd25519;
exports.idEd448 = idEd448;
exports.idX25519 = idX25519;
exports.idX448 = idX448;


/***/ }),

/***/ 4549:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";
/*!
 * Copyright (c) 2014, GMO GlobalSign
 * Copyright (c) 2015-2022, Peculiar Ventures
 * All rights reserved.
 * 
 * Author 2014-2019, Yury Strozhevsky
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * 
 * * Redistributions in binary form must reproduce the above copyright notice, this
 *   list of conditions and the following disclaimer in the documentation and/or
 *   other materials provided with the distribution.
 * 
 * * Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 */



var pvtsutils = __nccwpck_require__(4583);
var pvutils = __nccwpck_require__(6237);

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var pvtsutils__namespace = /*#__PURE__*/_interopNamespaceDefault(pvtsutils);
var pvutils__namespace = /*#__PURE__*/_interopNamespaceDefault(pvutils);

function assertBigInt() {
    if (typeof BigInt === "undefined") {
        throw new Error("BigInt is not defined. Your environment doesn't implement BigInt.");
    }
}
function concat(buffers) {
    let outputLength = 0;
    let prevLength = 0;
    for (let i = 0; i < buffers.length; i++) {
        const buffer = buffers[i];
        outputLength += buffer.byteLength;
    }
    const retView = new Uint8Array(outputLength);
    for (let i = 0; i < buffers.length; i++) {
        const buffer = buffers[i];
        retView.set(new Uint8Array(buffer), prevLength);
        prevLength += buffer.byteLength;
    }
    return retView.buffer;
}
function checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength) {
    if (!(inputBuffer instanceof Uint8Array)) {
        baseBlock.error = "Wrong parameter: inputBuffer must be 'Uint8Array'";
        return false;
    }
    if (!inputBuffer.byteLength) {
        baseBlock.error = "Wrong parameter: inputBuffer has zero length";
        return false;
    }
    if (inputOffset < 0) {
        baseBlock.error = "Wrong parameter: inputOffset less than zero";
        return false;
    }
    if (inputLength < 0) {
        baseBlock.error = "Wrong parameter: inputLength less than zero";
        return false;
    }
    if ((inputBuffer.byteLength - inputOffset - inputLength) < 0) {
        baseBlock.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
        return false;
    }
    return true;
}

class ViewWriter {
    constructor() {
        this.items = [];
    }
    write(buf) {
        this.items.push(buf);
    }
    final() {
        return concat(this.items);
    }
}

const powers2 = [new Uint8Array([1])];
const digitsString = "0123456789";
const NAME = "name";
const VALUE_HEX_VIEW = "valueHexView";
const IS_HEX_ONLY = "isHexOnly";
const ID_BLOCK = "idBlock";
const TAG_CLASS = "tagClass";
const TAG_NUMBER = "tagNumber";
const IS_CONSTRUCTED = "isConstructed";
const FROM_BER = "fromBER";
const TO_BER = "toBER";
const LOCAL = "local";
const EMPTY_STRING = "";
const EMPTY_BUFFER = new ArrayBuffer(0);
const EMPTY_VIEW = new Uint8Array(0);
const END_OF_CONTENT_NAME = "EndOfContent";
const OCTET_STRING_NAME = "OCTET STRING";
const BIT_STRING_NAME = "BIT STRING";

function HexBlock(BaseClass) {
    var _a;
    return _a = class Some extends BaseClass {
            get valueHex() {
                return this.valueHexView.slice().buffer;
            }
            set valueHex(value) {
                this.valueHexView = new Uint8Array(value);
            }
            constructor(...args) {
                var _b;
                super(...args);
                const params = args[0] || {};
                this.isHexOnly = (_b = params.isHexOnly) !== null && _b !== void 0 ? _b : false;
                this.valueHexView = params.valueHex ? pvtsutils__namespace.BufferSourceConverter.toUint8Array(params.valueHex) : EMPTY_VIEW;
            }
            fromBER(inputBuffer, inputOffset, inputLength) {
                const view = inputBuffer instanceof ArrayBuffer ? new Uint8Array(inputBuffer) : inputBuffer;
                if (!checkBufferParams(this, view, inputOffset, inputLength)) {
                    return -1;
                }
                const endLength = inputOffset + inputLength;
                this.valueHexView = view.subarray(inputOffset, endLength);
                if (!this.valueHexView.length) {
                    this.warnings.push("Zero buffer length");
                    return inputOffset;
                }
                this.blockLength = inputLength;
                return endLength;
            }
            toBER(sizeOnly = false) {
                if (!this.isHexOnly) {
                    this.error = "Flag 'isHexOnly' is not set, abort";
                    return EMPTY_BUFFER;
                }
                if (sizeOnly) {
                    return new ArrayBuffer(this.valueHexView.byteLength);
                }
                return (this.valueHexView.byteLength === this.valueHexView.buffer.byteLength)
                    ? this.valueHexView.buffer
                    : this.valueHexView.slice().buffer;
            }
            toJSON() {
                return {
                    ...super.toJSON(),
                    isHexOnly: this.isHexOnly,
                    valueHex: pvtsutils__namespace.Convert.ToHex(this.valueHexView),
                };
            }
        },
        _a.NAME = "hexBlock",
        _a;
}

class LocalBaseBlock {
    static blockName() {
        return this.NAME;
    }
    get valueBeforeDecode() {
        return this.valueBeforeDecodeView.slice().buffer;
    }
    set valueBeforeDecode(value) {
        this.valueBeforeDecodeView = new Uint8Array(value);
    }
    constructor({ blockLength = 0, error = EMPTY_STRING, warnings = [], valueBeforeDecode = EMPTY_VIEW, } = {}) {
        this.blockLength = blockLength;
        this.error = error;
        this.warnings = warnings;
        this.valueBeforeDecodeView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(valueBeforeDecode);
    }
    toJSON() {
        return {
            blockName: this.constructor.NAME,
            blockLength: this.blockLength,
            error: this.error,
            warnings: this.warnings,
            valueBeforeDecode: pvtsutils__namespace.Convert.ToHex(this.valueBeforeDecodeView),
        };
    }
}
LocalBaseBlock.NAME = "baseBlock";

class ValueBlock extends LocalBaseBlock {
    fromBER(_inputBuffer, _inputOffset, _inputLength) {
        throw TypeError("User need to make a specific function in a class which extends 'ValueBlock'");
    }
    toBER(_sizeOnly, _writer) {
        throw TypeError("User need to make a specific function in a class which extends 'ValueBlock'");
    }
}
ValueBlock.NAME = "valueBlock";

class LocalIdentificationBlock extends HexBlock(LocalBaseBlock) {
    constructor({ idBlock = {} } = {}) {
        var _a, _b, _c, _d;
        super();
        if (idBlock) {
            this.isHexOnly = (_a = idBlock.isHexOnly) !== null && _a !== void 0 ? _a : false;
            this.valueHexView = idBlock.valueHex
                ? pvtsutils__namespace.BufferSourceConverter.toUint8Array(idBlock.valueHex)
                : EMPTY_VIEW;
            this.tagClass = (_b = idBlock.tagClass) !== null && _b !== void 0 ? _b : -1;
            this.tagNumber = (_c = idBlock.tagNumber) !== null && _c !== void 0 ? _c : -1;
            this.isConstructed = (_d = idBlock.isConstructed) !== null && _d !== void 0 ? _d : false;
        }
        else {
            this.tagClass = -1;
            this.tagNumber = -1;
            this.isConstructed = false;
        }
    }
    toBER(sizeOnly = false) {
        let firstOctet = 0;
        switch (this.tagClass) {
            case 1:
                firstOctet |= 0x00;
                break;
            case 2:
                firstOctet |= 0x40;
                break;
            case 3:
                firstOctet |= 0x80;
                break;
            case 4:
                firstOctet |= 0xC0;
                break;
            default:
                this.error = "Unknown tag class";
                return EMPTY_BUFFER;
        }
        if (this.isConstructed)
            firstOctet |= 0x20;
        if (this.tagNumber < 31 && !this.isHexOnly) {
            const retView = new Uint8Array(1);
            if (!sizeOnly) {
                let number = this.tagNumber;
                number &= 0x1F;
                firstOctet |= number;
                retView[0] = firstOctet;
            }
            return retView.buffer;
        }
        if (!this.isHexOnly) {
            const encodedBuf = pvutils__namespace.utilToBase(this.tagNumber, 7);
            const encodedView = new Uint8Array(encodedBuf);
            const size = encodedBuf.byteLength;
            const retView = new Uint8Array(size + 1);
            retView[0] = (firstOctet | 0x1F);
            if (!sizeOnly) {
                for (let i = 0; i < (size - 1); i++)
                    retView[i + 1] = encodedView[i] | 0x80;
                retView[size] = encodedView[size - 1];
            }
            return retView.buffer;
        }
        const retView = new Uint8Array(this.valueHexView.byteLength + 1);
        retView[0] = (firstOctet | 0x1F);
        if (!sizeOnly) {
            const curView = this.valueHexView;
            for (let i = 0; i < (curView.length - 1); i++)
                retView[i + 1] = curView[i] | 0x80;
            retView[this.valueHexView.byteLength] = curView[curView.length - 1];
        }
        return retView.buffer;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const inputView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
            return -1;
        }
        const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
        if (intBuffer.length === 0) {
            this.error = "Zero buffer length";
            return -1;
        }
        const tagClassMask = intBuffer[0] & 0xC0;
        switch (tagClassMask) {
            case 0x00:
                this.tagClass = (1);
                break;
            case 0x40:
                this.tagClass = (2);
                break;
            case 0x80:
                this.tagClass = (3);
                break;
            case 0xC0:
                this.tagClass = (4);
                break;
            default:
                this.error = "Unknown tag class";
                return -1;
        }
        this.isConstructed = (intBuffer[0] & 0x20) === 0x20;
        this.isHexOnly = false;
        const tagNumberMask = intBuffer[0] & 0x1F;
        if (tagNumberMask !== 0x1F) {
            this.tagNumber = (tagNumberMask);
            this.blockLength = 1;
        }
        else {
            let count = 1;
            let intTagNumberBuffer = this.valueHexView = new Uint8Array(255);
            let tagNumberBufferMaxLength = 255;
            while (intBuffer[count] & 0x80) {
                intTagNumberBuffer[count - 1] = intBuffer[count] & 0x7F;
                count++;
                if (count >= intBuffer.length) {
                    this.error = "End of input reached before message was fully decoded";
                    return -1;
                }
                if (count === tagNumberBufferMaxLength) {
                    tagNumberBufferMaxLength += 255;
                    const tempBufferView = new Uint8Array(tagNumberBufferMaxLength);
                    for (let i = 0; i < intTagNumberBuffer.length; i++)
                        tempBufferView[i] = intTagNumberBuffer[i];
                    intTagNumberBuffer = this.valueHexView = new Uint8Array(tagNumberBufferMaxLength);
                }
            }
            this.blockLength = (count + 1);
            intTagNumberBuffer[count - 1] = intBuffer[count] & 0x7F;
            const tempBufferView = new Uint8Array(count);
            for (let i = 0; i < count; i++)
                tempBufferView[i] = intTagNumberBuffer[i];
            intTagNumberBuffer = this.valueHexView = new Uint8Array(count);
            intTagNumberBuffer.set(tempBufferView);
            if (this.blockLength <= 9)
                this.tagNumber = pvutils__namespace.utilFromBase(intTagNumberBuffer, 7);
            else {
                this.isHexOnly = true;
                this.warnings.push("Tag too long, represented as hex-coded");
            }
        }
        if (((this.tagClass === 1))
            && (this.isConstructed)) {
            switch (this.tagNumber) {
                case 1:
                case 2:
                case 5:
                case 6:
                case 9:
                case 13:
                case 14:
                case 23:
                case 24:
                case 31:
                case 32:
                case 33:
                case 34:
                    this.error = "Constructed encoding used for primitive type";
                    return -1;
            }
        }
        return (inputOffset + this.blockLength);
    }
    toJSON() {
        return {
            ...super.toJSON(),
            tagClass: this.tagClass,
            tagNumber: this.tagNumber,
            isConstructed: this.isConstructed,
        };
    }
}
LocalIdentificationBlock.NAME = "identificationBlock";

class LocalLengthBlock extends LocalBaseBlock {
    constructor({ lenBlock = {} } = {}) {
        var _a, _b, _c;
        super();
        this.isIndefiniteForm = (_a = lenBlock.isIndefiniteForm) !== null && _a !== void 0 ? _a : false;
        this.longFormUsed = (_b = lenBlock.longFormUsed) !== null && _b !== void 0 ? _b : false;
        this.length = (_c = lenBlock.length) !== null && _c !== void 0 ? _c : 0;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const view = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        if (!checkBufferParams(this, view, inputOffset, inputLength)) {
            return -1;
        }
        const intBuffer = view.subarray(inputOffset, inputOffset + inputLength);
        if (intBuffer.length === 0) {
            this.error = "Zero buffer length";
            return -1;
        }
        if (intBuffer[0] === 0xFF) {
            this.error = "Length block 0xFF is reserved by standard";
            return -1;
        }
        this.isIndefiniteForm = intBuffer[0] === 0x80;
        if (this.isIndefiniteForm) {
            this.blockLength = 1;
            return (inputOffset + this.blockLength);
        }
        this.longFormUsed = !!(intBuffer[0] & 0x80);
        if (this.longFormUsed === false) {
            this.length = (intBuffer[0]);
            this.blockLength = 1;
            return (inputOffset + this.blockLength);
        }
        const count = intBuffer[0] & 0x7F;
        if (count > 8) {
            this.error = "Too big integer";
            return -1;
        }
        if ((count + 1) > intBuffer.length) {
            this.error = "End of input reached before message was fully decoded";
            return -1;
        }
        const lenOffset = inputOffset + 1;
        const lengthBufferView = view.subarray(lenOffset, lenOffset + count);
        if (lengthBufferView[count - 1] === 0x00)
            this.warnings.push("Needlessly long encoded length");
        this.length = pvutils__namespace.utilFromBase(lengthBufferView, 8);
        if (this.longFormUsed && (this.length <= 127))
            this.warnings.push("Unnecessary usage of long length form");
        this.blockLength = count + 1;
        return (inputOffset + this.blockLength);
    }
    toBER(sizeOnly = false) {
        let retBuf;
        let retView;
        if (this.length > 127)
            this.longFormUsed = true;
        if (this.isIndefiniteForm) {
            retBuf = new ArrayBuffer(1);
            if (sizeOnly === false) {
                retView = new Uint8Array(retBuf);
                retView[0] = 0x80;
            }
            return retBuf;
        }
        if (this.longFormUsed) {
            const encodedBuf = pvutils__namespace.utilToBase(this.length, 8);
            if (encodedBuf.byteLength > 127) {
                this.error = "Too big length";
                return (EMPTY_BUFFER);
            }
            retBuf = new ArrayBuffer(encodedBuf.byteLength + 1);
            if (sizeOnly)
                return retBuf;
            const encodedView = new Uint8Array(encodedBuf);
            retView = new Uint8Array(retBuf);
            retView[0] = encodedBuf.byteLength | 0x80;
            for (let i = 0; i < encodedBuf.byteLength; i++)
                retView[i + 1] = encodedView[i];
            return retBuf;
        }
        retBuf = new ArrayBuffer(1);
        if (sizeOnly === false) {
            retView = new Uint8Array(retBuf);
            retView[0] = this.length;
        }
        return retBuf;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            isIndefiniteForm: this.isIndefiniteForm,
            longFormUsed: this.longFormUsed,
            length: this.length,
        };
    }
}
LocalLengthBlock.NAME = "lengthBlock";

const typeStore = {};

class BaseBlock extends LocalBaseBlock {
    constructor({ name = EMPTY_STRING, optional = false, primitiveSchema, ...parameters } = {}, valueBlockType) {
        super(parameters);
        this.name = name;
        this.optional = optional;
        if (primitiveSchema) {
            this.primitiveSchema = primitiveSchema;
        }
        this.idBlock = new LocalIdentificationBlock(parameters);
        this.lenBlock = new LocalLengthBlock(parameters);
        this.valueBlock = valueBlockType ? new valueBlockType(parameters) : new ValueBlock(parameters);
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, (this.lenBlock.isIndefiniteForm)
            ? inputLength
            : this.lenBlock.length);
        if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
        }
        if (!this.idBlock.error.length)
            this.blockLength += this.idBlock.blockLength;
        if (!this.lenBlock.error.length)
            this.blockLength += this.lenBlock.blockLength;
        if (!this.valueBlock.error.length)
            this.blockLength += this.valueBlock.blockLength;
        return resultOffset;
    }
    toBER(sizeOnly, writer) {
        const _writer = writer || new ViewWriter();
        if (!writer) {
            prepareIndefiniteForm(this);
        }
        const idBlockBuf = this.idBlock.toBER(sizeOnly);
        _writer.write(idBlockBuf);
        if (this.lenBlock.isIndefiniteForm) {
            _writer.write(new Uint8Array([0x80]).buffer);
            this.valueBlock.toBER(sizeOnly, _writer);
            _writer.write(new ArrayBuffer(2));
        }
        else {
            const valueBlockBuf = this.valueBlock.toBER(sizeOnly);
            this.lenBlock.length = valueBlockBuf.byteLength;
            const lenBlockBuf = this.lenBlock.toBER(sizeOnly);
            _writer.write(lenBlockBuf);
            _writer.write(valueBlockBuf);
        }
        if (!writer) {
            return _writer.final();
        }
        return EMPTY_BUFFER;
    }
    toJSON() {
        const object = {
            ...super.toJSON(),
            idBlock: this.idBlock.toJSON(),
            lenBlock: this.lenBlock.toJSON(),
            valueBlock: this.valueBlock.toJSON(),
            name: this.name,
            optional: this.optional,
        };
        if (this.primitiveSchema)
            object.primitiveSchema = this.primitiveSchema.toJSON();
        return object;
    }
    toString(encoding = "ascii") {
        if (encoding === "ascii") {
            return this.onAsciiEncoding();
        }
        return pvtsutils__namespace.Convert.ToHex(this.toBER());
    }
    onAsciiEncoding() {
        const name = this.constructor.NAME;
        const value = pvtsutils__namespace.Convert.ToHex(this.valueBlock.valueBeforeDecodeView);
        return `${name} : ${value}`;
    }
    isEqual(other) {
        if (this === other) {
            return true;
        }
        if (!(other instanceof this.constructor)) {
            return false;
        }
        const thisRaw = this.toBER();
        const otherRaw = other.toBER();
        return pvutils__namespace.isEqualBuffer(thisRaw, otherRaw);
    }
}
BaseBlock.NAME = "BaseBlock";
function prepareIndefiniteForm(baseBlock) {
    var _a;
    if (baseBlock instanceof typeStore.Constructed) {
        for (const value of baseBlock.valueBlock.value) {
            if (prepareIndefiniteForm(value)) {
                baseBlock.lenBlock.isIndefiniteForm = true;
            }
        }
    }
    return !!((_a = baseBlock.lenBlock) === null || _a === void 0 ? void 0 : _a.isIndefiniteForm);
}

class BaseStringBlock extends BaseBlock {
    getValue() {
        return this.valueBlock.value;
    }
    setValue(value) {
        this.valueBlock.value = value;
    }
    constructor({ value = EMPTY_STRING, ...parameters } = {}, stringValueBlockType) {
        super(parameters, stringValueBlockType);
        if (value) {
            this.fromString(value);
        }
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, (this.lenBlock.isIndefiniteForm)
            ? inputLength
            : this.lenBlock.length);
        if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
        }
        this.fromBuffer(this.valueBlock.valueHexView);
        if (!this.idBlock.error.length)
            this.blockLength += this.idBlock.blockLength;
        if (!this.lenBlock.error.length)
            this.blockLength += this.lenBlock.blockLength;
        if (!this.valueBlock.error.length)
            this.blockLength += this.valueBlock.blockLength;
        return resultOffset;
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME} : '${this.valueBlock.value}'`;
    }
}
BaseStringBlock.NAME = "BaseStringBlock";

class LocalPrimitiveValueBlock extends HexBlock(ValueBlock) {
    constructor({ isHexOnly = true, ...parameters } = {}) {
        super(parameters);
        this.isHexOnly = isHexOnly;
    }
}
LocalPrimitiveValueBlock.NAME = "PrimitiveValueBlock";

var _a$w;
class Primitive extends BaseBlock {
    constructor(parameters = {}) {
        super(parameters, LocalPrimitiveValueBlock);
        this.idBlock.isConstructed = false;
    }
}
_a$w = Primitive;
(() => {
    typeStore.Primitive = _a$w;
})();
Primitive.NAME = "PRIMITIVE";

function localChangeType(inputObject, newType) {
    if (inputObject instanceof newType) {
        return inputObject;
    }
    const newObject = new newType();
    newObject.idBlock = inputObject.idBlock;
    newObject.lenBlock = inputObject.lenBlock;
    newObject.warnings = inputObject.warnings;
    newObject.valueBeforeDecodeView = inputObject.valueBeforeDecodeView;
    return newObject;
}
function localFromBER(inputBuffer, inputOffset = 0, inputLength = inputBuffer.length) {
    const incomingOffset = inputOffset;
    let returnObject = new BaseBlock({}, ValueBlock);
    const baseBlock = new LocalBaseBlock();
    if (!checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength)) {
        returnObject.error = baseBlock.error;
        return {
            offset: -1,
            result: returnObject,
        };
    }
    const intBuffer = inputBuffer.subarray(inputOffset, inputOffset + inputLength);
    if (!intBuffer.length) {
        returnObject.error = "Zero buffer length";
        return {
            offset: -1,
            result: returnObject,
        };
    }
    let resultOffset = returnObject.idBlock.fromBER(inputBuffer, inputOffset, inputLength);
    if (returnObject.idBlock.warnings.length) {
        returnObject.warnings.concat(returnObject.idBlock.warnings);
    }
    if (resultOffset === -1) {
        returnObject.error = returnObject.idBlock.error;
        return {
            offset: -1,
            result: returnObject,
        };
    }
    inputOffset = resultOffset;
    inputLength -= returnObject.idBlock.blockLength;
    resultOffset = returnObject.lenBlock.fromBER(inputBuffer, inputOffset, inputLength);
    if (returnObject.lenBlock.warnings.length) {
        returnObject.warnings.concat(returnObject.lenBlock.warnings);
    }
    if (resultOffset === -1) {
        returnObject.error = returnObject.lenBlock.error;
        return {
            offset: -1,
            result: returnObject,
        };
    }
    inputOffset = resultOffset;
    inputLength -= returnObject.lenBlock.blockLength;
    if (!returnObject.idBlock.isConstructed
        && returnObject.lenBlock.isIndefiniteForm) {
        returnObject.error = "Indefinite length form used for primitive encoding form";
        return {
            offset: -1,
            result: returnObject,
        };
    }
    let newASN1Type = BaseBlock;
    switch (returnObject.idBlock.tagClass) {
        case 1:
            if ((returnObject.idBlock.tagNumber >= 37)
                && (returnObject.idBlock.isHexOnly === false)) {
                returnObject.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard";
                return {
                    offset: -1,
                    result: returnObject,
                };
            }
            switch (returnObject.idBlock.tagNumber) {
                case 0:
                    if ((returnObject.idBlock.isConstructed)
                        && (returnObject.lenBlock.length > 0)) {
                        returnObject.error = "Type [UNIVERSAL 0] is reserved";
                        return {
                            offset: -1,
                            result: returnObject,
                        };
                    }
                    newASN1Type = typeStore.EndOfContent;
                    break;
                case 1:
                    newASN1Type = typeStore.Boolean;
                    break;
                case 2:
                    newASN1Type = typeStore.Integer;
                    break;
                case 3:
                    newASN1Type = typeStore.BitString;
                    break;
                case 4:
                    newASN1Type = typeStore.OctetString;
                    break;
                case 5:
                    newASN1Type = typeStore.Null;
                    break;
                case 6:
                    newASN1Type = typeStore.ObjectIdentifier;
                    break;
                case 10:
                    newASN1Type = typeStore.Enumerated;
                    break;
                case 12:
                    newASN1Type = typeStore.Utf8String;
                    break;
                case 13:
                    newASN1Type = typeStore.RelativeObjectIdentifier;
                    break;
                case 14:
                    newASN1Type = typeStore.TIME;
                    break;
                case 15:
                    returnObject.error = "[UNIVERSAL 15] is reserved by ASN.1 standard";
                    return {
                        offset: -1,
                        result: returnObject,
                    };
                case 16:
                    newASN1Type = typeStore.Sequence;
                    break;
                case 17:
                    newASN1Type = typeStore.Set;
                    break;
                case 18:
                    newASN1Type = typeStore.NumericString;
                    break;
                case 19:
                    newASN1Type = typeStore.PrintableString;
                    break;
                case 20:
                    newASN1Type = typeStore.TeletexString;
                    break;
                case 21:
                    newASN1Type = typeStore.VideotexString;
                    break;
                case 22:
                    newASN1Type = typeStore.IA5String;
                    break;
                case 23:
                    newASN1Type = typeStore.UTCTime;
                    break;
                case 24:
                    newASN1Type = typeStore.GeneralizedTime;
                    break;
                case 25:
                    newASN1Type = typeStore.GraphicString;
                    break;
                case 26:
                    newASN1Type = typeStore.VisibleString;
                    break;
                case 27:
                    newASN1Type = typeStore.GeneralString;
                    break;
                case 28:
                    newASN1Type = typeStore.UniversalString;
                    break;
                case 29:
                    newASN1Type = typeStore.CharacterString;
                    break;
                case 30:
                    newASN1Type = typeStore.BmpString;
                    break;
                case 31:
                    newASN1Type = typeStore.DATE;
                    break;
                case 32:
                    newASN1Type = typeStore.TimeOfDay;
                    break;
                case 33:
                    newASN1Type = typeStore.DateTime;
                    break;
                case 34:
                    newASN1Type = typeStore.Duration;
                    break;
                default: {
                    const newObject = returnObject.idBlock.isConstructed
                        ? new typeStore.Constructed()
                        : new typeStore.Primitive();
                    newObject.idBlock = returnObject.idBlock;
                    newObject.lenBlock = returnObject.lenBlock;
                    newObject.warnings = returnObject.warnings;
                    returnObject = newObject;
                }
            }
            break;
        case 2:
        case 3:
        case 4:
        default: {
            newASN1Type = returnObject.idBlock.isConstructed
                ? typeStore.Constructed
                : typeStore.Primitive;
        }
    }
    returnObject = localChangeType(returnObject, newASN1Type);
    resultOffset = returnObject.fromBER(inputBuffer, inputOffset, returnObject.lenBlock.isIndefiniteForm ? inputLength : returnObject.lenBlock.length);
    returnObject.valueBeforeDecodeView = inputBuffer.subarray(incomingOffset, incomingOffset + returnObject.blockLength);
    return {
        offset: resultOffset,
        result: returnObject,
    };
}
function fromBER(inputBuffer) {
    if (!inputBuffer.byteLength) {
        const result = new BaseBlock({}, ValueBlock);
        result.error = "Input buffer has zero length";
        return {
            offset: -1,
            result,
        };
    }
    return localFromBER(pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer).slice(), 0, inputBuffer.byteLength);
}

function checkLen(indefiniteLength, length) {
    if (indefiniteLength) {
        return 1;
    }
    return length;
}
class LocalConstructedValueBlock extends ValueBlock {
    constructor({ value = [], isIndefiniteForm = false, ...parameters } = {}) {
        super(parameters);
        this.value = value;
        this.isIndefiniteForm = isIndefiniteForm;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const view = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        if (!checkBufferParams(this, view, inputOffset, inputLength)) {
            return -1;
        }
        this.valueBeforeDecodeView = view.subarray(inputOffset, inputOffset + inputLength);
        if (this.valueBeforeDecodeView.length === 0) {
            this.warnings.push("Zero buffer length");
            return inputOffset;
        }
        let currentOffset = inputOffset;
        while (checkLen(this.isIndefiniteForm, inputLength) > 0) {
            const returnObject = localFromBER(view, currentOffset, inputLength);
            if (returnObject.offset === -1) {
                this.error = returnObject.result.error;
                this.warnings.concat(returnObject.result.warnings);
                return -1;
            }
            currentOffset = returnObject.offset;
            this.blockLength += returnObject.result.blockLength;
            inputLength -= returnObject.result.blockLength;
            this.value.push(returnObject.result);
            if (this.isIndefiniteForm && returnObject.result.constructor.NAME === END_OF_CONTENT_NAME) {
                break;
            }
        }
        if (this.isIndefiniteForm) {
            if (this.value[this.value.length - 1].constructor.NAME === END_OF_CONTENT_NAME) {
                this.value.pop();
            }
            else {
                this.warnings.push("No EndOfContent block encoded");
            }
        }
        return currentOffset;
    }
    toBER(sizeOnly, writer) {
        const _writer = writer || new ViewWriter();
        for (let i = 0; i < this.value.length; i++) {
            this.value[i].toBER(sizeOnly, _writer);
        }
        if (!writer) {
            return _writer.final();
        }
        return EMPTY_BUFFER;
    }
    toJSON() {
        const object = {
            ...super.toJSON(),
            isIndefiniteForm: this.isIndefiniteForm,
            value: [],
        };
        for (const value of this.value) {
            object.value.push(value.toJSON());
        }
        return object;
    }
}
LocalConstructedValueBlock.NAME = "ConstructedValueBlock";

var _a$v;
class Constructed extends BaseBlock {
    constructor(parameters = {}) {
        super(parameters, LocalConstructedValueBlock);
        this.idBlock.isConstructed = true;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
        const resultOffset = this.valueBlock.fromBER(inputBuffer, inputOffset, (this.lenBlock.isIndefiniteForm) ? inputLength : this.lenBlock.length);
        if (resultOffset === -1) {
            this.error = this.valueBlock.error;
            return resultOffset;
        }
        if (!this.idBlock.error.length)
            this.blockLength += this.idBlock.blockLength;
        if (!this.lenBlock.error.length)
            this.blockLength += this.lenBlock.blockLength;
        if (!this.valueBlock.error.length)
            this.blockLength += this.valueBlock.blockLength;
        return resultOffset;
    }
    onAsciiEncoding() {
        const values = [];
        for (const value of this.valueBlock.value) {
            values.push(value.toString("ascii").split("\n").map((o) => `  ${o}`).join("\n"));
        }
        const blockName = this.idBlock.tagClass === 3
            ? `[${this.idBlock.tagNumber}]`
            : this.constructor.NAME;
        return values.length
            ? `${blockName} :\n${values.join("\n")}`
            : `${blockName} :`;
    }
}
_a$v = Constructed;
(() => {
    typeStore.Constructed = _a$v;
})();
Constructed.NAME = "CONSTRUCTED";

class LocalEndOfContentValueBlock extends ValueBlock {
    fromBER(inputBuffer, inputOffset, _inputLength) {
        return inputOffset;
    }
    toBER(_sizeOnly) {
        return EMPTY_BUFFER;
    }
}
LocalEndOfContentValueBlock.override = "EndOfContentValueBlock";

var _a$u;
class EndOfContent extends BaseBlock {
    constructor(parameters = {}) {
        super(parameters, LocalEndOfContentValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 0;
    }
}
_a$u = EndOfContent;
(() => {
    typeStore.EndOfContent = _a$u;
})();
EndOfContent.NAME = END_OF_CONTENT_NAME;

var _a$t;
class Null extends BaseBlock {
    constructor(parameters = {}) {
        super(parameters, ValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 5;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        if (this.lenBlock.length > 0)
            this.warnings.push("Non-zero length of value block for Null type");
        if (!this.idBlock.error.length)
            this.blockLength += this.idBlock.blockLength;
        if (!this.lenBlock.error.length)
            this.blockLength += this.lenBlock.blockLength;
        this.blockLength += inputLength;
        if ((inputOffset + inputLength) > inputBuffer.byteLength) {
            this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
            return -1;
        }
        return (inputOffset + inputLength);
    }
    toBER(sizeOnly, writer) {
        const retBuf = new ArrayBuffer(2);
        if (!sizeOnly) {
            const retView = new Uint8Array(retBuf);
            retView[0] = 0x05;
            retView[1] = 0x00;
        }
        if (writer) {
            writer.write(retBuf);
        }
        return retBuf;
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME}`;
    }
}
_a$t = Null;
(() => {
    typeStore.Null = _a$t;
})();
Null.NAME = "NULL";

class LocalBooleanValueBlock extends HexBlock(ValueBlock) {
    get value() {
        for (const octet of this.valueHexView) {
            if (octet > 0) {
                return true;
            }
        }
        return false;
    }
    set value(value) {
        this.valueHexView[0] = value ? 0xFF : 0x00;
    }
    constructor({ value, ...parameters } = {}) {
        super(parameters);
        if (parameters.valueHex) {
            this.valueHexView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(parameters.valueHex);
        }
        else {
            this.valueHexView = new Uint8Array(1);
        }
        if (value) {
            this.value = value;
        }
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const inputView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
            return -1;
        }
        this.valueHexView = inputView.subarray(inputOffset, inputOffset + inputLength);
        if (inputLength > 1)
            this.warnings.push("Boolean value encoded in more then 1 octet");
        this.isHexOnly = true;
        pvutils__namespace.utilDecodeTC.call(this);
        this.blockLength = inputLength;
        return (inputOffset + inputLength);
    }
    toBER() {
        return this.valueHexView.slice();
    }
    toJSON() {
        return {
            ...super.toJSON(),
            value: this.value,
        };
    }
}
LocalBooleanValueBlock.NAME = "BooleanValueBlock";

var _a$s;
class Boolean extends BaseBlock {
    getValue() {
        return this.valueBlock.value;
    }
    setValue(value) {
        this.valueBlock.value = value;
    }
    constructor(parameters = {}) {
        super(parameters, LocalBooleanValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 1;
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME} : ${this.getValue}`;
    }
}
_a$s = Boolean;
(() => {
    typeStore.Boolean = _a$s;
})();
Boolean.NAME = "BOOLEAN";

class LocalOctetStringValueBlock extends HexBlock(LocalConstructedValueBlock) {
    constructor({ isConstructed = false, ...parameters } = {}) {
        super(parameters);
        this.isConstructed = isConstructed;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        let resultOffset = 0;
        if (this.isConstructed) {
            this.isHexOnly = false;
            resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
            if (resultOffset === -1)
                return resultOffset;
            for (let i = 0; i < this.value.length; i++) {
                const currentBlockName = this.value[i].constructor.NAME;
                if (currentBlockName === END_OF_CONTENT_NAME) {
                    if (this.isIndefiniteForm)
                        break;
                    else {
                        this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only";
                        return -1;
                    }
                }
                if (currentBlockName !== OCTET_STRING_NAME) {
                    this.error = "OCTET STRING may consists of OCTET STRINGs only";
                    return -1;
                }
            }
        }
        else {
            this.isHexOnly = true;
            resultOffset = super.fromBER(inputBuffer, inputOffset, inputLength);
            this.blockLength = inputLength;
        }
        return resultOffset;
    }
    toBER(sizeOnly, writer) {
        if (this.isConstructed)
            return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly, writer);
        return sizeOnly
            ? new ArrayBuffer(this.valueHexView.byteLength)
            : this.valueHexView.slice().buffer;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            isConstructed: this.isConstructed,
        };
    }
}
LocalOctetStringValueBlock.NAME = "OctetStringValueBlock";

var _a$r;
class OctetString extends BaseBlock {
    constructor({ idBlock = {}, lenBlock = {}, ...parameters } = {}) {
        var _b, _c;
        (_b = parameters.isConstructed) !== null && _b !== void 0 ? _b : (parameters.isConstructed = !!((_c = parameters.value) === null || _c === void 0 ? void 0 : _c.length));
        super({
            idBlock: {
                isConstructed: parameters.isConstructed,
                ...idBlock,
            },
            lenBlock: {
                ...lenBlock,
                isIndefiniteForm: !!parameters.isIndefiniteForm,
            },
            ...parameters,
        }, LocalOctetStringValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 4;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        this.valueBlock.isConstructed = this.idBlock.isConstructed;
        this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
        if (inputLength === 0) {
            if (this.idBlock.error.length === 0)
                this.blockLength += this.idBlock.blockLength;
            if (this.lenBlock.error.length === 0)
                this.blockLength += this.lenBlock.blockLength;
            return inputOffset;
        }
        if (!this.valueBlock.isConstructed) {
            const view = inputBuffer instanceof ArrayBuffer ? new Uint8Array(inputBuffer) : inputBuffer;
            const buf = view.subarray(inputOffset, inputOffset + inputLength);
            try {
                if (buf.byteLength) {
                    const asn = localFromBER(buf, 0, buf.byteLength);
                    if (asn.offset !== -1 && asn.offset === inputLength) {
                        this.valueBlock.value = [asn.result];
                    }
                }
            }
            catch {
            }
        }
        return super.fromBER(inputBuffer, inputOffset, inputLength);
    }
    onAsciiEncoding() {
        if (this.valueBlock.isConstructed || (this.valueBlock.value && this.valueBlock.value.length)) {
            return Constructed.prototype.onAsciiEncoding.call(this);
        }
        const name = this.constructor.NAME;
        const value = pvtsutils__namespace.Convert.ToHex(this.valueBlock.valueHexView);
        return `${name} : ${value}`;
    }
    getValue() {
        if (!this.idBlock.isConstructed) {
            return this.valueBlock.valueHexView.slice().buffer;
        }
        const array = [];
        for (const content of this.valueBlock.value) {
            if (content instanceof _a$r) {
                array.push(content.valueBlock.valueHexView);
            }
        }
        return pvtsutils__namespace.BufferSourceConverter.concat(array);
    }
}
_a$r = OctetString;
(() => {
    typeStore.OctetString = _a$r;
})();
OctetString.NAME = OCTET_STRING_NAME;

class LocalBitStringValueBlock extends HexBlock(LocalConstructedValueBlock) {
    constructor({ unusedBits = 0, isConstructed = false, ...parameters } = {}) {
        super(parameters);
        this.unusedBits = unusedBits;
        this.isConstructed = isConstructed;
        this.blockLength = this.valueHexView.byteLength;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        if (!inputLength) {
            return inputOffset;
        }
        let resultOffset = -1;
        if (this.isConstructed) {
            resultOffset = LocalConstructedValueBlock.prototype.fromBER.call(this, inputBuffer, inputOffset, inputLength);
            if (resultOffset === -1)
                return resultOffset;
            for (const value of this.value) {
                const currentBlockName = value.constructor.NAME;
                if (currentBlockName === END_OF_CONTENT_NAME) {
                    if (this.isIndefiniteForm)
                        break;
                    else {
                        this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only";
                        return -1;
                    }
                }
                if (currentBlockName !== BIT_STRING_NAME) {
                    this.error = "BIT STRING may consists of BIT STRINGs only";
                    return -1;
                }
                const valueBlock = value.valueBlock;
                if ((this.unusedBits > 0) && (valueBlock.unusedBits > 0)) {
                    this.error = "Using of \"unused bits\" inside constructive BIT STRING allowed for least one only";
                    return -1;
                }
                this.unusedBits = valueBlock.unusedBits;
            }
            return resultOffset;
        }
        const inputView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
            return -1;
        }
        const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
        this.unusedBits = intBuffer[0];
        if (this.unusedBits > 7) {
            this.error = "Unused bits for BitString must be in range 0-7";
            return -1;
        }
        if (!this.unusedBits) {
            const buf = intBuffer.subarray(1);
            try {
                if (buf.byteLength) {
                    const asn = localFromBER(buf, 0, buf.byteLength);
                    if (asn.offset !== -1 && asn.offset === (inputLength - 1)) {
                        this.value = [asn.result];
                    }
                }
            }
            catch {
            }
        }
        this.valueHexView = intBuffer.subarray(1);
        this.blockLength = intBuffer.length;
        return (inputOffset + inputLength);
    }
    toBER(sizeOnly, writer) {
        if (this.isConstructed) {
            return LocalConstructedValueBlock.prototype.toBER.call(this, sizeOnly, writer);
        }
        if (sizeOnly) {
            return new ArrayBuffer(this.valueHexView.byteLength + 1);
        }
        if (!this.valueHexView.byteLength) {
            const empty = new Uint8Array(1);
            empty[0] = 0;
            return empty.buffer;
        }
        const retView = new Uint8Array(this.valueHexView.length + 1);
        retView[0] = this.unusedBits;
        retView.set(this.valueHexView, 1);
        return retView.buffer;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            unusedBits: this.unusedBits,
            isConstructed: this.isConstructed,
        };
    }
}
LocalBitStringValueBlock.NAME = "BitStringValueBlock";

var _a$q;
class BitString extends BaseBlock {
    constructor({ idBlock = {}, lenBlock = {}, ...parameters } = {}) {
        var _b, _c;
        (_b = parameters.isConstructed) !== null && _b !== void 0 ? _b : (parameters.isConstructed = !!((_c = parameters.value) === null || _c === void 0 ? void 0 : _c.length));
        super({
            idBlock: {
                isConstructed: parameters.isConstructed,
                ...idBlock,
            },
            lenBlock: {
                ...lenBlock,
                isIndefiniteForm: !!parameters.isIndefiniteForm,
            },
            ...parameters,
        }, LocalBitStringValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 3;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        this.valueBlock.isConstructed = this.idBlock.isConstructed;
        this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
        return super.fromBER(inputBuffer, inputOffset, inputLength);
    }
    onAsciiEncoding() {
        if (this.valueBlock.isConstructed || (this.valueBlock.value && this.valueBlock.value.length)) {
            return Constructed.prototype.onAsciiEncoding.call(this);
        }
        else {
            const bits = [];
            const valueHex = this.valueBlock.valueHexView;
            for (const byte of valueHex) {
                bits.push(byte.toString(2).padStart(8, "0"));
            }
            const bitsStr = bits.join("");
            const name = this.constructor.NAME;
            const value = bitsStr.substring(0, bitsStr.length - this.valueBlock.unusedBits);
            return `${name} : ${value}`;
        }
    }
}
_a$q = BitString;
(() => {
    typeStore.BitString = _a$q;
})();
BitString.NAME = BIT_STRING_NAME;

var _a$p;
function viewAdd(first, second) {
    const c = new Uint8Array([0]);
    const firstView = new Uint8Array(first);
    const secondView = new Uint8Array(second);
    let firstViewCopy = firstView.slice(0);
    const firstViewCopyLength = firstViewCopy.length - 1;
    const secondViewCopy = secondView.slice(0);
    const secondViewCopyLength = secondViewCopy.length - 1;
    let value = 0;
    const max = (secondViewCopyLength < firstViewCopyLength) ? firstViewCopyLength : secondViewCopyLength;
    let counter = 0;
    for (let i = max; i >= 0; i--, counter++) {
        switch (true) {
            case (counter < secondViewCopy.length):
                value = firstViewCopy[firstViewCopyLength - counter] + secondViewCopy[secondViewCopyLength - counter] + c[0];
                break;
            default:
                value = firstViewCopy[firstViewCopyLength - counter] + c[0];
        }
        c[0] = value / 10;
        switch (true) {
            case (counter >= firstViewCopy.length):
                firstViewCopy = pvutils__namespace.utilConcatView(new Uint8Array([value % 10]), firstViewCopy);
                break;
            default:
                firstViewCopy[firstViewCopyLength - counter] = value % 10;
        }
    }
    if (c[0] > 0)
        firstViewCopy = pvutils__namespace.utilConcatView(c, firstViewCopy);
    return firstViewCopy;
}
function power2(n) {
    if (n >= powers2.length) {
        for (let p = powers2.length; p <= n; p++) {
            const c = new Uint8Array([0]);
            let digits = (powers2[p - 1]).slice(0);
            for (let i = (digits.length - 1); i >= 0; i--) {
                const newValue = new Uint8Array([(digits[i] << 1) + c[0]]);
                c[0] = newValue[0] / 10;
                digits[i] = newValue[0] % 10;
            }
            if (c[0] > 0)
                digits = pvutils__namespace.utilConcatView(c, digits);
            powers2.push(digits);
        }
    }
    return powers2[n];
}
function viewSub(first, second) {
    let b = 0;
    const firstView = new Uint8Array(first);
    const secondView = new Uint8Array(second);
    const firstViewCopy = firstView.slice(0);
    const firstViewCopyLength = firstViewCopy.length - 1;
    const secondViewCopy = secondView.slice(0);
    const secondViewCopyLength = secondViewCopy.length - 1;
    let value;
    let counter = 0;
    for (let i = secondViewCopyLength; i >= 0; i--, counter++) {
        value = firstViewCopy[firstViewCopyLength - counter] - secondViewCopy[secondViewCopyLength - counter] - b;
        switch (true) {
            case (value < 0):
                b = 1;
                firstViewCopy[firstViewCopyLength - counter] = value + 10;
                break;
            default:
                b = 0;
                firstViewCopy[firstViewCopyLength - counter] = value;
        }
    }
    if (b > 0) {
        for (let i = (firstViewCopyLength - secondViewCopyLength + 1); i >= 0; i--, counter++) {
            value = firstViewCopy[firstViewCopyLength - counter] - b;
            if (value < 0) {
                b = 1;
                firstViewCopy[firstViewCopyLength - counter] = value + 10;
            }
            else {
                b = 0;
                firstViewCopy[firstViewCopyLength - counter] = value;
                break;
            }
        }
    }
    return firstViewCopy.slice();
}
class LocalIntegerValueBlock extends HexBlock(ValueBlock) {
    setValueHex() {
        if (this.valueHexView.length >= 4) {
            this.warnings.push("Too big Integer for decoding, hex only");
            this.isHexOnly = true;
            this._valueDec = 0;
        }
        else {
            this.isHexOnly = false;
            if (this.valueHexView.length > 0) {
                this._valueDec = pvutils__namespace.utilDecodeTC.call(this);
            }
        }
    }
    constructor({ value, ...parameters } = {}) {
        super(parameters);
        this._valueDec = 0;
        if (parameters.valueHex) {
            this.setValueHex();
        }
        if (value !== undefined) {
            this.valueDec = value;
        }
    }
    set valueDec(v) {
        this._valueDec = v;
        this.isHexOnly = false;
        this.valueHexView = new Uint8Array(pvutils__namespace.utilEncodeTC(v));
    }
    get valueDec() {
        return this._valueDec;
    }
    fromDER(inputBuffer, inputOffset, inputLength, expectedLength = 0) {
        const offset = this.fromBER(inputBuffer, inputOffset, inputLength);
        if (offset === -1)
            return offset;
        const view = this.valueHexView;
        if ((view[0] === 0x00) && ((view[1] & 0x80) !== 0)) {
            this.valueHexView = view.subarray(1);
        }
        else {
            if (expectedLength !== 0) {
                if (view.length < expectedLength) {
                    if ((expectedLength - view.length) > 1)
                        expectedLength = view.length + 1;
                    this.valueHexView = view.subarray(expectedLength - view.length);
                }
            }
        }
        return offset;
    }
    toDER(sizeOnly = false) {
        const view = this.valueHexView;
        switch (true) {
            case ((view[0] & 0x80) !== 0):
                {
                    const updatedView = new Uint8Array(this.valueHexView.length + 1);
                    updatedView[0] = 0x00;
                    updatedView.set(view, 1);
                    this.valueHexView = updatedView;
                }
                break;
            case ((view[0] === 0x00) && ((view[1] & 0x80) === 0)):
                {
                    this.valueHexView = this.valueHexView.subarray(1);
                }
                break;
        }
        return this.toBER(sizeOnly);
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const resultOffset = super.fromBER(inputBuffer, inputOffset, inputLength);
        if (resultOffset === -1) {
            return resultOffset;
        }
        this.setValueHex();
        return resultOffset;
    }
    toBER(sizeOnly) {
        return sizeOnly
            ? new ArrayBuffer(this.valueHexView.length)
            : this.valueHexView.slice().buffer;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            valueDec: this.valueDec,
        };
    }
    toString() {
        const firstBit = (this.valueHexView.length * 8) - 1;
        let digits = new Uint8Array((this.valueHexView.length * 8) / 3);
        let bitNumber = 0;
        let currentByte;
        const asn1View = this.valueHexView;
        let result = "";
        let flag = false;
        for (let byteNumber = (asn1View.byteLength - 1); byteNumber >= 0; byteNumber--) {
            currentByte = asn1View[byteNumber];
            for (let i = 0; i < 8; i++) {
                if ((currentByte & 1) === 1) {
                    switch (bitNumber) {
                        case firstBit:
                            digits = viewSub(power2(bitNumber), digits);
                            result = "-";
                            break;
                        default:
                            digits = viewAdd(digits, power2(bitNumber));
                    }
                }
                bitNumber++;
                currentByte >>= 1;
            }
        }
        for (let i = 0; i < digits.length; i++) {
            if (digits[i])
                flag = true;
            if (flag)
                result += digitsString.charAt(digits[i]);
        }
        if (flag === false)
            result += digitsString.charAt(0);
        return result;
    }
}
_a$p = LocalIntegerValueBlock;
LocalIntegerValueBlock.NAME = "IntegerValueBlock";
(() => {
    Object.defineProperty(_a$p.prototype, "valueHex", {
        set: function (v) {
            this.valueHexView = new Uint8Array(v);
            this.setValueHex();
        },
        get: function () {
            return this.valueHexView.slice().buffer;
        },
    });
})();

var _a$o;
class Integer extends BaseBlock {
    constructor(parameters = {}) {
        super(parameters, LocalIntegerValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 2;
    }
    toBigInt() {
        assertBigInt();
        return BigInt(this.valueBlock.toString());
    }
    static fromBigInt(value) {
        assertBigInt();
        const bigIntValue = BigInt(value);
        const writer = new ViewWriter();
        const hex = bigIntValue.toString(16).replace(/^-/, "");
        const view = new Uint8Array(pvtsutils__namespace.Convert.FromHex(hex));
        if (bigIntValue < 0) {
            const first = new Uint8Array(view.length + (view[0] & 0x80 ? 1 : 0));
            first[0] |= 0x80;
            const firstInt = BigInt(`0x${pvtsutils__namespace.Convert.ToHex(first)}`);
            const secondInt = firstInt + bigIntValue;
            const second = pvtsutils__namespace.BufferSourceConverter.toUint8Array(pvtsutils__namespace.Convert.FromHex(secondInt.toString(16)));
            second[0] |= 0x80;
            writer.write(second);
        }
        else {
            if (view[0] & 0x80) {
                writer.write(new Uint8Array([0]));
            }
            writer.write(view);
        }
        const res = new _a$o({ valueHex: writer.final() });
        return res;
    }
    convertToDER() {
        const integer = new _a$o({ valueHex: this.valueBlock.valueHexView });
        integer.valueBlock.toDER();
        return integer;
    }
    convertFromDER() {
        return new _a$o({
            valueHex: this.valueBlock.valueHexView[0] === 0
                ? this.valueBlock.valueHexView.subarray(1)
                : this.valueBlock.valueHexView,
        });
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME} : ${this.valueBlock.toString()}`;
    }
}
_a$o = Integer;
(() => {
    typeStore.Integer = _a$o;
})();
Integer.NAME = "INTEGER";

var _a$n;
class Enumerated extends Integer {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 10;
    }
}
_a$n = Enumerated;
(() => {
    typeStore.Enumerated = _a$n;
})();
Enumerated.NAME = "ENUMERATED";

class LocalSidValueBlock extends HexBlock(ValueBlock) {
    constructor({ valueDec = -1, isFirstSid = false, ...parameters } = {}) {
        super(parameters);
        this.valueDec = valueDec;
        this.isFirstSid = isFirstSid;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        if (!inputLength) {
            return inputOffset;
        }
        const inputView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        if (!checkBufferParams(this, inputView, inputOffset, inputLength)) {
            return -1;
        }
        const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
        this.valueHexView = new Uint8Array(inputLength);
        for (let i = 0; i < inputLength; i++) {
            this.valueHexView[i] = intBuffer[i] & 0x7F;
            this.blockLength++;
            if ((intBuffer[i] & 0x80) === 0x00)
                break;
        }
        const tempView = new Uint8Array(this.blockLength);
        for (let i = 0; i < this.blockLength; i++) {
            tempView[i] = this.valueHexView[i];
        }
        this.valueHexView = tempView;
        if ((intBuffer[this.blockLength - 1] & 0x80) !== 0x00) {
            this.error = "End of input reached before message was fully decoded";
            return -1;
        }
        if (this.valueHexView[0] === 0x00)
            this.warnings.push("Needlessly long format of SID encoding");
        if (this.blockLength <= 8)
            this.valueDec = pvutils__namespace.utilFromBase(this.valueHexView, 7);
        else {
            this.isHexOnly = true;
            this.warnings.push("Too big SID for decoding, hex only");
        }
        return (inputOffset + this.blockLength);
    }
    set valueBigInt(value) {
        assertBigInt();
        let bits = BigInt(value).toString(2);
        while (bits.length % 7) {
            bits = "0" + bits;
        }
        const bytes = new Uint8Array(bits.length / 7);
        for (let i = 0; i < bytes.length; i++) {
            bytes[i] = parseInt(bits.slice(i * 7, i * 7 + 7), 2) + (i + 1 < bytes.length ? 0x80 : 0);
        }
        this.fromBER(bytes.buffer, 0, bytes.length);
    }
    toBER(sizeOnly) {
        if (this.isHexOnly) {
            if (sizeOnly)
                return (new ArrayBuffer(this.valueHexView.byteLength));
            const curView = this.valueHexView;
            const retView = new Uint8Array(this.blockLength);
            for (let i = 0; i < (this.blockLength - 1); i++)
                retView[i] = curView[i] | 0x80;
            retView[this.blockLength - 1] = curView[this.blockLength - 1];
            return retView.buffer;
        }
        const encodedBuf = pvutils__namespace.utilToBase(this.valueDec, 7);
        if (encodedBuf.byteLength === 0) {
            this.error = "Error during encoding SID value";
            return EMPTY_BUFFER;
        }
        const retView = new Uint8Array(encodedBuf.byteLength);
        if (!sizeOnly) {
            const encodedView = new Uint8Array(encodedBuf);
            const len = encodedBuf.byteLength - 1;
            for (let i = 0; i < len; i++)
                retView[i] = encodedView[i] | 0x80;
            retView[len] = encodedView[len];
        }
        return retView;
    }
    toString() {
        let result = "";
        if (this.isHexOnly)
            result = pvtsutils__namespace.Convert.ToHex(this.valueHexView);
        else {
            if (this.isFirstSid) {
                let sidValue = this.valueDec;
                if (this.valueDec <= 39)
                    result = "0.";
                else {
                    if (this.valueDec <= 79) {
                        result = "1.";
                        sidValue -= 40;
                    }
                    else {
                        result = "2.";
                        sidValue -= 80;
                    }
                }
                result += sidValue.toString();
            }
            else
                result = this.valueDec.toString();
        }
        return result;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            valueDec: this.valueDec,
            isFirstSid: this.isFirstSid,
        };
    }
}
LocalSidValueBlock.NAME = "sidBlock";

class LocalObjectIdentifierValueBlock extends ValueBlock {
    constructor({ value = EMPTY_STRING, ...parameters } = {}) {
        super(parameters);
        this.value = [];
        if (value) {
            this.fromString(value);
        }
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        let resultOffset = inputOffset;
        while (inputLength > 0) {
            const sidBlock = new LocalSidValueBlock();
            resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);
            if (resultOffset === -1) {
                this.blockLength = 0;
                this.error = sidBlock.error;
                return resultOffset;
            }
            if (this.value.length === 0)
                sidBlock.isFirstSid = true;
            this.blockLength += sidBlock.blockLength;
            inputLength -= sidBlock.blockLength;
            this.value.push(sidBlock);
        }
        return resultOffset;
    }
    toBER(sizeOnly) {
        const retBuffers = [];
        for (let i = 0; i < this.value.length; i++) {
            const valueBuf = this.value[i].toBER(sizeOnly);
            if (valueBuf.byteLength === 0) {
                this.error = this.value[i].error;
                return EMPTY_BUFFER;
            }
            retBuffers.push(valueBuf);
        }
        return concat(retBuffers);
    }
    fromString(string) {
        this.value = [];
        let pos1 = 0;
        let pos2 = 0;
        let sid = "";
        let flag = false;
        do {
            pos2 = string.indexOf(".", pos1);
            if (pos2 === -1)
                sid = string.substring(pos1);
            else
                sid = string.substring(pos1, pos2);
            pos1 = pos2 + 1;
            if (flag) {
                const sidBlock = this.value[0];
                let plus = 0;
                switch (sidBlock.valueDec) {
                    case 0:
                        break;
                    case 1:
                        plus = 40;
                        break;
                    case 2:
                        plus = 80;
                        break;
                    default:
                        this.value = [];
                        return;
                }
                const parsedSID = parseInt(sid, 10);
                if (isNaN(parsedSID))
                    return;
                sidBlock.valueDec = parsedSID + plus;
                flag = false;
            }
            else {
                const sidBlock = new LocalSidValueBlock();
                if (sid > Number.MAX_SAFE_INTEGER) {
                    assertBigInt();
                    const sidValue = BigInt(sid);
                    sidBlock.valueBigInt = sidValue;
                }
                else {
                    sidBlock.valueDec = parseInt(sid, 10);
                    if (isNaN(sidBlock.valueDec))
                        return;
                }
                if (!this.value.length) {
                    sidBlock.isFirstSid = true;
                    flag = true;
                }
                this.value.push(sidBlock);
            }
        } while (pos2 !== -1);
    }
    toString() {
        let result = "";
        let isHexOnly = false;
        for (let i = 0; i < this.value.length; i++) {
            isHexOnly = this.value[i].isHexOnly;
            let sidStr = this.value[i].toString();
            if (i !== 0)
                result = `${result}.`;
            if (isHexOnly) {
                sidStr = `{${sidStr}}`;
                if (this.value[i].isFirstSid)
                    result = `2.{${sidStr} - 80}`;
                else
                    result += sidStr;
            }
            else
                result += sidStr;
        }
        return result;
    }
    toJSON() {
        const object = {
            ...super.toJSON(),
            value: this.toString(),
            sidArray: [],
        };
        for (let i = 0; i < this.value.length; i++) {
            object.sidArray.push(this.value[i].toJSON());
        }
        return object;
    }
}
LocalObjectIdentifierValueBlock.NAME = "ObjectIdentifierValueBlock";

var _a$m;
class ObjectIdentifier extends BaseBlock {
    getValue() {
        return this.valueBlock.toString();
    }
    setValue(value) {
        this.valueBlock.fromString(value);
    }
    constructor(parameters = {}) {
        super(parameters, LocalObjectIdentifierValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 6;
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME} : ${this.valueBlock.toString() || "empty"}`;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            value: this.getValue(),
        };
    }
}
_a$m = ObjectIdentifier;
(() => {
    typeStore.ObjectIdentifier = _a$m;
})();
ObjectIdentifier.NAME = "OBJECT IDENTIFIER";

class LocalRelativeSidValueBlock extends HexBlock(LocalBaseBlock) {
    constructor({ valueDec = 0, ...parameters } = {}) {
        super(parameters);
        this.valueDec = valueDec;
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        if (inputLength === 0)
            return inputOffset;
        const inputView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        if (!checkBufferParams(this, inputView, inputOffset, inputLength))
            return -1;
        const intBuffer = inputView.subarray(inputOffset, inputOffset + inputLength);
        this.valueHexView = new Uint8Array(inputLength);
        for (let i = 0; i < inputLength; i++) {
            this.valueHexView[i] = intBuffer[i] & 0x7F;
            this.blockLength++;
            if ((intBuffer[i] & 0x80) === 0x00)
                break;
        }
        const tempView = new Uint8Array(this.blockLength);
        for (let i = 0; i < this.blockLength; i++)
            tempView[i] = this.valueHexView[i];
        this.valueHexView = tempView;
        if ((intBuffer[this.blockLength - 1] & 0x80) !== 0x00) {
            this.error = "End of input reached before message was fully decoded";
            return -1;
        }
        if (this.valueHexView[0] === 0x00)
            this.warnings.push("Needlessly long format of SID encoding");
        if (this.blockLength <= 8)
            this.valueDec = pvutils__namespace.utilFromBase(this.valueHexView, 7);
        else {
            this.isHexOnly = true;
            this.warnings.push("Too big SID for decoding, hex only");
        }
        return (inputOffset + this.blockLength);
    }
    toBER(sizeOnly) {
        if (this.isHexOnly) {
            if (sizeOnly)
                return (new ArrayBuffer(this.valueHexView.byteLength));
            const curView = this.valueHexView;
            const retView = new Uint8Array(this.blockLength);
            for (let i = 0; i < (this.blockLength - 1); i++)
                retView[i] = curView[i] | 0x80;
            retView[this.blockLength - 1] = curView[this.blockLength - 1];
            return retView.buffer;
        }
        const encodedBuf = pvutils__namespace.utilToBase(this.valueDec, 7);
        if (encodedBuf.byteLength === 0) {
            this.error = "Error during encoding SID value";
            return EMPTY_BUFFER;
        }
        const retView = new Uint8Array(encodedBuf.byteLength);
        if (!sizeOnly) {
            const encodedView = new Uint8Array(encodedBuf);
            const len = encodedBuf.byteLength - 1;
            for (let i = 0; i < len; i++)
                retView[i] = encodedView[i] | 0x80;
            retView[len] = encodedView[len];
        }
        return retView.buffer;
    }
    toString() {
        let result = "";
        if (this.isHexOnly)
            result = pvtsutils__namespace.Convert.ToHex(this.valueHexView);
        else {
            result = this.valueDec.toString();
        }
        return result;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            valueDec: this.valueDec,
        };
    }
}
LocalRelativeSidValueBlock.NAME = "relativeSidBlock";

class LocalRelativeObjectIdentifierValueBlock extends ValueBlock {
    constructor({ value = EMPTY_STRING, ...parameters } = {}) {
        super(parameters);
        this.value = [];
        if (value) {
            this.fromString(value);
        }
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        let resultOffset = inputOffset;
        while (inputLength > 0) {
            const sidBlock = new LocalRelativeSidValueBlock();
            resultOffset = sidBlock.fromBER(inputBuffer, resultOffset, inputLength);
            if (resultOffset === -1) {
                this.blockLength = 0;
                this.error = sidBlock.error;
                return resultOffset;
            }
            this.blockLength += sidBlock.blockLength;
            inputLength -= sidBlock.blockLength;
            this.value.push(sidBlock);
        }
        return resultOffset;
    }
    toBER(sizeOnly, _writer) {
        const retBuffers = [];
        for (let i = 0; i < this.value.length; i++) {
            const valueBuf = this.value[i].toBER(sizeOnly);
            if (valueBuf.byteLength === 0) {
                this.error = this.value[i].error;
                return EMPTY_BUFFER;
            }
            retBuffers.push(valueBuf);
        }
        return concat(retBuffers);
    }
    fromString(string) {
        this.value = [];
        let pos1 = 0;
        let pos2 = 0;
        let sid = "";
        do {
            pos2 = string.indexOf(".", pos1);
            if (pos2 === -1)
                sid = string.substring(pos1);
            else
                sid = string.substring(pos1, pos2);
            pos1 = pos2 + 1;
            const sidBlock = new LocalRelativeSidValueBlock();
            sidBlock.valueDec = parseInt(sid, 10);
            if (isNaN(sidBlock.valueDec))
                return true;
            this.value.push(sidBlock);
        } while (pos2 !== -1);
        return true;
    }
    toString() {
        let result = "";
        let isHexOnly = false;
        for (let i = 0; i < this.value.length; i++) {
            isHexOnly = this.value[i].isHexOnly;
            let sidStr = this.value[i].toString();
            if (i !== 0)
                result = `${result}.`;
            if (isHexOnly) {
                sidStr = `{${sidStr}}`;
                result += sidStr;
            }
            else
                result += sidStr;
        }
        return result;
    }
    toJSON() {
        const object = {
            ...super.toJSON(),
            value: this.toString(),
            sidArray: [],
        };
        for (let i = 0; i < this.value.length; i++)
            object.sidArray.push(this.value[i].toJSON());
        return object;
    }
}
LocalRelativeObjectIdentifierValueBlock.NAME = "RelativeObjectIdentifierValueBlock";

var _a$l;
class RelativeObjectIdentifier extends BaseBlock {
    getValue() {
        return this.valueBlock.toString();
    }
    setValue(value) {
        this.valueBlock.fromString(value);
    }
    constructor(parameters = {}) {
        super(parameters, LocalRelativeObjectIdentifierValueBlock);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 13;
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME} : ${this.valueBlock.toString() || "empty"}`;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            value: this.getValue(),
        };
    }
}
_a$l = RelativeObjectIdentifier;
(() => {
    typeStore.RelativeObjectIdentifier = _a$l;
})();
RelativeObjectIdentifier.NAME = "RelativeObjectIdentifier";

var _a$k;
class Sequence extends Constructed {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 16;
    }
}
_a$k = Sequence;
(() => {
    typeStore.Sequence = _a$k;
})();
Sequence.NAME = "SEQUENCE";

var _a$j;
class Set extends Constructed {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 17;
    }
}
_a$j = Set;
(() => {
    typeStore.Set = _a$j;
})();
Set.NAME = "SET";

class LocalStringValueBlock extends HexBlock(ValueBlock) {
    constructor({ ...parameters } = {}) {
        super(parameters);
        this.isHexOnly = true;
        this.value = EMPTY_STRING;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            value: this.value,
        };
    }
}
LocalStringValueBlock.NAME = "StringValueBlock";

class LocalSimpleStringValueBlock extends LocalStringValueBlock {
}
LocalSimpleStringValueBlock.NAME = "SimpleStringValueBlock";

class LocalSimpleStringBlock extends BaseStringBlock {
    constructor({ ...parameters } = {}) {
        super(parameters, LocalSimpleStringValueBlock);
    }
    fromBuffer(inputBuffer) {
        this.valueBlock.value = String.fromCharCode.apply(null, pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer));
    }
    fromString(inputString) {
        const strLen = inputString.length;
        const view = this.valueBlock.valueHexView = new Uint8Array(strLen);
        for (let i = 0; i < strLen; i++)
            view[i] = inputString.charCodeAt(i);
        this.valueBlock.value = inputString;
    }
}
LocalSimpleStringBlock.NAME = "SIMPLE STRING";

class LocalUtf8StringValueBlock extends LocalSimpleStringBlock {
    fromBuffer(inputBuffer) {
        this.valueBlock.valueHexView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
        try {
            this.valueBlock.value = pvtsutils__namespace.Convert.ToUtf8String(inputBuffer);
        }
        catch (ex) {
            this.warnings.push(`Error during "decodeURIComponent": ${ex}, using raw string`);
            this.valueBlock.value = pvtsutils__namespace.Convert.ToBinary(inputBuffer);
        }
    }
    fromString(inputString) {
        this.valueBlock.valueHexView = new Uint8Array(pvtsutils__namespace.Convert.FromUtf8String(inputString));
        this.valueBlock.value = inputString;
    }
}
LocalUtf8StringValueBlock.NAME = "Utf8StringValueBlock";

var _a$i;
class Utf8String extends LocalUtf8StringValueBlock {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 12;
    }
}
_a$i = Utf8String;
(() => {
    typeStore.Utf8String = _a$i;
})();
Utf8String.NAME = "UTF8String";

class LocalBmpStringValueBlock extends LocalSimpleStringBlock {
    fromBuffer(inputBuffer) {
        this.valueBlock.value = pvtsutils__namespace.Convert.ToUtf16String(inputBuffer);
        this.valueBlock.valueHexView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer);
    }
    fromString(inputString) {
        this.valueBlock.value = inputString;
        this.valueBlock.valueHexView = new Uint8Array(pvtsutils__namespace.Convert.FromUtf16String(inputString));
    }
}
LocalBmpStringValueBlock.NAME = "BmpStringValueBlock";

var _a$h;
class BmpString extends LocalBmpStringValueBlock {
    constructor({ ...parameters } = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 30;
    }
}
_a$h = BmpString;
(() => {
    typeStore.BmpString = _a$h;
})();
BmpString.NAME = "BMPString";

class LocalUniversalStringValueBlock extends LocalSimpleStringBlock {
    fromBuffer(inputBuffer) {
        const copyBuffer = ArrayBuffer.isView(inputBuffer) ? inputBuffer.slice().buffer : inputBuffer.slice(0);
        const valueView = new Uint8Array(copyBuffer);
        for (let i = 0; i < valueView.length; i += 4) {
            valueView[i] = valueView[i + 3];
            valueView[i + 1] = valueView[i + 2];
            valueView[i + 2] = 0x00;
            valueView[i + 3] = 0x00;
        }
        this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(copyBuffer));
    }
    fromString(inputString) {
        const strLength = inputString.length;
        const valueHexView = this.valueBlock.valueHexView = new Uint8Array(strLength * 4);
        for (let i = 0; i < strLength; i++) {
            const codeBuf = pvutils__namespace.utilToBase(inputString.charCodeAt(i), 8);
            const codeView = new Uint8Array(codeBuf);
            if (codeView.length > 4)
                continue;
            const dif = 4 - codeView.length;
            for (let j = (codeView.length - 1); j >= 0; j--)
                valueHexView[i * 4 + j + dif] = codeView[j];
        }
        this.valueBlock.value = inputString;
    }
}
LocalUniversalStringValueBlock.NAME = "UniversalStringValueBlock";

var _a$g;
class UniversalString extends LocalUniversalStringValueBlock {
    constructor({ ...parameters } = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 28;
    }
}
_a$g = UniversalString;
(() => {
    typeStore.UniversalString = _a$g;
})();
UniversalString.NAME = "UniversalString";

var _a$f;
class NumericString extends LocalSimpleStringBlock {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 18;
    }
}
_a$f = NumericString;
(() => {
    typeStore.NumericString = _a$f;
})();
NumericString.NAME = "NumericString";

var _a$e;
class PrintableString extends LocalSimpleStringBlock {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 19;
    }
}
_a$e = PrintableString;
(() => {
    typeStore.PrintableString = _a$e;
})();
PrintableString.NAME = "PrintableString";

var _a$d;
class TeletexString extends LocalSimpleStringBlock {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 20;
    }
}
_a$d = TeletexString;
(() => {
    typeStore.TeletexString = _a$d;
})();
TeletexString.NAME = "TeletexString";

var _a$c;
class VideotexString extends LocalSimpleStringBlock {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 21;
    }
}
_a$c = VideotexString;
(() => {
    typeStore.VideotexString = _a$c;
})();
VideotexString.NAME = "VideotexString";

var _a$b;
class IA5String extends LocalSimpleStringBlock {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 22;
    }
}
_a$b = IA5String;
(() => {
    typeStore.IA5String = _a$b;
})();
IA5String.NAME = "IA5String";

var _a$a;
class GraphicString extends LocalSimpleStringBlock {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 25;
    }
}
_a$a = GraphicString;
(() => {
    typeStore.GraphicString = _a$a;
})();
GraphicString.NAME = "GraphicString";

var _a$9;
class VisibleString extends LocalSimpleStringBlock {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 26;
    }
}
_a$9 = VisibleString;
(() => {
    typeStore.VisibleString = _a$9;
})();
VisibleString.NAME = "VisibleString";

var _a$8;
class GeneralString extends LocalSimpleStringBlock {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 27;
    }
}
_a$8 = GeneralString;
(() => {
    typeStore.GeneralString = _a$8;
})();
GeneralString.NAME = "GeneralString";

var _a$7;
class CharacterString extends LocalSimpleStringBlock {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 29;
    }
}
_a$7 = CharacterString;
(() => {
    typeStore.CharacterString = _a$7;
})();
CharacterString.NAME = "CharacterString";

var _a$6;
class UTCTime extends VisibleString {
    constructor({ value, valueDate, ...parameters } = {}) {
        super(parameters);
        this.year = 0;
        this.month = 0;
        this.day = 0;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        if (value) {
            this.fromString(value);
            this.valueBlock.valueHexView = new Uint8Array(value.length);
            for (let i = 0; i < value.length; i++)
                this.valueBlock.valueHexView[i] = value.charCodeAt(i);
        }
        if (valueDate) {
            this.fromDate(valueDate);
            this.valueBlock.valueHexView = new Uint8Array(this.toBuffer());
        }
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 23;
    }
    fromBuffer(inputBuffer) {
        this.fromString(String.fromCharCode.apply(null, pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer)));
    }
    toBuffer() {
        const str = this.toString();
        const buffer = new ArrayBuffer(str.length);
        const view = new Uint8Array(buffer);
        for (let i = 0; i < str.length; i++)
            view[i] = str.charCodeAt(i);
        return buffer;
    }
    fromDate(inputDate) {
        this.year = inputDate.getUTCFullYear();
        this.month = inputDate.getUTCMonth() + 1;
        this.day = inputDate.getUTCDate();
        this.hour = inputDate.getUTCHours();
        this.minute = inputDate.getUTCMinutes();
        this.second = inputDate.getUTCSeconds();
    }
    toDate() {
        return (new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second)));
    }
    fromString(inputString) {
        const parser = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/ig;
        const parserArray = parser.exec(inputString);
        if (parserArray === null) {
            this.error = "Wrong input string for conversion";
            return;
        }
        const year = parseInt(parserArray[1], 10);
        if (year >= 50)
            this.year = 1900 + year;
        else
            this.year = 2000 + year;
        this.month = parseInt(parserArray[2], 10);
        this.day = parseInt(parserArray[3], 10);
        this.hour = parseInt(parserArray[4], 10);
        this.minute = parseInt(parserArray[5], 10);
        this.second = parseInt(parserArray[6], 10);
    }
    toString(encoding = "iso") {
        if (encoding === "iso") {
            const outputArray = new Array(7);
            outputArray[0] = pvutils__namespace.padNumber(((this.year < 2000) ? (this.year - 1900) : (this.year - 2000)), 2);
            outputArray[1] = pvutils__namespace.padNumber(this.month, 2);
            outputArray[2] = pvutils__namespace.padNumber(this.day, 2);
            outputArray[3] = pvutils__namespace.padNumber(this.hour, 2);
            outputArray[4] = pvutils__namespace.padNumber(this.minute, 2);
            outputArray[5] = pvutils__namespace.padNumber(this.second, 2);
            outputArray[6] = "Z";
            return outputArray.join("");
        }
        return super.toString(encoding);
    }
    onAsciiEncoding() {
        return `${this.constructor.NAME} : ${this.toDate().toISOString()}`;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            year: this.year,
            month: this.month,
            day: this.day,
            hour: this.hour,
            minute: this.minute,
            second: this.second,
        };
    }
}
_a$6 = UTCTime;
(() => {
    typeStore.UTCTime = _a$6;
})();
UTCTime.NAME = "UTCTime";

var _a$5;
class GeneralizedTime extends UTCTime {
    constructor(parameters = {}) {
        var _b;
        super(parameters);
        (_b = this.millisecond) !== null && _b !== void 0 ? _b : (this.millisecond = 0);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 24;
    }
    fromDate(inputDate) {
        super.fromDate(inputDate);
        this.millisecond = inputDate.getUTCMilliseconds();
    }
    toDate() {
        const utcDate = Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond);
        return (new Date(utcDate));
    }
    fromString(inputString) {
        let isUTC = false;
        let timeString = "";
        let dateTimeString = "";
        let fractionPart = 0;
        let parser;
        let hourDifference = 0;
        let minuteDifference = 0;
        if (inputString[inputString.length - 1] === "Z") {
            timeString = inputString.substring(0, inputString.length - 1);
            isUTC = true;
        }
        else {
            const number = new Number(inputString[inputString.length - 1]);
            if (isNaN(number.valueOf()))
                throw new Error("Wrong input string for conversion");
            timeString = inputString;
        }
        if (isUTC) {
            if (timeString.indexOf("+") !== -1)
                throw new Error("Wrong input string for conversion");
            if (timeString.indexOf("-") !== -1)
                throw new Error("Wrong input string for conversion");
        }
        else {
            let multiplier = 1;
            let differencePosition = timeString.indexOf("+");
            let differenceString = "";
            if (differencePosition === -1) {
                differencePosition = timeString.indexOf("-");
                multiplier = -1;
            }
            if (differencePosition !== -1) {
                differenceString = timeString.substring(differencePosition + 1);
                timeString = timeString.substring(0, differencePosition);
                if ((differenceString.length !== 2) && (differenceString.length !== 4))
                    throw new Error("Wrong input string for conversion");
                let number = parseInt(differenceString.substring(0, 2), 10);
                if (isNaN(number.valueOf()))
                    throw new Error("Wrong input string for conversion");
                hourDifference = multiplier * number;
                if (differenceString.length === 4) {
                    number = parseInt(differenceString.substring(2, 4), 10);
                    if (isNaN(number.valueOf()))
                        throw new Error("Wrong input string for conversion");
                    minuteDifference = multiplier * number;
                }
            }
        }
        let fractionPointPosition = timeString.indexOf(".");
        if (fractionPointPosition === -1)
            fractionPointPosition = timeString.indexOf(",");
        if (fractionPointPosition !== -1) {
            const fractionPartCheck = new Number(`0${timeString.substring(fractionPointPosition)}`);
            if (isNaN(fractionPartCheck.valueOf()))
                throw new Error("Wrong input string for conversion");
            fractionPart = fractionPartCheck.valueOf();
            dateTimeString = timeString.substring(0, fractionPointPosition);
        }
        else
            dateTimeString = timeString;
        switch (true) {
            case (dateTimeString.length === 8):
                parser = /(\d{4})(\d{2})(\d{2})/ig;
                if (fractionPointPosition !== -1)
                    throw new Error("Wrong input string for conversion");
                break;
            case (dateTimeString.length === 10):
                parser = /(\d{4})(\d{2})(\d{2})(\d{2})/ig;
                if (fractionPointPosition !== -1) {
                    let fractionResult = 60 * fractionPart;
                    this.minute = Math.floor(fractionResult);
                    fractionResult = 60 * (fractionResult - this.minute);
                    this.second = Math.floor(fractionResult);
                    fractionResult = 1000 * (fractionResult - this.second);
                    this.millisecond = Math.floor(fractionResult);
                }
                break;
            case (dateTimeString.length === 12):
                parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/ig;
                if (fractionPointPosition !== -1) {
                    let fractionResult = 60 * fractionPart;
                    this.second = Math.floor(fractionResult);
                    fractionResult = 1000 * (fractionResult - this.second);
                    this.millisecond = Math.floor(fractionResult);
                }
                break;
            case (dateTimeString.length === 14):
                parser = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/ig;
                if (fractionPointPosition !== -1) {
                    const fractionResult = 1000 * fractionPart;
                    this.millisecond = Math.floor(fractionResult);
                }
                break;
            default:
                throw new Error("Wrong input string for conversion");
        }
        const parserArray = parser.exec(dateTimeString);
        if (parserArray === null)
            throw new Error("Wrong input string for conversion");
        for (let j = 1; j < parserArray.length; j++) {
            switch (j) {
                case 1:
                    this.year = parseInt(parserArray[j], 10);
                    break;
                case 2:
                    this.month = parseInt(parserArray[j], 10);
                    break;
                case 3:
                    this.day = parseInt(parserArray[j], 10);
                    break;
                case 4:
                    this.hour = parseInt(parserArray[j], 10) + hourDifference;
                    break;
                case 5:
                    this.minute = parseInt(parserArray[j], 10) + minuteDifference;
                    break;
                case 6:
                    this.second = parseInt(parserArray[j], 10);
                    break;
                default:
                    throw new Error("Wrong input string for conversion");
            }
        }
        if (isUTC === false) {
            const tempDate = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
            this.year = tempDate.getUTCFullYear();
            this.month = tempDate.getUTCMonth();
            this.day = tempDate.getUTCDay();
            this.hour = tempDate.getUTCHours();
            this.minute = tempDate.getUTCMinutes();
            this.second = tempDate.getUTCSeconds();
            this.millisecond = tempDate.getUTCMilliseconds();
        }
    }
    toString(encoding = "iso") {
        if (encoding === "iso") {
            const outputArray = [];
            outputArray.push(pvutils__namespace.padNumber(this.year, 4));
            outputArray.push(pvutils__namespace.padNumber(this.month, 2));
            outputArray.push(pvutils__namespace.padNumber(this.day, 2));
            outputArray.push(pvutils__namespace.padNumber(this.hour, 2));
            outputArray.push(pvutils__namespace.padNumber(this.minute, 2));
            outputArray.push(pvutils__namespace.padNumber(this.second, 2));
            if (this.millisecond !== 0) {
                outputArray.push(".");
                outputArray.push(pvutils__namespace.padNumber(this.millisecond, 3));
            }
            outputArray.push("Z");
            return outputArray.join("");
        }
        return super.toString(encoding);
    }
    toJSON() {
        return {
            ...super.toJSON(),
            millisecond: this.millisecond,
        };
    }
}
_a$5 = GeneralizedTime;
(() => {
    typeStore.GeneralizedTime = _a$5;
})();
GeneralizedTime.NAME = "GeneralizedTime";

var _a$4;
class DATE extends Utf8String {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 31;
    }
}
_a$4 = DATE;
(() => {
    typeStore.DATE = _a$4;
})();
DATE.NAME = "DATE";

var _a$3;
class TimeOfDay extends Utf8String {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 32;
    }
}
_a$3 = TimeOfDay;
(() => {
    typeStore.TimeOfDay = _a$3;
})();
TimeOfDay.NAME = "TimeOfDay";

var _a$2;
class DateTime extends Utf8String {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 33;
    }
}
_a$2 = DateTime;
(() => {
    typeStore.DateTime = _a$2;
})();
DateTime.NAME = "DateTime";

var _a$1;
class Duration extends Utf8String {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 34;
    }
}
_a$1 = Duration;
(() => {
    typeStore.Duration = _a$1;
})();
Duration.NAME = "Duration";

var _a;
class TIME extends Utf8String {
    constructor(parameters = {}) {
        super(parameters);
        this.idBlock.tagClass = 1;
        this.idBlock.tagNumber = 14;
    }
}
_a = TIME;
(() => {
    typeStore.TIME = _a;
})();
TIME.NAME = "TIME";

class Any {
    constructor({ name = EMPTY_STRING, optional = false } = {}) {
        this.name = name;
        this.optional = optional;
    }
}

class Choice extends Any {
    constructor({ value = [], ...parameters } = {}) {
        super(parameters);
        this.value = value;
    }
}

class Repeated extends Any {
    constructor({ value = new Any(), local = false, ...parameters } = {}) {
        super(parameters);
        this.value = value;
        this.local = local;
    }
}

class RawData {
    get data() {
        return this.dataView.slice().buffer;
    }
    set data(value) {
        this.dataView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(value);
    }
    constructor({ data = EMPTY_VIEW } = {}) {
        this.dataView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(data);
    }
    fromBER(inputBuffer, inputOffset, inputLength) {
        const endLength = inputOffset + inputLength;
        this.dataView = pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer).subarray(inputOffset, endLength);
        return endLength;
    }
    toBER(_sizeOnly) {
        return this.dataView.slice().buffer;
    }
}

function compareSchema(root, inputData, inputSchema) {
    if (inputSchema instanceof Choice) {
        for (const element of inputSchema.value) {
            const result = compareSchema(root, inputData, element);
            if (result.verified) {
                return {
                    verified: true,
                    result: root,
                };
            }
        }
        {
            const _result = {
                verified: false,
                result: { error: "Wrong values for Choice type" },
            };
            if (inputSchema.hasOwnProperty(NAME))
                _result.name = inputSchema.name;
            return _result;
        }
    }
    if (inputSchema instanceof Any) {
        if (inputSchema.hasOwnProperty(NAME))
            root[inputSchema.name] = inputData;
        return {
            verified: true,
            result: root,
        };
    }
    if ((root instanceof Object) === false) {
        return {
            verified: false,
            result: { error: "Wrong root object" },
        };
    }
    if ((inputData instanceof Object) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 data" },
        };
    }
    if ((inputSchema instanceof Object) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" },
        };
    }
    if ((ID_BLOCK in inputSchema) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" },
        };
    }
    if ((FROM_BER in inputSchema.idBlock) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" },
        };
    }
    if ((TO_BER in inputSchema.idBlock) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" },
        };
    }
    const encodedId = inputSchema.idBlock.toBER(false);
    if (encodedId.byteLength === 0) {
        return {
            verified: false,
            result: { error: "Error encoding idBlock for ASN.1 schema" },
        };
    }
    const decodedOffset = inputSchema.idBlock.fromBER(encodedId, 0, encodedId.byteLength);
    if (decodedOffset === -1) {
        return {
            verified: false,
            result: { error: "Error decoding idBlock for ASN.1 schema" },
        };
    }
    if (inputSchema.idBlock.hasOwnProperty(TAG_CLASS) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" },
        };
    }
    if (inputSchema.idBlock.tagClass !== inputData.idBlock.tagClass) {
        return {
            verified: false,
            result: root,
        };
    }
    if (inputSchema.idBlock.hasOwnProperty(TAG_NUMBER) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" },
        };
    }
    if (inputSchema.idBlock.tagNumber !== inputData.idBlock.tagNumber) {
        return {
            verified: false,
            result: root,
        };
    }
    if (inputSchema.idBlock.hasOwnProperty(IS_CONSTRUCTED) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" },
        };
    }
    if (inputSchema.idBlock.isConstructed !== inputData.idBlock.isConstructed) {
        return {
            verified: false,
            result: root,
        };
    }
    if (!(IS_HEX_ONLY in inputSchema.idBlock)) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema" },
        };
    }
    if (inputSchema.idBlock.isHexOnly !== inputData.idBlock.isHexOnly) {
        return {
            verified: false,
            result: root,
        };
    }
    if (inputSchema.idBlock.isHexOnly) {
        if ((VALUE_HEX_VIEW in inputSchema.idBlock) === false) {
            return {
                verified: false,
                result: { error: "Wrong ASN.1 schema" },
            };
        }
        const schemaView = inputSchema.idBlock.valueHexView;
        const asn1View = inputData.idBlock.valueHexView;
        if (schemaView.length !== asn1View.length) {
            return {
                verified: false,
                result: root,
            };
        }
        for (let i = 0; i < schemaView.length; i++) {
            if (schemaView[i] !== asn1View[1]) {
                return {
                    verified: false,
                    result: root,
                };
            }
        }
    }
    if (inputSchema.name) {
        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
        if (inputSchema.name)
            root[inputSchema.name] = inputData;
    }
    if (inputSchema instanceof typeStore.Constructed) {
        let admission = 0;
        let result = {
            verified: false,
            result: { error: "Unknown error" },
        };
        let maxLength = inputSchema.valueBlock.value.length;
        if (maxLength > 0) {
            if (inputSchema.valueBlock.value[0] instanceof Repeated) {
                maxLength = inputData.valueBlock.value.length;
            }
        }
        if (maxLength === 0) {
            return {
                verified: true,
                result: root,
            };
        }
        if ((inputData.valueBlock.value.length === 0)
            && (inputSchema.valueBlock.value.length !== 0)) {
            let _optional = true;
            for (let i = 0; i < inputSchema.valueBlock.value.length; i++)
                _optional = _optional && (inputSchema.valueBlock.value[i].optional || false);
            if (_optional) {
                return {
                    verified: true,
                    result: root,
                };
            }
            if (inputSchema.name) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                if (inputSchema.name)
                    delete root[inputSchema.name];
            }
            root.error = "Inconsistent object length";
            return {
                verified: false,
                result: root,
            };
        }
        for (let i = 0; i < maxLength; i++) {
            if ((i - admission) >= inputData.valueBlock.value.length) {
                if (inputSchema.valueBlock.value[i].optional === false) {
                    const _result = {
                        verified: false,
                        result: root,
                    };
                    root.error = "Inconsistent length between ASN.1 data and schema";
                    if (inputSchema.name) {
                        inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                        if (inputSchema.name) {
                            delete root[inputSchema.name];
                            _result.name = inputSchema.name;
                        }
                    }
                    return _result;
                }
            }
            else {
                if (inputSchema.valueBlock.value[0] instanceof Repeated) {
                    result = compareSchema(root, inputData.valueBlock.value[i], inputSchema.valueBlock.value[0].value);
                    if (result.verified === false) {
                        if (inputSchema.valueBlock.value[0].optional)
                            admission++;
                        else {
                            if (inputSchema.name) {
                                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                                if (inputSchema.name)
                                    delete root[inputSchema.name];
                            }
                            return result;
                        }
                    }
                    if ((NAME in inputSchema.valueBlock.value[0]) && (inputSchema.valueBlock.value[0].name.length > 0)) {
                        let arrayRoot = {};
                        if ((LOCAL in inputSchema.valueBlock.value[0]) && (inputSchema.valueBlock.value[0].local))
                            arrayRoot = inputData;
                        else
                            arrayRoot = root;
                        if (typeof arrayRoot[inputSchema.valueBlock.value[0].name] === "undefined")
                            arrayRoot[inputSchema.valueBlock.value[0].name] = [];
                        arrayRoot[inputSchema.valueBlock.value[0].name].push(inputData.valueBlock.value[i]);
                    }
                }
                else {
                    result = compareSchema(root, inputData.valueBlock.value[i - admission], inputSchema.valueBlock.value[i]);
                    if (result.verified === false) {
                        if (inputSchema.valueBlock.value[i].optional)
                            admission++;
                        else {
                            if (inputSchema.name) {
                                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                                if (inputSchema.name)
                                    delete root[inputSchema.name];
                            }
                            return result;
                        }
                    }
                }
            }
        }
        if (result.verified === false) {
            const _result = {
                verified: false,
                result: root,
            };
            if (inputSchema.name) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                if (inputSchema.name) {
                    delete root[inputSchema.name];
                    _result.name = inputSchema.name;
                }
            }
            return _result;
        }
        return {
            verified: true,
            result: root,
        };
    }
    if (inputSchema.primitiveSchema
        && (VALUE_HEX_VIEW in inputData.valueBlock)) {
        const asn1 = localFromBER(inputData.valueBlock.valueHexView);
        if (asn1.offset === -1) {
            const _result = {
                verified: false,
                result: asn1.result,
            };
            if (inputSchema.name) {
                inputSchema.name = inputSchema.name.replace(/^\s+|\s+$/g, EMPTY_STRING);
                if (inputSchema.name) {
                    delete root[inputSchema.name];
                    _result.name = inputSchema.name;
                }
            }
            return _result;
        }
        return compareSchema(root, asn1.result, inputSchema.primitiveSchema);
    }
    return {
        verified: true,
        result: root,
    };
}
function verifySchema(inputBuffer, inputSchema) {
    if ((inputSchema instanceof Object) === false) {
        return {
            verified: false,
            result: { error: "Wrong ASN.1 schema type" },
        };
    }
    const asn1 = localFromBER(pvtsutils__namespace.BufferSourceConverter.toUint8Array(inputBuffer));
    if (asn1.offset === -1) {
        return {
            verified: false,
            result: asn1.result,
        };
    }
    return compareSchema(asn1.result, asn1.result, inputSchema);
}

exports.Any = Any;
exports.BaseBlock = BaseBlock;
exports.BaseStringBlock = BaseStringBlock;
exports.BitString = BitString;
exports.BmpString = BmpString;
exports.Boolean = Boolean;
exports.CharacterString = CharacterString;
exports.Choice = Choice;
exports.Constructed = Constructed;
exports.DATE = DATE;
exports.DateTime = DateTime;
exports.Duration = Duration;
exports.EndOfContent = EndOfContent;
exports.Enumerated = Enumerated;
exports.GeneralString = GeneralString;
exports.GeneralizedTime = GeneralizedTime;
exports.GraphicString = GraphicString;
exports.HexBlock = HexBlock;
exports.IA5String = IA5String;
exports.Integer = Integer;
exports.Null = Null;
exports.NumericString = NumericString;
exports.ObjectIdentifier = ObjectIdentifier;
exports.OctetString = OctetString;
exports.Primitive = Primitive;
exports.PrintableString = PrintableString;
exports.RawData = RawData;
exports.RelativeObjectIdentifier = RelativeObjectIdentifier;
exports.Repeated = Repeated;
exports.Sequence = Sequence;
exports.Set = Set;
exports.TIME = TIME;
exports.TeletexString = TeletexString;
exports.TimeOfDay = TimeOfDay;
exports.UTCTime = UTCTime;
exports.UniversalString = UniversalString;
exports.Utf8String = Utf8String;
exports.ValueBlock = ValueBlock;
exports.VideotexString = VideotexString;
exports.ViewWriter = ViewWriter;
exports.VisibleString = VisibleString;
exports.compareSchema = compareSchema;
exports.fromBER = fromBER;
exports.verifySchema = verifySchema;


/***/ }),

/***/ 1608:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cryptoRuntime = exports.base64url = exports.generateSecret = exports.generateKeyPair = exports.errors = exports.decodeJwt = exports.decodeProtectedHeader = exports.importJWK = exports.importX509 = exports.importPKCS8 = exports.importSPKI = exports.exportJWK = exports.exportSPKI = exports.exportPKCS8 = exports.UnsecuredJWT = exports.experimental_jwksCache = exports.jwksCache = exports.createRemoteJWKSet = exports.createLocalJWKSet = exports.EmbeddedJWK = exports.calculateJwkThumbprintUri = exports.calculateJwkThumbprint = exports.EncryptJWT = exports.SignJWT = exports.GeneralSign = exports.FlattenedSign = exports.CompactSign = exports.FlattenedEncrypt = exports.CompactEncrypt = exports.jwtDecrypt = exports.jwtVerify = exports.generalVerify = exports.flattenedVerify = exports.compactVerify = exports.GeneralEncrypt = exports.generalDecrypt = exports.flattenedDecrypt = exports.compactDecrypt = void 0;
var decrypt_js_1 = __nccwpck_require__(4298);
Object.defineProperty(exports, "compactDecrypt", ({ enumerable: true, get: function () { return decrypt_js_1.compactDecrypt; } }));
var decrypt_js_2 = __nccwpck_require__(9344);
Object.defineProperty(exports, "flattenedDecrypt", ({ enumerable: true, get: function () { return decrypt_js_2.flattenedDecrypt; } }));
var decrypt_js_3 = __nccwpck_require__(9783);
Object.defineProperty(exports, "generalDecrypt", ({ enumerable: true, get: function () { return decrypt_js_3.generalDecrypt; } }));
var encrypt_js_1 = __nccwpck_require__(1907);
Object.defineProperty(exports, "GeneralEncrypt", ({ enumerable: true, get: function () { return encrypt_js_1.GeneralEncrypt; } }));
var verify_js_1 = __nccwpck_require__(4212);
Object.defineProperty(exports, "compactVerify", ({ enumerable: true, get: function () { return verify_js_1.compactVerify; } }));
var verify_js_2 = __nccwpck_require__(6358);
Object.defineProperty(exports, "flattenedVerify", ({ enumerable: true, get: function () { return verify_js_2.flattenedVerify; } }));
var verify_js_3 = __nccwpck_require__(8323);
Object.defineProperty(exports, "generalVerify", ({ enumerable: true, get: function () { return verify_js_3.generalVerify; } }));
var verify_js_4 = __nccwpck_require__(5297);
Object.defineProperty(exports, "jwtVerify", ({ enumerable: true, get: function () { return verify_js_4.jwtVerify; } }));
var decrypt_js_4 = __nccwpck_require__(5339);
Object.defineProperty(exports, "jwtDecrypt", ({ enumerable: true, get: function () { return decrypt_js_4.jwtDecrypt; } }));
var encrypt_js_2 = __nccwpck_require__(4434);
Object.defineProperty(exports, "CompactEncrypt", ({ enumerable: true, get: function () { return encrypt_js_2.CompactEncrypt; } }));
var encrypt_js_3 = __nccwpck_require__(2372);
Object.defineProperty(exports, "FlattenedEncrypt", ({ enumerable: true, get: function () { return encrypt_js_3.FlattenedEncrypt; } }));
var sign_js_1 = __nccwpck_require__(1760);
Object.defineProperty(exports, "CompactSign", ({ enumerable: true, get: function () { return sign_js_1.CompactSign; } }));
var sign_js_2 = __nccwpck_require__(6170);
Object.defineProperty(exports, "FlattenedSign", ({ enumerable: true, get: function () { return sign_js_2.FlattenedSign; } }));
var sign_js_3 = __nccwpck_require__(443);
Object.defineProperty(exports, "GeneralSign", ({ enumerable: true, get: function () { return sign_js_3.GeneralSign; } }));
var sign_js_4 = __nccwpck_require__(2713);
Object.defineProperty(exports, "SignJWT", ({ enumerable: true, get: function () { return sign_js_4.SignJWT; } }));
var encrypt_js_4 = __nccwpck_require__(8375);
Object.defineProperty(exports, "EncryptJWT", ({ enumerable: true, get: function () { return encrypt_js_4.EncryptJWT; } }));
var thumbprint_js_1 = __nccwpck_require__(5396);
Object.defineProperty(exports, "calculateJwkThumbprint", ({ enumerable: true, get: function () { return thumbprint_js_1.calculateJwkThumbprint; } }));
Object.defineProperty(exports, "calculateJwkThumbprintUri", ({ enumerable: true, get: function () { return thumbprint_js_1.calculateJwkThumbprintUri; } }));
var embedded_js_1 = __nccwpck_require__(8541);
Object.defineProperty(exports, "EmbeddedJWK", ({ enumerable: true, get: function () { return embedded_js_1.EmbeddedJWK; } }));
var local_js_1 = __nccwpck_require__(5275);
Object.defineProperty(exports, "createLocalJWKSet", ({ enumerable: true, get: function () { return local_js_1.createLocalJWKSet; } }));
var remote_js_1 = __nccwpck_require__(9260);
Object.defineProperty(exports, "createRemoteJWKSet", ({ enumerable: true, get: function () { return remote_js_1.createRemoteJWKSet; } }));
Object.defineProperty(exports, "jwksCache", ({ enumerable: true, get: function () { return remote_js_1.jwksCache; } }));
Object.defineProperty(exports, "experimental_jwksCache", ({ enumerable: true, get: function () { return remote_js_1.experimental_jwksCache; } }));
var unsecured_js_1 = __nccwpck_require__(560);
Object.defineProperty(exports, "UnsecuredJWT", ({ enumerable: true, get: function () { return unsecured_js_1.UnsecuredJWT; } }));
var export_js_1 = __nccwpck_require__(8108);
Object.defineProperty(exports, "exportPKCS8", ({ enumerable: true, get: function () { return export_js_1.exportPKCS8; } }));
Object.defineProperty(exports, "exportSPKI", ({ enumerable: true, get: function () { return export_js_1.exportSPKI; } }));
Object.defineProperty(exports, "exportJWK", ({ enumerable: true, get: function () { return export_js_1.exportJWK; } }));
var import_js_1 = __nccwpck_require__(5647);
Object.defineProperty(exports, "importSPKI", ({ enumerable: true, get: function () { return import_js_1.importSPKI; } }));
Object.defineProperty(exports, "importPKCS8", ({ enumerable: true, get: function () { return import_js_1.importPKCS8; } }));
Object.defineProperty(exports, "importX509", ({ enumerable: true, get: function () { return import_js_1.importX509; } }));
Object.defineProperty(exports, "importJWK", ({ enumerable: true, get: function () { return import_js_1.importJWK; } }));
var decode_protected_header_js_1 = __nccwpck_require__(4704);
Object.defineProperty(exports, "decodeProtectedHeader", ({ enumerable: true, get: function () { return decode_protected_header_js_1.decodeProtectedHeader; } }));
var decode_jwt_js_1 = __nccwpck_require__(7621);
Object.defineProperty(exports, "decodeJwt", ({ enumerable: true, get: function () { return decode_jwt_js_1.decodeJwt; } }));
exports.errors = __nccwpck_require__(5974);
var generate_key_pair_js_1 = __nccwpck_require__(7820);
Object.defineProperty(exports, "generateKeyPair", ({ enumerable: true, get: function () { return generate_key_pair_js_1.generateKeyPair; } }));
var generate_secret_js_1 = __nccwpck_require__(7152);
Object.defineProperty(exports, "generateSecret", ({ enumerable: true, get: function () { return generate_secret_js_1.generateSecret; } }));
exports.base64url = __nccwpck_require__(8305);
var runtime_js_1 = __nccwpck_require__(5021);
Object.defineProperty(exports, "cryptoRuntime", ({ enumerable: true, get: function () { return runtime_js_1.default; } }));


/***/ }),

/***/ 4298:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compactDecrypt = compactDecrypt;
const decrypt_js_1 = __nccwpck_require__(9344);
const errors_js_1 = __nccwpck_require__(5974);
const buffer_utils_js_1 = __nccwpck_require__(5734);
async function compactDecrypt(jwe, key, options) {
    if (jwe instanceof Uint8Array) {
        jwe = buffer_utils_js_1.decoder.decode(jwe);
    }
    if (typeof jwe !== 'string') {
        throw new errors_js_1.JWEInvalid('Compact JWE must be a string or Uint8Array');
    }
    const { 0: protectedHeader, 1: encryptedKey, 2: iv, 3: ciphertext, 4: tag, length, } = jwe.split('.');
    if (length !== 5) {
        throw new errors_js_1.JWEInvalid('Invalid Compact JWE');
    }
    const decrypted = await (0, decrypt_js_1.flattenedDecrypt)({
        ciphertext,
        iv: iv || undefined,
        protected: protectedHeader,
        tag: tag || undefined,
        encrypted_key: encryptedKey || undefined,
    }, key, options);
    const result = { plaintext: decrypted.plaintext, protectedHeader: decrypted.protectedHeader };
    if (typeof key === 'function') {
        return { ...result, key: decrypted.key };
    }
    return result;
}


/***/ }),

/***/ 4434:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompactEncrypt = void 0;
const encrypt_js_1 = __nccwpck_require__(2372);
class CompactEncrypt {
    _flattened;
    constructor(plaintext) {
        this._flattened = new encrypt_js_1.FlattenedEncrypt(plaintext);
    }
    setContentEncryptionKey(cek) {
        this._flattened.setContentEncryptionKey(cek);
        return this;
    }
    setInitializationVector(iv) {
        this._flattened.setInitializationVector(iv);
        return this;
    }
    setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    setKeyManagementParameters(parameters) {
        this._flattened.setKeyManagementParameters(parameters);
        return this;
    }
    async encrypt(key, options) {
        const jwe = await this._flattened.encrypt(key, options);
        return [jwe.protected, jwe.encrypted_key, jwe.iv, jwe.ciphertext, jwe.tag].join('.');
    }
}
exports.CompactEncrypt = CompactEncrypt;


/***/ }),

/***/ 9344:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flattenedDecrypt = flattenedDecrypt;
const base64url_js_1 = __nccwpck_require__(2635);
const decrypt_js_1 = __nccwpck_require__(2806);
const errors_js_1 = __nccwpck_require__(5974);
const is_disjoint_js_1 = __nccwpck_require__(1853);
const is_object_js_1 = __nccwpck_require__(2242);
const decrypt_key_management_js_1 = __nccwpck_require__(6243);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const cek_js_1 = __nccwpck_require__(7937);
const validate_crit_js_1 = __nccwpck_require__(5595);
const validate_algorithms_js_1 = __nccwpck_require__(9917);
async function flattenedDecrypt(jwe, key, options) {
    if (!(0, is_object_js_1.default)(jwe)) {
        throw new errors_js_1.JWEInvalid('Flattened JWE must be an object');
    }
    if (jwe.protected === undefined && jwe.header === undefined && jwe.unprotected === undefined) {
        throw new errors_js_1.JWEInvalid('JOSE Header missing');
    }
    if (jwe.iv !== undefined && typeof jwe.iv !== 'string') {
        throw new errors_js_1.JWEInvalid('JWE Initialization Vector incorrect type');
    }
    if (typeof jwe.ciphertext !== 'string') {
        throw new errors_js_1.JWEInvalid('JWE Ciphertext missing or incorrect type');
    }
    if (jwe.tag !== undefined && typeof jwe.tag !== 'string') {
        throw new errors_js_1.JWEInvalid('JWE Authentication Tag incorrect type');
    }
    if (jwe.protected !== undefined && typeof jwe.protected !== 'string') {
        throw new errors_js_1.JWEInvalid('JWE Protected Header incorrect type');
    }
    if (jwe.encrypted_key !== undefined && typeof jwe.encrypted_key !== 'string') {
        throw new errors_js_1.JWEInvalid('JWE Encrypted Key incorrect type');
    }
    if (jwe.aad !== undefined && typeof jwe.aad !== 'string') {
        throw new errors_js_1.JWEInvalid('JWE AAD incorrect type');
    }
    if (jwe.header !== undefined && !(0, is_object_js_1.default)(jwe.header)) {
        throw new errors_js_1.JWEInvalid('JWE Shared Unprotected Header incorrect type');
    }
    if (jwe.unprotected !== undefined && !(0, is_object_js_1.default)(jwe.unprotected)) {
        throw new errors_js_1.JWEInvalid('JWE Per-Recipient Unprotected Header incorrect type');
    }
    let parsedProt;
    if (jwe.protected) {
        try {
            const protectedHeader = (0, base64url_js_1.decode)(jwe.protected);
            parsedProt = JSON.parse(buffer_utils_js_1.decoder.decode(protectedHeader));
        }
        catch {
            throw new errors_js_1.JWEInvalid('JWE Protected Header is invalid');
        }
    }
    if (!(0, is_disjoint_js_1.default)(parsedProt, jwe.header, jwe.unprotected)) {
        throw new errors_js_1.JWEInvalid('JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint');
    }
    const joseHeader = {
        ...parsedProt,
        ...jwe.header,
        ...jwe.unprotected,
    };
    (0, validate_crit_js_1.default)(errors_js_1.JWEInvalid, new Map(), options?.crit, parsedProt, joseHeader);
    if (joseHeader.zip !== undefined) {
        throw new errors_js_1.JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
    }
    const { alg, enc } = joseHeader;
    if (typeof alg !== 'string' || !alg) {
        throw new errors_js_1.JWEInvalid('missing JWE Algorithm (alg) in JWE Header');
    }
    if (typeof enc !== 'string' || !enc) {
        throw new errors_js_1.JWEInvalid('missing JWE Encryption Algorithm (enc) in JWE Header');
    }
    const keyManagementAlgorithms = options && (0, validate_algorithms_js_1.default)('keyManagementAlgorithms', options.keyManagementAlgorithms);
    const contentEncryptionAlgorithms = options &&
        (0, validate_algorithms_js_1.default)('contentEncryptionAlgorithms', options.contentEncryptionAlgorithms);
    if ((keyManagementAlgorithms && !keyManagementAlgorithms.has(alg)) ||
        (!keyManagementAlgorithms && alg.startsWith('PBES2'))) {
        throw new errors_js_1.JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
    }
    if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc)) {
        throw new errors_js_1.JOSEAlgNotAllowed('"enc" (Encryption Algorithm) Header Parameter value not allowed');
    }
    let encryptedKey;
    if (jwe.encrypted_key !== undefined) {
        try {
            encryptedKey = (0, base64url_js_1.decode)(jwe.encrypted_key);
        }
        catch {
            throw new errors_js_1.JWEInvalid('Failed to base64url decode the encrypted_key');
        }
    }
    let resolvedKey = false;
    if (typeof key === 'function') {
        key = await key(parsedProt, jwe);
        resolvedKey = true;
    }
    let cek;
    try {
        cek = await (0, decrypt_key_management_js_1.default)(alg, key, encryptedKey, joseHeader, options);
    }
    catch (err) {
        if (err instanceof TypeError || err instanceof errors_js_1.JWEInvalid || err instanceof errors_js_1.JOSENotSupported) {
            throw err;
        }
        cek = (0, cek_js_1.default)(enc);
    }
    let iv;
    let tag;
    if (jwe.iv !== undefined) {
        try {
            iv = (0, base64url_js_1.decode)(jwe.iv);
        }
        catch {
            throw new errors_js_1.JWEInvalid('Failed to base64url decode the iv');
        }
    }
    if (jwe.tag !== undefined) {
        try {
            tag = (0, base64url_js_1.decode)(jwe.tag);
        }
        catch {
            throw new errors_js_1.JWEInvalid('Failed to base64url decode the tag');
        }
    }
    const protectedHeader = buffer_utils_js_1.encoder.encode(jwe.protected ?? '');
    let additionalData;
    if (jwe.aad !== undefined) {
        additionalData = (0, buffer_utils_js_1.concat)(protectedHeader, buffer_utils_js_1.encoder.encode('.'), buffer_utils_js_1.encoder.encode(jwe.aad));
    }
    else {
        additionalData = protectedHeader;
    }
    let ciphertext;
    try {
        ciphertext = (0, base64url_js_1.decode)(jwe.ciphertext);
    }
    catch {
        throw new errors_js_1.JWEInvalid('Failed to base64url decode the ciphertext');
    }
    const plaintext = await (0, decrypt_js_1.default)(enc, cek, ciphertext, iv, tag, additionalData);
    const result = { plaintext };
    if (jwe.protected !== undefined) {
        result.protectedHeader = parsedProt;
    }
    if (jwe.aad !== undefined) {
        try {
            result.additionalAuthenticatedData = (0, base64url_js_1.decode)(jwe.aad);
        }
        catch {
            throw new errors_js_1.JWEInvalid('Failed to base64url decode the aad');
        }
    }
    if (jwe.unprotected !== undefined) {
        result.sharedUnprotectedHeader = jwe.unprotected;
    }
    if (jwe.header !== undefined) {
        result.unprotectedHeader = jwe.header;
    }
    if (resolvedKey) {
        return { ...result, key };
    }
    return result;
}


/***/ }),

/***/ 2372:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlattenedEncrypt = void 0;
const base64url_js_1 = __nccwpck_require__(2635);
const private_symbols_js_1 = __nccwpck_require__(6433);
const encrypt_js_1 = __nccwpck_require__(6286);
const encrypt_key_management_js_1 = __nccwpck_require__(6539);
const errors_js_1 = __nccwpck_require__(5974);
const is_disjoint_js_1 = __nccwpck_require__(1853);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const validate_crit_js_1 = __nccwpck_require__(5595);
class FlattenedEncrypt {
    _plaintext;
    _protectedHeader;
    _sharedUnprotectedHeader;
    _unprotectedHeader;
    _aad;
    _cek;
    _iv;
    _keyManagementParameters;
    constructor(plaintext) {
        if (!(plaintext instanceof Uint8Array)) {
            throw new TypeError('plaintext must be an instance of Uint8Array');
        }
        this._plaintext = plaintext;
    }
    setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
            throw new TypeError('setKeyManagementParameters can only be called once');
        }
        this._keyManagementParameters = parameters;
        return this;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._sharedUnprotectedHeader) {
            throw new TypeError('setSharedUnprotectedHeader can only be called once');
        }
        this._sharedUnprotectedHeader = sharedUnprotectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
    }
    setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
    }
    setContentEncryptionKey(cek) {
        if (this._cek) {
            throw new TypeError('setContentEncryptionKey can only be called once');
        }
        this._cek = cek;
        return this;
    }
    setInitializationVector(iv) {
        if (this._iv) {
            throw new TypeError('setInitializationVector can only be called once');
        }
        this._iv = iv;
        return this;
    }
    async encrypt(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) {
            throw new errors_js_1.JWEInvalid('either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()');
        }
        if (!(0, is_disjoint_js_1.default)(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) {
            throw new errors_js_1.JWEInvalid('JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint');
        }
        const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...this._sharedUnprotectedHeader,
        };
        (0, validate_crit_js_1.default)(errors_js_1.JWEInvalid, new Map(), options?.crit, this._protectedHeader, joseHeader);
        if (joseHeader.zip !== undefined) {
            throw new errors_js_1.JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
        }
        const { alg, enc } = joseHeader;
        if (typeof alg !== 'string' || !alg) {
            throw new errors_js_1.JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        }
        if (typeof enc !== 'string' || !enc) {
            throw new errors_js_1.JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        }
        let encryptedKey;
        if (this._cek && (alg === 'dir' || alg === 'ECDH-ES')) {
            throw new TypeError(`setContentEncryptionKey cannot be called with JWE "alg" (Algorithm) Header ${alg}`);
        }
        let cek;
        {
            let parameters;
            ({ cek, encryptedKey, parameters } = await (0, encrypt_key_management_js_1.default)(alg, enc, key, this._cek, this._keyManagementParameters));
            if (parameters) {
                if (options && private_symbols_js_1.unprotected in options) {
                    if (!this._unprotectedHeader) {
                        this.setUnprotectedHeader(parameters);
                    }
                    else {
                        this._unprotectedHeader = { ...this._unprotectedHeader, ...parameters };
                    }
                }
                else if (!this._protectedHeader) {
                    this.setProtectedHeader(parameters);
                }
                else {
                    this._protectedHeader = { ...this._protectedHeader, ...parameters };
                }
            }
        }
        let additionalData;
        let protectedHeader;
        let aadMember;
        if (this._protectedHeader) {
            protectedHeader = buffer_utils_js_1.encoder.encode((0, base64url_js_1.encode)(JSON.stringify(this._protectedHeader)));
        }
        else {
            protectedHeader = buffer_utils_js_1.encoder.encode('');
        }
        if (this._aad) {
            aadMember = (0, base64url_js_1.encode)(this._aad);
            additionalData = (0, buffer_utils_js_1.concat)(protectedHeader, buffer_utils_js_1.encoder.encode('.'), buffer_utils_js_1.encoder.encode(aadMember));
        }
        else {
            additionalData = protectedHeader;
        }
        const { ciphertext, tag, iv } = await (0, encrypt_js_1.default)(enc, this._plaintext, cek, this._iv, additionalData);
        const jwe = {
            ciphertext: (0, base64url_js_1.encode)(ciphertext),
        };
        if (iv) {
            jwe.iv = (0, base64url_js_1.encode)(iv);
        }
        if (tag) {
            jwe.tag = (0, base64url_js_1.encode)(tag);
        }
        if (encryptedKey) {
            jwe.encrypted_key = (0, base64url_js_1.encode)(encryptedKey);
        }
        if (aadMember) {
            jwe.aad = aadMember;
        }
        if (this._protectedHeader) {
            jwe.protected = buffer_utils_js_1.decoder.decode(protectedHeader);
        }
        if (this._sharedUnprotectedHeader) {
            jwe.unprotected = this._sharedUnprotectedHeader;
        }
        if (this._unprotectedHeader) {
            jwe.header = this._unprotectedHeader;
        }
        return jwe;
    }
}
exports.FlattenedEncrypt = FlattenedEncrypt;


/***/ }),

/***/ 9783:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generalDecrypt = generalDecrypt;
const decrypt_js_1 = __nccwpck_require__(9344);
const errors_js_1 = __nccwpck_require__(5974);
const is_object_js_1 = __nccwpck_require__(2242);
async function generalDecrypt(jwe, key, options) {
    if (!(0, is_object_js_1.default)(jwe)) {
        throw new errors_js_1.JWEInvalid('General JWE must be an object');
    }
    if (!Array.isArray(jwe.recipients) || !jwe.recipients.every(is_object_js_1.default)) {
        throw new errors_js_1.JWEInvalid('JWE Recipients missing or incorrect type');
    }
    if (!jwe.recipients.length) {
        throw new errors_js_1.JWEInvalid('JWE Recipients has no members');
    }
    for (const recipient of jwe.recipients) {
        try {
            return await (0, decrypt_js_1.flattenedDecrypt)({
                aad: jwe.aad,
                ciphertext: jwe.ciphertext,
                encrypted_key: recipient.encrypted_key,
                header: recipient.header,
                iv: jwe.iv,
                protected: jwe.protected,
                tag: jwe.tag,
                unprotected: jwe.unprotected,
            }, key, options);
        }
        catch {
        }
    }
    throw new errors_js_1.JWEDecryptionFailed();
}


/***/ }),

/***/ 1907:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeneralEncrypt = void 0;
const encrypt_js_1 = __nccwpck_require__(2372);
const private_symbols_js_1 = __nccwpck_require__(6433);
const errors_js_1 = __nccwpck_require__(5974);
const cek_js_1 = __nccwpck_require__(7937);
const is_disjoint_js_1 = __nccwpck_require__(1853);
const encrypt_key_management_js_1 = __nccwpck_require__(6539);
const base64url_js_1 = __nccwpck_require__(2635);
const validate_crit_js_1 = __nccwpck_require__(5595);
class IndividualRecipient {
    parent;
    unprotectedHeader;
    key;
    options;
    constructor(enc, key, options) {
        this.parent = enc;
        this.key = key;
        this.options = options;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
    }
    addRecipient(...args) {
        return this.parent.addRecipient(...args);
    }
    encrypt(...args) {
        return this.parent.encrypt(...args);
    }
    done() {
        return this.parent;
    }
}
class GeneralEncrypt {
    _plaintext;
    _recipients = [];
    _protectedHeader;
    _unprotectedHeader;
    _aad;
    constructor(plaintext) {
        this._plaintext = plaintext;
    }
    addRecipient(key, options) {
        const recipient = new IndividualRecipient(this, key, { crit: options?.crit });
        this._recipients.push(recipient);
        return recipient;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setSharedUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = sharedUnprotectedHeader;
        return this;
    }
    setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
    }
    async encrypt() {
        if (!this._recipients.length) {
            throw new errors_js_1.JWEInvalid('at least one recipient must be added');
        }
        if (this._recipients.length === 1) {
            const [recipient] = this._recipients;
            const flattened = await new encrypt_js_1.FlattenedEncrypt(this._plaintext)
                .setAdditionalAuthenticatedData(this._aad)
                .setProtectedHeader(this._protectedHeader)
                .setSharedUnprotectedHeader(this._unprotectedHeader)
                .setUnprotectedHeader(recipient.unprotectedHeader)
                .encrypt(recipient.key, { ...recipient.options });
            const jwe = {
                ciphertext: flattened.ciphertext,
                iv: flattened.iv,
                recipients: [{}],
                tag: flattened.tag,
            };
            if (flattened.aad)
                jwe.aad = flattened.aad;
            if (flattened.protected)
                jwe.protected = flattened.protected;
            if (flattened.unprotected)
                jwe.unprotected = flattened.unprotected;
            if (flattened.encrypted_key)
                jwe.recipients[0].encrypted_key = flattened.encrypted_key;
            if (flattened.header)
                jwe.recipients[0].header = flattened.header;
            return jwe;
        }
        let enc;
        for (let i = 0; i < this._recipients.length; i++) {
            const recipient = this._recipients[i];
            if (!(0, is_disjoint_js_1.default)(this._protectedHeader, this._unprotectedHeader, recipient.unprotectedHeader)) {
                throw new errors_js_1.JWEInvalid('JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint');
            }
            const joseHeader = {
                ...this._protectedHeader,
                ...this._unprotectedHeader,
                ...recipient.unprotectedHeader,
            };
            const { alg } = joseHeader;
            if (typeof alg !== 'string' || !alg) {
                throw new errors_js_1.JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
            }
            if (alg === 'dir' || alg === 'ECDH-ES') {
                throw new errors_js_1.JWEInvalid('"dir" and "ECDH-ES" alg may only be used with a single recipient');
            }
            if (typeof joseHeader.enc !== 'string' || !joseHeader.enc) {
                throw new errors_js_1.JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
            }
            if (!enc) {
                enc = joseHeader.enc;
            }
            else if (enc !== joseHeader.enc) {
                throw new errors_js_1.JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients');
            }
            (0, validate_crit_js_1.default)(errors_js_1.JWEInvalid, new Map(), recipient.options.crit, this._protectedHeader, joseHeader);
            if (joseHeader.zip !== undefined) {
                throw new errors_js_1.JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
            }
        }
        const cek = (0, cek_js_1.default)(enc);
        const jwe = {
            ciphertext: '',
            iv: '',
            recipients: [],
            tag: '',
        };
        for (let i = 0; i < this._recipients.length; i++) {
            const recipient = this._recipients[i];
            const target = {};
            jwe.recipients.push(target);
            const joseHeader = {
                ...this._protectedHeader,
                ...this._unprotectedHeader,
                ...recipient.unprotectedHeader,
            };
            const p2c = joseHeader.alg.startsWith('PBES2') ? 2048 + i : undefined;
            if (i === 0) {
                const flattened = await new encrypt_js_1.FlattenedEncrypt(this._plaintext)
                    .setAdditionalAuthenticatedData(this._aad)
                    .setContentEncryptionKey(cek)
                    .setProtectedHeader(this._protectedHeader)
                    .setSharedUnprotectedHeader(this._unprotectedHeader)
                    .setUnprotectedHeader(recipient.unprotectedHeader)
                    .setKeyManagementParameters({ p2c })
                    .encrypt(recipient.key, {
                    ...recipient.options,
                    [private_symbols_js_1.unprotected]: true,
                });
                jwe.ciphertext = flattened.ciphertext;
                jwe.iv = flattened.iv;
                jwe.tag = flattened.tag;
                if (flattened.aad)
                    jwe.aad = flattened.aad;
                if (flattened.protected)
                    jwe.protected = flattened.protected;
                if (flattened.unprotected)
                    jwe.unprotected = flattened.unprotected;
                target.encrypted_key = flattened.encrypted_key;
                if (flattened.header)
                    target.header = flattened.header;
                continue;
            }
            const { encryptedKey, parameters } = await (0, encrypt_key_management_js_1.default)(recipient.unprotectedHeader?.alg ||
                this._protectedHeader?.alg ||
                this._unprotectedHeader?.alg, enc, recipient.key, cek, { p2c });
            target.encrypted_key = (0, base64url_js_1.encode)(encryptedKey);
            if (recipient.unprotectedHeader || parameters)
                target.header = { ...recipient.unprotectedHeader, ...parameters };
        }
        return jwe;
    }
}
exports.GeneralEncrypt = GeneralEncrypt;


/***/ }),

/***/ 8541:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmbeddedJWK = EmbeddedJWK;
const import_js_1 = __nccwpck_require__(5647);
const is_object_js_1 = __nccwpck_require__(2242);
const errors_js_1 = __nccwpck_require__(5974);
async function EmbeddedJWK(protectedHeader, token) {
    const joseHeader = {
        ...protectedHeader,
        ...token?.header,
    };
    if (!(0, is_object_js_1.default)(joseHeader.jwk)) {
        throw new errors_js_1.JWSInvalid('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
    }
    const key = await (0, import_js_1.importJWK)({ ...joseHeader.jwk, ext: true }, joseHeader.alg);
    if (key instanceof Uint8Array || key.type !== 'public') {
        throw new errors_js_1.JWSInvalid('"jwk" (JSON Web Key) Header Parameter must be a public key');
    }
    return key;
}


/***/ }),

/***/ 5396:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateJwkThumbprint = calculateJwkThumbprint;
exports.calculateJwkThumbprintUri = calculateJwkThumbprintUri;
const digest_js_1 = __nccwpck_require__(2931);
const base64url_js_1 = __nccwpck_require__(2635);
const errors_js_1 = __nccwpck_require__(5974);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const is_object_js_1 = __nccwpck_require__(2242);
const check = (value, description) => {
    if (typeof value !== 'string' || !value) {
        throw new errors_js_1.JWKInvalid(`${description} missing or invalid`);
    }
};
async function calculateJwkThumbprint(jwk, digestAlgorithm) {
    if (!(0, is_object_js_1.default)(jwk)) {
        throw new TypeError('JWK must be an object');
    }
    digestAlgorithm ??= 'sha256';
    if (digestAlgorithm !== 'sha256' &&
        digestAlgorithm !== 'sha384' &&
        digestAlgorithm !== 'sha512') {
        throw new TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
    }
    let components;
    switch (jwk.kty) {
        case 'EC':
            check(jwk.crv, '"crv" (Curve) Parameter');
            check(jwk.x, '"x" (X Coordinate) Parameter');
            check(jwk.y, '"y" (Y Coordinate) Parameter');
            components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x, y: jwk.y };
            break;
        case 'OKP':
            check(jwk.crv, '"crv" (Subtype of Key Pair) Parameter');
            check(jwk.x, '"x" (Public Key) Parameter');
            components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x };
            break;
        case 'RSA':
            check(jwk.e, '"e" (Exponent) Parameter');
            check(jwk.n, '"n" (Modulus) Parameter');
            components = { e: jwk.e, kty: jwk.kty, n: jwk.n };
            break;
        case 'oct':
            check(jwk.k, '"k" (Key Value) Parameter');
            components = { k: jwk.k, kty: jwk.kty };
            break;
        default:
            throw new errors_js_1.JOSENotSupported('"kty" (Key Type) Parameter missing or unsupported');
    }
    const data = buffer_utils_js_1.encoder.encode(JSON.stringify(components));
    return (0, base64url_js_1.encode)(await (0, digest_js_1.default)(digestAlgorithm, data));
}
async function calculateJwkThumbprintUri(jwk, digestAlgorithm) {
    digestAlgorithm ??= 'sha256';
    const thumbprint = await calculateJwkThumbprint(jwk, digestAlgorithm);
    return `urn:ietf:params:oauth:jwk-thumbprint:sha-${digestAlgorithm.slice(-3)}:${thumbprint}`;
}


/***/ }),

/***/ 5275:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createLocalJWKSet = createLocalJWKSet;
const import_js_1 = __nccwpck_require__(5647);
const errors_js_1 = __nccwpck_require__(5974);
const is_object_js_1 = __nccwpck_require__(2242);
function getKtyFromAlg(alg) {
    switch (typeof alg === 'string' && alg.slice(0, 2)) {
        case 'RS':
        case 'PS':
            return 'RSA';
        case 'ES':
            return 'EC';
        case 'Ed':
            return 'OKP';
        default:
            throw new errors_js_1.JOSENotSupported('Unsupported "alg" value for a JSON Web Key Set');
    }
}
function isJWKSLike(jwks) {
    return (jwks &&
        typeof jwks === 'object' &&
        Array.isArray(jwks.keys) &&
        jwks.keys.every(isJWKLike));
}
function isJWKLike(key) {
    return (0, is_object_js_1.default)(key);
}
function clone(obj) {
    if (typeof structuredClone === 'function') {
        return structuredClone(obj);
    }
    return JSON.parse(JSON.stringify(obj));
}
class LocalJWKSet {
    _jwks;
    _cached = new WeakMap();
    constructor(jwks) {
        if (!isJWKSLike(jwks)) {
            throw new errors_js_1.JWKSInvalid('JSON Web Key Set malformed');
        }
        this._jwks = clone(jwks);
    }
    async getKey(protectedHeader, token) {
        const { alg, kid } = { ...protectedHeader, ...token?.header };
        const kty = getKtyFromAlg(alg);
        const candidates = this._jwks.keys.filter((jwk) => {
            let candidate = kty === jwk.kty;
            if (candidate && typeof kid === 'string') {
                candidate = kid === jwk.kid;
            }
            if (candidate && typeof jwk.alg === 'string') {
                candidate = alg === jwk.alg;
            }
            if (candidate && typeof jwk.use === 'string') {
                candidate = jwk.use === 'sig';
            }
            if (candidate && Array.isArray(jwk.key_ops)) {
                candidate = jwk.key_ops.includes('verify');
            }
            if (candidate) {
                switch (alg) {
                    case 'ES256':
                        candidate = jwk.crv === 'P-256';
                        break;
                    case 'ES256K':
                        candidate = jwk.crv === 'secp256k1';
                        break;
                    case 'ES384':
                        candidate = jwk.crv === 'P-384';
                        break;
                    case 'ES512':
                        candidate = jwk.crv === 'P-521';
                        break;
                    case 'Ed25519':
                        candidate = jwk.crv === 'Ed25519';
                        break;
                    case 'EdDSA':
                        candidate = jwk.crv === 'Ed25519' || jwk.crv === 'Ed448';
                        break;
                }
            }
            return candidate;
        });
        const { 0: jwk, length } = candidates;
        if (length === 0) {
            throw new errors_js_1.JWKSNoMatchingKey();
        }
        if (length !== 1) {
            const error = new errors_js_1.JWKSMultipleMatchingKeys();
            const { _cached } = this;
            error[Symbol.asyncIterator] = async function* () {
                for (const jwk of candidates) {
                    try {
                        yield await importWithAlgCache(_cached, jwk, alg);
                    }
                    catch { }
                }
            };
            throw error;
        }
        return importWithAlgCache(this._cached, jwk, alg);
    }
}
async function importWithAlgCache(cache, jwk, alg) {
    const cached = cache.get(jwk) || cache.set(jwk, {}).get(jwk);
    if (cached[alg] === undefined) {
        const key = await (0, import_js_1.importJWK)({ ...jwk, ext: true }, alg);
        if (key instanceof Uint8Array || key.type !== 'public') {
            throw new errors_js_1.JWKSInvalid('JSON Web Key Set members must be public keys');
        }
        cached[alg] = key;
    }
    return cached[alg];
}
function createLocalJWKSet(jwks) {
    const set = new LocalJWKSet(jwks);
    const localJWKSet = async (protectedHeader, token) => set.getKey(protectedHeader, token);
    Object.defineProperties(localJWKSet, {
        jwks: {
            value: () => clone(set._jwks),
            enumerable: true,
            configurable: false,
            writable: false,
        },
    });
    return localJWKSet;
}


/***/ }),

/***/ 9260:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.experimental_jwksCache = exports.jwksCache = void 0;
exports.createRemoteJWKSet = createRemoteJWKSet;
const fetch_jwks_js_1 = __nccwpck_require__(311);
const errors_js_1 = __nccwpck_require__(5974);
const local_js_1 = __nccwpck_require__(5275);
const is_object_js_1 = __nccwpck_require__(2242);
function isCloudflareWorkers() {
    return (typeof WebSocketPair !== 'undefined' ||
        (typeof navigator !== 'undefined' && navigator.userAgent === 'Cloudflare-Workers') ||
        (typeof EdgeRuntime !== 'undefined' && EdgeRuntime === 'vercel'));
}
let USER_AGENT;
if (typeof navigator === 'undefined' || !navigator.userAgent?.startsWith?.('Mozilla/5.0 ')) {
    const NAME = 'jose';
    const VERSION = 'v5.10.0';
    USER_AGENT = `${NAME}/${VERSION}`;
}
exports.jwksCache = Symbol();
function isFreshJwksCache(input, cacheMaxAge) {
    if (typeof input !== 'object' || input === null) {
        return false;
    }
    if (!('uat' in input) || typeof input.uat !== 'number' || Date.now() - input.uat >= cacheMaxAge) {
        return false;
    }
    if (!('jwks' in input) ||
        !(0, is_object_js_1.default)(input.jwks) ||
        !Array.isArray(input.jwks.keys) ||
        !Array.prototype.every.call(input.jwks.keys, is_object_js_1.default)) {
        return false;
    }
    return true;
}
class RemoteJWKSet {
    _url;
    _timeoutDuration;
    _cooldownDuration;
    _cacheMaxAge;
    _jwksTimestamp;
    _pendingFetch;
    _options;
    _local;
    _cache;
    constructor(url, options) {
        if (!(url instanceof URL)) {
            throw new TypeError('url must be an instance of URL');
        }
        this._url = new URL(url.href);
        this._options = { agent: options?.agent, headers: options?.headers };
        this._timeoutDuration =
            typeof options?.timeoutDuration === 'number' ? options?.timeoutDuration : 5000;
        this._cooldownDuration =
            typeof options?.cooldownDuration === 'number' ? options?.cooldownDuration : 30000;
        this._cacheMaxAge = typeof options?.cacheMaxAge === 'number' ? options?.cacheMaxAge : 600000;
        if (options?.[exports.jwksCache] !== undefined) {
            this._cache = options?.[exports.jwksCache];
            if (isFreshJwksCache(options?.[exports.jwksCache], this._cacheMaxAge)) {
                this._jwksTimestamp = this._cache.uat;
                this._local = (0, local_js_1.createLocalJWKSet)(this._cache.jwks);
            }
        }
    }
    coolingDown() {
        return typeof this._jwksTimestamp === 'number'
            ? Date.now() < this._jwksTimestamp + this._cooldownDuration
            : false;
    }
    fresh() {
        return typeof this._jwksTimestamp === 'number'
            ? Date.now() < this._jwksTimestamp + this._cacheMaxAge
            : false;
    }
    async getKey(protectedHeader, token) {
        if (!this._local || !this.fresh()) {
            await this.reload();
        }
        try {
            return await this._local(protectedHeader, token);
        }
        catch (err) {
            if (err instanceof errors_js_1.JWKSNoMatchingKey) {
                if (this.coolingDown() === false) {
                    await this.reload();
                    return this._local(protectedHeader, token);
                }
            }
            throw err;
        }
    }
    async reload() {
        if (this._pendingFetch && isCloudflareWorkers()) {
            this._pendingFetch = undefined;
        }
        const headers = new Headers(this._options.headers);
        if (USER_AGENT && !headers.has('User-Agent')) {
            headers.set('User-Agent', USER_AGENT);
            this._options.headers = Object.fromEntries(headers.entries());
        }
        this._pendingFetch ||= (0, fetch_jwks_js_1.default)(this._url, this._timeoutDuration, this._options)
            .then((json) => {
            this._local = (0, local_js_1.createLocalJWKSet)(json);
            if (this._cache) {
                this._cache.uat = Date.now();
                this._cache.jwks = json;
            }
            this._jwksTimestamp = Date.now();
            this._pendingFetch = undefined;
        })
            .catch((err) => {
            this._pendingFetch = undefined;
            throw err;
        });
        await this._pendingFetch;
    }
}
function createRemoteJWKSet(url, options) {
    const set = new RemoteJWKSet(url, options);
    const remoteJWKSet = async (protectedHeader, token) => set.getKey(protectedHeader, token);
    Object.defineProperties(remoteJWKSet, {
        coolingDown: {
            get: () => set.coolingDown(),
            enumerable: true,
            configurable: false,
        },
        fresh: {
            get: () => set.fresh(),
            enumerable: true,
            configurable: false,
        },
        reload: {
            value: () => set.reload(),
            enumerable: true,
            configurable: false,
            writable: false,
        },
        reloading: {
            get: () => !!set._pendingFetch,
            enumerable: true,
            configurable: false,
        },
        jwks: {
            value: () => set._local?.jwks(),
            enumerable: true,
            configurable: false,
            writable: false,
        },
    });
    return remoteJWKSet;
}
exports.experimental_jwksCache = exports.jwksCache;


/***/ }),

/***/ 1760:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompactSign = void 0;
const sign_js_1 = __nccwpck_require__(6170);
class CompactSign {
    _flattened;
    constructor(payload) {
        this._flattened = new sign_js_1.FlattenedSign(payload);
    }
    setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
    }
    async sign(key, options) {
        const jws = await this._flattened.sign(key, options);
        if (jws.payload === undefined) {
            throw new TypeError('use the flattened module for creating JWS with b64: false');
        }
        return `${jws.protected}.${jws.payload}.${jws.signature}`;
    }
}
exports.CompactSign = CompactSign;


/***/ }),

/***/ 4212:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compactVerify = compactVerify;
const verify_js_1 = __nccwpck_require__(6358);
const errors_js_1 = __nccwpck_require__(5974);
const buffer_utils_js_1 = __nccwpck_require__(5734);
async function compactVerify(jws, key, options) {
    if (jws instanceof Uint8Array) {
        jws = buffer_utils_js_1.decoder.decode(jws);
    }
    if (typeof jws !== 'string') {
        throw new errors_js_1.JWSInvalid('Compact JWS must be a string or Uint8Array');
    }
    const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split('.');
    if (length !== 3) {
        throw new errors_js_1.JWSInvalid('Invalid Compact JWS');
    }
    const verified = await (0, verify_js_1.flattenedVerify)({ payload, protected: protectedHeader, signature }, key, options);
    const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
    if (typeof key === 'function') {
        return { ...result, key: verified.key };
    }
    return result;
}


/***/ }),

/***/ 6170:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlattenedSign = void 0;
const base64url_js_1 = __nccwpck_require__(2635);
const sign_js_1 = __nccwpck_require__(6966);
const is_disjoint_js_1 = __nccwpck_require__(1853);
const errors_js_1 = __nccwpck_require__(5974);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const check_key_type_js_1 = __nccwpck_require__(9555);
const validate_crit_js_1 = __nccwpck_require__(5595);
class FlattenedSign {
    _payload;
    _protectedHeader;
    _unprotectedHeader;
    constructor(payload) {
        if (!(payload instanceof Uint8Array)) {
            throw new TypeError('payload must be an instance of Uint8Array');
        }
        this._payload = payload;
    }
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
    }
    async sign(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader) {
            throw new errors_js_1.JWSInvalid('either setProtectedHeader or setUnprotectedHeader must be called before #sign()');
        }
        if (!(0, is_disjoint_js_1.default)(this._protectedHeader, this._unprotectedHeader)) {
            throw new errors_js_1.JWSInvalid('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
        }
        const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
        };
        const extensions = (0, validate_crit_js_1.default)(errors_js_1.JWSInvalid, new Map([['b64', true]]), options?.crit, this._protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has('b64')) {
            b64 = this._protectedHeader.b64;
            if (typeof b64 !== 'boolean') {
                throw new errors_js_1.JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
            }
        }
        const { alg } = joseHeader;
        if (typeof alg !== 'string' || !alg) {
            throw new errors_js_1.JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        (0, check_key_type_js_1.checkKeyTypeWithJwk)(alg, key, 'sign');
        let payload = this._payload;
        if (b64) {
            payload = buffer_utils_js_1.encoder.encode((0, base64url_js_1.encode)(payload));
        }
        let protectedHeader;
        if (this._protectedHeader) {
            protectedHeader = buffer_utils_js_1.encoder.encode((0, base64url_js_1.encode)(JSON.stringify(this._protectedHeader)));
        }
        else {
            protectedHeader = buffer_utils_js_1.encoder.encode('');
        }
        const data = (0, buffer_utils_js_1.concat)(protectedHeader, buffer_utils_js_1.encoder.encode('.'), payload);
        const signature = await (0, sign_js_1.default)(alg, key, data);
        const jws = {
            signature: (0, base64url_js_1.encode)(signature),
            payload: '',
        };
        if (b64) {
            jws.payload = buffer_utils_js_1.decoder.decode(payload);
        }
        if (this._unprotectedHeader) {
            jws.header = this._unprotectedHeader;
        }
        if (this._protectedHeader) {
            jws.protected = buffer_utils_js_1.decoder.decode(protectedHeader);
        }
        return jws;
    }
}
exports.FlattenedSign = FlattenedSign;


/***/ }),

/***/ 6358:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flattenedVerify = flattenedVerify;
const base64url_js_1 = __nccwpck_require__(2635);
const verify_js_1 = __nccwpck_require__(1242);
const errors_js_1 = __nccwpck_require__(5974);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const is_disjoint_js_1 = __nccwpck_require__(1853);
const is_object_js_1 = __nccwpck_require__(2242);
const check_key_type_js_1 = __nccwpck_require__(9555);
const validate_crit_js_1 = __nccwpck_require__(5595);
const validate_algorithms_js_1 = __nccwpck_require__(9917);
const is_jwk_js_1 = __nccwpck_require__(1229);
const import_js_1 = __nccwpck_require__(5647);
async function flattenedVerify(jws, key, options) {
    if (!(0, is_object_js_1.default)(jws)) {
        throw new errors_js_1.JWSInvalid('Flattened JWS must be an object');
    }
    if (jws.protected === undefined && jws.header === undefined) {
        throw new errors_js_1.JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
    }
    if (jws.protected !== undefined && typeof jws.protected !== 'string') {
        throw new errors_js_1.JWSInvalid('JWS Protected Header incorrect type');
    }
    if (jws.payload === undefined) {
        throw new errors_js_1.JWSInvalid('JWS Payload missing');
    }
    if (typeof jws.signature !== 'string') {
        throw new errors_js_1.JWSInvalid('JWS Signature missing or incorrect type');
    }
    if (jws.header !== undefined && !(0, is_object_js_1.default)(jws.header)) {
        throw new errors_js_1.JWSInvalid('JWS Unprotected Header incorrect type');
    }
    let parsedProt = {};
    if (jws.protected) {
        try {
            const protectedHeader = (0, base64url_js_1.decode)(jws.protected);
            parsedProt = JSON.parse(buffer_utils_js_1.decoder.decode(protectedHeader));
        }
        catch {
            throw new errors_js_1.JWSInvalid('JWS Protected Header is invalid');
        }
    }
    if (!(0, is_disjoint_js_1.default)(parsedProt, jws.header)) {
        throw new errors_js_1.JWSInvalid('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
    }
    const joseHeader = {
        ...parsedProt,
        ...jws.header,
    };
    const extensions = (0, validate_crit_js_1.default)(errors_js_1.JWSInvalid, new Map([['b64', true]]), options?.crit, parsedProt, joseHeader);
    let b64 = true;
    if (extensions.has('b64')) {
        b64 = parsedProt.b64;
        if (typeof b64 !== 'boolean') {
            throw new errors_js_1.JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        }
    }
    const { alg } = joseHeader;
    if (typeof alg !== 'string' || !alg) {
        throw new errors_js_1.JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    const algorithms = options && (0, validate_algorithms_js_1.default)('algorithms', options.algorithms);
    if (algorithms && !algorithms.has(alg)) {
        throw new errors_js_1.JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
    }
    if (b64) {
        if (typeof jws.payload !== 'string') {
            throw new errors_js_1.JWSInvalid('JWS Payload must be a string');
        }
    }
    else if (typeof jws.payload !== 'string' && !(jws.payload instanceof Uint8Array)) {
        throw new errors_js_1.JWSInvalid('JWS Payload must be a string or an Uint8Array instance');
    }
    let resolvedKey = false;
    if (typeof key === 'function') {
        key = await key(parsedProt, jws);
        resolvedKey = true;
        (0, check_key_type_js_1.checkKeyTypeWithJwk)(alg, key, 'verify');
        if ((0, is_jwk_js_1.isJWK)(key)) {
            key = await (0, import_js_1.importJWK)(key, alg);
        }
    }
    else {
        (0, check_key_type_js_1.checkKeyTypeWithJwk)(alg, key, 'verify');
    }
    const data = (0, buffer_utils_js_1.concat)(buffer_utils_js_1.encoder.encode(jws.protected ?? ''), buffer_utils_js_1.encoder.encode('.'), typeof jws.payload === 'string' ? buffer_utils_js_1.encoder.encode(jws.payload) : jws.payload);
    let signature;
    try {
        signature = (0, base64url_js_1.decode)(jws.signature);
    }
    catch {
        throw new errors_js_1.JWSInvalid('Failed to base64url decode the signature');
    }
    const verified = await (0, verify_js_1.default)(alg, key, signature, data);
    if (!verified) {
        throw new errors_js_1.JWSSignatureVerificationFailed();
    }
    let payload;
    if (b64) {
        try {
            payload = (0, base64url_js_1.decode)(jws.payload);
        }
        catch {
            throw new errors_js_1.JWSInvalid('Failed to base64url decode the payload');
        }
    }
    else if (typeof jws.payload === 'string') {
        payload = buffer_utils_js_1.encoder.encode(jws.payload);
    }
    else {
        payload = jws.payload;
    }
    const result = { payload };
    if (jws.protected !== undefined) {
        result.protectedHeader = parsedProt;
    }
    if (jws.header !== undefined) {
        result.unprotectedHeader = jws.header;
    }
    if (resolvedKey) {
        return { ...result, key };
    }
    return result;
}


/***/ }),

/***/ 443:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeneralSign = void 0;
const sign_js_1 = __nccwpck_require__(6170);
const errors_js_1 = __nccwpck_require__(5974);
class IndividualSignature {
    parent;
    protectedHeader;
    unprotectedHeader;
    options;
    key;
    constructor(sig, key, options) {
        this.parent = sig;
        this.key = key;
        this.options = options;
    }
    setProtectedHeader(protectedHeader) {
        if (this.protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this.protectedHeader = protectedHeader;
        return this;
    }
    setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
            throw new TypeError('setUnprotectedHeader can only be called once');
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
    }
    addSignature(...args) {
        return this.parent.addSignature(...args);
    }
    sign(...args) {
        return this.parent.sign(...args);
    }
    done() {
        return this.parent;
    }
}
class GeneralSign {
    _payload;
    _signatures = [];
    constructor(payload) {
        this._payload = payload;
    }
    addSignature(key, options) {
        const signature = new IndividualSignature(this, key, options);
        this._signatures.push(signature);
        return signature;
    }
    async sign() {
        if (!this._signatures.length) {
            throw new errors_js_1.JWSInvalid('at least one signature must be added');
        }
        const jws = {
            signatures: [],
            payload: '',
        };
        for (let i = 0; i < this._signatures.length; i++) {
            const signature = this._signatures[i];
            const flattened = new sign_js_1.FlattenedSign(this._payload);
            flattened.setProtectedHeader(signature.protectedHeader);
            flattened.setUnprotectedHeader(signature.unprotectedHeader);
            const { payload, ...rest } = await flattened.sign(signature.key, signature.options);
            if (i === 0) {
                jws.payload = payload;
            }
            else if (jws.payload !== payload) {
                throw new errors_js_1.JWSInvalid('inconsistent use of JWS Unencoded Payload (RFC7797)');
            }
            jws.signatures.push(rest);
        }
        return jws;
    }
}
exports.GeneralSign = GeneralSign;


/***/ }),

/***/ 8323:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generalVerify = generalVerify;
const verify_js_1 = __nccwpck_require__(6358);
const errors_js_1 = __nccwpck_require__(5974);
const is_object_js_1 = __nccwpck_require__(2242);
async function generalVerify(jws, key, options) {
    if (!(0, is_object_js_1.default)(jws)) {
        throw new errors_js_1.JWSInvalid('General JWS must be an object');
    }
    if (!Array.isArray(jws.signatures) || !jws.signatures.every(is_object_js_1.default)) {
        throw new errors_js_1.JWSInvalid('JWS Signatures missing or incorrect type');
    }
    for (const signature of jws.signatures) {
        try {
            return await (0, verify_js_1.flattenedVerify)({
                header: signature.header,
                payload: jws.payload,
                protected: signature.protected,
                signature: signature.signature,
            }, key, options);
        }
        catch {
        }
    }
    throw new errors_js_1.JWSSignatureVerificationFailed();
}


/***/ }),

/***/ 5339:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtDecrypt = jwtDecrypt;
const decrypt_js_1 = __nccwpck_require__(4298);
const jwt_claims_set_js_1 = __nccwpck_require__(3354);
const errors_js_1 = __nccwpck_require__(5974);
async function jwtDecrypt(jwt, key, options) {
    const decrypted = await (0, decrypt_js_1.compactDecrypt)(jwt, key, options);
    const payload = (0, jwt_claims_set_js_1.default)(decrypted.protectedHeader, decrypted.plaintext, options);
    const { protectedHeader } = decrypted;
    if (protectedHeader.iss !== undefined && protectedHeader.iss !== payload.iss) {
        throw new errors_js_1.JWTClaimValidationFailed('replicated "iss" claim header parameter mismatch', payload, 'iss', 'mismatch');
    }
    if (protectedHeader.sub !== undefined && protectedHeader.sub !== payload.sub) {
        throw new errors_js_1.JWTClaimValidationFailed('replicated "sub" claim header parameter mismatch', payload, 'sub', 'mismatch');
    }
    if (protectedHeader.aud !== undefined &&
        JSON.stringify(protectedHeader.aud) !== JSON.stringify(payload.aud)) {
        throw new errors_js_1.JWTClaimValidationFailed('replicated "aud" claim header parameter mismatch', payload, 'aud', 'mismatch');
    }
    const result = { payload, protectedHeader };
    if (typeof key === 'function') {
        return { ...result, key: decrypted.key };
    }
    return result;
}


/***/ }),

/***/ 8375:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EncryptJWT = void 0;
const encrypt_js_1 = __nccwpck_require__(4434);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const produce_js_1 = __nccwpck_require__(7318);
class EncryptJWT extends produce_js_1.ProduceJWT {
    _cek;
    _iv;
    _keyManagementParameters;
    _protectedHeader;
    _replicateIssuerAsHeader;
    _replicateSubjectAsHeader;
    _replicateAudienceAsHeader;
    setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
            throw new TypeError('setProtectedHeader can only be called once');
        }
        this._protectedHeader = protectedHeader;
        return this;
    }
    setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
            throw new TypeError('setKeyManagementParameters can only be called once');
        }
        this._keyManagementParameters = parameters;
        return this;
    }
    setContentEncryptionKey(cek) {
        if (this._cek) {
            throw new TypeError('setContentEncryptionKey can only be called once');
        }
        this._cek = cek;
        return this;
    }
    setInitializationVector(iv) {
        if (this._iv) {
            throw new TypeError('setInitializationVector can only be called once');
        }
        this._iv = iv;
        return this;
    }
    replicateIssuerAsHeader() {
        this._replicateIssuerAsHeader = true;
        return this;
    }
    replicateSubjectAsHeader() {
        this._replicateSubjectAsHeader = true;
        return this;
    }
    replicateAudienceAsHeader() {
        this._replicateAudienceAsHeader = true;
        return this;
    }
    async encrypt(key, options) {
        const enc = new encrypt_js_1.CompactEncrypt(buffer_utils_js_1.encoder.encode(JSON.stringify(this._payload)));
        if (this._replicateIssuerAsHeader) {
            this._protectedHeader = { ...this._protectedHeader, iss: this._payload.iss };
        }
        if (this._replicateSubjectAsHeader) {
            this._protectedHeader = { ...this._protectedHeader, sub: this._payload.sub };
        }
        if (this._replicateAudienceAsHeader) {
            this._protectedHeader = { ...this._protectedHeader, aud: this._payload.aud };
        }
        enc.setProtectedHeader(this._protectedHeader);
        if (this._iv) {
            enc.setInitializationVector(this._iv);
        }
        if (this._cek) {
            enc.setContentEncryptionKey(this._cek);
        }
        if (this._keyManagementParameters) {
            enc.setKeyManagementParameters(this._keyManagementParameters);
        }
        return enc.encrypt(key, options);
    }
}
exports.EncryptJWT = EncryptJWT;


/***/ }),

/***/ 7318:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProduceJWT = void 0;
const epoch_js_1 = __nccwpck_require__(485);
const is_object_js_1 = __nccwpck_require__(2242);
const secs_js_1 = __nccwpck_require__(556);
function validateInput(label, input) {
    if (!Number.isFinite(input)) {
        throw new TypeError(`Invalid ${label} input`);
    }
    return input;
}
class ProduceJWT {
    _payload;
    constructor(payload = {}) {
        if (!(0, is_object_js_1.default)(payload)) {
            throw new TypeError('JWT Claims Set MUST be an object');
        }
        this._payload = payload;
    }
    setIssuer(issuer) {
        this._payload = { ...this._payload, iss: issuer };
        return this;
    }
    setSubject(subject) {
        this._payload = { ...this._payload, sub: subject };
        return this;
    }
    setAudience(audience) {
        this._payload = { ...this._payload, aud: audience };
        return this;
    }
    setJti(jwtId) {
        this._payload = { ...this._payload, jti: jwtId };
        return this;
    }
    setNotBefore(input) {
        if (typeof input === 'number') {
            this._payload = { ...this._payload, nbf: validateInput('setNotBefore', input) };
        }
        else if (input instanceof Date) {
            this._payload = { ...this._payload, nbf: validateInput('setNotBefore', (0, epoch_js_1.default)(input)) };
        }
        else {
            this._payload = { ...this._payload, nbf: (0, epoch_js_1.default)(new Date()) + (0, secs_js_1.default)(input) };
        }
        return this;
    }
    setExpirationTime(input) {
        if (typeof input === 'number') {
            this._payload = { ...this._payload, exp: validateInput('setExpirationTime', input) };
        }
        else if (input instanceof Date) {
            this._payload = { ...this._payload, exp: validateInput('setExpirationTime', (0, epoch_js_1.default)(input)) };
        }
        else {
            this._payload = { ...this._payload, exp: (0, epoch_js_1.default)(new Date()) + (0, secs_js_1.default)(input) };
        }
        return this;
    }
    setIssuedAt(input) {
        if (typeof input === 'undefined') {
            this._payload = { ...this._payload, iat: (0, epoch_js_1.default)(new Date()) };
        }
        else if (input instanceof Date) {
            this._payload = { ...this._payload, iat: validateInput('setIssuedAt', (0, epoch_js_1.default)(input)) };
        }
        else if (typeof input === 'string') {
            this._payload = {
                ...this._payload,
                iat: validateInput('setIssuedAt', (0, epoch_js_1.default)(new Date()) + (0, secs_js_1.default)(input)),
            };
        }
        else {
            this._payload = { ...this._payload, iat: validateInput('setIssuedAt', input) };
        }
        return this;
    }
}
exports.ProduceJWT = ProduceJWT;


/***/ }),

/***/ 2713:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignJWT = void 0;
const sign_js_1 = __nccwpck_require__(1760);
const errors_js_1 = __nccwpck_require__(5974);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const produce_js_1 = __nccwpck_require__(7318);
class SignJWT extends produce_js_1.ProduceJWT {
    _protectedHeader;
    setProtectedHeader(protectedHeader) {
        this._protectedHeader = protectedHeader;
        return this;
    }
    async sign(key, options) {
        const sig = new sign_js_1.CompactSign(buffer_utils_js_1.encoder.encode(JSON.stringify(this._payload)));
        sig.setProtectedHeader(this._protectedHeader);
        if (Array.isArray(this._protectedHeader?.crit) &&
            this._protectedHeader.crit.includes('b64') &&
            this._protectedHeader.b64 === false) {
            throw new errors_js_1.JWTInvalid('JWTs MUST NOT use unencoded payload');
        }
        return sig.sign(key, options);
    }
}
exports.SignJWT = SignJWT;


/***/ }),

/***/ 560:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnsecuredJWT = void 0;
const base64url = __nccwpck_require__(2635);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const errors_js_1 = __nccwpck_require__(5974);
const jwt_claims_set_js_1 = __nccwpck_require__(3354);
const produce_js_1 = __nccwpck_require__(7318);
class UnsecuredJWT extends produce_js_1.ProduceJWT {
    encode() {
        const header = base64url.encode(JSON.stringify({ alg: 'none' }));
        const payload = base64url.encode(JSON.stringify(this._payload));
        return `${header}.${payload}.`;
    }
    static decode(jwt, options) {
        if (typeof jwt !== 'string') {
            throw new errors_js_1.JWTInvalid('Unsecured JWT must be a string');
        }
        const { 0: encodedHeader, 1: encodedPayload, 2: signature, length } = jwt.split('.');
        if (length !== 3 || signature !== '') {
            throw new errors_js_1.JWTInvalid('Invalid Unsecured JWT');
        }
        let header;
        try {
            header = JSON.parse(buffer_utils_js_1.decoder.decode(base64url.decode(encodedHeader)));
            if (header.alg !== 'none')
                throw new Error();
        }
        catch {
            throw new errors_js_1.JWTInvalid('Invalid Unsecured JWT');
        }
        const payload = (0, jwt_claims_set_js_1.default)(header, base64url.decode(encodedPayload), options);
        return { payload, header };
    }
}
exports.UnsecuredJWT = UnsecuredJWT;


/***/ }),

/***/ 5297:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtVerify = jwtVerify;
const verify_js_1 = __nccwpck_require__(4212);
const jwt_claims_set_js_1 = __nccwpck_require__(3354);
const errors_js_1 = __nccwpck_require__(5974);
async function jwtVerify(jwt, key, options) {
    const verified = await (0, verify_js_1.compactVerify)(jwt, key, options);
    if (verified.protectedHeader.crit?.includes('b64') && verified.protectedHeader.b64 === false) {
        throw new errors_js_1.JWTInvalid('JWTs MUST NOT use unencoded payload');
    }
    const payload = (0, jwt_claims_set_js_1.default)(verified.protectedHeader, verified.payload, options);
    const result = { payload, protectedHeader: verified.protectedHeader };
    if (typeof key === 'function') {
        return { ...result, key: verified.key };
    }
    return result;
}


/***/ }),

/***/ 8108:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exportSPKI = exportSPKI;
exports.exportPKCS8 = exportPKCS8;
exports.exportJWK = exportJWK;
const asn1_js_1 = __nccwpck_require__(2774);
const asn1_js_2 = __nccwpck_require__(2774);
const key_to_jwk_js_1 = __nccwpck_require__(9041);
async function exportSPKI(key) {
    return (0, asn1_js_1.toSPKI)(key);
}
async function exportPKCS8(key) {
    return (0, asn1_js_2.toPKCS8)(key);
}
async function exportJWK(key) {
    return (0, key_to_jwk_js_1.default)(key);
}


/***/ }),

/***/ 7820:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateKeyPair = generateKeyPair;
const generate_js_1 = __nccwpck_require__(88);
async function generateKeyPair(alg, options) {
    return (0, generate_js_1.generateKeyPair)(alg, options);
}


/***/ }),

/***/ 7152:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateSecret = generateSecret;
const generate_js_1 = __nccwpck_require__(88);
async function generateSecret(alg, options) {
    return (0, generate_js_1.generateSecret)(alg, options);
}


/***/ }),

/***/ 5647:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.importSPKI = importSPKI;
exports.importX509 = importX509;
exports.importPKCS8 = importPKCS8;
exports.importJWK = importJWK;
const base64url_js_1 = __nccwpck_require__(2635);
const asn1_js_1 = __nccwpck_require__(2774);
const jwk_to_key_js_1 = __nccwpck_require__(939);
const errors_js_1 = __nccwpck_require__(5974);
const is_object_js_1 = __nccwpck_require__(2242);
async function importSPKI(spki, alg, options) {
    if (typeof spki !== 'string' || spki.indexOf('-----BEGIN PUBLIC KEY-----') !== 0) {
        throw new TypeError('"spki" must be SPKI formatted string');
    }
    return (0, asn1_js_1.fromSPKI)(spki, alg, options);
}
async function importX509(x509, alg, options) {
    if (typeof x509 !== 'string' || x509.indexOf('-----BEGIN CERTIFICATE-----') !== 0) {
        throw new TypeError('"x509" must be X.509 formatted string');
    }
    return (0, asn1_js_1.fromX509)(x509, alg, options);
}
async function importPKCS8(pkcs8, alg, options) {
    if (typeof pkcs8 !== 'string' || pkcs8.indexOf('-----BEGIN PRIVATE KEY-----') !== 0) {
        throw new TypeError('"pkcs8" must be PKCS#8 formatted string');
    }
    return (0, asn1_js_1.fromPKCS8)(pkcs8, alg, options);
}
async function importJWK(jwk, alg) {
    if (!(0, is_object_js_1.default)(jwk)) {
        throw new TypeError('JWK must be an object');
    }
    alg ||= jwk.alg;
    switch (jwk.kty) {
        case 'oct':
            if (typeof jwk.k !== 'string' || !jwk.k) {
                throw new TypeError('missing "k" (Key Value) Parameter value');
            }
            return (0, base64url_js_1.decode)(jwk.k);
        case 'RSA':
            if ('oth' in jwk && jwk.oth !== undefined) {
                throw new errors_js_1.JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
            }
        case 'EC':
        case 'OKP':
            return (0, jwk_to_key_js_1.default)({ ...jwk, alg });
        default:
            throw new errors_js_1.JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
    }
}


/***/ }),

/***/ 5864:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wrap = wrap;
exports.unwrap = unwrap;
const encrypt_js_1 = __nccwpck_require__(6286);
const decrypt_js_1 = __nccwpck_require__(2806);
const base64url_js_1 = __nccwpck_require__(2635);
async function wrap(alg, key, cek, iv) {
    const jweAlgorithm = alg.slice(0, 7);
    const wrapped = await (0, encrypt_js_1.default)(jweAlgorithm, cek, key, iv, new Uint8Array(0));
    return {
        encryptedKey: wrapped.ciphertext,
        iv: (0, base64url_js_1.encode)(wrapped.iv),
        tag: (0, base64url_js_1.encode)(wrapped.tag),
    };
}
async function unwrap(alg, key, encryptedKey, iv, tag) {
    const jweAlgorithm = alg.slice(0, 7);
    return (0, decrypt_js_1.default)(jweAlgorithm, key, encryptedKey, iv, tag, new Uint8Array(0));
}


/***/ }),

/***/ 5734:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decoder = exports.encoder = void 0;
exports.concat = concat;
exports.p2s = p2s;
exports.uint64be = uint64be;
exports.uint32be = uint32be;
exports.lengthAndInput = lengthAndInput;
exports.concatKdf = concatKdf;
const digest_js_1 = __nccwpck_require__(2931);
exports.encoder = new TextEncoder();
exports.decoder = new TextDecoder();
const MAX_INT32 = 2 ** 32;
function concat(...buffers) {
    const size = buffers.reduce((acc, { length }) => acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    for (const buffer of buffers) {
        buf.set(buffer, i);
        i += buffer.length;
    }
    return buf;
}
function p2s(alg, p2sInput) {
    return concat(exports.encoder.encode(alg), new Uint8Array([0]), p2sInput);
}
function writeUInt32BE(buf, value, offset) {
    if (value < 0 || value >= MAX_INT32) {
        throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
    }
    buf.set([value >>> 24, value >>> 16, value >>> 8, value & 0xff], offset);
}
function uint64be(value) {
    const high = Math.floor(value / MAX_INT32);
    const low = value % MAX_INT32;
    const buf = new Uint8Array(8);
    writeUInt32BE(buf, high, 0);
    writeUInt32BE(buf, low, 4);
    return buf;
}
function uint32be(value) {
    const buf = new Uint8Array(4);
    writeUInt32BE(buf, value);
    return buf;
}
function lengthAndInput(input) {
    return concat(uint32be(input.length), input);
}
async function concatKdf(secret, bits, value) {
    const iterations = Math.ceil((bits >> 3) / 32);
    const res = new Uint8Array(iterations * 32);
    for (let iter = 0; iter < iterations; iter++) {
        const buf = new Uint8Array(4 + secret.length + value.length);
        buf.set(uint32be(iter + 1));
        buf.set(secret, 4);
        buf.set(value, 4 + secret.length);
        res.set(await (0, digest_js_1.default)('sha256', buf), iter * 32);
    }
    return res.slice(0, bits >> 3);
}


/***/ }),

/***/ 7937:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bitLength = bitLength;
const errors_js_1 = __nccwpck_require__(5974);
const random_js_1 = __nccwpck_require__(3376);
function bitLength(alg) {
    switch (alg) {
        case 'A128GCM':
            return 128;
        case 'A192GCM':
            return 192;
        case 'A256GCM':
        case 'A128CBC-HS256':
            return 256;
        case 'A192CBC-HS384':
            return 384;
        case 'A256CBC-HS512':
            return 512;
        default:
            throw new errors_js_1.JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
    }
}
exports["default"] = (alg) => (0, random_js_1.default)(new Uint8Array(bitLength(alg) >> 3));


/***/ }),

/***/ 3351:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const errors_js_1 = __nccwpck_require__(5974);
const iv_js_1 = __nccwpck_require__(6565);
const checkIvLength = (enc, iv) => {
    if (iv.length << 3 !== (0, iv_js_1.bitLength)(enc)) {
        throw new errors_js_1.JWEInvalid('Invalid Initialization Vector length');
    }
};
exports["default"] = checkIvLength;


/***/ }),

/***/ 9555:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkKeyTypeWithJwk = void 0;
const invalid_key_input_js_1 = __nccwpck_require__(6632);
const is_key_like_js_1 = __nccwpck_require__(7433);
const jwk = __nccwpck_require__(1229);
const tag = (key) => key?.[Symbol.toStringTag];
const jwkMatchesOp = (alg, key, usage) => {
    if (key.use !== undefined && key.use !== 'sig') {
        throw new TypeError('Invalid key for this operation, when present its use must be sig');
    }
    if (key.key_ops !== undefined && key.key_ops.includes?.(usage) !== true) {
        throw new TypeError(`Invalid key for this operation, when present its key_ops must include ${usage}`);
    }
    if (key.alg !== undefined && key.alg !== alg) {
        throw new TypeError(`Invalid key for this operation, when present its alg must be ${alg}`);
    }
    return true;
};
const symmetricTypeCheck = (alg, key, usage, allowJwk) => {
    if (key instanceof Uint8Array)
        return;
    if (allowJwk && jwk.isJWK(key)) {
        if (jwk.isSecretJWK(key) && jwkMatchesOp(alg, key, usage))
            return;
        throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
    }
    if (!(0, is_key_like_js_1.default)(key)) {
        throw new TypeError((0, invalid_key_input_js_1.withAlg)(alg, key, ...is_key_like_js_1.types, 'Uint8Array', allowJwk ? 'JSON Web Key' : null));
    }
    if (key.type !== 'secret') {
        throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
    }
};
const asymmetricTypeCheck = (alg, key, usage, allowJwk) => {
    if (allowJwk && jwk.isJWK(key)) {
        switch (usage) {
            case 'sign':
                if (jwk.isPrivateJWK(key) && jwkMatchesOp(alg, key, usage))
                    return;
                throw new TypeError(`JSON Web Key for this operation be a private JWK`);
            case 'verify':
                if (jwk.isPublicJWK(key) && jwkMatchesOp(alg, key, usage))
                    return;
                throw new TypeError(`JSON Web Key for this operation be a public JWK`);
        }
    }
    if (!(0, is_key_like_js_1.default)(key)) {
        throw new TypeError((0, invalid_key_input_js_1.withAlg)(alg, key, ...is_key_like_js_1.types, allowJwk ? 'JSON Web Key' : null));
    }
    if (key.type === 'secret') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (usage === 'sign' && key.type === 'public') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
    }
    if (usage === 'decrypt' && key.type === 'public') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
    }
    if (key.algorithm && usage === 'verify' && key.type === 'private') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
    }
    if (key.algorithm && usage === 'encrypt' && key.type === 'private') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
    }
};
function checkKeyType(allowJwk, alg, key, usage) {
    const symmetric = alg.startsWith('HS') ||
        alg === 'dir' ||
        alg.startsWith('PBES2') ||
        /^A\d{3}(?:GCM)?KW$/.test(alg);
    if (symmetric) {
        symmetricTypeCheck(alg, key, usage, allowJwk);
    }
    else {
        asymmetricTypeCheck(alg, key, usage, allowJwk);
    }
}
exports["default"] = checkKeyType.bind(undefined, false);
exports.checkKeyTypeWithJwk = checkKeyType.bind(undefined, true);


/***/ }),

/***/ 8040:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = checkP2s;
const errors_js_1 = __nccwpck_require__(5974);
function checkP2s(p2s) {
    if (!(p2s instanceof Uint8Array) || p2s.length < 8) {
        throw new errors_js_1.JWEInvalid('PBES2 Salt Input must be 8 or more octets');
    }
}


/***/ }),

/***/ 6319:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkSigCryptoKey = checkSigCryptoKey;
exports.checkEncCryptoKey = checkEncCryptoKey;
function unusable(name, prop = 'algorithm.name') {
    return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
    return algorithm.name === name;
}
function getHashLength(hash) {
    return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
    switch (alg) {
        case 'ES256':
            return 'P-256';
        case 'ES384':
            return 'P-384';
        case 'ES512':
            return 'P-521';
        default:
            throw new Error('unreachable');
    }
}
function checkUsage(key, usages) {
    if (usages.length && !usages.some((expected) => key.usages.includes(expected))) {
        let msg = 'CryptoKey does not support this operation, its usages must include ';
        if (usages.length > 2) {
            const last = usages.pop();
            msg += `one of ${usages.join(', ')}, or ${last}.`;
        }
        else if (usages.length === 2) {
            msg += `one of ${usages[0]} or ${usages[1]}.`;
        }
        else {
            msg += `${usages[0]}.`;
        }
        throw new TypeError(msg);
    }
}
function checkSigCryptoKey(key, alg, ...usages) {
    switch (alg) {
        case 'HS256':
        case 'HS384':
        case 'HS512': {
            if (!isAlgorithm(key.algorithm, 'HMAC'))
                throw unusable('HMAC');
            const expected = parseInt(alg.slice(2), 10);
            const actual = getHashLength(key.algorithm.hash);
            if (actual !== expected)
                throw unusable(`SHA-${expected}`, 'algorithm.hash');
            break;
        }
        case 'RS256':
        case 'RS384':
        case 'RS512': {
            if (!isAlgorithm(key.algorithm, 'RSASSA-PKCS1-v1_5'))
                throw unusable('RSASSA-PKCS1-v1_5');
            const expected = parseInt(alg.slice(2), 10);
            const actual = getHashLength(key.algorithm.hash);
            if (actual !== expected)
                throw unusable(`SHA-${expected}`, 'algorithm.hash');
            break;
        }
        case 'PS256':
        case 'PS384':
        case 'PS512': {
            if (!isAlgorithm(key.algorithm, 'RSA-PSS'))
                throw unusable('RSA-PSS');
            const expected = parseInt(alg.slice(2), 10);
            const actual = getHashLength(key.algorithm.hash);
            if (actual !== expected)
                throw unusable(`SHA-${expected}`, 'algorithm.hash');
            break;
        }
        case 'EdDSA': {
            if (key.algorithm.name !== 'Ed25519' && key.algorithm.name !== 'Ed448') {
                throw unusable('Ed25519 or Ed448');
            }
            break;
        }
        case 'Ed25519': {
            if (!isAlgorithm(key.algorithm, 'Ed25519'))
                throw unusable('Ed25519');
            break;
        }
        case 'ES256':
        case 'ES384':
        case 'ES512': {
            if (!isAlgorithm(key.algorithm, 'ECDSA'))
                throw unusable('ECDSA');
            const expected = getNamedCurve(alg);
            const actual = key.algorithm.namedCurve;
            if (actual !== expected)
                throw unusable(expected, 'algorithm.namedCurve');
            break;
        }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usages);
}
function checkEncCryptoKey(key, alg, ...usages) {
    switch (alg) {
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM': {
            if (!isAlgorithm(key.algorithm, 'AES-GCM'))
                throw unusable('AES-GCM');
            const expected = parseInt(alg.slice(1, 4), 10);
            const actual = key.algorithm.length;
            if (actual !== expected)
                throw unusable(expected, 'algorithm.length');
            break;
        }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW': {
            if (!isAlgorithm(key.algorithm, 'AES-KW'))
                throw unusable('AES-KW');
            const expected = parseInt(alg.slice(1, 4), 10);
            const actual = key.algorithm.length;
            if (actual !== expected)
                throw unusable(expected, 'algorithm.length');
            break;
        }
        case 'ECDH': {
            switch (key.algorithm.name) {
                case 'ECDH':
                case 'X25519':
                case 'X448':
                    break;
                default:
                    throw unusable('ECDH, X25519, or X448');
            }
            break;
        }
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW':
            if (!isAlgorithm(key.algorithm, 'PBKDF2'))
                throw unusable('PBKDF2');
            break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512': {
            if (!isAlgorithm(key.algorithm, 'RSA-OAEP'))
                throw unusable('RSA-OAEP');
            const expected = parseInt(alg.slice(9), 10) || 1;
            const actual = getHashLength(key.algorithm.hash);
            if (actual !== expected)
                throw unusable(`SHA-${expected}`, 'algorithm.hash');
            break;
        }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usages);
}


/***/ }),

/***/ 6243:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const aeskw_js_1 = __nccwpck_require__(6202);
const ECDH = __nccwpck_require__(3359);
const pbes2kw_js_1 = __nccwpck_require__(2741);
const rsaes_js_1 = __nccwpck_require__(1129);
const base64url_js_1 = __nccwpck_require__(2635);
const normalize_key_js_1 = __nccwpck_require__(1276);
const errors_js_1 = __nccwpck_require__(5974);
const cek_js_1 = __nccwpck_require__(7937);
const import_js_1 = __nccwpck_require__(5647);
const check_key_type_js_1 = __nccwpck_require__(9555);
const is_object_js_1 = __nccwpck_require__(2242);
const aesgcmkw_js_1 = __nccwpck_require__(5864);
async function decryptKeyManagement(alg, key, encryptedKey, joseHeader, options) {
    (0, check_key_type_js_1.default)(alg, key, 'decrypt');
    key = (await normalize_key_js_1.default.normalizePrivateKey?.(key, alg)) || key;
    switch (alg) {
        case 'dir': {
            if (encryptedKey !== undefined)
                throw new errors_js_1.JWEInvalid('Encountered unexpected JWE Encrypted Key');
            return key;
        }
        case 'ECDH-ES':
            if (encryptedKey !== undefined)
                throw new errors_js_1.JWEInvalid('Encountered unexpected JWE Encrypted Key');
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW': {
            if (!(0, is_object_js_1.default)(joseHeader.epk))
                throw new errors_js_1.JWEInvalid(`JOSE Header "epk" (Ephemeral Public Key) missing or invalid`);
            if (!ECDH.ecdhAllowed(key))
                throw new errors_js_1.JOSENotSupported('ECDH with the provided key is not allowed or not supported by your javascript runtime');
            const epk = await (0, import_js_1.importJWK)(joseHeader.epk, alg);
            let partyUInfo;
            let partyVInfo;
            if (joseHeader.apu !== undefined) {
                if (typeof joseHeader.apu !== 'string')
                    throw new errors_js_1.JWEInvalid(`JOSE Header "apu" (Agreement PartyUInfo) invalid`);
                try {
                    partyUInfo = (0, base64url_js_1.decode)(joseHeader.apu);
                }
                catch {
                    throw new errors_js_1.JWEInvalid('Failed to base64url decode the apu');
                }
            }
            if (joseHeader.apv !== undefined) {
                if (typeof joseHeader.apv !== 'string')
                    throw new errors_js_1.JWEInvalid(`JOSE Header "apv" (Agreement PartyVInfo) invalid`);
                try {
                    partyVInfo = (0, base64url_js_1.decode)(joseHeader.apv);
                }
                catch {
                    throw new errors_js_1.JWEInvalid('Failed to base64url decode the apv');
                }
            }
            const sharedSecret = await ECDH.deriveKey(epk, key, alg === 'ECDH-ES' ? joseHeader.enc : alg, alg === 'ECDH-ES' ? (0, cek_js_1.bitLength)(joseHeader.enc) : parseInt(alg.slice(-5, -2), 10), partyUInfo, partyVInfo);
            if (alg === 'ECDH-ES')
                return sharedSecret;
            if (encryptedKey === undefined)
                throw new errors_js_1.JWEInvalid('JWE Encrypted Key missing');
            return (0, aeskw_js_1.unwrap)(alg.slice(-6), sharedSecret, encryptedKey);
        }
        case 'RSA1_5':
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512': {
            if (encryptedKey === undefined)
                throw new errors_js_1.JWEInvalid('JWE Encrypted Key missing');
            return (0, rsaes_js_1.decrypt)(alg, key, encryptedKey);
        }
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW': {
            if (encryptedKey === undefined)
                throw new errors_js_1.JWEInvalid('JWE Encrypted Key missing');
            if (typeof joseHeader.p2c !== 'number')
                throw new errors_js_1.JWEInvalid(`JOSE Header "p2c" (PBES2 Count) missing or invalid`);
            const p2cLimit = options?.maxPBES2Count || 10_000;
            if (joseHeader.p2c > p2cLimit)
                throw new errors_js_1.JWEInvalid(`JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds`);
            if (typeof joseHeader.p2s !== 'string')
                throw new errors_js_1.JWEInvalid(`JOSE Header "p2s" (PBES2 Salt) missing or invalid`);
            let p2s;
            try {
                p2s = (0, base64url_js_1.decode)(joseHeader.p2s);
            }
            catch {
                throw new errors_js_1.JWEInvalid('Failed to base64url decode the p2s');
            }
            return (0, pbes2kw_js_1.decrypt)(alg, key, encryptedKey, joseHeader.p2c, p2s);
        }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW': {
            if (encryptedKey === undefined)
                throw new errors_js_1.JWEInvalid('JWE Encrypted Key missing');
            return (0, aeskw_js_1.unwrap)(alg, key, encryptedKey);
        }
        case 'A128GCMKW':
        case 'A192GCMKW':
        case 'A256GCMKW': {
            if (encryptedKey === undefined)
                throw new errors_js_1.JWEInvalid('JWE Encrypted Key missing');
            if (typeof joseHeader.iv !== 'string')
                throw new errors_js_1.JWEInvalid(`JOSE Header "iv" (Initialization Vector) missing or invalid`);
            if (typeof joseHeader.tag !== 'string')
                throw new errors_js_1.JWEInvalid(`JOSE Header "tag" (Authentication Tag) missing or invalid`);
            let iv;
            try {
                iv = (0, base64url_js_1.decode)(joseHeader.iv);
            }
            catch {
                throw new errors_js_1.JWEInvalid('Failed to base64url decode the iv');
            }
            let tag;
            try {
                tag = (0, base64url_js_1.decode)(joseHeader.tag);
            }
            catch {
                throw new errors_js_1.JWEInvalid('Failed to base64url decode the tag');
            }
            return (0, aesgcmkw_js_1.unwrap)(alg, key, encryptedKey, iv, tag);
        }
        default: {
            throw new errors_js_1.JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
        }
    }
}
exports["default"] = decryptKeyManagement;


/***/ }),

/***/ 6539:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const aeskw_js_1 = __nccwpck_require__(6202);
const ECDH = __nccwpck_require__(3359);
const pbes2kw_js_1 = __nccwpck_require__(2741);
const rsaes_js_1 = __nccwpck_require__(1129);
const base64url_js_1 = __nccwpck_require__(2635);
const normalize_key_js_1 = __nccwpck_require__(1276);
const cek_js_1 = __nccwpck_require__(7937);
const errors_js_1 = __nccwpck_require__(5974);
const export_js_1 = __nccwpck_require__(8108);
const check_key_type_js_1 = __nccwpck_require__(9555);
const aesgcmkw_js_1 = __nccwpck_require__(5864);
async function encryptKeyManagement(alg, enc, key, providedCek, providedParameters = {}) {
    let encryptedKey;
    let parameters;
    let cek;
    (0, check_key_type_js_1.default)(alg, key, 'encrypt');
    key = (await normalize_key_js_1.default.normalizePublicKey?.(key, alg)) || key;
    switch (alg) {
        case 'dir': {
            cek = key;
            break;
        }
        case 'ECDH-ES':
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW': {
            if (!ECDH.ecdhAllowed(key)) {
                throw new errors_js_1.JOSENotSupported('ECDH with the provided key is not allowed or not supported by your javascript runtime');
            }
            const { apu, apv } = providedParameters;
            let { epk: ephemeralKey } = providedParameters;
            ephemeralKey ||= (await ECDH.generateEpk(key)).privateKey;
            const { x, y, crv, kty } = await (0, export_js_1.exportJWK)(ephemeralKey);
            const sharedSecret = await ECDH.deriveKey(key, ephemeralKey, alg === 'ECDH-ES' ? enc : alg, alg === 'ECDH-ES' ? (0, cek_js_1.bitLength)(enc) : parseInt(alg.slice(-5, -2), 10), apu, apv);
            parameters = { epk: { x, crv, kty } };
            if (kty === 'EC')
                parameters.epk.y = y;
            if (apu)
                parameters.apu = (0, base64url_js_1.encode)(apu);
            if (apv)
                parameters.apv = (0, base64url_js_1.encode)(apv);
            if (alg === 'ECDH-ES') {
                cek = sharedSecret;
                break;
            }
            cek = providedCek || (0, cek_js_1.default)(enc);
            const kwAlg = alg.slice(-6);
            encryptedKey = await (0, aeskw_js_1.wrap)(kwAlg, sharedSecret, cek);
            break;
        }
        case 'RSA1_5':
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512': {
            cek = providedCek || (0, cek_js_1.default)(enc);
            encryptedKey = await (0, rsaes_js_1.encrypt)(alg, key, cek);
            break;
        }
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW': {
            cek = providedCek || (0, cek_js_1.default)(enc);
            const { p2c, p2s } = providedParameters;
            ({ encryptedKey, ...parameters } = await (0, pbes2kw_js_1.encrypt)(alg, key, cek, p2c, p2s));
            break;
        }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW': {
            cek = providedCek || (0, cek_js_1.default)(enc);
            encryptedKey = await (0, aeskw_js_1.wrap)(alg, key, cek);
            break;
        }
        case 'A128GCMKW':
        case 'A192GCMKW':
        case 'A256GCMKW': {
            cek = providedCek || (0, cek_js_1.default)(enc);
            const { iv } = providedParameters;
            ({ encryptedKey, ...parameters } = await (0, aesgcmkw_js_1.wrap)(alg, key, cek, iv));
            break;
        }
        default: {
            throw new errors_js_1.JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
        }
    }
    return { cek, encryptedKey, parameters };
}
exports["default"] = encryptKeyManagement;


/***/ }),

/***/ 485:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = (date) => Math.floor(date.getTime() / 1000);


/***/ }),

/***/ 6632:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.withAlg = withAlg;
function message(msg, actual, ...types) {
    types = types.filter(Boolean);
    if (types.length > 2) {
        const last = types.pop();
        msg += `one of type ${types.join(', ')}, or ${last}.`;
    }
    else if (types.length === 2) {
        msg += `one of type ${types[0]} or ${types[1]}.`;
    }
    else {
        msg += `of type ${types[0]}.`;
    }
    if (actual == null) {
        msg += ` Received ${actual}`;
    }
    else if (typeof actual === 'function' && actual.name) {
        msg += ` Received function ${actual.name}`;
    }
    else if (typeof actual === 'object' && actual != null) {
        if (actual.constructor?.name) {
            msg += ` Received an instance of ${actual.constructor.name}`;
        }
    }
    return msg;
}
exports["default"] = (actual, ...types) => {
    return message('Key must be ', actual, ...types);
};
function withAlg(alg, actual, ...types) {
    return message(`Key for the ${alg} algorithm must be `, actual, ...types);
}


/***/ }),

/***/ 1853:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const isDisjoint = (...headers) => {
    const sources = headers.filter(Boolean);
    if (sources.length === 0 || sources.length === 1) {
        return true;
    }
    let acc;
    for (const header of sources) {
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
            acc = new Set(parameters);
            continue;
        }
        for (const parameter of parameters) {
            if (acc.has(parameter)) {
                return false;
            }
            acc.add(parameter);
        }
    }
    return true;
};
exports["default"] = isDisjoint;


/***/ }),

/***/ 1229:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isJWK = isJWK;
exports.isPrivateJWK = isPrivateJWK;
exports.isPublicJWK = isPublicJWK;
exports.isSecretJWK = isSecretJWK;
const is_object_js_1 = __nccwpck_require__(2242);
function isJWK(key) {
    return (0, is_object_js_1.default)(key) && typeof key.kty === 'string';
}
function isPrivateJWK(key) {
    return key.kty !== 'oct' && typeof key.d === 'string';
}
function isPublicJWK(key) {
    return key.kty !== 'oct' && typeof key.d === 'undefined';
}
function isSecretJWK(key) {
    return isJWK(key) && key.kty === 'oct' && typeof key.k === 'string';
}


/***/ }),

/***/ 2242:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = isObject;
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
function isObject(input) {
    if (!isObjectLike(input) || Object.prototype.toString.call(input) !== '[object Object]') {
        return false;
    }
    if (Object.getPrototypeOf(input) === null) {
        return true;
    }
    let proto = input;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(input) === proto;
}


/***/ }),

/***/ 6565:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bitLength = bitLength;
const errors_js_1 = __nccwpck_require__(5974);
const random_js_1 = __nccwpck_require__(3376);
function bitLength(alg) {
    switch (alg) {
        case 'A128GCM':
        case 'A128GCMKW':
        case 'A192GCM':
        case 'A192GCMKW':
        case 'A256GCM':
        case 'A256GCMKW':
            return 96;
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
            return 128;
        default:
            throw new errors_js_1.JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
    }
}
exports["default"] = (alg) => (0, random_js_1.default)(new Uint8Array(bitLength(alg) >> 3));


/***/ }),

/***/ 3354:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const errors_js_1 = __nccwpck_require__(5974);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const epoch_js_1 = __nccwpck_require__(485);
const secs_js_1 = __nccwpck_require__(556);
const is_object_js_1 = __nccwpck_require__(2242);
const normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, '');
const checkAudiencePresence = (audPayload, audOption) => {
    if (typeof audPayload === 'string') {
        return audOption.includes(audPayload);
    }
    if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
    }
    return false;
};
exports["default"] = (protectedHeader, encodedPayload, options = {}) => {
    let payload;
    try {
        payload = JSON.parse(buffer_utils_js_1.decoder.decode(encodedPayload));
    }
    catch {
    }
    if (!(0, is_object_js_1.default)(payload)) {
        throw new errors_js_1.JWTInvalid('JWT Claims Set must be a top-level JSON object');
    }
    const { typ } = options;
    if (typ &&
        (typeof protectedHeader.typ !== 'string' ||
            normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new errors_js_1.JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, 'typ', 'check_failed');
    }
    const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
    const presenceCheck = [...requiredClaims];
    if (maxTokenAge !== undefined)
        presenceCheck.push('iat');
    if (audience !== undefined)
        presenceCheck.push('aud');
    if (subject !== undefined)
        presenceCheck.push('sub');
    if (issuer !== undefined)
        presenceCheck.push('iss');
    for (const claim of new Set(presenceCheck.reverse())) {
        if (!(claim in payload)) {
            throw new errors_js_1.JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, 'missing');
        }
    }
    if (issuer &&
        !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
        throw new errors_js_1.JWTClaimValidationFailed('unexpected "iss" claim value', payload, 'iss', 'check_failed');
    }
    if (subject && payload.sub !== subject) {
        throw new errors_js_1.JWTClaimValidationFailed('unexpected "sub" claim value', payload, 'sub', 'check_failed');
    }
    if (audience &&
        !checkAudiencePresence(payload.aud, typeof audience === 'string' ? [audience] : audience)) {
        throw new errors_js_1.JWTClaimValidationFailed('unexpected "aud" claim value', payload, 'aud', 'check_failed');
    }
    let tolerance;
    switch (typeof options.clockTolerance) {
        case 'string':
            tolerance = (0, secs_js_1.default)(options.clockTolerance);
            break;
        case 'number':
            tolerance = options.clockTolerance;
            break;
        case 'undefined':
            tolerance = 0;
            break;
        default:
            throw new TypeError('Invalid clockTolerance option type');
    }
    const { currentDate } = options;
    const now = (0, epoch_js_1.default)(currentDate || new Date());
    if ((payload.iat !== undefined || maxTokenAge) && typeof payload.iat !== 'number') {
        throw new errors_js_1.JWTClaimValidationFailed('"iat" claim must be a number', payload, 'iat', 'invalid');
    }
    if (payload.nbf !== undefined) {
        if (typeof payload.nbf !== 'number') {
            throw new errors_js_1.JWTClaimValidationFailed('"nbf" claim must be a number', payload, 'nbf', 'invalid');
        }
        if (payload.nbf > now + tolerance) {
            throw new errors_js_1.JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, 'nbf', 'check_failed');
        }
    }
    if (payload.exp !== undefined) {
        if (typeof payload.exp !== 'number') {
            throw new errors_js_1.JWTClaimValidationFailed('"exp" claim must be a number', payload, 'exp', 'invalid');
        }
        if (payload.exp <= now - tolerance) {
            throw new errors_js_1.JWTExpired('"exp" claim timestamp check failed', payload, 'exp', 'check_failed');
        }
    }
    if (maxTokenAge) {
        const age = now - payload.iat;
        const max = typeof maxTokenAge === 'number' ? maxTokenAge : (0, secs_js_1.default)(maxTokenAge);
        if (age - tolerance > max) {
            throw new errors_js_1.JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, 'iat', 'check_failed');
        }
        if (age < 0 - tolerance) {
            throw new errors_js_1.JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, 'iat', 'check_failed');
        }
    }
    return payload;
};


/***/ }),

/***/ 6433:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unprotected = void 0;
exports.unprotected = Symbol();


/***/ }),

/***/ 556:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const year = day * 365.25;
const REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
exports["default"] = (str) => {
    const matched = REGEX.exec(str);
    if (!matched || (matched[4] && matched[1])) {
        throw new TypeError('Invalid time period format');
    }
    const value = parseFloat(matched[2]);
    const unit = matched[3].toLowerCase();
    let numericDate;
    switch (unit) {
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
        case 's':
            numericDate = Math.round(value);
            break;
        case 'minute':
        case 'minutes':
        case 'min':
        case 'mins':
        case 'm':
            numericDate = Math.round(value * minute);
            break;
        case 'hour':
        case 'hours':
        case 'hr':
        case 'hrs':
        case 'h':
            numericDate = Math.round(value * hour);
            break;
        case 'day':
        case 'days':
        case 'd':
            numericDate = Math.round(value * day);
            break;
        case 'week':
        case 'weeks':
        case 'w':
            numericDate = Math.round(value * week);
            break;
        default:
            numericDate = Math.round(value * year);
            break;
    }
    if (matched[1] === '-' || matched[4] === 'ago') {
        return -numericDate;
    }
    return numericDate;
};


/***/ }),

/***/ 9917:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validateAlgorithms = (option, algorithms) => {
    if (algorithms !== undefined &&
        (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== 'string'))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
    }
    if (!algorithms) {
        return undefined;
    }
    return new Set(algorithms);
};
exports["default"] = validateAlgorithms;


/***/ }),

/***/ 5595:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const errors_js_1 = __nccwpck_require__(5974);
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
    if (joseHeader.crit !== undefined && protectedHeader?.crit === undefined) {
        throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!protectedHeader || protectedHeader.crit === undefined) {
        return new Set();
    }
    if (!Array.isArray(protectedHeader.crit) ||
        protectedHeader.crit.length === 0 ||
        protectedHeader.crit.some((input) => typeof input !== 'string' || input.length === 0)) {
        throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let recognized;
    if (recognizedOption !== undefined) {
        recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
    }
    else {
        recognized = recognizedDefault;
    }
    for (const parameter of protectedHeader.crit) {
        if (!recognized.has(parameter)) {
            throw new errors_js_1.JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
        }
        if (joseHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" is missing`);
        }
        if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
        }
    }
    return new Set(protectedHeader.crit);
}
exports["default"] = validateCrit;


/***/ }),

/***/ 6202:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unwrap = exports.wrap = void 0;
const node_buffer_1 = __nccwpck_require__(4573);
const node_crypto_1 = __nccwpck_require__(7598);
const errors_js_1 = __nccwpck_require__(5974);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const webcrypto_js_1 = __nccwpck_require__(9044);
const crypto_key_js_1 = __nccwpck_require__(6319);
const is_key_object_js_1 = __nccwpck_require__(8685);
const invalid_key_input_js_1 = __nccwpck_require__(6632);
const ciphers_js_1 = __nccwpck_require__(9271);
const is_key_like_js_1 = __nccwpck_require__(7433);
function checkKeySize(key, alg) {
    if (key.symmetricKeySize << 3 !== parseInt(alg.slice(1, 4), 10)) {
        throw new TypeError(`Invalid key size for alg: ${alg}`);
    }
}
function ensureKeyObject(key, alg, usage) {
    if ((0, is_key_object_js_1.default)(key)) {
        return key;
    }
    if (key instanceof Uint8Array) {
        return (0, node_crypto_1.createSecretKey)(key);
    }
    if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(key, alg, usage);
        return node_crypto_1.KeyObject.from(key);
    }
    throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types, 'Uint8Array'));
}
const wrap = (alg, key, cek) => {
    const size = parseInt(alg.slice(1, 4), 10);
    const algorithm = `aes${size}-wrap`;
    if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
    const keyObject = ensureKeyObject(key, alg, 'wrapKey');
    checkKeySize(keyObject, alg);
    const cipher = (0, node_crypto_1.createCipheriv)(algorithm, keyObject, node_buffer_1.Buffer.alloc(8, 0xa6));
    return (0, buffer_utils_js_1.concat)(cipher.update(cek), cipher.final());
};
exports.wrap = wrap;
const unwrap = (alg, key, encryptedKey) => {
    const size = parseInt(alg.slice(1, 4), 10);
    const algorithm = `aes${size}-wrap`;
    if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
    const keyObject = ensureKeyObject(key, alg, 'unwrapKey');
    checkKeySize(keyObject, alg);
    const cipher = (0, node_crypto_1.createDecipheriv)(algorithm, keyObject, node_buffer_1.Buffer.alloc(8, 0xa6));
    return (0, buffer_utils_js_1.concat)(cipher.update(encryptedKey), cipher.final());
};
exports.unwrap = unwrap;


/***/ }),

/***/ 2774:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromX509 = exports.fromSPKI = exports.fromPKCS8 = exports.toPKCS8 = exports.toSPKI = void 0;
const node_crypto_1 = __nccwpck_require__(7598);
const node_buffer_1 = __nccwpck_require__(4573);
const webcrypto_js_1 = __nccwpck_require__(9044);
const is_key_object_js_1 = __nccwpck_require__(8685);
const invalid_key_input_js_1 = __nccwpck_require__(6632);
const is_key_like_js_1 = __nccwpck_require__(7433);
const genericExport = (keyType, keyFormat, key) => {
    let keyObject;
    if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        if (!key.extractable) {
            throw new TypeError('CryptoKey is not extractable');
        }
        keyObject = node_crypto_1.KeyObject.from(key);
    }
    else if ((0, is_key_object_js_1.default)(key)) {
        keyObject = key;
    }
    else {
        throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types));
    }
    if (keyObject.type !== keyType) {
        throw new TypeError(`key is not a ${keyType} key`);
    }
    return keyObject.export({ format: 'pem', type: keyFormat });
};
const toSPKI = (key) => {
    return genericExport('public', 'spki', key);
};
exports.toSPKI = toSPKI;
const toPKCS8 = (key) => {
    return genericExport('private', 'pkcs8', key);
};
exports.toPKCS8 = toPKCS8;
const fromPKCS8 = (pem) => (0, node_crypto_1.createPrivateKey)({
    key: node_buffer_1.Buffer.from(pem.replace(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, ''), 'base64'),
    type: 'pkcs8',
    format: 'der',
});
exports.fromPKCS8 = fromPKCS8;
const fromSPKI = (pem) => (0, node_crypto_1.createPublicKey)({
    key: node_buffer_1.Buffer.from(pem.replace(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, ''), 'base64'),
    type: 'spki',
    format: 'der',
});
exports.fromSPKI = fromSPKI;
const fromX509 = (pem) => (0, node_crypto_1.createPublicKey)({
    key: pem,
    type: 'spki',
    format: 'pem',
});
exports.fromX509 = fromX509;


/***/ }),

/***/ 2635:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decode = exports.encode = exports.encodeBase64 = exports.decodeBase64 = void 0;
const node_buffer_1 = __nccwpck_require__(4573);
const buffer_utils_js_1 = __nccwpck_require__(5734);
function normalize(input) {
    let encoded = input;
    if (encoded instanceof Uint8Array) {
        encoded = buffer_utils_js_1.decoder.decode(encoded);
    }
    return encoded;
}
const encode = (input) => node_buffer_1.Buffer.from(input).toString('base64url');
exports.encode = encode;
const decodeBase64 = (input) => new Uint8Array(node_buffer_1.Buffer.from(input, 'base64'));
exports.decodeBase64 = decodeBase64;
const encodeBase64 = (input) => node_buffer_1.Buffer.from(input).toString('base64');
exports.encodeBase64 = encodeBase64;
const decode = (input) => new Uint8Array(node_buffer_1.Buffer.from(normalize(input), 'base64url'));
exports.decode = decode;


/***/ }),

/***/ 6910:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = cbcTag;
const node_crypto_1 = __nccwpck_require__(7598);
const buffer_utils_js_1 = __nccwpck_require__(5734);
function cbcTag(aad, iv, ciphertext, macSize, macKey, keySize) {
    const macData = (0, buffer_utils_js_1.concat)(aad, iv, ciphertext, (0, buffer_utils_js_1.uint64be)(aad.length << 3));
    const hmac = (0, node_crypto_1.createHmac)(`sha${macSize}`, macKey);
    hmac.update(macData);
    return hmac.digest().slice(0, keySize >> 3);
}


/***/ }),

/***/ 7000:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const errors_js_1 = __nccwpck_require__(5974);
const is_key_object_js_1 = __nccwpck_require__(8685);
const checkCekLength = (enc, cek) => {
    let expected;
    switch (enc) {
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
            expected = parseInt(enc.slice(-3), 10);
            break;
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            expected = parseInt(enc.slice(1, 4), 10);
            break;
        default:
            throw new errors_js_1.JOSENotSupported(`Content Encryption Algorithm ${enc} is not supported either by JOSE or your javascript runtime`);
    }
    if (cek instanceof Uint8Array) {
        const actual = cek.byteLength << 3;
        if (actual !== expected) {
            throw new errors_js_1.JWEInvalid(`Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`);
        }
        return;
    }
    if ((0, is_key_object_js_1.default)(cek) && cek.type === 'secret') {
        const actual = cek.symmetricKeySize << 3;
        if (actual !== expected) {
            throw new errors_js_1.JWEInvalid(`Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`);
        }
        return;
    }
    throw new TypeError('Invalid Content Encryption Key type');
};
exports["default"] = checkCekLength;


/***/ }),

/***/ 5142:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const node_crypto_1 = __nccwpck_require__(7598);
exports["default"] = (key, alg) => {
    let modulusLength;
    try {
        if (key instanceof node_crypto_1.KeyObject) {
            modulusLength = key.asymmetricKeyDetails?.modulusLength;
        }
        else {
            modulusLength = Buffer.from(key.n, 'base64url').byteLength << 3;
        }
    }
    catch { }
    if (typeof modulusLength !== 'number' || modulusLength < 2048) {
        throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
};


/***/ }),

/***/ 9271:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const node_crypto_1 = __nccwpck_require__(7598);
let ciphers;
exports["default"] = (algorithm) => {
    ciphers ||= new Set((0, node_crypto_1.getCiphers)());
    return ciphers.has(algorithm);
};


/***/ }),

/***/ 2806:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const node_crypto_1 = __nccwpck_require__(7598);
const check_iv_length_js_1 = __nccwpck_require__(3351);
const check_cek_length_js_1 = __nccwpck_require__(7000);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const errors_js_1 = __nccwpck_require__(5974);
const timing_safe_equal_js_1 = __nccwpck_require__(9106);
const cbc_tag_js_1 = __nccwpck_require__(6910);
const webcrypto_js_1 = __nccwpck_require__(9044);
const crypto_key_js_1 = __nccwpck_require__(6319);
const is_key_object_js_1 = __nccwpck_require__(8685);
const invalid_key_input_js_1 = __nccwpck_require__(6632);
const ciphers_js_1 = __nccwpck_require__(9271);
const is_key_like_js_1 = __nccwpck_require__(7433);
function cbcDecrypt(enc, cek, ciphertext, iv, tag, aad) {
    const keySize = parseInt(enc.slice(1, 4), 10);
    if ((0, is_key_object_js_1.default)(cek)) {
        cek = cek.export();
    }
    const encKey = cek.subarray(keySize >> 3);
    const macKey = cek.subarray(0, keySize >> 3);
    const macSize = parseInt(enc.slice(-3), 10);
    const algorithm = `aes-${keySize}-cbc`;
    if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${enc} is not supported by your javascript runtime`);
    }
    const expectedTag = (0, cbc_tag_js_1.default)(aad, iv, ciphertext, macSize, macKey, keySize);
    let macCheckPassed;
    try {
        macCheckPassed = (0, timing_safe_equal_js_1.default)(tag, expectedTag);
    }
    catch {
    }
    if (!macCheckPassed) {
        throw new errors_js_1.JWEDecryptionFailed();
    }
    let plaintext;
    try {
        const decipher = (0, node_crypto_1.createDecipheriv)(algorithm, encKey, iv);
        plaintext = (0, buffer_utils_js_1.concat)(decipher.update(ciphertext), decipher.final());
    }
    catch {
    }
    if (!plaintext) {
        throw new errors_js_1.JWEDecryptionFailed();
    }
    return plaintext;
}
function gcmDecrypt(enc, cek, ciphertext, iv, tag, aad) {
    const keySize = parseInt(enc.slice(1, 4), 10);
    const algorithm = `aes-${keySize}-gcm`;
    if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${enc} is not supported by your javascript runtime`);
    }
    try {
        const decipher = (0, node_crypto_1.createDecipheriv)(algorithm, cek, iv, { authTagLength: 16 });
        decipher.setAuthTag(tag);
        if (aad.byteLength) {
            decipher.setAAD(aad, { plaintextLength: ciphertext.length });
        }
        const plaintext = decipher.update(ciphertext);
        decipher.final();
        return plaintext;
    }
    catch {
        throw new errors_js_1.JWEDecryptionFailed();
    }
}
const decrypt = (enc, cek, ciphertext, iv, tag, aad) => {
    let key;
    if ((0, webcrypto_js_1.isCryptoKey)(cek)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(cek, enc, 'decrypt');
        key = node_crypto_1.KeyObject.from(cek);
    }
    else if (cek instanceof Uint8Array || (0, is_key_object_js_1.default)(cek)) {
        key = cek;
    }
    else {
        throw new TypeError((0, invalid_key_input_js_1.default)(cek, ...is_key_like_js_1.types, 'Uint8Array'));
    }
    if (!iv) {
        throw new errors_js_1.JWEInvalid('JWE Initialization Vector missing');
    }
    if (!tag) {
        throw new errors_js_1.JWEInvalid('JWE Authentication Tag missing');
    }
    (0, check_cek_length_js_1.default)(enc, key);
    (0, check_iv_length_js_1.default)(enc, iv);
    switch (enc) {
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
            return cbcDecrypt(enc, key, ciphertext, iv, tag, aad);
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            return gcmDecrypt(enc, key, ciphertext, iv, tag, aad);
        default:
            throw new errors_js_1.JOSENotSupported('Unsupported JWE Content Encryption Algorithm');
    }
};
exports["default"] = decrypt;


/***/ }),

/***/ 2931:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const node_crypto_1 = __nccwpck_require__(7598);
const digest = (algorithm, data) => (0, node_crypto_1.createHash)(algorithm).update(data).digest();
exports["default"] = digest;


/***/ }),

/***/ 4510:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = dsaDigest;
const errors_js_1 = __nccwpck_require__(5974);
function dsaDigest(alg) {
    switch (alg) {
        case 'PS256':
        case 'RS256':
        case 'ES256':
        case 'ES256K':
            return 'sha256';
        case 'PS384':
        case 'RS384':
        case 'ES384':
            return 'sha384';
        case 'PS512':
        case 'RS512':
        case 'ES512':
            return 'sha512';
        case 'Ed25519':
        case 'EdDSA':
            return undefined;
        default:
            throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}


/***/ }),

/***/ 3359:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ecdhAllowed = void 0;
exports.deriveKey = deriveKey;
exports.generateEpk = generateEpk;
const node_crypto_1 = __nccwpck_require__(7598);
const node_util_1 = __nccwpck_require__(7975);
const get_named_curve_js_1 = __nccwpck_require__(5661);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const errors_js_1 = __nccwpck_require__(5974);
const webcrypto_js_1 = __nccwpck_require__(9044);
const crypto_key_js_1 = __nccwpck_require__(6319);
const is_key_object_js_1 = __nccwpck_require__(8685);
const invalid_key_input_js_1 = __nccwpck_require__(6632);
const is_key_like_js_1 = __nccwpck_require__(7433);
const generateKeyPair = (0, node_util_1.promisify)(node_crypto_1.generateKeyPair);
async function deriveKey(publicKee, privateKee, algorithm, keyLength, apu = new Uint8Array(0), apv = new Uint8Array(0)) {
    let publicKey;
    if ((0, webcrypto_js_1.isCryptoKey)(publicKee)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(publicKee, 'ECDH');
        publicKey = node_crypto_1.KeyObject.from(publicKee);
    }
    else if ((0, is_key_object_js_1.default)(publicKee)) {
        publicKey = publicKee;
    }
    else {
        throw new TypeError((0, invalid_key_input_js_1.default)(publicKee, ...is_key_like_js_1.types));
    }
    let privateKey;
    if ((0, webcrypto_js_1.isCryptoKey)(privateKee)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(privateKee, 'ECDH', 'deriveBits');
        privateKey = node_crypto_1.KeyObject.from(privateKee);
    }
    else if ((0, is_key_object_js_1.default)(privateKee)) {
        privateKey = privateKee;
    }
    else {
        throw new TypeError((0, invalid_key_input_js_1.default)(privateKee, ...is_key_like_js_1.types));
    }
    const value = (0, buffer_utils_js_1.concat)((0, buffer_utils_js_1.lengthAndInput)(buffer_utils_js_1.encoder.encode(algorithm)), (0, buffer_utils_js_1.lengthAndInput)(apu), (0, buffer_utils_js_1.lengthAndInput)(apv), (0, buffer_utils_js_1.uint32be)(keyLength));
    const sharedSecret = (0, node_crypto_1.diffieHellman)({ privateKey, publicKey });
    return (0, buffer_utils_js_1.concatKdf)(sharedSecret, keyLength, value);
}
async function generateEpk(kee) {
    let key;
    if ((0, webcrypto_js_1.isCryptoKey)(kee)) {
        key = node_crypto_1.KeyObject.from(kee);
    }
    else if ((0, is_key_object_js_1.default)(kee)) {
        key = kee;
    }
    else {
        throw new TypeError((0, invalid_key_input_js_1.default)(kee, ...is_key_like_js_1.types));
    }
    switch (key.asymmetricKeyType) {
        case 'x25519':
            return generateKeyPair('x25519');
        case 'x448': {
            return generateKeyPair('x448');
        }
        case 'ec': {
            const namedCurve = (0, get_named_curve_js_1.default)(key);
            return generateKeyPair('ec', { namedCurve });
        }
        default:
            throw new errors_js_1.JOSENotSupported('Invalid or unsupported EPK');
    }
}
const ecdhAllowed = (key) => ['P-256', 'P-384', 'P-521', 'X25519', 'X448'].includes((0, get_named_curve_js_1.default)(key));
exports.ecdhAllowed = ecdhAllowed;


/***/ }),

/***/ 6286:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const node_crypto_1 = __nccwpck_require__(7598);
const check_iv_length_js_1 = __nccwpck_require__(3351);
const check_cek_length_js_1 = __nccwpck_require__(7000);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const cbc_tag_js_1 = __nccwpck_require__(6910);
const webcrypto_js_1 = __nccwpck_require__(9044);
const crypto_key_js_1 = __nccwpck_require__(6319);
const is_key_object_js_1 = __nccwpck_require__(8685);
const invalid_key_input_js_1 = __nccwpck_require__(6632);
const iv_js_1 = __nccwpck_require__(6565);
const errors_js_1 = __nccwpck_require__(5974);
const ciphers_js_1 = __nccwpck_require__(9271);
const is_key_like_js_1 = __nccwpck_require__(7433);
function cbcEncrypt(enc, plaintext, cek, iv, aad) {
    const keySize = parseInt(enc.slice(1, 4), 10);
    if ((0, is_key_object_js_1.default)(cek)) {
        cek = cek.export();
    }
    const encKey = cek.subarray(keySize >> 3);
    const macKey = cek.subarray(0, keySize >> 3);
    const algorithm = `aes-${keySize}-cbc`;
    if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${enc} is not supported by your javascript runtime`);
    }
    const cipher = (0, node_crypto_1.createCipheriv)(algorithm, encKey, iv);
    const ciphertext = (0, buffer_utils_js_1.concat)(cipher.update(plaintext), cipher.final());
    const macSize = parseInt(enc.slice(-3), 10);
    const tag = (0, cbc_tag_js_1.default)(aad, iv, ciphertext, macSize, macKey, keySize);
    return { ciphertext, tag, iv };
}
function gcmEncrypt(enc, plaintext, cek, iv, aad) {
    const keySize = parseInt(enc.slice(1, 4), 10);
    const algorithm = `aes-${keySize}-gcm`;
    if (!(0, ciphers_js_1.default)(algorithm)) {
        throw new errors_js_1.JOSENotSupported(`alg ${enc} is not supported by your javascript runtime`);
    }
    const cipher = (0, node_crypto_1.createCipheriv)(algorithm, cek, iv, { authTagLength: 16 });
    if (aad.byteLength) {
        cipher.setAAD(aad, { plaintextLength: plaintext.length });
    }
    const ciphertext = cipher.update(plaintext);
    cipher.final();
    const tag = cipher.getAuthTag();
    return { ciphertext, tag, iv };
}
const encrypt = (enc, plaintext, cek, iv, aad) => {
    let key;
    if ((0, webcrypto_js_1.isCryptoKey)(cek)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(cek, enc, 'encrypt');
        key = node_crypto_1.KeyObject.from(cek);
    }
    else if (cek instanceof Uint8Array || (0, is_key_object_js_1.default)(cek)) {
        key = cek;
    }
    else {
        throw new TypeError((0, invalid_key_input_js_1.default)(cek, ...is_key_like_js_1.types, 'Uint8Array'));
    }
    (0, check_cek_length_js_1.default)(enc, key);
    if (iv) {
        (0, check_iv_length_js_1.default)(enc, iv);
    }
    else {
        iv = (0, iv_js_1.default)(enc);
    }
    switch (enc) {
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
            return cbcEncrypt(enc, plaintext, key, iv, aad);
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            return gcmEncrypt(enc, plaintext, key, iv, aad);
        default:
            throw new errors_js_1.JOSENotSupported('Unsupported JWE Content Encryption Algorithm');
    }
};
exports["default"] = encrypt;


/***/ }),

/***/ 311:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const http = __nccwpck_require__(7067);
const https = __nccwpck_require__(4708);
const node_events_1 = __nccwpck_require__(8474);
const errors_js_1 = __nccwpck_require__(5974);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const fetchJwks = async (url, timeout, options) => {
    let get;
    switch (url.protocol) {
        case 'https:':
            get = https.get;
            break;
        case 'http:':
            get = http.get;
            break;
        default:
            throw new TypeError('Unsupported URL protocol.');
    }
    const { agent, headers } = options;
    const req = get(url.href, {
        agent,
        timeout,
        headers,
    });
    const [response] = (await Promise.race([(0, node_events_1.once)(req, 'response'), (0, node_events_1.once)(req, 'timeout')]));
    if (!response) {
        req.destroy();
        throw new errors_js_1.JWKSTimeout();
    }
    if (response.statusCode !== 200) {
        throw new errors_js_1.JOSEError('Expected 200 OK from the JSON Web Key Set HTTP response');
    }
    const parts = [];
    for await (const part of response) {
        parts.push(part);
    }
    try {
        return JSON.parse(buffer_utils_js_1.decoder.decode((0, buffer_utils_js_1.concat)(...parts)));
    }
    catch {
        throw new errors_js_1.JOSEError('Failed to parse the JSON Web Key Set HTTP response as JSON');
    }
};
exports["default"] = fetchJwks;


/***/ }),

/***/ 88:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateSecret = generateSecret;
exports.generateKeyPair = generateKeyPair;
const node_crypto_1 = __nccwpck_require__(7598);
const node_util_1 = __nccwpck_require__(7975);
const random_js_1 = __nccwpck_require__(3376);
const errors_js_1 = __nccwpck_require__(5974);
const generate = (0, node_util_1.promisify)(node_crypto_1.generateKeyPair);
async function generateSecret(alg, options) {
    let length;
    switch (alg) {
        case 'HS256':
        case 'HS384':
        case 'HS512':
        case 'A128CBC-HS256':
        case 'A192CBC-HS384':
        case 'A256CBC-HS512':
            length = parseInt(alg.slice(-3), 10);
            break;
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
        case 'A128GCMKW':
        case 'A192GCMKW':
        case 'A256GCMKW':
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            length = parseInt(alg.slice(1, 4), 10);
            break;
        default:
            throw new errors_js_1.JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
    }
    return (0, node_crypto_1.createSecretKey)((0, random_js_1.default)(new Uint8Array(length >> 3)));
}
async function generateKeyPair(alg, options) {
    switch (alg) {
        case 'RS256':
        case 'RS384':
        case 'RS512':
        case 'PS256':
        case 'PS384':
        case 'PS512':
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
        case 'RSA1_5': {
            const modulusLength = options?.modulusLength ?? 2048;
            if (typeof modulusLength !== 'number' || modulusLength < 2048) {
                throw new errors_js_1.JOSENotSupported('Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used');
            }
            const keypair = await generate('rsa', {
                modulusLength,
                publicExponent: 0x10001,
            });
            return keypair;
        }
        case 'ES256':
            return generate('ec', { namedCurve: 'P-256' });
        case 'ES256K':
            return generate('ec', { namedCurve: 'secp256k1' });
        case 'ES384':
            return generate('ec', { namedCurve: 'P-384' });
        case 'ES512':
            return generate('ec', { namedCurve: 'P-521' });
        case 'Ed25519':
            return generate('ed25519');
        case 'EdDSA': {
            switch (options?.crv) {
                case undefined:
                case 'Ed25519':
                    return generate('ed25519');
                case 'Ed448':
                    return generate('ed448');
                default:
                    throw new errors_js_1.JOSENotSupported('Invalid or unsupported crv option provided, supported values are Ed25519 and Ed448');
            }
        }
        case 'ECDH-ES':
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW': {
            const crv = options?.crv ?? 'P-256';
            switch (crv) {
                case undefined:
                case 'P-256':
                case 'P-384':
                case 'P-521':
                    return generate('ec', { namedCurve: crv });
                case 'X25519':
                    return generate('x25519');
                case 'X448':
                    return generate('x448');
                default:
                    throw new errors_js_1.JOSENotSupported('Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448');
            }
        }
        default:
            throw new errors_js_1.JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
    }
}


/***/ }),

/***/ 5661:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.weakMap = void 0;
const node_crypto_1 = __nccwpck_require__(7598);
const errors_js_1 = __nccwpck_require__(5974);
const webcrypto_js_1 = __nccwpck_require__(9044);
const is_key_object_js_1 = __nccwpck_require__(8685);
const invalid_key_input_js_1 = __nccwpck_require__(6632);
const is_key_like_js_1 = __nccwpck_require__(7433);
const is_jwk_js_1 = __nccwpck_require__(1229);
exports.weakMap = new WeakMap();
const namedCurveToJOSE = (namedCurve) => {
    switch (namedCurve) {
        case 'prime256v1':
            return 'P-256';
        case 'secp384r1':
            return 'P-384';
        case 'secp521r1':
            return 'P-521';
        case 'secp256k1':
            return 'secp256k1';
        default:
            throw new errors_js_1.JOSENotSupported('Unsupported key curve for this operation');
    }
};
const getNamedCurve = (kee, raw) => {
    let key;
    if ((0, webcrypto_js_1.isCryptoKey)(kee)) {
        key = node_crypto_1.KeyObject.from(kee);
    }
    else if ((0, is_key_object_js_1.default)(kee)) {
        key = kee;
    }
    else if ((0, is_jwk_js_1.isJWK)(kee)) {
        return kee.crv;
    }
    else {
        throw new TypeError((0, invalid_key_input_js_1.default)(kee, ...is_key_like_js_1.types));
    }
    if (key.type === 'secret') {
        throw new TypeError('only "private" or "public" type keys can be used for this operation');
    }
    switch (key.asymmetricKeyType) {
        case 'ed25519':
        case 'ed448':
            return `Ed${key.asymmetricKeyType.slice(2)}`;
        case 'x25519':
        case 'x448':
            return `X${key.asymmetricKeyType.slice(1)}`;
        case 'ec': {
            const namedCurve = key.asymmetricKeyDetails.namedCurve;
            if (raw) {
                return namedCurve;
            }
            return namedCurveToJOSE(namedCurve);
        }
        default:
            throw new TypeError('Invalid asymmetric key type for this operation');
    }
};
exports["default"] = getNamedCurve;


/***/ }),

/***/ 723:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = getSignVerifyKey;
const node_crypto_1 = __nccwpck_require__(7598);
const webcrypto_js_1 = __nccwpck_require__(9044);
const crypto_key_js_1 = __nccwpck_require__(6319);
const invalid_key_input_js_1 = __nccwpck_require__(6632);
const is_key_like_js_1 = __nccwpck_require__(7433);
const jwk = __nccwpck_require__(1229);
function getSignVerifyKey(alg, key, usage) {
    if (key instanceof Uint8Array) {
        if (!alg.startsWith('HS')) {
            throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types));
        }
        return (0, node_crypto_1.createSecretKey)(key);
    }
    if (key instanceof node_crypto_1.KeyObject) {
        return key;
    }
    if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        (0, crypto_key_js_1.checkSigCryptoKey)(key, alg, usage);
        return node_crypto_1.KeyObject.from(key);
    }
    if (jwk.isJWK(key)) {
        if (alg.startsWith('HS')) {
            return (0, node_crypto_1.createSecretKey)(Buffer.from(key.k, 'base64url'));
        }
        return key;
    }
    throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types, 'Uint8Array', 'JSON Web Key'));
}


/***/ }),

/***/ 7399:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = hmacDigest;
const errors_js_1 = __nccwpck_require__(5974);
function hmacDigest(alg) {
    switch (alg) {
        case 'HS256':
            return 'sha256';
        case 'HS384':
            return 'sha384';
        case 'HS512':
            return 'sha512';
        default:
            throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
}


/***/ }),

/***/ 7433:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.types = void 0;
const webcrypto_js_1 = __nccwpck_require__(9044);
const is_key_object_js_1 = __nccwpck_require__(8685);
exports["default"] = (key) => (0, is_key_object_js_1.default)(key) || (0, webcrypto_js_1.isCryptoKey)(key);
const types = ['KeyObject'];
exports.types = types;
if (globalThis.CryptoKey || webcrypto_js_1.default?.CryptoKey) {
    types.push('CryptoKey');
}


/***/ }),

/***/ 8685:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const util = __nccwpck_require__(7975);
exports["default"] = (obj) => util.types.isKeyObject(obj);


/***/ }),

/***/ 939:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const node_crypto_1 = __nccwpck_require__(7598);
const parse = (key) => {
    if (key.d) {
        return (0, node_crypto_1.createPrivateKey)({ format: 'jwk', key });
    }
    return (0, node_crypto_1.createPublicKey)({ format: 'jwk', key });
};
exports["default"] = parse;


/***/ }),

/***/ 9041:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const node_crypto_1 = __nccwpck_require__(7598);
const base64url_js_1 = __nccwpck_require__(2635);
const errors_js_1 = __nccwpck_require__(5974);
const webcrypto_js_1 = __nccwpck_require__(9044);
const is_key_object_js_1 = __nccwpck_require__(8685);
const invalid_key_input_js_1 = __nccwpck_require__(6632);
const is_key_like_js_1 = __nccwpck_require__(7433);
const keyToJWK = (key) => {
    let keyObject;
    if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        if (!key.extractable) {
            throw new TypeError('CryptoKey is not extractable');
        }
        keyObject = node_crypto_1.KeyObject.from(key);
    }
    else if ((0, is_key_object_js_1.default)(key)) {
        keyObject = key;
    }
    else if (key instanceof Uint8Array) {
        return {
            kty: 'oct',
            k: (0, base64url_js_1.encode)(key),
        };
    }
    else {
        throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types, 'Uint8Array'));
    }
    if (keyObject.type !== 'secret' &&
        !['rsa', 'ec', 'ed25519', 'x25519', 'ed448', 'x448'].includes(keyObject.asymmetricKeyType)) {
        throw new errors_js_1.JOSENotSupported('Unsupported key asymmetricKeyType');
    }
    return keyObject.export({ format: 'jwk' });
};
exports["default"] = keyToJWK;


/***/ }),

/***/ 363:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = keyForCrypto;
const node_crypto_1 = __nccwpck_require__(7598);
const get_named_curve_js_1 = __nccwpck_require__(5661);
const errors_js_1 = __nccwpck_require__(5974);
const check_key_length_js_1 = __nccwpck_require__(5142);
const ecCurveAlgMap = new Map([
    ['ES256', 'P-256'],
    ['ES256K', 'secp256k1'],
    ['ES384', 'P-384'],
    ['ES512', 'P-521'],
]);
function keyForCrypto(alg, key) {
    let asymmetricKeyType;
    let asymmetricKeyDetails;
    let isJWK;
    if (key instanceof node_crypto_1.KeyObject) {
        asymmetricKeyType = key.asymmetricKeyType;
        asymmetricKeyDetails = key.asymmetricKeyDetails;
    }
    else {
        isJWK = true;
        switch (key.kty) {
            case 'RSA':
                asymmetricKeyType = 'rsa';
                break;
            case 'EC':
                asymmetricKeyType = 'ec';
                break;
            case 'OKP': {
                if (key.crv === 'Ed25519') {
                    asymmetricKeyType = 'ed25519';
                    break;
                }
                if (key.crv === 'Ed448') {
                    asymmetricKeyType = 'ed448';
                    break;
                }
                throw new TypeError('Invalid key for this operation, its crv must be Ed25519 or Ed448');
            }
            default:
                throw new TypeError('Invalid key for this operation, its kty must be RSA, OKP, or EC');
        }
    }
    let options;
    switch (alg) {
        case 'Ed25519':
            if (asymmetricKeyType !== 'ed25519') {
                throw new TypeError(`Invalid key for this operation, its asymmetricKeyType must be ed25519`);
            }
            break;
        case 'EdDSA':
            if (!['ed25519', 'ed448'].includes(asymmetricKeyType)) {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be ed25519 or ed448');
            }
            break;
        case 'RS256':
        case 'RS384':
        case 'RS512':
            if (asymmetricKeyType !== 'rsa') {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be rsa');
            }
            (0, check_key_length_js_1.default)(key, alg);
            break;
        case 'PS256':
        case 'PS384':
        case 'PS512':
            if (asymmetricKeyType === 'rsa-pss') {
                const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = asymmetricKeyDetails;
                const length = parseInt(alg.slice(-3), 10);
                if (hashAlgorithm !== undefined &&
                    (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm)) {
                    throw new TypeError(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${alg}`);
                }
                if (saltLength !== undefined && saltLength > length >> 3) {
                    throw new TypeError(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${alg}`);
                }
            }
            else if (asymmetricKeyType !== 'rsa') {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be rsa or rsa-pss');
            }
            (0, check_key_length_js_1.default)(key, alg);
            options = {
                padding: node_crypto_1.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: node_crypto_1.constants.RSA_PSS_SALTLEN_DIGEST,
            };
            break;
        case 'ES256':
        case 'ES256K':
        case 'ES384':
        case 'ES512': {
            if (asymmetricKeyType !== 'ec') {
                throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be ec');
            }
            const actual = (0, get_named_curve_js_1.default)(key);
            const expected = ecCurveAlgMap.get(alg);
            if (actual !== expected) {
                throw new TypeError(`Invalid key curve for the algorithm, its curve must be ${expected}, got ${actual}`);
            }
            options = { dsaEncoding: 'ieee-p1363' };
            break;
        }
        default:
            throw new errors_js_1.JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
    if (isJWK) {
        return { format: 'jwk', key, ...options };
    }
    return options ? { ...options, key } : key;
}


/***/ }),

/***/ 1276:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {};


/***/ }),

/***/ 2741:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decrypt = exports.encrypt = void 0;
const node_util_1 = __nccwpck_require__(7975);
const node_crypto_1 = __nccwpck_require__(7598);
const random_js_1 = __nccwpck_require__(3376);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const base64url_js_1 = __nccwpck_require__(2635);
const aeskw_js_1 = __nccwpck_require__(6202);
const check_p2s_js_1 = __nccwpck_require__(8040);
const webcrypto_js_1 = __nccwpck_require__(9044);
const crypto_key_js_1 = __nccwpck_require__(6319);
const is_key_object_js_1 = __nccwpck_require__(8685);
const invalid_key_input_js_1 = __nccwpck_require__(6632);
const is_key_like_js_1 = __nccwpck_require__(7433);
const pbkdf2 = (0, node_util_1.promisify)(node_crypto_1.pbkdf2);
function getPassword(key, alg) {
    if ((0, is_key_object_js_1.default)(key)) {
        return key.export();
    }
    if (key instanceof Uint8Array) {
        return key;
    }
    if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(key, alg, 'deriveBits', 'deriveKey');
        return node_crypto_1.KeyObject.from(key).export();
    }
    throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types, 'Uint8Array'));
}
const encrypt = async (alg, key, cek, p2c = 2048, p2s = (0, random_js_1.default)(new Uint8Array(16))) => {
    (0, check_p2s_js_1.default)(p2s);
    const salt = (0, buffer_utils_js_1.p2s)(alg, p2s);
    const keylen = parseInt(alg.slice(13, 16), 10) >> 3;
    const password = getPassword(key, alg);
    const derivedKey = await pbkdf2(password, salt, p2c, keylen, `sha${alg.slice(8, 11)}`);
    const encryptedKey = await (0, aeskw_js_1.wrap)(alg.slice(-6), derivedKey, cek);
    return { encryptedKey, p2c, p2s: (0, base64url_js_1.encode)(p2s) };
};
exports.encrypt = encrypt;
const decrypt = async (alg, key, encryptedKey, p2c, p2s) => {
    (0, check_p2s_js_1.default)(p2s);
    const salt = (0, buffer_utils_js_1.p2s)(alg, p2s);
    const keylen = parseInt(alg.slice(13, 16), 10) >> 3;
    const password = getPassword(key, alg);
    const derivedKey = await pbkdf2(password, salt, p2c, keylen, `sha${alg.slice(8, 11)}`);
    return (0, aeskw_js_1.unwrap)(alg.slice(-6), derivedKey, encryptedKey);
};
exports.decrypt = decrypt;


/***/ }),

/***/ 3376:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = void 0;
var node_crypto_1 = __nccwpck_require__(7598);
Object.defineProperty(exports, "default", ({ enumerable: true, get: function () { return node_crypto_1.randomFillSync; } }));


/***/ }),

/***/ 1129:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decrypt = exports.encrypt = void 0;
const node_crypto_1 = __nccwpck_require__(7598);
const node_util_1 = __nccwpck_require__(7975);
const check_key_length_js_1 = __nccwpck_require__(5142);
const webcrypto_js_1 = __nccwpck_require__(9044);
const crypto_key_js_1 = __nccwpck_require__(6319);
const is_key_object_js_1 = __nccwpck_require__(8685);
const invalid_key_input_js_1 = __nccwpck_require__(6632);
const is_key_like_js_1 = __nccwpck_require__(7433);
const checkKey = (key, alg) => {
    if (key.asymmetricKeyType !== 'rsa') {
        throw new TypeError('Invalid key for this operation, its asymmetricKeyType must be rsa');
    }
    (0, check_key_length_js_1.default)(key, alg);
};
const RSA1_5 = (0, node_util_1.deprecate)(() => node_crypto_1.constants.RSA_PKCS1_PADDING, 'The RSA1_5 "alg" (JWE Algorithm) is deprecated and will be removed in the next major revision.');
const resolvePadding = (alg) => {
    switch (alg) {
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            return node_crypto_1.constants.RSA_PKCS1_OAEP_PADDING;
        case 'RSA1_5':
            return RSA1_5();
        default:
            return undefined;
    }
};
const resolveOaepHash = (alg) => {
    switch (alg) {
        case 'RSA-OAEP':
            return 'sha1';
        case 'RSA-OAEP-256':
            return 'sha256';
        case 'RSA-OAEP-384':
            return 'sha384';
        case 'RSA-OAEP-512':
            return 'sha512';
        default:
            return undefined;
    }
};
function ensureKeyObject(key, alg, ...usages) {
    if ((0, is_key_object_js_1.default)(key)) {
        return key;
    }
    if ((0, webcrypto_js_1.isCryptoKey)(key)) {
        (0, crypto_key_js_1.checkEncCryptoKey)(key, alg, ...usages);
        return node_crypto_1.KeyObject.from(key);
    }
    throw new TypeError((0, invalid_key_input_js_1.default)(key, ...is_key_like_js_1.types));
}
const encrypt = (alg, key, cek) => {
    const padding = resolvePadding(alg);
    const oaepHash = resolveOaepHash(alg);
    const keyObject = ensureKeyObject(key, alg, 'wrapKey', 'encrypt');
    checkKey(keyObject, alg);
    return (0, node_crypto_1.publicEncrypt)({ key: keyObject, oaepHash, padding }, cek);
};
exports.encrypt = encrypt;
const decrypt = (alg, key, encryptedKey) => {
    const padding = resolvePadding(alg);
    const oaepHash = resolveOaepHash(alg);
    const keyObject = ensureKeyObject(key, alg, 'unwrapKey', 'decrypt');
    checkKey(keyObject, alg);
    return (0, node_crypto_1.privateDecrypt)({ key: keyObject, oaepHash, padding }, encryptedKey);
};
exports.decrypt = decrypt;


/***/ }),

/***/ 5527:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = 'node:crypto';


/***/ }),

/***/ 6966:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const crypto = __nccwpck_require__(7598);
const node_util_1 = __nccwpck_require__(7975);
const dsa_digest_js_1 = __nccwpck_require__(4510);
const hmac_digest_js_1 = __nccwpck_require__(7399);
const node_key_js_1 = __nccwpck_require__(363);
const get_sign_verify_key_js_1 = __nccwpck_require__(723);
const oneShotSign = (0, node_util_1.promisify)(crypto.sign);
const sign = async (alg, key, data) => {
    const k = (0, get_sign_verify_key_js_1.default)(alg, key, 'sign');
    if (alg.startsWith('HS')) {
        const hmac = crypto.createHmac((0, hmac_digest_js_1.default)(alg), k);
        hmac.update(data);
        return hmac.digest();
    }
    return oneShotSign((0, dsa_digest_js_1.default)(alg), data, (0, node_key_js_1.default)(alg, k));
};
exports["default"] = sign;


/***/ }),

/***/ 9106:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const node_crypto_1 = __nccwpck_require__(7598);
const timingSafeEqual = node_crypto_1.timingSafeEqual;
exports["default"] = timingSafeEqual;


/***/ }),

/***/ 1242:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const crypto = __nccwpck_require__(7598);
const node_util_1 = __nccwpck_require__(7975);
const dsa_digest_js_1 = __nccwpck_require__(4510);
const node_key_js_1 = __nccwpck_require__(363);
const sign_js_1 = __nccwpck_require__(6966);
const get_sign_verify_key_js_1 = __nccwpck_require__(723);
const oneShotVerify = (0, node_util_1.promisify)(crypto.verify);
const verify = async (alg, key, signature, data) => {
    const k = (0, get_sign_verify_key_js_1.default)(alg, key, 'verify');
    if (alg.startsWith('HS')) {
        const expected = await (0, sign_js_1.default)(alg, k, data);
        const actual = signature;
        try {
            return crypto.timingSafeEqual(actual, expected);
        }
        catch {
            return false;
        }
    }
    const algorithm = (0, dsa_digest_js_1.default)(alg);
    const keyInput = (0, node_key_js_1.default)(alg, k);
    try {
        return await oneShotVerify(algorithm, data, keyInput, signature);
    }
    catch {
        return false;
    }
};
exports["default"] = verify;


/***/ }),

/***/ 9044:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isCryptoKey = void 0;
const crypto = __nccwpck_require__(7598);
const util = __nccwpck_require__(7975);
const webcrypto = crypto.webcrypto;
exports["default"] = webcrypto;
const isCryptoKey = (key) => util.types.isCryptoKey(key);
exports.isCryptoKey = isCryptoKey;


/***/ }),

/***/ 8305:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decode = exports.encode = void 0;
const base64url = __nccwpck_require__(2635);
exports.encode = base64url.encode;
exports.decode = base64url.decode;


/***/ }),

/***/ 7621:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeJwt = decodeJwt;
const base64url_js_1 = __nccwpck_require__(8305);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const is_object_js_1 = __nccwpck_require__(2242);
const errors_js_1 = __nccwpck_require__(5974);
function decodeJwt(jwt) {
    if (typeof jwt !== 'string')
        throw new errors_js_1.JWTInvalid('JWTs must use Compact JWS serialization, JWT must be a string');
    const { 1: payload, length } = jwt.split('.');
    if (length === 5)
        throw new errors_js_1.JWTInvalid('Only JWTs using Compact JWS serialization can be decoded');
    if (length !== 3)
        throw new errors_js_1.JWTInvalid('Invalid JWT');
    if (!payload)
        throw new errors_js_1.JWTInvalid('JWTs must contain a payload');
    let decoded;
    try {
        decoded = (0, base64url_js_1.decode)(payload);
    }
    catch {
        throw new errors_js_1.JWTInvalid('Failed to base64url decode the payload');
    }
    let result;
    try {
        result = JSON.parse(buffer_utils_js_1.decoder.decode(decoded));
    }
    catch {
        throw new errors_js_1.JWTInvalid('Failed to parse the decoded payload as JSON');
    }
    if (!(0, is_object_js_1.default)(result))
        throw new errors_js_1.JWTInvalid('Invalid JWT Claims Set');
    return result;
}


/***/ }),

/***/ 4704:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeProtectedHeader = decodeProtectedHeader;
const base64url_js_1 = __nccwpck_require__(8305);
const buffer_utils_js_1 = __nccwpck_require__(5734);
const is_object_js_1 = __nccwpck_require__(2242);
function decodeProtectedHeader(token) {
    let protectedB64u;
    if (typeof token === 'string') {
        const parts = token.split('.');
        if (parts.length === 3 || parts.length === 5) {
            ;
            [protectedB64u] = parts;
        }
    }
    else if (typeof token === 'object' && token) {
        if ('protected' in token) {
            protectedB64u = token.protected;
        }
        else {
            throw new TypeError('Token does not contain a Protected Header');
        }
    }
    try {
        if (typeof protectedB64u !== 'string' || !protectedB64u) {
            throw new Error();
        }
        const result = JSON.parse(buffer_utils_js_1.decoder.decode((0, base64url_js_1.decode)(protectedB64u)));
        if (!(0, is_object_js_1.default)(result)) {
            throw new Error();
        }
        return result;
    }
    catch {
        throw new TypeError('Invalid Token or Protected Header formatting');
    }
}


/***/ }),

/***/ 5974:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JWSSignatureVerificationFailed = exports.JWKSTimeout = exports.JWKSMultipleMatchingKeys = exports.JWKSNoMatchingKey = exports.JWKSInvalid = exports.JWKInvalid = exports.JWTInvalid = exports.JWSInvalid = exports.JWEInvalid = exports.JWEDecryptionFailed = exports.JOSENotSupported = exports.JOSEAlgNotAllowed = exports.JWTExpired = exports.JWTClaimValidationFailed = exports.JOSEError = void 0;
class JOSEError extends Error {
    static code = 'ERR_JOSE_GENERIC';
    code = 'ERR_JOSE_GENERIC';
    constructor(message, options) {
        super(message, options);
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
exports.JOSEError = JOSEError;
class JWTClaimValidationFailed extends JOSEError {
    static code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    claim;
    reason;
    payload;
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified') {
        super(message, { cause: { claim, reason, payload } });
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
exports.JWTClaimValidationFailed = JWTClaimValidationFailed;
class JWTExpired extends JOSEError {
    static code = 'ERR_JWT_EXPIRED';
    code = 'ERR_JWT_EXPIRED';
    claim;
    reason;
    payload;
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified') {
        super(message, { cause: { claim, reason, payload } });
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
exports.JWTExpired = JWTExpired;
class JOSEAlgNotAllowed extends JOSEError {
    static code = 'ERR_JOSE_ALG_NOT_ALLOWED';
    code = 'ERR_JOSE_ALG_NOT_ALLOWED';
}
exports.JOSEAlgNotAllowed = JOSEAlgNotAllowed;
class JOSENotSupported extends JOSEError {
    static code = 'ERR_JOSE_NOT_SUPPORTED';
    code = 'ERR_JOSE_NOT_SUPPORTED';
}
exports.JOSENotSupported = JOSENotSupported;
class JWEDecryptionFailed extends JOSEError {
    static code = 'ERR_JWE_DECRYPTION_FAILED';
    code = 'ERR_JWE_DECRYPTION_FAILED';
    constructor(message = 'decryption operation failed', options) {
        super(message, options);
    }
}
exports.JWEDecryptionFailed = JWEDecryptionFailed;
class JWEInvalid extends JOSEError {
    static code = 'ERR_JWE_INVALID';
    code = 'ERR_JWE_INVALID';
}
exports.JWEInvalid = JWEInvalid;
class JWSInvalid extends JOSEError {
    static code = 'ERR_JWS_INVALID';
    code = 'ERR_JWS_INVALID';
}
exports.JWSInvalid = JWSInvalid;
class JWTInvalid extends JOSEError {
    static code = 'ERR_JWT_INVALID';
    code = 'ERR_JWT_INVALID';
}
exports.JWTInvalid = JWTInvalid;
class JWKInvalid extends JOSEError {
    static code = 'ERR_JWK_INVALID';
    code = 'ERR_JWK_INVALID';
}
exports.JWKInvalid = JWKInvalid;
class JWKSInvalid extends JOSEError {
    static code = 'ERR_JWKS_INVALID';
    code = 'ERR_JWKS_INVALID';
}
exports.JWKSInvalid = JWKSInvalid;
class JWKSNoMatchingKey extends JOSEError {
    static code = 'ERR_JWKS_NO_MATCHING_KEY';
    code = 'ERR_JWKS_NO_MATCHING_KEY';
    constructor(message = 'no applicable key found in the JSON Web Key Set', options) {
        super(message, options);
    }
}
exports.JWKSNoMatchingKey = JWKSNoMatchingKey;
class JWKSMultipleMatchingKeys extends JOSEError {
    [Symbol.asyncIterator];
    static code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    constructor(message = 'multiple matching keys found in the JSON Web Key Set', options) {
        super(message, options);
    }
}
exports.JWKSMultipleMatchingKeys = JWKSMultipleMatchingKeys;
class JWKSTimeout extends JOSEError {
    static code = 'ERR_JWKS_TIMEOUT';
    code = 'ERR_JWKS_TIMEOUT';
    constructor(message = 'request timed out', options) {
        super(message, options);
    }
}
exports.JWKSTimeout = JWKSTimeout;
class JWSSignatureVerificationFailed extends JOSEError {
    static code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    constructor(message = 'signature verification failed', options) {
        super(message, options);
    }
}
exports.JWSSignatureVerificationFailed = JWSSignatureVerificationFailed;


/***/ }),

/***/ 5021:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const runtime_js_1 = __nccwpck_require__(5527);
exports["default"] = runtime_js_1.default;


/***/ }),

/***/ 4583:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*!
 * MIT License
 * 
 * Copyright (c) 2017-2024 Peculiar Ventures, LLC
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */



const ARRAY_BUFFER_NAME = "[object ArrayBuffer]";
class BufferSourceConverter {
    static isArrayBuffer(data) {
        return Object.prototype.toString.call(data) === ARRAY_BUFFER_NAME;
    }
    static toArrayBuffer(data) {
        if (this.isArrayBuffer(data)) {
            return data;
        }
        if (data.byteLength === data.buffer.byteLength) {
            return data.buffer;
        }
        if (data.byteOffset === 0 && data.byteLength === data.buffer.byteLength) {
            return data.buffer;
        }
        return this.toUint8Array(data.buffer)
            .slice(data.byteOffset, data.byteOffset + data.byteLength)
            .buffer;
    }
    static toUint8Array(data) {
        return this.toView(data, Uint8Array);
    }
    static toView(data, type) {
        if (data.constructor === type) {
            return data;
        }
        if (this.isArrayBuffer(data)) {
            return new type(data);
        }
        if (this.isArrayBufferView(data)) {
            return new type(data.buffer, data.byteOffset, data.byteLength);
        }
        throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
    }
    static isBufferSource(data) {
        return this.isArrayBufferView(data)
            || this.isArrayBuffer(data);
    }
    static isArrayBufferView(data) {
        return ArrayBuffer.isView(data)
            || (data && this.isArrayBuffer(data.buffer));
    }
    static isEqual(a, b) {
        const aView = BufferSourceConverter.toUint8Array(a);
        const bView = BufferSourceConverter.toUint8Array(b);
        if (aView.length !== bView.byteLength) {
            return false;
        }
        for (let i = 0; i < aView.length; i++) {
            if (aView[i] !== bView[i]) {
                return false;
            }
        }
        return true;
    }
    static concat(...args) {
        let buffers;
        if (Array.isArray(args[0]) && !(args[1] instanceof Function)) {
            buffers = args[0];
        }
        else if (Array.isArray(args[0]) && args[1] instanceof Function) {
            buffers = args[0];
        }
        else {
            if (args[args.length - 1] instanceof Function) {
                buffers = args.slice(0, args.length - 1);
            }
            else {
                buffers = args;
            }
        }
        let size = 0;
        for (const buffer of buffers) {
            size += buffer.byteLength;
        }
        const res = new Uint8Array(size);
        let offset = 0;
        for (const buffer of buffers) {
            const view = this.toUint8Array(buffer);
            res.set(view, offset);
            offset += view.length;
        }
        if (args[args.length - 1] instanceof Function) {
            return this.toView(res, args[args.length - 1]);
        }
        return res.buffer;
    }
}

const STRING_TYPE = "string";
const HEX_REGEX = /^[0-9a-f\s]+$/i;
const BASE64_REGEX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
const BASE64URL_REGEX = /^[a-zA-Z0-9-_]+$/;
class Utf8Converter {
    static fromString(text) {
        const s = unescape(encodeURIComponent(text));
        const uintArray = new Uint8Array(s.length);
        for (let i = 0; i < s.length; i++) {
            uintArray[i] = s.charCodeAt(i);
        }
        return uintArray.buffer;
    }
    static toString(buffer) {
        const buf = BufferSourceConverter.toUint8Array(buffer);
        let encodedString = "";
        for (let i = 0; i < buf.length; i++) {
            encodedString += String.fromCharCode(buf[i]);
        }
        const decodedString = decodeURIComponent(escape(encodedString));
        return decodedString;
    }
}
class Utf16Converter {
    static toString(buffer, littleEndian = false) {
        const arrayBuffer = BufferSourceConverter.toArrayBuffer(buffer);
        const dataView = new DataView(arrayBuffer);
        let res = "";
        for (let i = 0; i < arrayBuffer.byteLength; i += 2) {
            const code = dataView.getUint16(i, littleEndian);
            res += String.fromCharCode(code);
        }
        return res;
    }
    static fromString(text, littleEndian = false) {
        const res = new ArrayBuffer(text.length * 2);
        const dataView = new DataView(res);
        for (let i = 0; i < text.length; i++) {
            dataView.setUint16(i * 2, text.charCodeAt(i), littleEndian);
        }
        return res;
    }
}
class Convert {
    static isHex(data) {
        return typeof data === STRING_TYPE
            && HEX_REGEX.test(data);
    }
    static isBase64(data) {
        return typeof data === STRING_TYPE
            && BASE64_REGEX.test(data);
    }
    static isBase64Url(data) {
        return typeof data === STRING_TYPE
            && BASE64URL_REGEX.test(data);
    }
    static ToString(buffer, enc = "utf8") {
        const buf = BufferSourceConverter.toUint8Array(buffer);
        switch (enc.toLowerCase()) {
            case "utf8":
                return this.ToUtf8String(buf);
            case "binary":
                return this.ToBinary(buf);
            case "hex":
                return this.ToHex(buf);
            case "base64":
                return this.ToBase64(buf);
            case "base64url":
                return this.ToBase64Url(buf);
            case "utf16le":
                return Utf16Converter.toString(buf, true);
            case "utf16":
            case "utf16be":
                return Utf16Converter.toString(buf);
            default:
                throw new Error(`Unknown type of encoding '${enc}'`);
        }
    }
    static FromString(str, enc = "utf8") {
        if (!str) {
            return new ArrayBuffer(0);
        }
        switch (enc.toLowerCase()) {
            case "utf8":
                return this.FromUtf8String(str);
            case "binary":
                return this.FromBinary(str);
            case "hex":
                return this.FromHex(str);
            case "base64":
                return this.FromBase64(str);
            case "base64url":
                return this.FromBase64Url(str);
            case "utf16le":
                return Utf16Converter.fromString(str, true);
            case "utf16":
            case "utf16be":
                return Utf16Converter.fromString(str);
            default:
                throw new Error(`Unknown type of encoding '${enc}'`);
        }
    }
    static ToBase64(buffer) {
        const buf = BufferSourceConverter.toUint8Array(buffer);
        if (typeof btoa !== "undefined") {
            const binary = this.ToString(buf, "binary");
            return btoa(binary);
        }
        else {
            return Buffer.from(buf).toString("base64");
        }
    }
    static FromBase64(base64) {
        const formatted = this.formatString(base64);
        if (!formatted) {
            return new ArrayBuffer(0);
        }
        if (!Convert.isBase64(formatted)) {
            throw new TypeError("Argument 'base64Text' is not Base64 encoded");
        }
        if (typeof atob !== "undefined") {
            return this.FromBinary(atob(formatted));
        }
        else {
            return new Uint8Array(Buffer.from(formatted, "base64")).buffer;
        }
    }
    static FromBase64Url(base64url) {
        const formatted = this.formatString(base64url);
        if (!formatted) {
            return new ArrayBuffer(0);
        }
        if (!Convert.isBase64Url(formatted)) {
            throw new TypeError("Argument 'base64url' is not Base64Url encoded");
        }
        return this.FromBase64(this.Base64Padding(formatted.replace(/\-/g, "+").replace(/\_/g, "/")));
    }
    static ToBase64Url(data) {
        return this.ToBase64(data).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
    }
    static FromUtf8String(text, encoding = Convert.DEFAULT_UTF8_ENCODING) {
        switch (encoding) {
            case "ascii":
                return this.FromBinary(text);
            case "utf8":
                return Utf8Converter.fromString(text);
            case "utf16":
            case "utf16be":
                return Utf16Converter.fromString(text);
            case "utf16le":
            case "usc2":
                return Utf16Converter.fromString(text, true);
            default:
                throw new Error(`Unknown type of encoding '${encoding}'`);
        }
    }
    static ToUtf8String(buffer, encoding = Convert.DEFAULT_UTF8_ENCODING) {
        switch (encoding) {
            case "ascii":
                return this.ToBinary(buffer);
            case "utf8":
                return Utf8Converter.toString(buffer);
            case "utf16":
            case "utf16be":
                return Utf16Converter.toString(buffer);
            case "utf16le":
            case "usc2":
                return Utf16Converter.toString(buffer, true);
            default:
                throw new Error(`Unknown type of encoding '${encoding}'`);
        }
    }
    static FromBinary(text) {
        const stringLength = text.length;
        const resultView = new Uint8Array(stringLength);
        for (let i = 0; i < stringLength; i++) {
            resultView[i] = text.charCodeAt(i);
        }
        return resultView.buffer;
    }
    static ToBinary(buffer) {
        const buf = BufferSourceConverter.toUint8Array(buffer);
        let res = "";
        for (let i = 0; i < buf.length; i++) {
            res += String.fromCharCode(buf[i]);
        }
        return res;
    }
    static ToHex(buffer) {
        const buf = BufferSourceConverter.toUint8Array(buffer);
        let result = "";
        const len = buf.length;
        for (let i = 0; i < len; i++) {
            const byte = buf[i];
            if (byte < 16) {
                result += "0";
            }
            result += byte.toString(16);
        }
        return result;
    }
    static FromHex(hexString) {
        let formatted = this.formatString(hexString);
        if (!formatted) {
            return new ArrayBuffer(0);
        }
        if (!Convert.isHex(formatted)) {
            throw new TypeError("Argument 'hexString' is not HEX encoded");
        }
        if (formatted.length % 2) {
            formatted = `0${formatted}`;
        }
        const res = new Uint8Array(formatted.length / 2);
        for (let i = 0; i < formatted.length; i = i + 2) {
            const c = formatted.slice(i, i + 2);
            res[i / 2] = parseInt(c, 16);
        }
        return res.buffer;
    }
    static ToUtf16String(buffer, littleEndian = false) {
        return Utf16Converter.toString(buffer, littleEndian);
    }
    static FromUtf16String(text, littleEndian = false) {
        return Utf16Converter.fromString(text, littleEndian);
    }
    static Base64Padding(base64) {
        const padCount = 4 - (base64.length % 4);
        if (padCount < 4) {
            for (let i = 0; i < padCount; i++) {
                base64 += "=";
            }
        }
        return base64;
    }
    static formatString(data) {
        return (data === null || data === void 0 ? void 0 : data.replace(/[\n\r\t ]/g, "")) || "";
    }
}
Convert.DEFAULT_UTF8_ENCODING = "utf8";

function assign(target, ...sources) {
    const res = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        const obj = arguments[i];
        for (const prop in obj) {
            res[prop] = obj[prop];
        }
    }
    return res;
}
function combine(...buf) {
    const totalByteLength = buf.map((item) => item.byteLength).reduce((prev, cur) => prev + cur);
    const res = new Uint8Array(totalByteLength);
    let currentPos = 0;
    buf.map((item) => new Uint8Array(item)).forEach((arr) => {
        for (const item2 of arr) {
            res[currentPos++] = item2;
        }
    });
    return res.buffer;
}
function isEqual(bytes1, bytes2) {
    if (!(bytes1 && bytes2)) {
        return false;
    }
    if (bytes1.byteLength !== bytes2.byteLength) {
        return false;
    }
    const b1 = new Uint8Array(bytes1);
    const b2 = new Uint8Array(bytes2);
    for (let i = 0; i < bytes1.byteLength; i++) {
        if (b1[i] !== b2[i]) {
            return false;
        }
    }
    return true;
}

exports.BufferSourceConverter = BufferSourceConverter;
exports.Convert = Convert;
exports.assign = assign;
exports.combine = combine;
exports.isEqual = isEqual;


/***/ }),

/***/ 6237:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*!
 Copyright (c) Peculiar Ventures, LLC
*/



Object.defineProperty(exports, "__esModule", ({ value: true }));

function getUTCDate(date) {
    return new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
}
function getParametersValue(parameters, name, defaultValue) {
    var _a;
    if ((parameters instanceof Object) === false) {
        return defaultValue;
    }
    return (_a = parameters[name]) !== null && _a !== void 0 ? _a : defaultValue;
}
function bufferToHexCodes(inputBuffer, inputOffset = 0, inputLength = (inputBuffer.byteLength - inputOffset), insertSpace = false) {
    let result = "";
    for (const item of (new Uint8Array(inputBuffer, inputOffset, inputLength))) {
        const str = item.toString(16).toUpperCase();
        if (str.length === 1) {
            result += "0";
        }
        result += str;
        if (insertSpace) {
            result += " ";
        }
    }
    return result.trim();
}
function checkBufferParams(baseBlock, inputBuffer, inputOffset, inputLength) {
    if (!(inputBuffer instanceof ArrayBuffer)) {
        baseBlock.error = "Wrong parameter: inputBuffer must be \"ArrayBuffer\"";
        return false;
    }
    if (!inputBuffer.byteLength) {
        baseBlock.error = "Wrong parameter: inputBuffer has zero length";
        return false;
    }
    if (inputOffset < 0) {
        baseBlock.error = "Wrong parameter: inputOffset less than zero";
        return false;
    }
    if (inputLength < 0) {
        baseBlock.error = "Wrong parameter: inputLength less than zero";
        return false;
    }
    if ((inputBuffer.byteLength - inputOffset - inputLength) < 0) {
        baseBlock.error = "End of input reached before message was fully decoded (inconsistent offset and length values)";
        return false;
    }
    return true;
}
function utilFromBase(inputBuffer, inputBase) {
    let result = 0;
    if (inputBuffer.length === 1) {
        return inputBuffer[0];
    }
    for (let i = (inputBuffer.length - 1); i >= 0; i--) {
        result += inputBuffer[(inputBuffer.length - 1) - i] * Math.pow(2, inputBase * i);
    }
    return result;
}
function utilToBase(value, base, reserved = (-1)) {
    const internalReserved = reserved;
    let internalValue = value;
    let result = 0;
    let biggest = Math.pow(2, base);
    for (let i = 1; i < 8; i++) {
        if (value < biggest) {
            let retBuf;
            if (internalReserved < 0) {
                retBuf = new ArrayBuffer(i);
                result = i;
            }
            else {
                if (internalReserved < i) {
                    return (new ArrayBuffer(0));
                }
                retBuf = new ArrayBuffer(internalReserved);
                result = internalReserved;
            }
            const retView = new Uint8Array(retBuf);
            for (let j = (i - 1); j >= 0; j--) {
                const basis = Math.pow(2, j * base);
                retView[result - j - 1] = Math.floor(internalValue / basis);
                internalValue -= (retView[result - j - 1]) * basis;
            }
            return retBuf;
        }
        biggest *= Math.pow(2, base);
    }
    return new ArrayBuffer(0);
}
function utilConcatBuf(...buffers) {
    let outputLength = 0;
    let prevLength = 0;
    for (const buffer of buffers) {
        outputLength += buffer.byteLength;
    }
    const retBuf = new ArrayBuffer(outputLength);
    const retView = new Uint8Array(retBuf);
    for (const buffer of buffers) {
        retView.set(new Uint8Array(buffer), prevLength);
        prevLength += buffer.byteLength;
    }
    return retBuf;
}
function utilConcatView(...views) {
    let outputLength = 0;
    let prevLength = 0;
    for (const view of views) {
        outputLength += view.length;
    }
    const retBuf = new ArrayBuffer(outputLength);
    const retView = new Uint8Array(retBuf);
    for (const view of views) {
        retView.set(view, prevLength);
        prevLength += view.length;
    }
    return retView;
}
function utilDecodeTC() {
    const buf = new Uint8Array(this.valueHex);
    if (this.valueHex.byteLength >= 2) {
        const condition1 = (buf[0] === 0xFF) && (buf[1] & 0x80);
        const condition2 = (buf[0] === 0x00) && ((buf[1] & 0x80) === 0x00);
        if (condition1 || condition2) {
            this.warnings.push("Needlessly long format");
        }
    }
    const bigIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
    const bigIntView = new Uint8Array(bigIntBuffer);
    for (let i = 0; i < this.valueHex.byteLength; i++) {
        bigIntView[i] = 0;
    }
    bigIntView[0] = (buf[0] & 0x80);
    const bigInt = utilFromBase(bigIntView, 8);
    const smallIntBuffer = new ArrayBuffer(this.valueHex.byteLength);
    const smallIntView = new Uint8Array(smallIntBuffer);
    for (let j = 0; j < this.valueHex.byteLength; j++) {
        smallIntView[j] = buf[j];
    }
    smallIntView[0] &= 0x7F;
    const smallInt = utilFromBase(smallIntView, 8);
    return (smallInt - bigInt);
}
function utilEncodeTC(value) {
    const modValue = (value < 0) ? (value * (-1)) : value;
    let bigInt = 128;
    for (let i = 1; i < 8; i++) {
        if (modValue <= bigInt) {
            if (value < 0) {
                const smallInt = bigInt - modValue;
                const retBuf = utilToBase(smallInt, 8, i);
                const retView = new Uint8Array(retBuf);
                retView[0] |= 0x80;
                return retBuf;
            }
            let retBuf = utilToBase(modValue, 8, i);
            let retView = new Uint8Array(retBuf);
            if (retView[0] & 0x80) {
                const tempBuf = retBuf.slice(0);
                const tempView = new Uint8Array(tempBuf);
                retBuf = new ArrayBuffer(retBuf.byteLength + 1);
                retView = new Uint8Array(retBuf);
                for (let k = 0; k < tempBuf.byteLength; k++) {
                    retView[k + 1] = tempView[k];
                }
                retView[0] = 0x00;
            }
            return retBuf;
        }
        bigInt *= Math.pow(2, 8);
    }
    return (new ArrayBuffer(0));
}
function isEqualBuffer(inputBuffer1, inputBuffer2) {
    if (inputBuffer1.byteLength !== inputBuffer2.byteLength) {
        return false;
    }
    const view1 = new Uint8Array(inputBuffer1);
    const view2 = new Uint8Array(inputBuffer2);
    for (let i = 0; i < view1.length; i++) {
        if (view1[i] !== view2[i]) {
            return false;
        }
    }
    return true;
}
function padNumber(inputNumber, fullLength) {
    const str = inputNumber.toString(10);
    if (fullLength < str.length) {
        return "";
    }
    const dif = fullLength - str.length;
    const padding = new Array(dif);
    for (let i = 0; i < dif; i++) {
        padding[i] = "0";
    }
    const paddingString = padding.join("");
    return paddingString.concat(str);
}
const base64Template = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const base64UrlTemplate = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
function toBase64(input, useUrlTemplate = false, skipPadding = false, skipLeadingZeros = false) {
    let i = 0;
    let flag1 = 0;
    let flag2 = 0;
    let output = "";
    const template = (useUrlTemplate) ? base64UrlTemplate : base64Template;
    if (skipLeadingZeros) {
        let nonZeroPosition = 0;
        for (let i = 0; i < input.length; i++) {
            if (input.charCodeAt(i) !== 0) {
                nonZeroPosition = i;
                break;
            }
        }
        input = input.slice(nonZeroPosition);
    }
    while (i < input.length) {
        const chr1 = input.charCodeAt(i++);
        if (i >= input.length) {
            flag1 = 1;
        }
        const chr2 = input.charCodeAt(i++);
        if (i >= input.length) {
            flag2 = 1;
        }
        const chr3 = input.charCodeAt(i++);
        const enc1 = chr1 >> 2;
        const enc2 = ((chr1 & 0x03) << 4) | (chr2 >> 4);
        let enc3 = ((chr2 & 0x0F) << 2) | (chr3 >> 6);
        let enc4 = chr3 & 0x3F;
        if (flag1 === 1) {
            enc3 = enc4 = 64;
        }
        else {
            if (flag2 === 1) {
                enc4 = 64;
            }
        }
        if (skipPadding) {
            if (enc3 === 64) {
                output += `${template.charAt(enc1)}${template.charAt(enc2)}`;
            }
            else {
                if (enc4 === 64) {
                    output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}`;
                }
                else {
                    output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}${template.charAt(enc4)}`;
                }
            }
        }
        else {
            output += `${template.charAt(enc1)}${template.charAt(enc2)}${template.charAt(enc3)}${template.charAt(enc4)}`;
        }
    }
    return output;
}
function fromBase64(input, useUrlTemplate = false, cutTailZeros = false) {
    const template = (useUrlTemplate) ? base64UrlTemplate : base64Template;
    function indexOf(toSearch) {
        for (let i = 0; i < 64; i++) {
            if (template.charAt(i) === toSearch)
                return i;
        }
        return 64;
    }
    function test(incoming) {
        return ((incoming === 64) ? 0x00 : incoming);
    }
    let i = 0;
    let output = "";
    while (i < input.length) {
        const enc1 = indexOf(input.charAt(i++));
        const enc2 = (i >= input.length) ? 0x00 : indexOf(input.charAt(i++));
        const enc3 = (i >= input.length) ? 0x00 : indexOf(input.charAt(i++));
        const enc4 = (i >= input.length) ? 0x00 : indexOf(input.charAt(i++));
        const chr1 = (test(enc1) << 2) | (test(enc2) >> 4);
        const chr2 = ((test(enc2) & 0x0F) << 4) | (test(enc3) >> 2);
        const chr3 = ((test(enc3) & 0x03) << 6) | test(enc4);
        output += String.fromCharCode(chr1);
        if (enc3 !== 64) {
            output += String.fromCharCode(chr2);
        }
        if (enc4 !== 64) {
            output += String.fromCharCode(chr3);
        }
    }
    if (cutTailZeros) {
        const outputLength = output.length;
        let nonZeroStart = (-1);
        for (let i = (outputLength - 1); i >= 0; i--) {
            if (output.charCodeAt(i) !== 0) {
                nonZeroStart = i;
                break;
            }
        }
        if (nonZeroStart !== (-1)) {
            output = output.slice(0, nonZeroStart + 1);
        }
        else {
            output = "";
        }
    }
    return output;
}
function arrayBufferToString(buffer) {
    let resultString = "";
    const view = new Uint8Array(buffer);
    for (const element of view) {
        resultString += String.fromCharCode(element);
    }
    return resultString;
}
function stringToArrayBuffer(str) {
    const stringLength = str.length;
    const resultBuffer = new ArrayBuffer(stringLength);
    const resultView = new Uint8Array(resultBuffer);
    for (let i = 0; i < stringLength; i++) {
        resultView[i] = str.charCodeAt(i);
    }
    return resultBuffer;
}
const log2 = Math.log(2);
function nearestPowerOf2(length) {
    const base = (Math.log(length) / log2);
    const floor = Math.floor(base);
    const round = Math.round(base);
    return ((floor === round) ? floor : round);
}
function clearProps(object, propsArray) {
    for (const prop of propsArray) {
        delete object[prop];
    }
}

exports.arrayBufferToString = arrayBufferToString;
exports.bufferToHexCodes = bufferToHexCodes;
exports.checkBufferParams = checkBufferParams;
exports.clearProps = clearProps;
exports.fromBase64 = fromBase64;
exports.getParametersValue = getParametersValue;
exports.getUTCDate = getUTCDate;
exports.isEqualBuffer = isEqualBuffer;
exports.nearestPowerOf2 = nearestPowerOf2;
exports.padNumber = padNumber;
exports.stringToArrayBuffer = stringToArrayBuffer;
exports.toBase64 = toBase64;
exports.utilConcatBuf = utilConcatBuf;
exports.utilConcatView = utilConcatView;
exports.utilDecodeTC = utilDecodeTC;
exports.utilEncodeTC = utilEncodeTC;
exports.utilFromBase = utilFromBase;
exports.utilToBase = utilToBase;


/***/ }),

/***/ 1860:
/***/ ((module) => {

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, Symbol, Reflect, Promise, SuppressedError, Iterator */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __esDecorate;
var __runInitializers;
var __propKey;
var __setFunctionName;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __classPrivateFieldIn;
var __createBinding;
var __addDisposableResource;
var __disposeResources;
var __rewriteRelativeImportExtension;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __esDecorate = function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access) context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0) continue;
                if (result === null || typeof result !== "object") throw new TypeError("Object expected");
                if (_ = accept(result.get)) descriptor.get = _;
                if (_ = accept(result.set)) descriptor.set = _;
                if (_ = accept(result.init)) initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field") initializers.unshift(_);
                else descriptor[key] = _;
            }
        }
        if (target) Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    };

    __runInitializers = function (thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    };

    __propKey = function (x) {
        return typeof x === "symbol" ? x : "".concat(x);
    };

    __setFunctionName = function (f, name, prefix) {
        if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
        return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
        function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
        function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    __classPrivateFieldIn = function (state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    };

    __addDisposableResource = function (env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
            var dispose, inner;
            if (async) {
                if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
                if (async) inner = dispose;
            }
            if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
            if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    };

    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    __disposeResources = function (env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                    }
                    else s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };

    __rewriteRelativeImportExtension = function (path, preserveJsx) {
        if (typeof path === "string" && /^\.\.?\//.test(path)) {
            return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
                return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
            });
        }
        return path;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    exporter("__addDisposableResource", __addDisposableResource);
    exporter("__disposeResources", __disposeResources);
    exporter("__rewriteRelativeImportExtension", __rewriteRelativeImportExtension);
});

0 && (0);


/***/ }),

/***/ 8017:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const reflection_helpers_1 = __nccwpck_require__(9774);
const dependency_container_1 = __nccwpck_require__(2316);
const injection_token_1 = __nccwpck_require__(2131);
const error_helpers_1 = __nccwpck_require__(7341);
function autoInjectable() {
    return function (target) {
        const paramInfo = reflection_helpers_1.getParamInfo(target);
        return class extends target {
            constructor(...args) {
                super(...args.concat(paramInfo.slice(args.length).map((type, index) => {
                    try {
                        if (injection_token_1.isTokenDescriptor(type)) {
                            if (injection_token_1.isTransformDescriptor(type)) {
                                return type.multiple
                                    ? dependency_container_1.instance
                                        .resolve(type.transform)
                                        .transform(dependency_container_1.instance.resolveAll(type.token), ...type.transformArgs)
                                    : dependency_container_1.instance
                                        .resolve(type.transform)
                                        .transform(dependency_container_1.instance.resolve(type.token), ...type.transformArgs);
                            }
                            else {
                                return type.multiple
                                    ? dependency_container_1.instance.resolveAll(type.token)
                                    : dependency_container_1.instance.resolve(type.token);
                            }
                        }
                        else if (injection_token_1.isTransformDescriptor(type)) {
                            return dependency_container_1.instance
                                .resolve(type.transform)
                                .transform(dependency_container_1.instance.resolve(type.token), ...type.transformArgs);
                        }
                        return dependency_container_1.instance.resolve(type);
                    }
                    catch (e) {
                        const argIndex = index + args.length;
                        throw new Error(error_helpers_1.formatErrorCtor(target, argIndex, e));
                    }
                })));
            }
        };
    };
}
exports["default"] = autoInjectable;


/***/ }),

/***/ 6266:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var auto_injectable_1 = __nccwpck_require__(8017);
Object.defineProperty(exports, "autoInjectable", ({ enumerable: true, get: function () { return auto_injectable_1.default; } }));
var inject_1 = __nccwpck_require__(9953);
Object.defineProperty(exports, "inject", ({ enumerable: true, get: function () { return inject_1.default; } }));
var injectable_1 = __nccwpck_require__(6477);
Object.defineProperty(exports, "injectable", ({ enumerable: true, get: function () { return injectable_1.default; } }));
var registry_1 = __nccwpck_require__(9931);
Object.defineProperty(exports, "registry", ({ enumerable: true, get: function () { return registry_1.default; } }));
var singleton_1 = __nccwpck_require__(6287);
Object.defineProperty(exports, "singleton", ({ enumerable: true, get: function () { return singleton_1.default; } }));
var inject_all_1 = __nccwpck_require__(3967);
Object.defineProperty(exports, "injectAll", ({ enumerable: true, get: function () { return inject_all_1.default; } }));
var inject_all_with_transform_1 = __nccwpck_require__(5417);
Object.defineProperty(exports, "injectAllWithTransform", ({ enumerable: true, get: function () { return inject_all_with_transform_1.default; } }));
var inject_with_transform_1 = __nccwpck_require__(3963);
Object.defineProperty(exports, "injectWithTransform", ({ enumerable: true, get: function () { return inject_with_transform_1.default; } }));
var scoped_1 = __nccwpck_require__(7460);
Object.defineProperty(exports, "scoped", ({ enumerable: true, get: function () { return scoped_1.default; } }));


/***/ }),

/***/ 5417:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const reflection_helpers_1 = __nccwpck_require__(9774);
function injectAllWithTransform(token, transformer, ...args) {
    const data = {
        token,
        multiple: true,
        transform: transformer,
        transformArgs: args
    };
    return reflection_helpers_1.defineInjectionTokenMetadata(data);
}
exports["default"] = injectAllWithTransform;


/***/ }),

/***/ 3967:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const reflection_helpers_1 = __nccwpck_require__(9774);
function injectAll(token, options) {
    const data = {
        token,
        multiple: true,
        isOptional: options && options.isOptional
    };
    return reflection_helpers_1.defineInjectionTokenMetadata(data);
}
exports["default"] = injectAll;


/***/ }),

/***/ 3963:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const reflection_helpers_1 = __nccwpck_require__(9774);
function injectWithTransform(token, transformer, ...args) {
    return reflection_helpers_1.defineInjectionTokenMetadata(token, {
        transformToken: transformer,
        args: args
    });
}
exports["default"] = injectWithTransform;


/***/ }),

/***/ 9953:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const reflection_helpers_1 = __nccwpck_require__(9774);
function inject(token, options) {
    const data = {
        token,
        multiple: false,
        isOptional: options && options.isOptional
    };
    return reflection_helpers_1.defineInjectionTokenMetadata(data);
}
exports["default"] = inject;


/***/ }),

/***/ 6477:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const reflection_helpers_1 = __nccwpck_require__(9774);
const dependency_container_1 = __nccwpck_require__(2316);
const dependency_container_2 = __nccwpck_require__(2316);
function injectable(options) {
    return function (target) {
        dependency_container_1.typeInfo.set(target, reflection_helpers_1.getParamInfo(target));
        if (options && options.token) {
            if (!Array.isArray(options.token)) {
                dependency_container_2.instance.register(options.token, target);
            }
            else {
                options.token.forEach(token => {
                    dependency_container_2.instance.register(token, target);
                });
            }
        }
    };
}
exports["default"] = injectable;


/***/ }),

/***/ 9931:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(6395);
const dependency_container_1 = __nccwpck_require__(2316);
function registry(registrations = []) {
    return function (target) {
        registrations.forEach((_a) => {
            var { token, options } = _a, provider = tslib_1.__rest(_a, ["token", "options"]);
            return dependency_container_1.instance.register(token, provider, options);
        });
        return target;
    };
}
exports["default"] = registry;


/***/ }),

/***/ 7460:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const injectable_1 = __nccwpck_require__(6477);
const dependency_container_1 = __nccwpck_require__(2316);
function scoped(lifecycle, token) {
    return function (target) {
        injectable_1.default()(target);
        dependency_container_1.instance.register(token || target, target, {
            lifecycle
        });
    };
}
exports["default"] = scoped;


/***/ }),

/***/ 6287:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const injectable_1 = __nccwpck_require__(6477);
const dependency_container_1 = __nccwpck_require__(2316);
function singleton() {
    return function (target) {
        injectable_1.default()(target);
        dependency_container_1.instance.registerSingleton(target);
    };
}
exports["default"] = singleton;


/***/ }),

/***/ 2316:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.instance = exports.typeInfo = void 0;
const tslib_1 = __nccwpck_require__(6395);
const providers_1 = __nccwpck_require__(8754);
const provider_1 = __nccwpck_require__(197);
const injection_token_1 = __nccwpck_require__(2131);
const registry_1 = __nccwpck_require__(9920);
const lifecycle_1 = __nccwpck_require__(8357);
const resolution_context_1 = __nccwpck_require__(7063);
const error_helpers_1 = __nccwpck_require__(7341);
const lazy_helpers_1 = __nccwpck_require__(305);
const disposable_1 = __nccwpck_require__(8079);
const interceptors_1 = __nccwpck_require__(4027);
exports.typeInfo = new Map();
class InternalDependencyContainer {
    constructor(parent) {
        this.parent = parent;
        this._registry = new registry_1.default();
        this.interceptors = new interceptors_1.default();
        this.disposed = false;
        this.disposables = new Set();
    }
    register(token, providerOrConstructor, options = { lifecycle: lifecycle_1.default.Transient }) {
        this.ensureNotDisposed();
        let provider;
        if (!provider_1.isProvider(providerOrConstructor)) {
            provider = { useClass: providerOrConstructor };
        }
        else {
            provider = providerOrConstructor;
        }
        if (providers_1.isTokenProvider(provider)) {
            const path = [token];
            let tokenProvider = provider;
            while (tokenProvider != null) {
                const currentToken = tokenProvider.useToken;
                if (path.includes(currentToken)) {
                    throw new Error(`Token registration cycle detected! ${[...path, currentToken].join(" -> ")}`);
                }
                path.push(currentToken);
                const registration = this._registry.get(currentToken);
                if (registration && providers_1.isTokenProvider(registration.provider)) {
                    tokenProvider = registration.provider;
                }
                else {
                    tokenProvider = null;
                }
            }
        }
        if (options.lifecycle === lifecycle_1.default.Singleton ||
            options.lifecycle == lifecycle_1.default.ContainerScoped ||
            options.lifecycle == lifecycle_1.default.ResolutionScoped) {
            if (providers_1.isValueProvider(provider) || providers_1.isFactoryProvider(provider)) {
                throw new Error(`Cannot use lifecycle "${lifecycle_1.default[options.lifecycle]}" with ValueProviders or FactoryProviders`);
            }
        }
        this._registry.set(token, { provider, options });
        return this;
    }
    registerType(from, to) {
        this.ensureNotDisposed();
        if (providers_1.isNormalToken(to)) {
            return this.register(from, {
                useToken: to
            });
        }
        return this.register(from, {
            useClass: to
        });
    }
    registerInstance(token, instance) {
        this.ensureNotDisposed();
        return this.register(token, {
            useValue: instance
        });
    }
    registerSingleton(from, to) {
        this.ensureNotDisposed();
        if (providers_1.isNormalToken(from)) {
            if (providers_1.isNormalToken(to)) {
                return this.register(from, {
                    useToken: to
                }, { lifecycle: lifecycle_1.default.Singleton });
            }
            else if (to) {
                return this.register(from, {
                    useClass: to
                }, { lifecycle: lifecycle_1.default.Singleton });
            }
            throw new Error('Cannot register a type name as a singleton without a "to" token');
        }
        let useClass = from;
        if (to && !providers_1.isNormalToken(to)) {
            useClass = to;
        }
        return this.register(from, {
            useClass
        }, { lifecycle: lifecycle_1.default.Singleton });
    }
    resolve(token, context = new resolution_context_1.default(), isOptional = false) {
        this.ensureNotDisposed();
        const registration = this.getRegistration(token);
        if (!registration && providers_1.isNormalToken(token)) {
            if (isOptional) {
                return undefined;
            }
            throw new Error(`Attempted to resolve unregistered dependency token: "${token.toString()}"`);
        }
        this.executePreResolutionInterceptor(token, "Single");
        if (registration) {
            const result = this.resolveRegistration(registration, context);
            this.executePostResolutionInterceptor(token, result, "Single");
            return result;
        }
        if (injection_token_1.isConstructorToken(token)) {
            const result = this.construct(token, context);
            this.executePostResolutionInterceptor(token, result, "Single");
            return result;
        }
        throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
    }
    executePreResolutionInterceptor(token, resolutionType) {
        if (this.interceptors.preResolution.has(token)) {
            const remainingInterceptors = [];
            for (const interceptor of this.interceptors.preResolution.getAll(token)) {
                if (interceptor.options.frequency != "Once") {
                    remainingInterceptors.push(interceptor);
                }
                interceptor.callback(token, resolutionType);
            }
            this.interceptors.preResolution.setAll(token, remainingInterceptors);
        }
    }
    executePostResolutionInterceptor(token, result, resolutionType) {
        if (this.interceptors.postResolution.has(token)) {
            const remainingInterceptors = [];
            for (const interceptor of this.interceptors.postResolution.getAll(token)) {
                if (interceptor.options.frequency != "Once") {
                    remainingInterceptors.push(interceptor);
                }
                interceptor.callback(token, result, resolutionType);
            }
            this.interceptors.postResolution.setAll(token, remainingInterceptors);
        }
    }
    resolveRegistration(registration, context) {
        this.ensureNotDisposed();
        if (registration.options.lifecycle === lifecycle_1.default.ResolutionScoped &&
            context.scopedResolutions.has(registration)) {
            return context.scopedResolutions.get(registration);
        }
        const isSingleton = registration.options.lifecycle === lifecycle_1.default.Singleton;
        const isContainerScoped = registration.options.lifecycle === lifecycle_1.default.ContainerScoped;
        const returnInstance = isSingleton || isContainerScoped;
        let resolved;
        if (providers_1.isValueProvider(registration.provider)) {
            resolved = registration.provider.useValue;
        }
        else if (providers_1.isTokenProvider(registration.provider)) {
            resolved = returnInstance
                ? registration.instance ||
                    (registration.instance = this.resolve(registration.provider.useToken, context))
                : this.resolve(registration.provider.useToken, context);
        }
        else if (providers_1.isClassProvider(registration.provider)) {
            resolved = returnInstance
                ? registration.instance ||
                    (registration.instance = this.construct(registration.provider.useClass, context))
                : this.construct(registration.provider.useClass, context);
        }
        else if (providers_1.isFactoryProvider(registration.provider)) {
            resolved = registration.provider.useFactory(this);
        }
        else {
            resolved = this.construct(registration.provider, context);
        }
        if (registration.options.lifecycle === lifecycle_1.default.ResolutionScoped) {
            context.scopedResolutions.set(registration, resolved);
        }
        return resolved;
    }
    resolveAll(token, context = new resolution_context_1.default(), isOptional = false) {
        this.ensureNotDisposed();
        const registrations = this.getAllRegistrations(token);
        if (!registrations && providers_1.isNormalToken(token)) {
            if (isOptional) {
                return [];
            }
            throw new Error(`Attempted to resolve unregistered dependency token: "${token.toString()}"`);
        }
        this.executePreResolutionInterceptor(token, "All");
        if (registrations) {
            const result = registrations.map(item => this.resolveRegistration(item, context));
            this.executePostResolutionInterceptor(token, result, "All");
            return result;
        }
        const result = [this.construct(token, context)];
        this.executePostResolutionInterceptor(token, result, "All");
        return result;
    }
    isRegistered(token, recursive = false) {
        this.ensureNotDisposed();
        return (this._registry.has(token) ||
            (recursive &&
                (this.parent || false) &&
                this.parent.isRegistered(token, true)));
    }
    reset() {
        this.ensureNotDisposed();
        this._registry.clear();
        this.interceptors.preResolution.clear();
        this.interceptors.postResolution.clear();
    }
    clearInstances() {
        this.ensureNotDisposed();
        for (const [token, registrations] of this._registry.entries()) {
            this._registry.setAll(token, registrations
                .filter(registration => !providers_1.isValueProvider(registration.provider))
                .map(registration => {
                registration.instance = undefined;
                return registration;
            }));
        }
    }
    createChildContainer() {
        this.ensureNotDisposed();
        const childContainer = new InternalDependencyContainer(this);
        for (const [token, registrations] of this._registry.entries()) {
            if (registrations.some(({ options }) => options.lifecycle === lifecycle_1.default.ContainerScoped)) {
                childContainer._registry.setAll(token, registrations.map(registration => {
                    if (registration.options.lifecycle === lifecycle_1.default.ContainerScoped) {
                        return {
                            provider: registration.provider,
                            options: registration.options
                        };
                    }
                    return registration;
                }));
            }
        }
        return childContainer;
    }
    beforeResolution(token, callback, options = { frequency: "Always" }) {
        this.interceptors.preResolution.set(token, {
            callback: callback,
            options: options
        });
    }
    afterResolution(token, callback, options = { frequency: "Always" }) {
        this.interceptors.postResolution.set(token, {
            callback: callback,
            options: options
        });
    }
    dispose() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.disposed = true;
            const promises = [];
            this.disposables.forEach(disposable => {
                const maybePromise = disposable.dispose();
                if (maybePromise) {
                    promises.push(maybePromise);
                }
            });
            yield Promise.all(promises);
        });
    }
    getRegistration(token) {
        if (this.isRegistered(token)) {
            return this._registry.get(token);
        }
        if (this.parent) {
            return this.parent.getRegistration(token);
        }
        return null;
    }
    getAllRegistrations(token) {
        if (this.isRegistered(token)) {
            return this._registry.getAll(token);
        }
        if (this.parent) {
            return this.parent.getAllRegistrations(token);
        }
        return null;
    }
    construct(ctor, context) {
        if (ctor instanceof lazy_helpers_1.DelayedConstructor) {
            return ctor.createProxy((target) => this.resolve(target, context));
        }
        const instance = (() => {
            const paramInfo = exports.typeInfo.get(ctor);
            if (!paramInfo || paramInfo.length === 0) {
                if (ctor.length === 0) {
                    return new ctor();
                }
                else {
                    throw new Error(`TypeInfo not known for "${ctor.name}"`);
                }
            }
            const params = paramInfo.map(this.resolveParams(context, ctor));
            return new ctor(...params);
        })();
        if (disposable_1.isDisposable(instance)) {
            this.disposables.add(instance);
        }
        return instance;
    }
    resolveParams(context, ctor) {
        return (param, idx) => {
            try {
                if (injection_token_1.isTokenDescriptor(param)) {
                    if (injection_token_1.isTransformDescriptor(param)) {
                        return param.multiple
                            ? this.resolve(param.transform).transform(this.resolveAll(param.token, new resolution_context_1.default(), param.isOptional), ...param.transformArgs)
                            : this.resolve(param.transform).transform(this.resolve(param.token, context, param.isOptional), ...param.transformArgs);
                    }
                    else {
                        return param.multiple
                            ? this.resolveAll(param.token, new resolution_context_1.default(), param.isOptional)
                            : this.resolve(param.token, context, param.isOptional);
                    }
                }
                else if (injection_token_1.isTransformDescriptor(param)) {
                    return this.resolve(param.transform, context).transform(this.resolve(param.token, context), ...param.transformArgs);
                }
                return this.resolve(param, context);
            }
            catch (e) {
                throw new Error(error_helpers_1.formatErrorCtor(ctor, idx, e));
            }
        };
    }
    ensureNotDisposed() {
        if (this.disposed) {
            throw new Error("This container has been disposed, you cannot interact with a disposed container");
        }
    }
}
exports.instance = new InternalDependencyContainer();
exports["default"] = exports.instance;


/***/ }),

/***/ 7341:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatErrorCtor = void 0;
function formatDependency(params, idx) {
    if (params === null) {
        return `at position #${idx}`;
    }
    const argName = params.split(",")[idx].trim();
    return `"${argName}" at position #${idx}`;
}
function composeErrorMessage(msg, e, indent = "    ") {
    return [msg, ...e.message.split("\n").map(l => indent + l)].join("\n");
}
function formatErrorCtor(ctor, paramIdx, error) {
    const [, params = null] = ctor.toString().match(/constructor\(([\w, ]+)\)/) || [];
    const dep = formatDependency(params, paramIdx);
    return composeErrorMessage(`Cannot inject the dependency ${dep} of "${ctor.name}" constructor. Reason:`, error);
}
exports.formatErrorCtor = formatErrorCtor;


/***/ }),

/***/ 5702:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var instance_caching_factory_1 = __nccwpck_require__(5712);
Object.defineProperty(exports, "instanceCachingFactory", ({ enumerable: true, get: function () { return instance_caching_factory_1.default; } }));
var instance_per_container_caching_factory_1 = __nccwpck_require__(564);
Object.defineProperty(exports, "instancePerContainerCachingFactory", ({ enumerable: true, get: function () { return instance_per_container_caching_factory_1.default; } }));
var predicate_aware_class_factory_1 = __nccwpck_require__(5022);
Object.defineProperty(exports, "predicateAwareClassFactory", ({ enumerable: true, get: function () { return predicate_aware_class_factory_1.default; } }));


/***/ }),

/***/ 5712:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function instanceCachingFactory(factoryFunc) {
    let instance;
    return (dependencyContainer) => {
        if (instance == undefined) {
            instance = factoryFunc(dependencyContainer);
        }
        return instance;
    };
}
exports["default"] = instanceCachingFactory;


/***/ }),

/***/ 564:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function instancePerContainerCachingFactory(factoryFunc) {
    const cache = new WeakMap();
    return (dependencyContainer) => {
        let instance = cache.get(dependencyContainer);
        if (instance == undefined) {
            instance = factoryFunc(dependencyContainer);
            cache.set(dependencyContainer, instance);
        }
        return instance;
    };
}
exports["default"] = instancePerContainerCachingFactory;


/***/ }),

/***/ 5022:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function predicateAwareClassFactory(predicate, trueConstructor, falseConstructor, useCaching = true) {
    let instance;
    let previousPredicate;
    return (dependencyContainer) => {
        const currentPredicate = predicate(dependencyContainer);
        if (!useCaching || previousPredicate !== currentPredicate) {
            if ((previousPredicate = currentPredicate)) {
                instance = dependencyContainer.resolve(trueConstructor);
            }
            else {
                instance = dependencyContainer.resolve(falseConstructor);
            }
        }
        return instance;
    };
}
exports["default"] = predicateAwareClassFactory;


/***/ }),

/***/ 5279:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __nccwpck_require__(6395);
if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
    throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
}
var types_1 = __nccwpck_require__(4661);
Object.defineProperty(exports, "Lifecycle", ({ enumerable: true, get: function () { return types_1.Lifecycle; } }));
tslib_1.__exportStar(__nccwpck_require__(6266), exports);
tslib_1.__exportStar(__nccwpck_require__(5702), exports);
tslib_1.__exportStar(__nccwpck_require__(8754), exports);
var lazy_helpers_1 = __nccwpck_require__(305);
Object.defineProperty(exports, "delay", ({ enumerable: true, get: function () { return lazy_helpers_1.delay; } }));
var dependency_container_1 = __nccwpck_require__(2316);
Object.defineProperty(exports, "container", ({ enumerable: true, get: function () { return dependency_container_1.instance; } }));


/***/ }),

/***/ 4027:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostResolutionInterceptors = exports.PreResolutionInterceptors = void 0;
const registry_base_1 = __nccwpck_require__(1460);
class PreResolutionInterceptors extends registry_base_1.default {
}
exports.PreResolutionInterceptors = PreResolutionInterceptors;
class PostResolutionInterceptors extends registry_base_1.default {
}
exports.PostResolutionInterceptors = PostResolutionInterceptors;
class Interceptors {
    constructor() {
        this.preResolution = new PreResolutionInterceptors();
        this.postResolution = new PostResolutionInterceptors();
    }
}
exports["default"] = Interceptors;


/***/ }),

/***/ 305:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.delay = exports.DelayedConstructor = void 0;
class DelayedConstructor {
    constructor(wrap) {
        this.wrap = wrap;
        this.reflectMethods = [
            "get",
            "getPrototypeOf",
            "setPrototypeOf",
            "getOwnPropertyDescriptor",
            "defineProperty",
            "has",
            "set",
            "deleteProperty",
            "apply",
            "construct",
            "ownKeys"
        ];
    }
    createProxy(createObject) {
        const target = {};
        let init = false;
        let value;
        const delayedObject = () => {
            if (!init) {
                value = createObject(this.wrap());
                init = true;
            }
            return value;
        };
        return new Proxy(target, this.createHandler(delayedObject));
    }
    createHandler(delayedObject) {
        const handler = {};
        const install = (name) => {
            handler[name] = (...args) => {
                args[0] = delayedObject();
                const method = Reflect[name];
                return method(...args);
            };
        };
        this.reflectMethods.forEach(install);
        return handler;
    }
}
exports.DelayedConstructor = DelayedConstructor;
function delay(wrappedConstructor) {
    if (typeof wrappedConstructor === "undefined") {
        throw new Error("Attempt to `delay` undefined. Constructor must be wrapped in a callback");
    }
    return new DelayedConstructor(wrappedConstructor);
}
exports.delay = delay;


/***/ }),

/***/ 8294:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isClassProvider = void 0;
function isClassProvider(provider) {
    return !!provider.useClass;
}
exports.isClassProvider = isClassProvider;


/***/ }),

/***/ 5336:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isFactoryProvider = void 0;
function isFactoryProvider(provider) {
    return !!provider.useFactory;
}
exports.isFactoryProvider = isFactoryProvider;


/***/ }),

/***/ 8754:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var class_provider_1 = __nccwpck_require__(8294);
Object.defineProperty(exports, "isClassProvider", ({ enumerable: true, get: function () { return class_provider_1.isClassProvider; } }));
var factory_provider_1 = __nccwpck_require__(5336);
Object.defineProperty(exports, "isFactoryProvider", ({ enumerable: true, get: function () { return factory_provider_1.isFactoryProvider; } }));
var injection_token_1 = __nccwpck_require__(2131);
Object.defineProperty(exports, "isNormalToken", ({ enumerable: true, get: function () { return injection_token_1.isNormalToken; } }));
var token_provider_1 = __nccwpck_require__(1033);
Object.defineProperty(exports, "isTokenProvider", ({ enumerable: true, get: function () { return token_provider_1.isTokenProvider; } }));
var value_provider_1 = __nccwpck_require__(2825);
Object.defineProperty(exports, "isValueProvider", ({ enumerable: true, get: function () { return value_provider_1.isValueProvider; } }));


/***/ }),

/***/ 2131:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isConstructorToken = exports.isTransformDescriptor = exports.isTokenDescriptor = exports.isNormalToken = void 0;
const lazy_helpers_1 = __nccwpck_require__(305);
function isNormalToken(token) {
    return typeof token === "string" || typeof token === "symbol";
}
exports.isNormalToken = isNormalToken;
function isTokenDescriptor(descriptor) {
    return (typeof descriptor === "object" &&
        "token" in descriptor &&
        "multiple" in descriptor);
}
exports.isTokenDescriptor = isTokenDescriptor;
function isTransformDescriptor(descriptor) {
    return (typeof descriptor === "object" &&
        "token" in descriptor &&
        "transform" in descriptor);
}
exports.isTransformDescriptor = isTransformDescriptor;
function isConstructorToken(token) {
    return typeof token === "function" || token instanceof lazy_helpers_1.DelayedConstructor;
}
exports.isConstructorToken = isConstructorToken;


/***/ }),

/***/ 197:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isProvider = void 0;
const class_provider_1 = __nccwpck_require__(8294);
const value_provider_1 = __nccwpck_require__(2825);
const token_provider_1 = __nccwpck_require__(1033);
const factory_provider_1 = __nccwpck_require__(5336);
function isProvider(provider) {
    return (class_provider_1.isClassProvider(provider) ||
        value_provider_1.isValueProvider(provider) ||
        token_provider_1.isTokenProvider(provider) ||
        factory_provider_1.isFactoryProvider(provider));
}
exports.isProvider = isProvider;


/***/ }),

/***/ 1033:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isTokenProvider = void 0;
function isTokenProvider(provider) {
    return !!provider.useToken;
}
exports.isTokenProvider = isTokenProvider;


/***/ }),

/***/ 2825:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isValueProvider = void 0;
function isValueProvider(provider) {
    return provider.useValue != undefined;
}
exports.isValueProvider = isValueProvider;


/***/ }),

/***/ 9774:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defineInjectionTokenMetadata = exports.getParamInfo = exports.INJECTION_TOKEN_METADATA_KEY = void 0;
exports.INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
function getParamInfo(target) {
    const params = Reflect.getMetadata("design:paramtypes", target) || [];
    const injectionTokens = Reflect.getOwnMetadata(exports.INJECTION_TOKEN_METADATA_KEY, target) || {};
    Object.keys(injectionTokens).forEach(key => {
        params[+key] = injectionTokens[key];
    });
    return params;
}
exports.getParamInfo = getParamInfo;
function defineInjectionTokenMetadata(data, transform) {
    return function (target, _propertyKey, parameterIndex) {
        const descriptors = Reflect.getOwnMetadata(exports.INJECTION_TOKEN_METADATA_KEY, target) || {};
        descriptors[parameterIndex] = transform
            ? {
                token: data,
                transform: transform.transformToken,
                transformArgs: transform.args || []
            }
            : data;
        Reflect.defineMetadata(exports.INJECTION_TOKEN_METADATA_KEY, descriptors, target);
    };
}
exports.defineInjectionTokenMetadata = defineInjectionTokenMetadata;


/***/ }),

/***/ 1460:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class RegistryBase {
    constructor() {
        this._registryMap = new Map();
    }
    entries() {
        return this._registryMap.entries();
    }
    getAll(key) {
        this.ensure(key);
        return this._registryMap.get(key);
    }
    get(key) {
        this.ensure(key);
        const value = this._registryMap.get(key);
        return value[value.length - 1] || null;
    }
    set(key, value) {
        this.ensure(key);
        this._registryMap.get(key).push(value);
    }
    setAll(key, value) {
        this._registryMap.set(key, value);
    }
    has(key) {
        this.ensure(key);
        return this._registryMap.get(key).length > 0;
    }
    clear() {
        this._registryMap.clear();
    }
    ensure(key) {
        if (!this._registryMap.has(key)) {
            this._registryMap.set(key, []);
        }
    }
}
exports["default"] = RegistryBase;


/***/ }),

/***/ 9920:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const registry_base_1 = __nccwpck_require__(1460);
class Registry extends registry_base_1.default {
}
exports["default"] = Registry;


/***/ }),

/***/ 7063:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class ResolutionContext {
    constructor() {
        this.scopedResolutions = new Map();
    }
}
exports["default"] = ResolutionContext;


/***/ }),

/***/ 8079:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isDisposable = void 0;
function isDisposable(value) {
    if (typeof value.dispose !== "function")
        return false;
    const disposeFun = value.dispose;
    if (disposeFun.length > 0) {
        return false;
    }
    return true;
}
exports.isDisposable = isDisposable;


/***/ }),

/***/ 4661:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var lifecycle_1 = __nccwpck_require__(8357);
Object.defineProperty(exports, "Lifecycle", ({ enumerable: true, get: function () { return lifecycle_1.default; } }));


/***/ }),

/***/ 8357:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Lifecycle;
(function (Lifecycle) {
    Lifecycle[Lifecycle["Transient"] = 0] = "Transient";
    Lifecycle[Lifecycle["Singleton"] = 1] = "Singleton";
    Lifecycle[Lifecycle["ResolutionScoped"] = 2] = "ResolutionScoped";
    Lifecycle[Lifecycle["ContainerScoped"] = 3] = "ContainerScoped";
})(Lifecycle || (Lifecycle = {}));
exports["default"] = Lifecycle;


/***/ }),

/***/ 6395:
/***/ ((module) => {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __createBinding = function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    };

    __exportStar = function (m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});


/***/ }),

/***/ 2694:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sortKeysDeep = sortKeysDeep;
exports.encodeSwiftPrettyJSON = encodeSwiftPrettyJSON;
exports.defaultCertPaths = defaultCertPaths;
exports.signManifest = signManifest;
const jose_1 = __nccwpck_require__(1608);
const fs_1 = __nccwpck_require__(9896);
const path_1 = __nccwpck_require__(6928);
const crypto_1 = __nccwpck_require__(6982);
const x509_utils_1 = __nccwpck_require__(987);
/**
 * Deep-sort all object keys recursively. Required to match Swift's
 * JSONEncoder.sortedKeys behavior.
 */
function sortKeysDeep(obj) {
    if (Array.isArray(obj))
        return obj.map(sortKeysDeep);
    if (obj !== null && typeof obj === "object") {
        return Object.keys(obj)
            .sort()
            .reduce((acc, key) => {
            acc[key] = sortKeysDeep(obj[key]);
            return acc;
        }, {});
    }
    return obj;
}
/**
 * Encode a manifest object to match Swift's
 * JSONEncoder.makeWithDefaults(prettified: true). Foundation's pretty JSON
 * format uses spaces around colons (`"key" : value`), unlike JSON.stringify.
 */
function encodeSwiftPrettyJSON(value, indent = 0) {
    const pad = " ".repeat(indent);
    const nextPad = " ".repeat(indent + 2);
    if (Array.isArray(value)) {
        if (value.length === 0) {
            return "[]";
        }
        return [
            "[",
            value.map((item) => `${nextPad}${encodeSwiftPrettyJSON(item, indent + 2)}`).join(",\n"),
            `${pad}]`,
        ].join("\n");
    }
    if (value !== null && typeof value === "object") {
        const keys = Object.keys(value).sort();
        if (keys.length === 0) {
            return "{}";
        }
        return [
            "{",
            keys
                .map((key) => `${nextPad}${JSON.stringify(key)} : ${encodeSwiftPrettyJSON(value[key], indent + 2)}`)
                .join(",\n"),
            `${pad}}`,
        ].join("\n");
    }
    return JSON.stringify(value);
}
function encodeManifestPayload(manifest) {
    return new TextEncoder().encode(encodeSwiftPrettyJSON(manifest));
}
/** Default bundled certificate paths. */
function defaultCertPaths(certsDir) {
    return {
        leafCertPath: (0, path_1.join)(certsDir, "leaf.cer"),
        intermediateCertPath: (0, path_1.join)(certsDir, "intermediate-ca.cer"),
        rootCertPath: (0, path_1.join)(certsDir, "root-ca.cer"),
        privateKeyPath: (0, path_1.join)(certsDir, "leaf-key.pem"),
    };
}
/**
 * Import a PEM private key, handling both PKCS#1 and PKCS#8 formats.
 */
async function loadPrivateKey(pemPath) {
    const pem = (0, fs_1.readFileSync)(pemPath, "utf-8");
    if (pem.includes("BEGIN RSA PRIVATE KEY")) {
        // PKCS#1 → convert to PKCS#8 via Node.js crypto
        const keyObj = (0, crypto_1.createPrivateKey)({ key: pem, format: "pem" });
        const pkcs8Pem = keyObj.export({ type: "pkcs8", format: "pem" });
        return (0, jose_1.importPKCS8)(pkcs8Pem, "RS256");
    }
    return (0, jose_1.importPKCS8)(pem, "RS256");
}
async function signManifest(manifest, outputPath, certs) {
    // Load certificates (DER format)
    const leaf = (0, fs_1.readFileSync)(certs.leafCertPath);
    const intermediate = (0, fs_1.readFileSync)(certs.intermediateCertPath);
    const root = (0, fs_1.readFileSync)(certs.rootCertPath);
    const privateKey = await loadPrivateKey(certs.privateKeyPath);
    // x5c: DER certs as standard base64 (NOT base64url)
    const x5c = [leaf, intermediate, root].map((c) => c.toString("base64"));
    // Payload must match Swift's JSONEncoder output exactly
    const payloadBytes = encodeManifestPayload(manifest);
    // JWS Compact Serialization
    const jws = await new jose_1.CompactSign(payloadBytes)
        .setProtectedHeader({ alg: "RS256", x5c })
        .sign(privateKey);
    // Parse leaf cert for subject/issuer metadata
    const certInfo = (0, x509_utils_1.parseCertificate)(leaf);
    const signed = sortKeysDeep({
        manifest: sortKeysDeep(manifest),
        signature: {
            signature: jws,
            certificate: {
                subject: {
                    userID: certInfo.subject.userID,
                    commonName: certInfo.subject.commonName,
                    organizationalUnit: certInfo.subject.organizationalUnit,
                    organization: certInfo.subject.organization,
                },
                issuer: {
                    userID: certInfo.issuer.userID,
                    commonName: certInfo.issuer.commonName,
                    organizationalUnit: certInfo.issuer.organizationalUnit,
                    organization: certInfo.issuer.organization,
                },
            },
        },
    });
    (0, fs_1.writeFileSync)(outputPath, JSON.stringify(signed, null, 2));
}


/***/ }),

/***/ 987:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseCertificate = parseCertificate;
const x509_1 = __nccwpck_require__(8927);
function parseDN(dn) {
    // @peculiar/x509 returns DN strings like:
    // "CN=Test (RSA) leaf, O=Test (RSA) org, OU=Test (RSA) org unit, C=US, E=test@localhost"
    //
    // Strategy: find all positions of "ATTR=" patterns, then extract values between them.
    const knownAttrs = ["CN", "O", "OU", "C", "E", "UID", "L", "ST", "DC"];
    const result = new Map();
    // Find all attribute start positions
    const starts = [];
    for (const attr of knownAttrs) {
        const pattern = attr + "=";
        let searchFrom = 0;
        while (true) {
            const idx = dn.indexOf(pattern, searchFrom);
            if (idx === -1)
                break;
            // Must be at start of string or preceded by ", "
            if (idx === 0 || (dn[idx - 2] === "," && dn[idx - 1] === " ")) {
                starts.push({ attr, pos: idx, valueStart: idx + pattern.length });
            }
            searchFrom = idx + 1;
        }
    }
    // Sort by position
    starts.sort((a, b) => a.pos - b.pos);
    // Extract values
    for (let i = 0; i < starts.length; i++) {
        const entry = starts[i];
        const valueEnd = i + 1 < starts.length ? starts[i + 1].pos - 2 : dn.length;
        const value = dn.substring(entry.valueStart, valueEnd);
        result.set(entry.attr, value);
    }
    return result;
}
function dnToCertName(dn) {
    const parts = parseDN(dn);
    return {
        commonName: parts.get("CN") || "",
        organization: parts.get("O") || "",
        organizationalUnit: parts.get("OU") || "",
        userID: parts.get("UID") || null,
    };
}
function parseCertificate(derBuffer) {
    const cert = new x509_1.X509Certificate(derBuffer);
    return {
        subject: dnToCertName(cert.subject),
        issuer: dnToCertName(cert.issuer),
    };
}


/***/ }),

/***/ 6982:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 9896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 4573:
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ 7598:
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ 8474:
/***/ ((module) => {

"use strict";
module.exports = require("node:events");

/***/ }),

/***/ 7067:
/***/ ((module) => {

"use strict";
module.exports = require("node:http");

/***/ }),

/***/ 4708:
/***/ ((module) => {

"use strict";
module.exports = require("node:https");

/***/ }),

/***/ 7975:
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

/***/ }),

/***/ 6928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 477:
/***/ (() => {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof globalThis === "object" ? globalThis :
            typeof global === "object" ? global :
                typeof self === "object" ? self :
                    typeof this === "object" ? this :
                        sloppyModeThis();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect !== "undefined") {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter, root);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        function makeExporter(target, previous) {
            return function (key, value) {
                Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                if (previous)
                    previous(key, value);
            };
        }
        function functionThis() {
            try {
                return Function("return this;")();
            }
            catch (_) { }
        }
        function indirectEvalThis() {
            try {
                return (void 0, eval)("(function() { return this; })()");
            }
            catch (_) { }
        }
        function sloppyModeThis() {
            return functionThis() || indirectEvalThis();
        }
    })(function (exporter, root) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : undefined;
        var metadataRegistry = GetOrCreateMetadataRegistry();
        var metadataProvider = CreateMetadataProvider(metadataRegistry);
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var provider = GetMetadataProvider(target, propertyKey, /*Create*/ false);
            if (IsUndefined(provider))
                return false;
            return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var provider = GetMetadataProvider(O, P, /*Create*/ false);
            if (IsUndefined(provider))
                return false;
            return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var provider = GetMetadataProvider(O, P, /*Create*/ false);
            if (IsUndefined(provider))
                return;
            return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var provider = GetMetadataProvider(O, P, /*Create*/ true);
            provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var provider = GetMetadataProvider(O, P, /*create*/ false);
            if (!provider) {
                return [];
            }
            return provider.OrdinaryOwnMetadataKeys(O, P);
        }
        // 6 ECMAScript Data Types and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        function SameValueZero(x, y) {
            return x === y || x !== x && y !== y;
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // Global metadata registry
        // - Allows `import "reflect-metadata"` and `import "reflect-metadata/no-conflict"` to interoperate.
        // - Uses isolated metadata if `Reflect` is frozen before the registry can be installed.
        /**
         * Creates a registry used to allow multiple `reflect-metadata` providers.
         */
        function CreateMetadataRegistry() {
            var fallback;
            if (!IsUndefined(registrySymbol) &&
                typeof root.Reflect !== "undefined" &&
                !(registrySymbol in root.Reflect) &&
                typeof root.Reflect.defineMetadata === "function") {
                // interoperate with older version of `reflect-metadata` that did not support a registry.
                fallback = CreateFallbackProvider(root.Reflect);
            }
            var first;
            var second;
            var rest;
            var targetProviderMap = new _WeakMap();
            var registry = {
                registerProvider: registerProvider,
                getProvider: getProvider,
                setProvider: setProvider,
            };
            return registry;
            function registerProvider(provider) {
                if (!Object.isExtensible(registry)) {
                    throw new Error("Cannot add provider to a frozen registry.");
                }
                switch (true) {
                    case fallback === provider: break;
                    case IsUndefined(first):
                        first = provider;
                        break;
                    case first === provider: break;
                    case IsUndefined(second):
                        second = provider;
                        break;
                    case second === provider: break;
                    default:
                        if (rest === undefined)
                            rest = new _Set();
                        rest.add(provider);
                        break;
                }
            }
            function getProviderNoCache(O, P) {
                if (!IsUndefined(first)) {
                    if (first.isProviderFor(O, P))
                        return first;
                    if (!IsUndefined(second)) {
                        if (second.isProviderFor(O, P))
                            return first;
                        if (!IsUndefined(rest)) {
                            var iterator = GetIterator(rest);
                            while (true) {
                                var next = IteratorStep(iterator);
                                if (!next) {
                                    return undefined;
                                }
                                var provider = IteratorValue(next);
                                if (provider.isProviderFor(O, P)) {
                                    IteratorClose(iterator);
                                    return provider;
                                }
                            }
                        }
                    }
                }
                if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
                    return fallback;
                }
                return undefined;
            }
            function getProvider(O, P) {
                var providerMap = targetProviderMap.get(O);
                var provider;
                if (!IsUndefined(providerMap)) {
                    provider = providerMap.get(P);
                }
                if (!IsUndefined(provider)) {
                    return provider;
                }
                provider = getProviderNoCache(O, P);
                if (!IsUndefined(provider)) {
                    if (IsUndefined(providerMap)) {
                        providerMap = new _Map();
                        targetProviderMap.set(O, providerMap);
                    }
                    providerMap.set(P, provider);
                }
                return provider;
            }
            function hasProvider(provider) {
                if (IsUndefined(provider))
                    throw new TypeError();
                return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
            }
            function setProvider(O, P, provider) {
                if (!hasProvider(provider)) {
                    throw new Error("Metadata provider not registered.");
                }
                var existingProvider = getProvider(O, P);
                if (existingProvider !== provider) {
                    if (!IsUndefined(existingProvider)) {
                        return false;
                    }
                    var providerMap = targetProviderMap.get(O);
                    if (IsUndefined(providerMap)) {
                        providerMap = new _Map();
                        targetProviderMap.set(O, providerMap);
                    }
                    providerMap.set(P, provider);
                }
                return true;
            }
        }
        /**
         * Gets or creates the shared registry of metadata providers.
         */
        function GetOrCreateMetadataRegistry() {
            var metadataRegistry;
            if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
                metadataRegistry = root.Reflect[registrySymbol];
            }
            if (IsUndefined(metadataRegistry)) {
                metadataRegistry = CreateMetadataRegistry();
            }
            if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
                Object.defineProperty(root.Reflect, registrySymbol, {
                    enumerable: false,
                    configurable: false,
                    writable: false,
                    value: metadataRegistry
                });
            }
            return metadataRegistry;
        }
        function CreateMetadataProvider(registry) {
            // [[Metadata]] internal slot
            // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
            var metadata = new _WeakMap();
            var provider = {
                isProviderFor: function (O, P) {
                    var targetMetadata = metadata.get(O);
                    if (IsUndefined(targetMetadata))
                        return false;
                    return targetMetadata.has(P);
                },
                OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata,
                OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata,
                OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata,
                OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys,
                OrdinaryDeleteMetadata: OrdinaryDeleteMetadata,
            };
            metadataRegistry.registerProvider(provider);
            return provider;
            function GetOrCreateMetadataMap(O, P, Create) {
                var targetMetadata = metadata.get(O);
                var createdTargetMetadata = false;
                if (IsUndefined(targetMetadata)) {
                    if (!Create)
                        return undefined;
                    targetMetadata = new _Map();
                    metadata.set(O, targetMetadata);
                    createdTargetMetadata = true;
                }
                var metadataMap = targetMetadata.get(P);
                if (IsUndefined(metadataMap)) {
                    if (!Create)
                        return undefined;
                    metadataMap = new _Map();
                    targetMetadata.set(P, metadataMap);
                    if (!registry.setProvider(O, P, provider)) {
                        targetMetadata.delete(P);
                        if (createdTargetMetadata) {
                            metadata.delete(O);
                        }
                        throw new Error("Wrong provider for target.");
                    }
                }
                return metadataMap;
            }
            // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
            function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return false;
                return ToBoolean(metadataMap.has(MetadataKey));
            }
            // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
            function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return undefined;
                return metadataMap.get(MetadataKey);
            }
            // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
            function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
                metadataMap.set(MetadataKey, MetadataValue);
            }
            // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
            function OrdinaryOwnMetadataKeys(O, P) {
                var keys = [];
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return keys;
                var keysObj = metadataMap.keys();
                var iterator = GetIterator(keysObj);
                var k = 0;
                while (true) {
                    var next = IteratorStep(iterator);
                    if (!next) {
                        keys.length = k;
                        return keys;
                    }
                    var nextValue = IteratorValue(next);
                    try {
                        keys[k] = nextValue;
                    }
                    catch (e) {
                        try {
                            IteratorClose(iterator);
                        }
                        finally {
                            throw e;
                        }
                    }
                    k++;
                }
            }
            function OrdinaryDeleteMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
                if (IsUndefined(metadataMap))
                    return false;
                if (!metadataMap.delete(MetadataKey))
                    return false;
                if (metadataMap.size === 0) {
                    var targetMetadata = metadata.get(O);
                    if (!IsUndefined(targetMetadata)) {
                        targetMetadata.delete(P);
                        if (targetMetadata.size === 0) {
                            metadata.delete(targetMetadata);
                        }
                    }
                }
                return true;
            }
        }
        function CreateFallbackProvider(reflect) {
            var defineMetadata = reflect.defineMetadata, hasOwnMetadata = reflect.hasOwnMetadata, getOwnMetadata = reflect.getOwnMetadata, getOwnMetadataKeys = reflect.getOwnMetadataKeys, deleteMetadata = reflect.deleteMetadata;
            var metadataOwner = new _WeakMap();
            var provider = {
                isProviderFor: function (O, P) {
                    var metadataPropertySet = metadataOwner.get(O);
                    if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
                        return true;
                    }
                    if (getOwnMetadataKeys(O, P).length) {
                        if (IsUndefined(metadataPropertySet)) {
                            metadataPropertySet = new _Set();
                            metadataOwner.set(O, metadataPropertySet);
                        }
                        metadataPropertySet.add(P);
                        return true;
                    }
                    return false;
                },
                OrdinaryDefineOwnMetadata: defineMetadata,
                OrdinaryHasOwnMetadata: hasOwnMetadata,
                OrdinaryGetOwnMetadata: getOwnMetadata,
                OrdinaryOwnMetadataKeys: getOwnMetadataKeys,
                OrdinaryDeleteMetadata: deleteMetadata,
            };
            return provider;
        }
        /**
         * Gets the metadata provider for an object. If the object has no metadata provider and this is for a create operation,
         * then this module's metadata provider is assigned to the object.
         */
        function GetMetadataProvider(O, P, Create) {
            var registeredProvider = metadataRegistry.getProvider(O, P);
            if (!IsUndefined(registeredProvider)) {
                return registeredProvider;
            }
            if (Create) {
                if (metadataRegistry.setProvider(O, P, metadataProvider)) {
                    return metadataProvider;
                }
                throw new Error("Illegal state.");
            }
            return undefined;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            var Map = /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (SameValueZero(key, this._cacheKey)) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (!SameValueZero(this._cacheKey, key)) {
                        this._cacheIndex = -1;
                        for (var i = 0; i < this._keys.length; i++) {
                            if (SameValueZero(this._keys[i], key)) {
                                this._cacheIndex = i;
                                break;
                            }
                        }
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            return Map;
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            var Set = /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.keys(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
            return Set;
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    var array = new Uint8Array(size);
                    if (typeof crypto !== "undefined") {
                        crypto.getRandomValues(array);
                    }
                    else if (typeof msCrypto !== "undefined") {
                        msCrypto.getRandomValues(array);
                    }
                    else {
                        FillRandomBytes(array, size);
                    }
                    return array;
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

/**
 * Merge per-platform V1 manifests into a single multi-platform V1 manifest.
 *
 * The build workflow produces one V1 manifest per platform, each with a single
 * artifact entry. This script merges them into a single manifest with all
 * platform artifacts, then re-signs it.
 *
 * Usage:
 *   node dist/cli-merge-v1-manifest.js \
 *     --swift-major-minor 6.1 \
 *     --input-dir ./platform-outputs \
 *     --output-dir ./merged \
 *     [--certs-dir ./certs]
 *
 * Expects the input-dir to contain per-platform subdirectories, each with:
 *   - {majorMinor}-manifest.json (single-platform V1 manifest)
 *   - summary.json (output from cli-build.ts)
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs_1 = __nccwpck_require__(9896);
const path_1 = __nccwpck_require__(6928);
const sign_1 = __nccwpck_require__(2694);
function parseArgs() {
    const args = process.argv.slice(2);
    const parsed = {};
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].replace(/^--/, "");
        const value = args[i + 1];
        if (!value) {
            console.error(`Missing value for --${key}`);
            process.exit(1);
        }
        parsed[key] = value;
    }
    const required = ["swift-major-minor", "input-dir", "output-dir"];
    for (const key of required) {
        if (!parsed[key]) {
            console.error(`Missing required argument: --${key}`);
            process.exit(1);
        }
    }
    return {
        swiftMajorMinor: parsed["swift-major-minor"],
        inputDir: (0, path_1.resolve)(parsed["input-dir"]),
        outputDir: (0, path_1.resolve)(parsed["output-dir"]),
        certsDir: parsed["certs-dir"] ? (0, path_1.resolve)(parsed["certs-dir"]) : undefined,
    };
}
async function main() {
    const args = parseArgs();
    const { swiftMajorMinor, inputDir, outputDir } = args;
    const manifestFilename = `${swiftMajorMinor}-manifest.json`;
    // Collect all per-platform summaries to gather checksums and platforms
    const platformDirs = (0, fs_1.readdirSync)(inputDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
    if (platformDirs.length === 0) {
        console.error(`No platform directories found in ${inputDir}`);
        process.exit(1);
    }
    // Read per-platform summaries to get checksums
    const artifacts = [];
    for (const dir of platformDirs) {
        const summaryPath = (0, path_1.join)(inputDir, dir, "summary.json");
        const summary = JSON.parse((0, fs_1.readFileSync)(summaryPath, "utf-8"));
        artifacts.push({
            checksum: summary.checksum,
            platform: summary.platform,
        });
        console.error(`  ${summary.platform}: ${summary.checksum.slice(0, 12)}...`);
    }
    // Read any single-platform V1 manifest as template to get products/cModules
    const templatePath = (0, path_1.join)(inputDir, platformDirs[0], manifestFilename);
    const templateSigned = JSON.parse((0, fs_1.readFileSync)(templatePath, "utf-8"));
    const templateManifest = templateSigned.manifest;
    // Build merged manifest
    const mergedManifest = {
        libraries: [
            {
                artifacts: artifacts.sort((a, b) => a.platform.localeCompare(b.platform)),
                cModules: templateManifest.libraries[0].cModules,
                name: templateManifest.libraries[0].name,
                products: templateManifest.libraries[0].products,
            },
        ],
        version: 1,
    };
    // Sign and write
    (0, fs_1.mkdirSync)(outputDir, { recursive: true });
    const certsDir = args.certsDir || (0, path_1.join)(process.cwd(), "certs");
    const signingCerts = (0, sign_1.defaultCertPaths)(certsDir);
    const mergedPath = (0, path_1.join)(outputDir, manifestFilename);
    await (0, sign_1.signManifest)(mergedManifest, mergedPath, signingCerts);
    console.error(`Merged V1 manifest: ${mergedPath}`);
    console.error(`  Platforms: ${artifacts.map((a) => a.platform).join(", ")}`);
    console.log(JSON.stringify({ path: mergedPath, platforms: artifacts.map(a => a.platform) }));
}
main().catch((err) => {
    console.error(err);
    process.exit(1);
});

})();

module.exports = __webpack_exports__;
/******/ })()
;