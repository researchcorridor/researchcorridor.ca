'use server';

import { HomePageType } from '@/app/(root)/page';
import { header } from '@/constant/site-config.text';
import { supabase } from '@/utils/supabase/client';

const EmptyHomePageData: HomePageType = {
  headerSection: header,
  eventsSection: {
    show: false,
    title: '',
    description: '',
    Partner1: {
      name: '',
      color: '',
      img: '',
    },
    Partner2: {
      name: '',
      color: '',
      img: '',
    },
    benefits: [],
    AbstractSubmission: '',
    ConferenceDate: '',
    buttonText: '',
    buttonLink: '',
  },
  aboutSection: {
    show: false,
    point: [],
    img: '',
  },
  collaborationSection: {
    show: false,
    title: '',
    description: '',
    data: [],
  },
  whyChoose: {
    show: false,
  },
  ctaJournalSubmitSection: {
    show: false,
    title: '',
    description: '',
    nextDate: '',
    buttonText: '',
    buttonLink: '',
  },
  journalsSection: {
    show: false,
    buttonText: '',
    title: '',
    description: '',
    data: [],
  },
  researchersSection: {
    show: false,
    title: '',
    description: '',
    data: [],
  },
  subscriberSection: {
    show: false,
    buttonText: '',
    description: '',
    inputText: '',
    title: '',
  },
};

export const getHomePageData: () => Promise<HomePageType> = async () => {
  try {
    let data: HomePageType = {
      ...EmptyHomePageData,
    };

    // Fetch data from home table
    const { data: constant, error: errorConstant } = await supabase
      .from('constant')
      .select('object')
      .eq('name', 'home')
      .single();
    if (errorConstant) {
      throw errorConstant;
    } else {
      data = {
        ...data,
        ...constant.object,
      };
    }

    const { data: collaboration, error: errorCollaboration } = await supabase
      .from('collaboration')
      .select('*')
      .eq('home', true);
    if (errorCollaboration) {
      throw errorCollaboration;
    }

    data.collaborationSection.data = collaboration;
    return constant?.object ?? EmptyHomePageData;
  } catch (error) {
    console.error('Error fetching data from home table', error);
    return EmptyHomePageData;
  }
};
