# 🙏 Sri Maa - React Native Bhakti Companion

> **ॐ श्री आनन्दमयी नमः**

A mobile companion app for Sri Sri Maa Anandamayee devotees, built with React Native and Ignite boilerplate.

## 📱 About

This app serves as a comprehensive digital hub for devotees of Sri Sri Maa Anandamayee and members of Shree Shree Anandamayee Sangha (SSAS).

### Key Features
- 🏠 **Home** - Daily sayings and spiritual feed
- 🏛️ **Ashrams** - Directory of all SSAS ashrams with details
- 📚 **Library** - Books and literature about Maa
- 🎉 **Events** - Calendar of celebrations and satsangs
- 📸 **Photos** - Gallery of Maa's photos
- ℹ️ **More** - About, guidance, institutions, and settings
- 🌟 **Dynamic Themes** - Special themes for festivals
- 📴 **Offline Mode** - Works without internet
- 🔔 **Notifications** - Daily sayings and event reminders

## 📚 Documentation

- **[IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)** - Step-by-step implementation instructions
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Architecture and file organization
- **[Ignite Documentation](https://github.com/infinitered/ignite/blob/master/docs/README.md)** - React Native boilerplate docs

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.17.1 (recommended >= 20.0.0)
- npm or yarn
- iOS Simulator (Mac) or Android Emulator

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Install additional required packages
npm install expo-notifications
npx expo install expo-notifications expo-device

# Start development server
npm start
# or
npx expo start
```

### Running the App

```bash
npm run ios              # Run on iOS simulator
npm run android          # Run on Android emulator
npm run build:ios:sim    # Build for iOS simulator
npm run build:android:sim # Build for Android emulator
```

## 📋 Implementation Status

### ✅ Completed
- [x] Project initialization with Ignite boilerplate
- [x] Complete TypeScript type definitions
- [x] Zustand state management (5 stores)
- [x] Service layer (API, cache, notifications, sync)
- [x] Sample mock data files
- [x] Comprehensive documentation

### 🔄 Next Steps
- [ ] Complete all mock data JSON files
- [ ] Implement navigation structure
- [ ] Build UI component library
- [ ] Create all screen components
- [ ] Integrate theme system
- [ ] Connect services to UI
- [ ] Testing and refinement

**See [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) for detailed next steps.**

## 🏗️ Architecture

### Tech Stack
- **Framework**: React Native 0.81 with Expo
- **Template**: Ignite by Infinite Red
- **State**: Zustand
- **Navigation**: React Navigation v7
- **Storage**: AsyncStorage
- **Notifications**: Expo Notifications
- **Language**: TypeScript

### Project Structure
```
app/
├── models/          # Type definitions ✅
├── store/           # Zustand stores ✅
├── services/        # API, cache, sync ✅
├── components/      # UI components ⏳
├── screens/         # Screen components ⏳
├── navigators/      # Navigation ⏳
└── theme/           # Theme system ⏳

assets/
└── mock-data/       # JSON data files ⏳
```

### `./assets` directory

This directory is designed to organize and store various assets, making it easy for you to manage and use them in your application. The assets are further categorized into subdirectories, including `icons` and `images`:

```tree
assets
├── icons
└── images
```

**icons**
This is where your icon assets will live. These icons can be used for buttons, navigation elements, or any other UI components. The recommended format for icons is PNG, but other formats can be used as well.

Ignite comes with a built-in `Icon` component. You can find detailed usage instructions in the [docs](https://github.com/infinitered/ignite/blob/master/docs/boilerplate/app/components/Icon.md).

**images**
This is where your images will live, such as background images, logos, or any other graphics. You can use various formats such as PNG, JPEG, or GIF for your images.

Another valuable built-in component within Ignite is the `AutoImage` component. You can find detailed usage instructions in the [docs](https://github.com/infinitered/ignite/blob/master/docs/Components-AutoImage.md).

How to use your `icon` or `image` assets:

```typescript
import { Image } from 'react-native';

const MyComponent = () => {
  return (
    <Image source={require('assets/images/my_image.png')} />
  );
};
```

## Running Maestro end-to-end tests

Follow our [Maestro Setup](https://ignitecookbook.com/docs/recipes/MaestroSetup) recipe.

## Next Steps

### Ignite Cookbook

[Ignite Cookbook](https://ignitecookbook.com/) is an easy way for developers to browse and share code snippets (or “recipes”) that actually work.

### Upgrade Ignite boilerplate

Read our [Upgrade Guide](https://ignitecookbook.com/docs/recipes/UpdatingIgnite) to learn how to upgrade your Ignite project.

## 🙏 Acknowledgments

- **Sri Sri Maa Anandamayee** - Source of all inspiration
- **Shree Shree Anandamayee Sangha** - For preserving Maa's legacy
- **All Devotees** - Who keep Maa's teachings alive
- **Ignite Team** - For the excellent React Native boilerplate ([Ignite on GitHub](https://github.com/infinitered/ignite))
- **React Native Community** - For amazing tools and libraries

## 📞 Resources

- **Website**: [shreeshreeanandamayeesangha.org](http://shreeshreeanandamayeesangha.org)
- **Documentation**: See [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md)
- **Ignite Docs**: [Ignite Documentation](https://github.com/infinitered/ignite/blob/master/docs/README.md)

---

**Made with devotion and gratitude** 🙏

**ॐ श्री आनन्दमयी नमः**

---

**Version**: 0.0.1 (Development)
**Last Updated**: January 2025
