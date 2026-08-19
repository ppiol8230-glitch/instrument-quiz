import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const iosRoot = path.resolve(process.argv[2] ?? 'ios/App');
const appDir = path.join(iosRoot, 'App');
const projectPath = path.join(iosRoot, 'App.xcodeproj', 'project.pbxproj');

const localizations = [
  ['en', 'Instrument Fit'],
  ['ko', '악기핏'],
  ['zh-Hans', '乐器Fit'],
];

for (const [locale, displayName] of localizations) {
  const localeDir = path.join(appDir, `${locale}.lproj`);
  await mkdir(localeDir, { recursive: true });
  await writeFile(
    path.join(localeDir, 'InfoPlist.strings'),
    `"CFBundleDisplayName" = "${displayName}";\n`,
    'utf8',
  );
}

let project = await readFile(projectPath, 'utf8');

const ids = {
  buildFile: 'A10000000000000000000001',
  en: 'A10000000000000000000002',
  ko: 'A10000000000000000000003',
  zhHans: 'A10000000000000000000004',
  variantGroup: 'A10000000000000000000005',
};

function replaceOnce(anchor, replacement) {
  const first = project.indexOf(anchor);
  const last = project.lastIndexOf(anchor);
  if (first === -1 || first !== last) {
    throw new Error(`Expected exactly one Xcode project anchor: ${anchor}`);
  }
  project = project.replace(anchor, replacement);
}

if (!project.includes(`${ids.variantGroup} /* InfoPlist.strings */`)) {
  replaceOnce(
    '/* Begin PBXBuildFile section */',
    `/* Begin PBXBuildFile section */\n\t\t${ids.buildFile} /* InfoPlist.strings in Resources */ = {isa = PBXBuildFile; fileRef = ${ids.variantGroup} /* InfoPlist.strings */; };`,
  );

  replaceOnce(
    '/* Begin PBXFileReference section */',
    `/* Begin PBXFileReference section */\n\t\t${ids.en} /* en */ = {isa = PBXFileReference; lastKnownFileType = text.plist.strings; name = en; path = en.lproj/InfoPlist.strings; sourceTree = "<group>"; };\n\t\t${ids.ko} /* ko */ = {isa = PBXFileReference; lastKnownFileType = text.plist.strings; name = ko; path = ko.lproj/InfoPlist.strings; sourceTree = "<group>"; };\n\t\t${ids.zhHans} /* zh-Hans */ = {isa = PBXFileReference; lastKnownFileType = text.plist.strings; name = "zh-Hans"; path = "zh-Hans.lproj/InfoPlist.strings"; sourceTree = "<group>"; };`,
  );

  replaceOnce(
    '\t\t\t\t504EC3131FED79650016851F /* Info.plist */,',
    `\t\t\t\t${ids.variantGroup} /* InfoPlist.strings */,\n\t\t\t\t504EC3131FED79650016851F /* Info.plist */,`,
  );

  replaceOnce(
    '\t\t\tknownRegions = (\n\t\t\t\ten,\n\t\t\t\tBase,',
    '\t\t\tknownRegions = (\n\t\t\t\ten,\n\t\t\t\tko,\n\t\t\t\t"zh-Hans",\n\t\t\t\tBase,',
  );

  replaceOnce(
    '\t\t\tfiles = (\n\t\t\t\t504EC3121FED79650016851F /* LaunchScreen.storyboard in Resources */,',
    `\t\t\tfiles = (\n\t\t\t\t${ids.buildFile} /* InfoPlist.strings in Resources */,\n\t\t\t\t504EC3121FED79650016851F /* LaunchScreen.storyboard in Resources */,`,
  );

  replaceOnce(
    '/* Begin PBXVariantGroup section */',
    `/* Begin PBXVariantGroup section */\n\t\t${ids.variantGroup} /* InfoPlist.strings */ = {\n\t\t\tisa = PBXVariantGroup;\n\t\t\tchildren = (\n\t\t\t\t${ids.en} /* en */,\n\t\t\t\t${ids.ko} /* ko */,\n\t\t\t\t${ids.zhHans} /* zh-Hans */,\n\t\t\t);\n\t\t\tname = InfoPlist.strings;\n\t\t\tsourceTree = "<group>";\n\t\t};`,
  );

  await writeFile(projectPath, project, 'utf8');
}

for (const required of Object.values(ids)) {
  if (!project.includes(required)) {
    throw new Error(`Missing localization reference in Xcode project: ${required}`);
  }
}

console.log('Configured iOS localizations: en, ko, zh-Hans');
